import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Qualification, QualificationTab } from 'src/app/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { QualificationService } from 'src/app/services/qualification.service';

@Component({
  selector: 'app-qualification-update',
  templateUrl: './qualification-update.component.html',
  styleUrls: ['./qualification-update.component.css']
})
export class QualificationUpdateComponent implements OnInit {
  tabId: number = 0
  itemId: number = 0
  qualificationTabs: QualificationTab[] = []
  qualificationTab: QualificationTab = {
    id: 0, name: '', items: []
  }
  item: Qualification = {
    id: 0, title: '', subtitle: '', beginning: '', end: '', pictureUrl: ''
  }

  constructor(
    private portfolioService: PortfolioService,
    private qualificationService: QualificationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let tabSub = this.route.params.subscribe(params => {
      this.tabId = params['id']
    })
    let itemSub = this.route.queryParams.subscribe(params => {
      this.itemId = Number(params['id'])
      this.item.id = this.itemId
      this.item.title = params['title']
      this.item.subtitle = params['subtitle']
      this.item.beginning = params['beginning']
      this.item.end = params['end']
      this.item.pictureUrl = params['pictureUrl']
    })
    this.qualificationService.getQualificationTabToUpdate(this.tabId).subscribe(data => {
      this.qualificationTab = data
    })
  }

  getQualificationData() {
    this.portfolioService.getData('qualificationTabs').subscribe(data => this.qualificationTabs = data)
  }

  updateQualification() {
    this.qualificationTab.items[this.itemId - 1] = this.item
    this.qualificationService.updateQualificationTab(this.qualificationTab, this.qualificationTab.items).subscribe(data => this.getQualificationData())
    this.router.navigate(['/qualification'], {queryParams: {currentTab: this.qualificationTab.name}})
  }

}
