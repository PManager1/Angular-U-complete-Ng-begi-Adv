// import  decorator to this class to make it a componnent.
import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';
@Component({
    selector: 'courses', // <div class="courses">  #courses    <rating>
    template: `
    <h2> {{ "Title: " +  title  }} 
    </h2>
    <ul>  <li *ngFor=" let course of courses"> {{course}} </li>    </ul>
    `
})

export class CoursesComponent{
 title = "List of courses - courses title "; 
//  Services - Logic for calling an HTTP service in this component. 
courses; 

constructor(){
    console.log(' 19 -  constructor called ');
    let service = new CoursesService(); 
    console.log(' getCourses . getCourses =', service.getCourses() );
    this.courses = service.getCourses(); 
}
    


}
