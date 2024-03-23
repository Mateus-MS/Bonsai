import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input() text !: string;
  @Input() link !: string;

  @Input() ref !: number;

  @Output() emitter: EventEmitter<number> = new EventEmitter<number>();

  refresh(data: number){

    this.emitter.emit(data);

  }

}
