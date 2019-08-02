import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public listActive:boolean = false;
  private openTaskList(status:boolean){
    this.listActive = !status;
  }
}
