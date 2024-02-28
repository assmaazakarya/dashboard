import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ISideNAvToggle } from './Datatypes/navData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day-two-angular';
  isSidenavcollapsed=false
  screenWidth=0;
  onToggleSideNav(data:ISideNAvToggle):void{
this.screenWidth=data.screenWidth
this.isSidenavcollapsed=data.collapsed
  }
}
