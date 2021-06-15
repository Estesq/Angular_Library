import { Component, OnInit } from '@angular/core';
import { LibraryServicesService } from '../library-services.service';
import { Student } from '../ngmodels/student';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  constructor(private service:LibraryServicesService) { }

  ngOnInit() {
  }

  onSubmitaddstudent(){
    let StudData:Student = this.service.studForm.value;
    console.log(StudData);
    
    if(this.service.studForm.valid){
      this.service.addStudent(StudData).subscribe((data)=>{
        if(data){
          this.service.studForm.reset();
          this.service.initstudFormGroup();
        }
      });
    }
  }

}
