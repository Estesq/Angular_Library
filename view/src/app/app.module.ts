import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooksComponent } from './books/books.component';
import { ReadersComponent } from './readers/readers.component';
import { AddBookComponent } from './add-book/add-book.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import {MatToolbarModule, MatButtonModule,MatIconModule,MatMenuModule,MatTableModule,MatPaginatorModule,MatInputModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { MatCardModule,MatGridListModule,MatDividerModule,MatDialogModule } from "@angular/material";
import { StudentsComponent } from './students/students.component';
import { DialogBookIssueComponent } from './dialog-book-issue/dialog-book-issue.component';
import { HttpClientModule }    from '@angular/common/http';
import { LibraryServicesService } from './library-services.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    ReadersComponent,
    AddBookComponent,
    RegisterStudentComponent,
    NavbarComponent,
    StudentsComponent,
    DialogBookIssueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LibraryServicesService],
  bootstrap: [AppComponent],
  entryComponents:[DialogBookIssueComponent]
})
export class AppModule { }
