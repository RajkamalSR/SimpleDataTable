import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CategoryPipe } from './pipes/category.pipe';
import { OrderbyPipe } from './pipes/orderby.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CategoryPipe,
    OrderbyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
