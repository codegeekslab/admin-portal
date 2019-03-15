import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule,MatInputModule, MatSelectModule, MatSlideToggleModule,MatListModule} from '@angular/material';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { AddBookService } from './services/add-book.service';
import { UploadImageService } from './services/upload-image.service';
import { GetBookListService } from './services/get-book-list.service';
import { GetBookService } from './services/get-book.service';
import { FormsModule } from '@angular/forms';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,
    ViewBookComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule,MatToolbarModule, MatGridListModule,MatInputModule,MatSelectModule,MatSlideToggleModule,MatListModule
  ],
  providers: [LoginService,AddBookService,UploadImageService,GetBookListService,GetBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
