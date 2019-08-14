import { Component, OnInit, Input } from '@angular/core';
import { ConstService } from 'src/app/services/const.service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() menuActive;
  constructor(
    private $const: ConstService
  ) { }

  public listActive$ = this.$const.listActive$;

  ngOnInit() {
  }
  openTaskList(active) {
    this.$const.openTaskList(active);
  }
}
