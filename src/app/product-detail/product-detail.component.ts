import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product:Product;
data:Product;
  constructor( private activatedRouter:ActivatedRoute,
    private productService:ProductService) { }

  ngOnInit() {
    this.getInfor()
  }
  getInfor(){
    this.activatedRouter.params.subscribe(params=>{
this.productService.getInfo(params.id).subscribe(data=>{
  this.product=data;
  console.log(data);
})
    })
  }

}
