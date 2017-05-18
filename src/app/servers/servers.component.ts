import { Component, OnInit } from '@angular/core';

@Component({

  // Different ways to show component

  //selector: 'app-servers'  <= Element

  //selector: '[app-servers]' <= Attribute 

  //selector: '.app-servers' <= Class

  selector: 'app-servers',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }
  onUpdateServerName(event:any) {
    this.serverName = event.target.value;
  }

}
