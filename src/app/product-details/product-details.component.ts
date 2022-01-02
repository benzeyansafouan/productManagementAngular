import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  name_Products: string;
  product: Product= new Product();
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.product=new Product();
    this.name_Products= this.route.snapshot.params['name_Products'.toString()];
    this.productService.getProductById(this.name_Products).subscribe(data => {
      console.log(data);
      this.product=data;
    },error => console.log(error));
  }

}
