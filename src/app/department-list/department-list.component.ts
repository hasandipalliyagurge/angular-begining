import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap }from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: `
    <h3>
    Department List
    </h3>
  <ul class="items">
      <li (click)="onSelect(department)" [class.selected]="iSelected(department)"  *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
public selectedId;
 departments = [
  {"id":1,"name":"angular"},
  {"id":2,"name":"mongodb"},
  {"id":3,"name":"ruby"},
  {"id":4,"name":"node"},
  {"id":5,"name":"bootstrap"}

];



  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.selectedId=id;
    })
  }
  onSelect(department){
  this.router.navigate(['/departments',department.id])

  }
  iSelected(department){
    return department.id===this.selectedId;
  }


}
