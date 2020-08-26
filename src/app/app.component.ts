import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-demo';
  constructor(){
    const { version: appVersion } = require('../../package.json');
    console.log(appVersion);
  }
}
