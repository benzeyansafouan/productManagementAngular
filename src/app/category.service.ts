import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

private baseURL ="http://localhost:8080/api/category/all";


constructor(private httpClient : HttpClient) { }

  
getCategoryList(): Observable<Category[]>{
  this.baseURL ="http://localhost:8080/api/category/all";
    return this.httpClient.get<Category[]>(`${this.baseURL}`);
 }

 addCategory(category: Category): Observable<Object>{
   this.baseURL = "http://localhost:8080/api/category/create";
  return this.httpClient.post(`${this.baseURL}`,category);
}

}
