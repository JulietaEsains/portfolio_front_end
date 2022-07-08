import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Qualification, QualificationTab } from 'src/app/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { QualificationService } from 'src/app/services/qualification.service';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {
  qualificationTabs: QualificationTab[] = []
  currentTab: string = 'education'
  darkMode: boolean = false
  subscription?: Subscription

  constructor(
    private portfolioService: PortfolioService,
    private qualificationService: QualificationService,
    private uiService: UiService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.darkMode = value
    })
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['currentTab']) {
        this.changeCurrentTab(params['currentTab'])
      }
    })
    this.getQualificationData()
    this.darkMode = localStorage.getItem('selected-theme') == 'dark' ? true : false
  }

  changeCurrentTab(tab: string) {
    this.currentTab = tab
  }

  getQualificationData() {
    this.portfolioService.getData('qualificationTabs').subscribe(data => this.qualificationTabs = data)
  }

  updateQualificationTab(qualificationTab: QualificationTab, newQualifications: Qualification[]) {
    this.qualificationService.updateQualificationTab(qualificationTab, newQualifications).subscribe(data => this.getQualificationData())
  }

  updateQualification(tab: QualificationTab, item: Qualification) {
    this.router.navigate(['/update-qualification-tab', tab.id], {queryParams: item})
  }

  deleteQualification(tab: QualificationTab, item: Qualification) {
    const newQualifications = tab.items.filter(i => i.id !== item.id)

    if (confirm(`¿Está seguro/a de que quiere borrar este elemento (${item.title})?`)) {
      this.updateQualificationTab(tab, newQualifications)
    }
  }

}
