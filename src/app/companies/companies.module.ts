import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyRoutingModule } from './company-routing/company-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyDataComponent } from './company-details/company-data/company-data.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CompanyUpdateComponent } from './company-update/company-update.component';


@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyDetailsComponent,
    CompanyDataComponent,
    CompanyCreateComponent,
    CompanyUpdateComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CompaniesModule { }
