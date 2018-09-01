import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryEditComponent } from './country-edit/country-edit.component';

const routes: Routes = [
	{
		path: 'country',
		component: CountryComponent,
		children : [
			{
				path: 'add',
				component: AddCountryComponent
			},
			{ 
				path: 'list',
				component : CountryListComponent,
				children : [
					{
						path : 'view/:country-id',
						component : CountryDetailComponent
					},
					{
						path : 'edit/:country-id',
						component : CountryEditComponent
					}
				]

			}	
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryModuleRoutingModule { }
