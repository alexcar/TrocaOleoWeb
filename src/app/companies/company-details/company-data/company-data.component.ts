import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.css']
})
export class CompanyDataComponent implements OnInit {
  @Input() public company!: Company;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  public onBack = () => {
    this.location.back();
  }

}
