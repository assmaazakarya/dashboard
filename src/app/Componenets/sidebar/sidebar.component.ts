import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavData , ISideNAvToggle } from '../../Datatypes/navData';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  collapsed=false;
  navData=NavData;
  screenWidth=0;
 @Output() onToggleSideNav:EventEmitter<ISideNAvToggle>=new EventEmitter()
  toggleCollapse():void{
 
  this.collapsed=!this.collapsed
  this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
}
  closeSidebar():void{
    this.collapsed=false
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
  }
}
