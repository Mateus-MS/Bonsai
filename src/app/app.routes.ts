import { Routes } from '@angular/router';
import { PricingComponent } from './pages/pricing/pricing.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "pricing",
        component: PricingComponent
    }    
];
