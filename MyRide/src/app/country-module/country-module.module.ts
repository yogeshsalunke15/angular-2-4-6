import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryModuleRoutingModule } from './country-module-routing.module';
import { CountryComponent } from './country/country.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryEditComponent } from './country-edit/country-edit.component';

@NgModule({
  imports: [
    CommonModule,
    CountryModuleRoutingModule
  ],
  declarations: [CountryComponent, AddCountryComponent, CountryListComponent, CountryDetailComponent, CountryEditComponent]
})
export class CountryModuleModule { }
