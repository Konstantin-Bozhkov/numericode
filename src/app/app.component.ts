import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to Numericode';
  message:string;

  constructor(){
    this.message = "8 5 12 12 15";
  }
}
