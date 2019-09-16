import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router, ParamMap }from '@angular/router';

 
@Component({
  selector: 'app-department-details',
  template: `
  <h3>
    you have selected department with id = {{departmentId}}
  </h3>
  <a (click)="goPrevious()">Previous </a>
  <a (click)="goNext()">Next</a>

  <div>
  <button (click)="gotoDepartments()">Back</button>
  </div>

  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    // let id=parseInt(this.route.snapshot.paramMap.get('id'));
    //from the current route snapshot get the id parameter from the url
    // this.departmentId = id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.departmentId=id;

    })
    
  }

goPrevious(){
  let previousId=this.departmentId -1;
  this.router.navigate(['/departments-list',previousId])
}

goNext(){
  let nextId=this.departmentId +1;
  this.router.navigate(['/departments-list',nextId])
}
  
gotoDepartments(){
   let selectedId = this.departmentId ? this.departmentId: null;
   //this.router.navigate(['/departments',{id:selectedId, test: 'testValue'}]); 
   //test is another optional parameter which can be similarly used

   this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});
}
}
