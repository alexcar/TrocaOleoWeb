import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CompanyForCreation } from 'src/app/model/company-for-creation.model';
import { CompanyService } from 'src/app/shared/company.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { RepositoryService } from 'src/app/shared/repository.service';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {
  public companyForm!: FormGroup;
  private dialogConfig: any;

  constructor(
    private location: Location,
    private repository: RepositoryService,
    private dialog: MatDialog,
    private errorService: ErrorHandlerService,
    private companySerice: CompanyService
  ) { }

  ngOnInit(): void {
    this.companyForm = new FormGroup({
      name: new FormControl('empresa 3', [Validators.required, Validators.maxLength(60)]),
      commercialName: new FormControl('empresa tres', [Validators.required, Validators.maxLength(60)]),
      cnpj: new FormControl('41.645.998/0001-69', [Validators.required, Validators.maxLength(18)]),
      contact: new FormControl('jose', [Validators.required, Validators.maxLength(50)]),
      ddd: new FormControl('011', [Validators.required, Validators.maxLength(3)]),
      phone: new FormControl('45454545', [Validators.required, Validators.maxLength(9)]),
      website: new FormControl('empresa.com', [Validators.required, Validators.maxLength(90)]),
      email: new FormControl('fale@empresa.com', [Validators.required, Validators.maxLength(90)]),
      address: new FormControl('Rua Centro, 100', [Validators.required, Validators.maxLength(100)]),
      Neighborhood: new FormControl('Centro', [Validators.required, Validators.maxLength(50)]),
      county: new FormControl('RJ', [Validators.required, Validators.maxLength(50)]),
      country: new FormControl('RJ', [Validators.required, Validators.maxLength(30)]),
      uf: new FormControl('RJ', [Validators.required, Validators.maxLength(2)]),
      zipcode: new FormControl('07500000', [Validators.required, Validators.maxLength(10)])
    });

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }

  public hasError = (controlName: string, errorName: string): boolean => {
    return this.companyForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }

  public createCompany = (companyFormValue: any) => {
    if (this.companyForm.valid) {
      this.executeCompanyCreation(companyFormValue);
    }
  }

  private executeCompanyCreation = (companyFormValue: any) => {
    let company: CompanyForCreation = {
      name: companyFormValue.name,
      commercialName: companyFormValue.commercialName,
      cnpj: companyFormValue.cnpj,
      contact: companyFormValue.contact,
      ddd: companyFormValue.ddd,
      phone: companyFormValue.phone,
      website: companyFormValue.website,
      email: companyFormValue.email,
      address: companyFormValue.address,
      Neighborhood: companyFormValue.Neighborhood,
      county: companyFormValue.county,
      country: companyFormValue.country,
      uf: companyFormValue.uf,
      zipcode: companyFormValue.zipcode,
      active: true,
      userUpdate: '5CF7137C-AE20-497D-831D-8DF824697C8A'
    }

    // console.log(company);
    let apiUrl = 'companies';

    this.repository.create(apiUrl, company)
      .subscribe(res => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

        dialogRef.afterClosed()
          .subscribe(result => {
            this.location.back();
          });
      },
      (error => {
        this.errorService.dialogConfig = { ...this.dialogConfig };
        this.errorService.handlerError(error);
      })
    );

    // this.companySerice.create(company)
    //   .subscribe
  }

}
