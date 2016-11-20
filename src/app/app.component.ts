import { Component } from '@angular/core';

import { Pipe, PipeTransform } from '@angular/core';
import { TempConvertPipe } from "./temp-convert.pipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newdate = new Date(1992, 2, 12); // March 12, 1988
  
  // Default number is 3
  number = 3;
  
  name = "richard john";
  
  date: Date;
  temperature: number;

  promise: Promise<string>;

  constructor() {
	this.date = new Date();
	this.temperature = 90;
	
	// The text will be shown in 2 seconds
	this.promise = new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve("This is coming from Promise!");
		}, 2000)
	});
  }
}
