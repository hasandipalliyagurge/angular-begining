import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  template: `
    <p>
    <button class="btn btn-primary" (click)="showOverview()">Overview</button>
    </p>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }
}
