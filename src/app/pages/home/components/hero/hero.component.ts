import { Component } from '@angular/core';
import { InputComponent } from '../../../../components/input/input.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
