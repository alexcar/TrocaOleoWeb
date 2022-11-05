import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyForCreation } from '../model/company-for-creation.model';
import { Company } from '../model/company.model';
import { RepositoryBase } from './repository-base';


@Injectable({
  providedIn: 'root'
})
export class CompanyService extends RepositoryBase<Company> {

  constructor(protected override http: HttpClient) {
    super(http, "companies");
  }

  // TODO: Criar método Create, mapear dto para classe e mandar gravar.
  // create(companyDto: CompanyForCreation): Obser CompanyForCreation {

  // }

}
