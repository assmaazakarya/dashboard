import { Component, Input, OnInit } from '@angular/core';
// import { IMeals } from '../../Datatypes/meal';

@Component({
  selector: 'app-dashboardTable',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class dashboardTableComponent implements OnInit {


  @Input() theadforall:string[]=[]
  @Input() tbodyforall:any[]=[]
  constructor() { }

  ngOnInit() {
    
    

console.log();

  }

}
