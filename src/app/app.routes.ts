import { Routes } from '@angular/router';
import { EmployeeCreate } from './employee-create/employee-create';
import { EmployeeList } from './employee-list/employee-list';
import { EmployeeEdit } from './employee-edit/employee-edit';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'create-employee'
    },
    {
        path: 'create-employee', component: EmployeeCreate
    },
    {
        path: 'employee-list', component: EmployeeList
    },
    {
        path: 'employee-edit/:id', component: EmployeeEdit
    }

];
