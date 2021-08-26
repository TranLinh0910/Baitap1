import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
API:string='https://60f4d47a2208920017f39e13.mockapi.io/producttest'
  constructor( private http:HttpClient) { }
  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.API)
  }
  getInfo(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.API}/${id}`);
  }
  addProduct(item:any):Observable<Product>{
    return this.http.post<Product>(this.API,item);
  }
  updateProduct(item:Product):Observable<Product>{
    return this.http.put<Product>(`${this.API}/${item.id}`,item);
  }
}
