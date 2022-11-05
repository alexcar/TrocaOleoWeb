import { Component, OnInit, ViewChild } from '@angular/core';
import { Company } from 'src/app/model/company.model';
import { RepositoryService } from 'src/app/shared/repository.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { Router } from '@angular/router';
import { CompanyRepositoryService } from 'src/app/shared/company.repository.service';
import { CompanyService } from 'src/app/shared/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  public displayedColumns = ['name', 'commercialName', 'details', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Company>();
  @ViewChild(MatSort) sort!: MatSort
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  private companies: Company[];

  constructor(
    private companyRepoService: CompanyRepositoryService,
    private repoService: RepositoryService,
    private errorService: ErrorHandlerService,
    private router: Router,
    private companyService: CompanyService) {
      this.companies = new Array<Company>();
     }

  ngOnInit(): void {
    // this.getAllCompanies();
    this.getAllCompanies3();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getAllCompanies = () => {
    this.repoService.getData('companies')
      .subscribe(res => {
        this.dataSource.data = res as Company[];
        // console.log(this.dataSource.data);
      },
      (error) => {
        this.errorService.handlerError(error);
      })
  }

  public getAllCompanies2 = () => {
    this.companyRepoService.getData('companies')
      .subscribe(data => this.dataSource.data = data);
  }

  public getAllCompanies3 = () => {
    this.companyService.getAll()
      .subscribe(data => this.dataSource.data = data);
  }

  public redirectToDetails = (id: string) => {
    let url: string = `companies/${id}`;
    this.router.navigate([url]);
  }

  public redirectToUpdate = (id: string) => {
    let url: string = `update/${id}`;
    this.router.navigate([url]);
  }

  public redirectToDelete = (id: string) => {

  }

  public doFilter = (target: any) => {
      this.dataSource.filter = target.value.trim().toLocaleLowerCase();
  }
}
