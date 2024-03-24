import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [],
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})
export class SocialComponent {

  @ViewChild('controll') controll!: ElementRef;

  active: number = 0;

  setActive(data: number){

    if(this.active != data){
      this.controll.nativeElement.children[data].classList.add('button--active')
      this.controll.nativeElement.children[this.active].classList.remove('button--active')

      this.active = data;
    }

  }

}
