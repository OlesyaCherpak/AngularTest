﻿import { Component } from '@angular/core'

@Component({
    selector: 'my-emploee',
    templateUrl: 'app/Employee/employee.component.html'
})
export class EmployeeComponent {
    firstName: string = 'Tom';
    lastName: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;
}