import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule} from'@angular/common/http';
import { WtableComponent } from './wtable/wtable.component';
import { CatlistComponent } from './catlist/catlist.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddprComponent } from './addpr/addpr.component';
import { AddcatComponent } from './addcat/addcat.component';
import { EditPrComponent } from './edit-pr/edit-pr.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
    WtableComponent,
 
    CatlistComponent,
    ProductListComponent,
    AddprComponent,
    AddcatComponent,
    EditPrComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
