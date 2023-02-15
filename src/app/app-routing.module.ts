import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcatComponent } from './addcat/addcat.component';
import { AddprComponent } from './addpr/addpr.component';
import { CatlistComponent } from './catlist/catlist.component';
import { EditPrComponent } from './edit-pr/edit-pr.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WtableComponent } from './wtable/wtable.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'addpr',component:AddprComponent},
  {path:'addcat',component:AddcatComponent},

 

  {path:'wtable',component:WtableComponent},

  {path:'edit_pr/:id',component:EditPrComponent},


  {path:'catlist',component:CatlistComponent},
  {path:'prlist/:cat',component:ProductListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
