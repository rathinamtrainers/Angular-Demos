import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'debugging';

  servers: any = [];

  addServer() {
    this.servers.push("Another Server");
  }

  removeServer(id: number) {
    const position = id;
    this.servers.splice(position, 1)    // https://www.tutorialspoint.com/typescript/typescript_array_splice.htm
  }

}
