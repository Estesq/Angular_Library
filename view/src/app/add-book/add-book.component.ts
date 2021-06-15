import { Component, OnInit } from '@angular/core';
import { LibraryServicesService } from '../library-services.service';
import { Book } from '../ngmodels/ngbook';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private service:LibraryServicesService) { }

  ngOnInit() {
  }

  onSubmitaddBook(){
    let bookData:Book = this.service.bookForm.value;
    if(this.service.bookForm.valid){
      this.service.addBook(bookData).subscribe((data)=>{
        if(data){
          this.service.bookForm.reset();
          this.service.initFormGroup();
        }
      });
    }
  }
}
