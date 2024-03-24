import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-card',
  standalone: true,
  imports: [],
  templateUrl: './social-card.component.html',
  styleUrl: './social-card.component.css'
})
export class SocialCardComponent {
  @Input() path!: string;
  @Input() bio!: string;
  @Input() name!: string;
  @Input() role!: string;
}
