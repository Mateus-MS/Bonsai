import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardComponent } from './components/card/card.component';
import { PlanSelectorComponent } from './components/plan-selector/plan-selector.component';
import { AddonComponent } from './components/addon/addon.component';
import { ButtomComponent } from './components/buttom/buttom.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, CardComponent, PlanSelectorComponent, AddonComponent, ButtomComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bonsai';
}
