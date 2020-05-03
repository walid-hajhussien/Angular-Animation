import {Component} from '@angular/core';
import {state, style, trigger} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('init', style({'background-color': 'red', transform: 'translateX(0)'})),
      state('end', style({'background-color': 'blue', transform: 'translateX(100px)'}))
    ])
  ]
})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  divState = 'init';

  onAdd(item) {
    if (item.length > 0) {
      this.list.push(item);
    }

  }
}
