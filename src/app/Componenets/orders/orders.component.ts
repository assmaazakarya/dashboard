import { Component, OnInit } from '@angular/core';
import {order } from '../../Datatypes/meal';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:string[]=['order',"order",'order','order','order']
  orderinfo:order[]=[{order1:'order',order2:'order',order3:'order',order4:'order',order5:"order"} ]
  constructor() { }

  ngOnInit() {
  }

}
