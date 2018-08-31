import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
  	{

    path: 'lazyCustomers',
    loadChildren: './lazy-customers/lazy-customers.module#LazyCustomersModule'
  	
  	},
  	{

    path: 'lazyOrders',
    loadChildren: './lazy-orders/lazy-orders.module#LazyOrdersModule'
  	
  	},
   	
   	{
		path:'',
		redirectTo: '',
		pathMatch: 'full'
	}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }

	// {
	// 	path: 'lazyOrder',
	// 	loadChildren: 'app/lazyOrder/lazyOrders.module#lazyOrders'
	// }