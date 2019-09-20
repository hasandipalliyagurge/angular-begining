import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router, ParamMap }from '@angular/router';

 
@Component({
  selector: 'app-department-details',
  template: `
  <h3 [class]="succClass">You have selected Department with id = {{departmentId}}</h3>
  <a href="departments">
  <img class="img-thumbnail" src="assets/image/img1.png">
  <img class="img-thumbnail" src="assets/image/img2.png">
  <img class="img-thumbnail" src="assets/image/img3.png">
  <img class="img-thumbnail" src="assets/image/img4.png">
  <img class="img-thumbnail" src="assets/image/img5.png">
  </a>

  <p>
    <button (click)="showOverview()">Overview</button>
    <button (click)="showContact()">Contact</button>
  </p>
  <router-outlet></router-outlet>
  <button (click)="goPrevious()">Previous </button>
  <button (click)="goNext()">Next</button>
  <div>
  <button (click)="gotoDepartments()">Back</button>
  </div>

  `,
  styles: [`
    .text-succ{
      color:grey;
    }
  `]
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentId;
  public succClass="text-succ";
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
  this.router.navigate(['/departments',previousId])
}

goNext(){
  let nextId=this.departmentId +1;
  this.router.navigate(['/departments',nextId])
}
  
gotoDepartments(){
   let selectedId = this.departmentId ? this.departmentId: null;
   //this.router.navigate(['/departments',{id:selectedId, test: 'testValue'}]); 
   //test is another optional parameter which can be similarly used
   this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});
}

showOverview(){
  this.router.navigate(['overview'],{relativeTo:this.route});

}
showContact(){
  this.router.navigate(['contact'],{relativeTo: this.route})
}

}
