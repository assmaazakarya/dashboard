import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usersTable',
  templateUrl: './usersTable.component.html',
  styleUrls: ['./usersTable.component.css']
})
export class UsersTableComponent implements OnInit {
  @Input() theadforall:string[]=[]
  @Input() tbodyforall:any[]=[]
  constructor() { }

  ngOnInit() {
  }

}
