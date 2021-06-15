import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Student } from '../ngmodels/student';
import { LibraryServicesService } from '../library-services.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers : [LibraryServicesService] 
})
export class StudentsComponent implements OnInit {

  constructor(private libraryservice:LibraryServicesService){}

  displayedColumns: string[] = ['_id','name', 'phone', 'email'];
  dataSource = new MatTableDataSource<Student>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.libraryservice.getStudents().subscribe((res) => {
      this.dataSource = new MatTableDataSource<Student>(res)
      this.dataSource.paginator = this.paginator; 
    });  
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

// export interface reader {
//   position:number,
//   name: string;
//   phoneno:number;
//   email:string;
// }

// const ELEMENT_DATA: reader[] = [
//   {position:1,name: 'Aniket', phoneno: 1234567890,email:'xyz@xyz.com'},
//   {position:2,name: 'Aniket', phoneno: 1234567890,email:'xyz@xyz.com'},
//   {position:3,name: 'Aniket', phoneno: 1234567890,email:'xyz@xyz.com'},
//   {position:4,name: 'Aniket', phoneno: 1234567890,email:'xyz@xyz.com'},
//   {position:5,name: 'Aniket', phoneno: 1234567890,email:'xyz@xyz.com'},
//   {position:6,name: 'Aniket', phoneno: 1234567890,email:'xyz@xyz.com'},
//   {position:7,name: 'Aniket', phoneno: 1234567890,email:'xyz@xyz.com'},
// ];

