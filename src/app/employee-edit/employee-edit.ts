import { Component, OnInit } from '@angular/core';
 
import { RestApiService } from '../shared/rest-api.service';
 
import { ActivatedRoute, Router } from '@angular/router';
 
import { FormsModule } from '@angular/forms';
 
@Component({
 
  selector: 'app-employee-edit',
 
  standalone: true,
 
  imports: [FormsModule],
 
  templateUrl: './employee-edit.html',
 
  styleUrls: ['./employee-edit.css']
 
})
 
export class EmployeeEdit implements OnInit {
 
  id: any;
 
  employeeData: any = {};
 
  constructor(
 
    public restApi: RestApiService,
 
    public actRoute: ActivatedRoute,
 
    public router: Router
 
  ) {}
 
  ngOnInit(): void {
 
    this.id = this.actRoute.snapshot.paramMap.get('id');
 
    if (this.id) {
 
      this.restApi.getEmployee(this.id).subscribe((data: {}) => {
 
        this.employeeData = data;
 
      });
 
    }
 
  }
 
  updateEmployee(): void {
 
    if (window.confirm('Are you sure you want to update?')) {
 
      this.restApi.updateEmployee(this.id, this.employeeData).subscribe(data => {
 
        this.router.navigate(['/employee-list']);
 
      });
 
    }
 
  }
 
}