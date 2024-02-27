import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderTable',
  templateUrl: './orderTable.component.html',
  styleUrls: ['./orderTable.component.css']
})
export class OrderTableComponent implements OnInit {

  @Input() theadforall:string[]=[]
  @Input() tbodyforall:any[]=[]
  constructor() { }

  ngOnInit() {
  }

}
