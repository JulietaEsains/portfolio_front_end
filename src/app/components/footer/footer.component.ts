import { Component, OnInit } from '@angular/core';
import { Footer } from 'src/app/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer: Footer = {
    title: '',
    subtitle: '',
    copy: ''
  }

  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.portfolioService.getData('footer').subscribe(data => this.footer = data)
  }

}
