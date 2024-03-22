import { Component, Input } from '@angular/core';

  type list = (string | string[] | null)

@Component({
  selector: 'app-footer-list',
  standalone: true,
  imports: [],
  templateUrl: './footer-list.component.html',
  styleUrl: './footer-list.component.css'
})
export class FooterListComponent {

  @Input() name !: string;
  @Input() elements !: list[];

  checkType(element: list) :string{

    if(typeof(element) == "string"){
      return "string";
    }
    if(element == null){
      return "null";
    } else {
      return "array";
    }

  }

  isGreen(element: list) :boolean{

    return element?.at(0) == "*";

  }

  removeFirstCharacter(element: list) :string{

    if(typeof(element) !== 'string'){return ''}

    return element?.slice(1, element.length);

  }

}
