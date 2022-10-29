import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from '../company-list/company-list.component';
import { CompanyDetailsComponent } from '../company-details/company-details.component';
import { CompanyCreateComponent } from '../company-create/company-create.component';
import { CompanyUpdateComponent } from '../company-update/company-update.component';

const routes: Routes = [
  { path: '', component: CompanyListComponent },
  { path: 'create', component: CompanyCreateComponent },
  { path: 'update', component: CompanyUpdateComponent },
  { path: ':id', component: CompanyDetailsComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CompanyRoutingModule { }
