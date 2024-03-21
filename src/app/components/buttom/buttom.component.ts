import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttom',
  standalone: true,
  imports: [],
  templateUrl: './buttom.component.html',
  styleUrl: './buttom.component.css'
})
export class ButtomComponent {
  @Input() text!: string;
  @Input() isActive!: boolean;
}
