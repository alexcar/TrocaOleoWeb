import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../error-pages/not-found/not-found.component';
import { ServerErrorComponent } from '../error-pages/server-error/server-error.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'companies', loadChildren: () => import('../companies/companies.module').then(m => m.CompaniesModule) },
  { path: '404', component: NotFoundComponent },
  { path: '500', component: ServerErrorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
