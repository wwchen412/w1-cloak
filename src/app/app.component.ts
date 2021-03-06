import { Component } from '@angular/core';
import { ConstService } from 'src/app/services/const.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private $const: ConstService
  ) { }
  public listActive ;
  public listActive$ = this.$const.listActive$;
  public data$ = this.$const.taskList$;
}
