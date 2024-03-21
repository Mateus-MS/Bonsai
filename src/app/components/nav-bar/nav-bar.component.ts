import { Component } from '@angular/core';
import { ButtomComponent } from '../buttom/buttom.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ButtomComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
