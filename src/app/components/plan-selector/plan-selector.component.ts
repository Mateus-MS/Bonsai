import { Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-plan-selector',
  standalone: true,
  imports: [],
  templateUrl: './plan-selector.component.html',
  styleUrl: './plan-selector.component.css'
})
export class PlanSelectorComponent {


  @ViewChild('circle', {static: true}) circleRef!: ElementRef;

  selectorState: boolean = true;

  onClick(): void{
    if(this.selectorState){
      this.circleRef.nativeElement.classList.add("active");
    } else {
      this.circleRef.nativeElement.classList.remove("active");
    }
    this.selectorState = !this.selectorState;
  }

}