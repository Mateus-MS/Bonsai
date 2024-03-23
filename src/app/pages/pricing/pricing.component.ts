import { Component } from '@angular/core';

import { PlanSelectorComponent } from '../../components/plan-selector/plan-selector.component';
import { AddonComponent } from '../../components/addon/addon.component';
import { ButtomComponent } from '../../components/buttom/buttom.component';
import { PlansComponent } from '../../components/plans/plans.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [PlansComponent, PlanSelectorComponent, AddonComponent, ButtomComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

}
