import { Component, OnInit, Input } from '@angular/core';
import { ConstService } from 'src/app/services/const.service';

@Component({
  selector: 'app-t-header',
  templateUrl: './t-header.component.html',
  styleUrls: ['./t-header.component.scss']
})
export class THeaderComponent implements OnInit {

  constructor(
    private $const: ConstService
  ) {

  }
  @Input() menuActive;

  openTaskList(active) {
    this.$const.openTaskList(active);
  }
  ngOnInit() {
  }

}
