import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
product:Product=new Product();
  constructor(private productService:ProductService,
    private router:Router) { }

  ngOnInit(){
  }
  onAddProduct(){
    this.productService.addProduct(this.product).subscribe(data=>{
      console.log(data);
      alert("them thanh cong")
      this.router.navigateByUrl('/')
    })
  }

}
