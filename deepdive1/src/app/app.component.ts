import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'deepdive1';

  serverElements:any = [{
    type: 'server',
    name: 'Test Server',
    content: 'Test content'
  }];


  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }

  onChangeFirst() {
    this.serverElements[0].name = "Name Changed!";
  }

  onDestroyFirst() {
    // Delete one element at index 0. We are deleting the first element of the array.
    this.serverElements.splice(0,1)
  }
}
