import { Component, Input, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-create',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './employee-create.html',
  styleUrl: './employee-create.css',
})
export class EmployeeCreate implements OnInit{

  ngOnInit() {}
    
  @Input() employeeDetails={name:'',email:'',phone:0}

  constructor(
    public restApi:RestApiService,
    public router:Router
  ){}

  addEmployee()
  {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data:{})=>{
      this.router.navigate(['/employee-list'])
    })
  }

}
