import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from '../models/customers';

@Injectable({
  providedIn: 'root'
})

export class CustomersService {
  readonly URL_API = "http://localhost:3001/api/customers";
  selectedCustomer: Customers
  customersResulted: Customers[];
  constructor(private http: HttpClient) { 
    this.selectedCustomer = new Customers();
  }

  getCustomers() {
    return this.http.get(this.URL_API);
  }

  postCustomer(customer: Customers) {
    return this.http.post(this.URL_API, customer);
  }

  putCustomer(customer: Customers) {
    return this.http.put(this.URL_API + `/${customer._id}`, customer);
  }

  deleteCustomer(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
