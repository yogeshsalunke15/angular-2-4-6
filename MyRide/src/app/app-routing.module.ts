import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServiceParentComponent } from './service-parent/service-parent.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';

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
  		path: 'detail/:id', 
      component: ServiceParentComponent
  	},
  	{ 
  		path:'home', 
      component: HomePageComponent
  	},
    { 
      path:'attributeDir', 
      component: AttributeDirectiveComponent
    },
   	{ 
      path:'structuralDir', 
      component: StructuralDirectiveComponent
    },
   	{
		path:'',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
	   path: '**',
	   component: PageNotFoundComponent 
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