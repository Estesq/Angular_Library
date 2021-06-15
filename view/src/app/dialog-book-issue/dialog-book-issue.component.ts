import { Component, OnInit } from '@angular/core';
import { LibraryServicesService } from '../library-services.service';
@Component({
  selector: 'app-dialog-book-issue',
  templateUrl: './dialog-book-issue.component.html',
  styleUrls: ['./dialog-book-issue.component.css']
})
export class DialogBookIssueComponent implements OnInit {


  
  constructor(private service:LibraryServicesService) { }

  ngOnInit() {
   
  }

  

  onSubmitissueBook(){
    let ph = this.service.issuedBook.value;
    console.log(ph.phone);
    
    // let data={};
    // this.service.issueBook(data).subscribe();
  }

}
