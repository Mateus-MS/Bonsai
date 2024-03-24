import { Component } from '@angular/core';

import { PlanSelectorComponent } from '../../components/plan-selector/plan-selector.component';
import { AddonComponent } from '../../components/addon/addon.component';
import { PlansComponent } from '../../components/plans/plans.component';
import { StartFreeComponent } from '../../components/start-free/start-free.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [PlansComponent, PlanSelectorComponent, AddonComponent, StartFreeComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

}
