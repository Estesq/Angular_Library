import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Book } from './ngmodels/ngbook';
import { Student } from "./ngmodels/student";
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {catchError, retry} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class LibraryServicesService {
 

  constructor( private http:HttpClient ) {}

 
  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>("http://localhost:8080/books");
  }

  getBookDetail(id):Observable<Book>{
    return this.http.get<Book>("http://localhost:8080/book/"+id);
  }

  getStudents():Observable<Student[]>{
    return this.http.get<Student[]>("http://localhost:8080/readers");
  }

  bookForm: FormGroup = new FormGroup({
    _id : new FormControl(""),
    name : new FormControl("",Validators.required),
    author : new FormControl("",Validators.required),
    copies : new FormControl("",Validators.required),
    category : new FormControl("",Validators.required)
  });

  studForm: FormGroup = new FormGroup({
    _id : new FormControl(""),
    name : new FormControl("",Validators.required),
    phone : new FormControl("",Validators.required),
    email : new FormControl("",[Validators.required,Validators.email]),
    password : new FormControl("",Validators.required)
  });

  issuedBook: FormGroup = new FormGroup({
    phone: new FormControl("",Validators.required)
  });

  initFormGroup(){
    this.bookForm.setValue({
      _id : "",
      name : "",
      author : "",
      copies : "",
      category : ""
    })
  }

  initstudFormGroup(){
    this.studForm.setValue({
      _id : "",
      name : "",
      phone : "",
      email : "",
      password: ""
    })
  }

  addBook(book : Book):Observable<Book>{
    return this.http.post<Book>("http://localhost:8080/addBook",book).pipe(
    );
  }

  addStudent(stud : Student):Observable<Student>{
    return this.http.post<Student>("http://localhost:8080/registerReader",stud).pipe(
    );
  }

  issueBook(book){
    return this.http.post<any>("http://localhost:8080/issueBook",book).pipe(
      
    );
  }

}
