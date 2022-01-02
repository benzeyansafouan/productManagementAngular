import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  name_Products: string;
  product: Product=new Product();
  constructor(private productService: ProductService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.product=new Product();
    this.name_Products=this.route.snapshot.params['name_Products'.toString()];
    //alert(""+this.name_Products);

    this.productService.getProductById(this.name_Products).subscribe(data =>{
      console.log(data);
      this.product=data;
    },error => console.log(error));
   }


   

   goToCategoryList (){
    this.router.navigate(['/categories']);
  }

  onSubmit(){
    this.productService.updateProduct(this.product).subscribe(data => {this.goToCategoryList();})
  }
}
