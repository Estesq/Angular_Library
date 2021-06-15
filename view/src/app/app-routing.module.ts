import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ReadersComponent } from './readers/readers.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { AddBookComponent } from './add-book/add-book.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:"" , redirectTo:'/books', pathMatch:'full'},
  {path:'books' , component: BooksComponent},
  {path:'addBook' , component: AddBookComponent},
  {path:'reader',component:ReadersComponent},
  {path:'registerStudent',component:RegisterStudentComponent},
  {path:'students',component:StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
