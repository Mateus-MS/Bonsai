import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-addon',
  standalone: true,
  imports: [],
  templateUrl: './addon.component.html',
  styleUrl: './addon.component.css'
})
export class AddonComponent {
  @Input() title !: string;
  @Input() description !: string;
  @Input() price !: number | null;
  @Input() link !: boolean | null;
}
