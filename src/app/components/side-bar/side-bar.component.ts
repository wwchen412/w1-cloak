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

  ngOnInit() {
  }
  openTaskList(active, activeBtn) {
    this.$const.openTaskList(active, activeBtn);

  }
}
