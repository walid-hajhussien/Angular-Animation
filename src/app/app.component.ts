import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('0', style({'background-color': 'red', transform: 'translateX(0) scale(1)'})),
      state('1', style({'background-color': 'blue', transform: 'translateX(100px) scale(1)'})),
      state('2', style({'background-color': 'green', transform: ' scale(0.5)'})),
      transition('0 => 1', animate(300)),
      transition('1 => 0', animate(400)),
      transition('* <=> 2', animate(500)),
    ])
  ]
})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  divState = 0;

  onAnimate() {
    this.divState = this.divState ? 0 : 1;
  }

  onShrink() {
    console.log(this.divState !== 2)
    this.divState = (this.divState !== 2) ? 2 : 0;
  }

  onAdd(item) {
    if (item.length > 0) {
      this.list.push(item);
    }

  }
}
