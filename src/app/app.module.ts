import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { SixcategoriesComponent } from './component/pages/sixcategories/sixcategories.component';
import { RouterModule } from '@angular/router';
import { CharacterincategoryComponent as CharacterInCategoryComponent } from './component/pages/characterincategory/characterincategory.component';
import { ImageWithButtonComponent } from './component/image-with-button/image-with-button.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SixcategoriesComponent,
    CharacterInCategoryComponent,
    ImageWithButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
