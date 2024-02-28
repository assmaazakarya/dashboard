import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mealsTable',
  templateUrl: './mealsTable.component.html',
  styleUrls: ['./mealsTable.component.css']
})
export class MealsTableComponent implements OnInit {

  @Input() theadforall:string[]=[]
  @Input() tbodyforall:any[]=[]
  constructor() { }

  ngOnInit() {
  }

}
