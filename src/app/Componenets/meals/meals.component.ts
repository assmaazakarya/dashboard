import { Component, OnInit } from '@angular/core';
import { IMeals } from '../../Datatypes/meal';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
   

thaed:string[]=['title','image','category','description','price','orderNo','ingrediants','quantity',"exclude"]
tbody:IMeals[] =[
  {title:'ahmed',  image:"dfbdf",category:'gsfg',description:'sfg',price:"sgsgf"
  ,orderNo:4,ingrediants:"gsfg",quantity:5,exclude:['fsg'],},
  {title:'ahmed',  image:"dfbdf",category:'gsfg',description:'sgg',price:"sgsgf"
  ,orderNo:4,ingrediants:"gsfg",quantity:5,exclude:['fsg'],}, {title:'ahmed',  image:"dfbdf",category:'gsfg',description:'sgg',price:"sgsgf"
  ,orderNo:4,ingrediants:"gsfg",quantity:5,exclude:['fsg'],}, {title:'ahmed',  image:"dfbdf",category:'gsfg',description:'sgg',price:"sgsgf"
  ,orderNo:4,ingrediants:"gsfg",quantity:5,exclude:['fsg'],}, {title:'ahmed',  image:"dfbdf",category:'gsfg',description:'sgg',price:"sgsgf"
  ,orderNo:4,ingrediants:"gsfg",quantity:5,exclude:['fsg'],}, {title:'ahmed',  image:"dfbdf",category:'gsfg',description:'sgg',price:"sgsgf"
  ,orderNo:4,ingrediants:"gsfg",quantity:5,exclude:['fsg'],}, {title:'ahmed',  image:"dfbdf",category:'gsfg',description:'sgg',price:"sgsgf"
  ,orderNo:4,ingrediants:"gsfg",quantity:5,exclude:['fsg'],}, {title:'ahmed',  image:"dfbdf",category:'gsfg',description:'sgg',price:"sgsgf"
  ,orderNo:4,ingrediants:"gsfg",quantity:5,exclude:['fsg'],}, {title:'ahmed',  image:"dfbdf",category:'gsfg',description:'sgg',price:"sgsgf"
  ,orderNo:4,ingrediants:"gsfg",quantity:5},]
  constructor() { }

  ngOnInit() {
  }

}
