import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
   
  product: Product = new Product();
  constructor(private productService:ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.productService.addProduct(this.product).subscribe(data =>{
      console.log(data);
      this.goToCategories();
    }
      );
  }
  goToCategories(){
    this.router.navigate(['/categories']);
  }

}
