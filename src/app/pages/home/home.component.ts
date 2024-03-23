import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, BenefitsComponent, SideMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
