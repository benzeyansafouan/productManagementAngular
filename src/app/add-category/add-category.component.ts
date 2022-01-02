import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { CategoryListComponent } from '../category-list/category-list.component';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryListComponent: CategoryListComponent;
  category: Category=new Category();
  hidecomp: boolean=true;
  constructor(private categoryService: CategoryService, private cd: ChangeDetectorRef, private router:Router) { }

  ngOnInit(): void {
  }

  saveCategory(){
    this.categoryService.addCategory(this.category).subscribe( data =>{
      console.log(data);
      this.goToCategoryList();
    },
    error => console.log(error));
      
      this.cd.detectChanges();
  }
  goToCategoryList (){
    this.router.navigate(['categories']);
  }
 


  onSubmit() {
    // document.getElementById("namecategory")?.ariaValueNow
    if(this.category.nameCategory== null){
      alert("empty");
    }else{
this.saveCategory();

}
  }

}
