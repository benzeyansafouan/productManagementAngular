import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent }  from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:'categories', component: CategoryListComponent},
  {path:'productdetails/:name_Products', component: ProductDetailsComponent},
  {path:'updateproduct/:name_Products', component: UpdateProductComponent},
  {path:'addcategory', component: AddCategoryComponent},
  {path:'products/:nameCategory',  component: ProductListComponent},
  {path:'addproduct', component: AddProductComponent},
  {path:'', redirectTo: 'categories', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
