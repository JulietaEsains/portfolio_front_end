import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Qualification, QualificationTab } from 'src/app/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { QualificationService } from 'src/app/services/qualification.service';

@Component({
  selector: 'app-add-qualification',
  templateUrl: './add-qualification.component.html',
  styleUrls: ['./add-qualification.component.css']
})
export class AddQualificationComponent implements OnInit {
  qualificationTabs: QualificationTab[] = []
  tab: QualificationTab = {
    id: 0, name: '', items: []
  }
  item: Qualification = {
    id: 0, title: '', subtitle: '', beginning: '', end: '', pictureUrl: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private qualificationService: QualificationService,
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    let tabSub = this.route.params.subscribe(params => {
      this.tab.id = params['id']
    })
    this.qualificationService.getQualificationTabToUpdate(this.tab.id).subscribe(data => {
      this.tab = data
    })
  }

  getQualificationData() {
    this.portfolioService.getData('qualificationTabs').subscribe(data => this.qualificationTabs = data)
  }

  addQualification() {
    this.item.id = this.tab.items.length + 1
    this.tab.items.push(this.item)
    this.qualificationService.updateQualificationTab(this.tab, this.tab.items).subscribe(data => this.getQualificationData())
    this.router.navigate(['/qualification'], {queryParams: {currentTab: this.tab.name}})
  }

}
