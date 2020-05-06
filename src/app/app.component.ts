import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('0', style({'background-color': 'red', transform: 'translateX(0)'})),
      state('1', style({'background-color': 'blue', transform: 'translateX(100px)'})),
      transition('0 => 1', animate(300)),
      transition('1 => 0', animate(400)),
      transition('1 => *', animate(400)),
    ])
  ]
})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  divState = 0;

  onAnimate() {
    this.divState = this.divState ? 0 : 1;
  }

  onAdd(item) {
    if (item.length > 0) {
      this.list.push(item);
    }

  }
}
