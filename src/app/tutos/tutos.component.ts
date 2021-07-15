import { Component, OnInit } from '@angular/core';

import { TutoService } from './tuto.service';

@Component({
  selector: 'app-tutos',
  templateUrl: './tutos.component.html',
  styleUrls: ['./tutos.component.css']
})
export class TutosComponent implements OnInit {
  title = 'Tutorials Component';
  message = 'ça marche!';

  current_date = new Date();
  isDisplayed = false;
  messageColor = 'red';

  buttonStateStyles={};

  setButtonStateStyles(){
    this.buttonStateStyles = {
      'color':  this.isDisplayed  ? 'red' : 'black',
      'border': this.isDisplayed ? 'dashed red' : 'solid black'
    };
  }

  tutos = [];
  constructor(tutoService : TutoService) {
    this.setButtonStateStyles();
    this.tutos = tutoService.getTutos();
  }
  ngOnInit(): void {
  }

  sayHello(){
  	this.message = "Hello from Controller!";
  	this.isDisplayed = true;

    this.setButtonStateStyles();
  }
}
