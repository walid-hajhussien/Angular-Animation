import {Component} from '@angular/core';
import {animate, group, keyframes, state, style, transition, trigger} from '@angular/animations';


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
      transition('2 <=> *', [
        style({'background-color': 'blue'}),
        animate(1000, style({'border-radius': '50px'})),
      ]),
    ]),
    trigger('itemTrigger', [
      state('0', style({opacity: 1, transform: 'translateX(0)', color: 'black'})),
      transition('normalCase => *', [
        style({opacity: 0, transform: 'translateX(-100px)'}),
        animate(500)
      ]),
      transition('void => *', [
        animate(1000, keyframes([
          style({opacity: 0, transform: 'translateX(-100px)', offset: 0}),
          style({opacity: 0.5, transform: 'translateX(-50px)', offset: 0.5}),
          style({opacity: 1, transform: 'translateX(0px)', offset: 0.8})
        ]))
      ]),
      transition('normalCaseDelete => void', [
        animate(50, style({color: 'red'})),
        animate(500, style({opacity: 0, transform: 'translateX(1000px)'}))
      ]),
      transition('* => void', [
        group([
          animate(200, style({color: 'red'})),
          animate(1000, style({opacity: 0, transform: 'translateX(1000px)'}))
        ])
      ])
    ])]
})

export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  divState = 0;
  itemTrigger = 0;

  onAnimate() {
    this.divState = this.divState ? 0 : 1;
  }

  onShrink() {
    console.log(this.divState !== 2);
    this.divState = (this.divState !== 2) ? 2 : 0;
  }

  onAdd(item) {
    if (item.length > 0) {
      this.list.push(item);

    }

  }

  animationStart(event) {
    console.log('0', event);
  }

  animationDone(event) {
    console.log('1', event);
  }

  onDelete(index: number) {
    this.list.splice(index, 1);
  }
}
