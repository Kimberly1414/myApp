import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  
  content="";
  messages=[];

  constructor() { }

  send(){
    let messages ={
      content: this.content
    }
    this.messages.push(messages);
    this.clearField();
  }
  clearField(){
    this.content = "";
  }

  ngOnInit() {
  }

}
