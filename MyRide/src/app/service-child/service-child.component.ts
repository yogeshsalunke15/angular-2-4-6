import { Component, OnInit } from '@angular/core';
import { ComponentMessagingService } from '../component-messaging.service';
import { Observable } from "rxjs";

interface Customer {
    id : number;
  name: string;
  email: string;
  tel: string;
};


@Component({
  selector: 'app-service-child',
  templateUrl: './service-child.component.html',
  styleUrls: ['./service-child.component.css'],
  providers:  [ ComponentMessagingService ]
})
export class ServiceChildComponent implements OnInit {
	customers : Observable<Customer[]>;
	//customers$: Observable<Customer[]>;

  constructor(private customerService : ComponentMessagingService) { }

  ngOnInit() {

  	// this.customerService	
   //    .getCustomrs()
   //    .subscribe(data => {
   //        this.customers = data;
   //        console.log("customerService Service Data", this.customers);
   //      });
        this.customers =  this.customerService.getCustomrs();
      
  }

  saveCust() {
    let obj = {
            "name": "Yogesh Salunke",
            "email": "yogeshsalunke15@email.com",
            "tel": "9922020434"
        }

      this.customerService.saveCustomer(obj);

      }

      patchCust(){
        let email = "yogeshsalunke1502@gmail.com";
        this.customerService.patchCustomer(email);
      }

      deleteCust(){ let record = 2
          this.customerService.deleteCustomer(record);
      }

      postCust(){
        let newRecord = {
            "name": "Customer004",
            "email": "customer004@email.com",
            "tel": "0000252525"
        };

        this.customerService.postCustomer(newRecord);
      }

}
