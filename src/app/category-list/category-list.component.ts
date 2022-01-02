import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

categories : Category[];

  constructor(private categoryService: CategoryService,private router:Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
 
    this.getCategories();
  }
  public getCategories (){
     this.categoryService.getCategoryList().subscribe(data =>{
      console.log(data);
       this.categories= data; 
      }); 
  }

  


  addCategory(){
    this.router.navigate(['addcategory']);
  }
  productlist(nameCategory:string){
    this.router.navigate(['products',nameCategory.toString()]);
  }
  
}
