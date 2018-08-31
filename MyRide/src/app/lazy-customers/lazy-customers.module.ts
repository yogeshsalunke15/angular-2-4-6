import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyCustomersRoutingModule } from './lazy-customers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  imports: [
    CommonModule,
    LazyCustomersRoutingModule
  ],
  declarations: [CustomersListComponent]
})
export class LazyCustomersModule { }
