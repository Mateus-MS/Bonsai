import { Component, QueryList, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent implements AfterViewInit {

  @ViewChildren(ItemComponent, {read: ElementRef}) items!: QueryList<ElementRef>;
  activeChild : number = 0;

  ngAfterViewInit(): void {
    this.items.get(0)?.nativeElement.children[0].children[0].classList.add('green');
    this.items.get(0)?.nativeElement.children[0].classList.add('selected');
  }

  receiveData(data: number){

    this.items.get(data)?.nativeElement.children[0].classList.add('selected');
    this.items.get(data)?.nativeElement.children[0].children[0].classList.add('green');
    this.items.get(this.activeChild)?.nativeElement.children[0].classList.remove('selected');
    this.items.get(this.activeChild)?.nativeElement.children[0].children[0].classList.remove('green');

    this.activeChild = data;

  }

}
