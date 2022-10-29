import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/model/company.model';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { RepositoryService } from 'src/app/shared/repository.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  public company!: Company;

  constructor(
    private repository: RepositoryService,
    private activeRoute: ActivatedRoute,
    private errorHandler: ErrorHandlerService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getCompanyDetails();
  }

  private getCompanyDetails = () => {
    let id: string = this.activeRoute.snapshot.params['id'];
    let apiUrl: string = `companies/${id}`;

    this.repository.getData(apiUrl)
      .subscribe(res => {
        this.company = res as Company;
      },
      (error) => {
        this.errorHandler.handlerError(error);
      })
  }

  public onBack = () => {
    this.location.back();
  }
}
