import { Component, HostListener } from '@angular/core';
import { ButtomComponent } from '../buttom/buttom.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ButtomComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent{

  breakPoint !: boolean;

  constructor(){
    this.onResize();
  }

  @HostListener("window:resize", [])
  onResize(){
    this.breakPoint = window.innerWidth > 1200;
  }

}