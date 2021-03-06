import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "";

  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2'];

  constructor() { }

  ngOnInit(): void {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event:any) {
    console.log(event);

    this.serverName = (<HTMLInputElement> event.target).value;
  }
}
