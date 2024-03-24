import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ForWhoComponent } from './components/for-who/for-who.component';
import { SocialComponent } from './components/social/social.component';
import { StartFreeComponent } from '../../components/start-free/start-free.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, BenefitsComponent, SideMenuComponent, ForWhoComponent, SocialComponent, StartFreeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
