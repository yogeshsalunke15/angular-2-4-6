import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

// interface Customer {
//     id : number;
//   name: string;
//   email: string;
//   tel: string;
// };
const httpHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('Cache-Control', 'no-cache');
const httpParams = new HttpParams().set('_page', "1").set('_limit', "2");
let httpOptions = {
     headers: httpHeaders,
     params : httpParams
};

@Injectable()
export class ComponentMessagingService {
 apiUrl : string;
 jsonServerUrl : string;

  constructor(private http: HttpClient) {
  	this.apiUrl = 'assets/users.json';
  	/* used : json-server - npm package for running fake server for dev purpose: running on below url  */
  	this.jsonServerUrl = "http://localhost:3000/customers";
   }

   getUsers() {
    	return this.http.get(this.apiUrl);
    }

    getCustomrs(){
    	return this.http.get<any>(this.jsonServerUrl, httpOptions);

    }

    saveCustomer(obj : any){  console.log("saveCustomer service function ", obj)
      this.http.put(`${this.jsonServerUrl}/1`, obj)
        .subscribe(data => { console.log("PUT Request is successful ", data);},
                            error => {
                                console.log("Rrror", error);
                            }
        );
    }

    patchCustomer(str : string){

            this.http.patch(`${this.jsonServerUrl}/1`, {"email": str})
                      .subscribe( data => {
                            console.log("Patch Request is successful ", data);
                       },
                      error => {
                          console.log("Error", error);
                      }
            ); 
    }

    deleteCustomer(record : number){

        this.http.delete(`${this.jsonServerUrl}/${record}`)
        .subscribe(
            data => {
                console.log("Delete Request is successful ", data);
            },
            error => {
                console.log("Error", error);
            }
        );  
    }

    postCustomer(newRecord : any){
        this.http.post(this.jsonServerUrl, newRecord)
        .subscribe(
            data => {
                console.log("POST Request is successful ", data);
            },
            error => {
                console.log("Error", error);
            }
        );       

    }

}
