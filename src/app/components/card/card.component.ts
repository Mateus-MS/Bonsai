import { Component, Input } from '@angular/core';
import { ButtomComponent } from '../buttom/buttom.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtomComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() benefits    !: string[];
  @Input() price       !: number;
  @Input() title       !: string;
  @Input() description !: string;
}
