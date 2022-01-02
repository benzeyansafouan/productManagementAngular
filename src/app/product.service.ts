import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:8080/api/products/getbynamecat";

  constructor(private httpClient: HttpClient) { }

getProductsList(nameCategory : string): Observable<Product[]>{
  this.baseURL = "http://localhost:8080/api/products/getbynamecat";
 // alert(""+this.httpClient.get<Product[]>(`${this.baseURL}/${nameCategory}`));
  return this.httpClient.get<Product[]>(`${this.baseURL}/${nameCategory}`);
  
}
addProduct(product: Product): Observable<Object>{
  this.baseURL="http://localhost:8080/api/products/create";
  return this.httpClient.post(`${this.baseURL}`,product);
}

updateProduct (product:Product):Observable<Object>{
  this.baseURL="http://localhost:8080/api/products/update";
  return this.httpClient.put(`${this.baseURL}`,product);
}

getProductById(name_Products : string):Observable<Product> {
  this.baseURL = "http://localhost:8080/api/products/get";
  return this.httpClient.get<Product>(`${this.baseURL}/${name_Products}`);
}

deleteProduct(name_Products : string):Observable<Product> {
  this.baseURL = "http://localhost:8080/api/products/delete";
  return this.httpClient.delete<Product>(`${this.baseURL}/${name_Products}`);
}


}
