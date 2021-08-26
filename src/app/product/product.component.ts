import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
product:Product[];
data:Product;
  constructor( private productService:ProductService) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    this.productService.getProduct().subscribe(data=>{
      this.product=data;
    })
  }

}
