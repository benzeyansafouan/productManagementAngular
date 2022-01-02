import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  nameCategory:string;
  products: Product[];
  constructor(private route: ActivatedRoute, private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.nameCategory=this.route.snapshot.params['nameCategory'.toString()];
    
    this.getproducts(this.nameCategory);
  }

  private getproducts(nameCategory:string){
      this.productService.getProductsList(nameCategory).subscribe(data => {
      console.log(data);
           this.products = data;
    });
  }
  gotoaddproducts(){
    this.router.navigate(['addproduct']);
  }

  updateProduct(name_Products : string){
    this.router.navigate(['updateproduct',name_Products.toString()]);
    //alert(""+name_Products);
  }

  deleteProduct(name_Products: string){
    this.productService.deleteProduct(name_Products).subscribe( data =>{this.getproducts(this.nameCategory);});
  }
  productDetails(name_Products : string){
    this.router.navigate(['productdetails',name_Products.toString()]);
  }

}
