import { Component, ViewChild, ElementRef } from '@angular/core';
import { SocialCardComponent } from '../social-card/social-card.component';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [SocialCardComponent],
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})
export class SocialComponent {

  @ViewChild('controll') controll!: ElementRef;

  @ViewChild('page1') page_one!: ElementRef;
  @ViewChild('page2') page_two!: ElementRef;

  active: number = 0;

  setActive(data: number){

    if(data == 0){
      this.page_one.nativeElement.classList.remove('hidden')
      this.page_two.nativeElement.classList.add('hidden')
    } else {
      this.page_one.nativeElement.classList.add('hidden')
      this.page_two.nativeElement.classList.remove('hidden')
    }

    if(this.active != data){
      this.controll.nativeElement.children[data].classList.add('button--active')
      this.controll.nativeElement.children[this.active].classList.remove('button--active') 
      this.active = data;
    }

  }

}
