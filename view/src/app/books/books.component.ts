import { Component, OnInit,ViewChild, Injectable } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { DialogBookIssueComponent } from '../dialog-book-issue/dialog-book-issue.component';
import { LibraryServicesService } from '../library-services.service';
import { Book } from '../ngmodels/ngbook';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers:[LibraryServicesService]
})


export class BooksComponent implements OnInit {

  constructor(private d:MatDialog,private libraryservice:LibraryServicesService){}
  displayedColumns: string[] = ['id','name', 'author', 'category', 'copies','availableCopies','action'];
  dataSource = new MatTableDataSource<Book>();


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.libraryservice.getBooks().subscribe((res) => {
      this.dataSource = new MatTableDataSource<Book>(res)
      this.dataSource.paginator = this.paginator; 
    });  
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id):void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%" ;
    this.d.open(DialogBookIssueComponent,dialogConfig); 
    this.libraryservice.getBookDetail(id).subscribe((res)=>console.log(res)
    )
    
  }
  
}


