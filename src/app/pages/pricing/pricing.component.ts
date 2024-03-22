import { Component } from '@angular/core';

import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CardComponent } from '../../components/card/card.component';
import { PlanSelectorComponent } from '../../components/plan-selector/plan-selector.component';
import { AddonComponent } from '../../components/addon/addon.component';
import { ButtomComponent } from '../../components/buttom/buttom.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [NavBarComponent, CardComponent, PlanSelectorComponent, AddonComponent, ButtomComponent, FooterComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

}
