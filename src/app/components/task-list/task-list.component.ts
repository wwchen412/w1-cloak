import { Component, OnInit } from '@angular/core';
import { ConstService } from 'src/app/services/const.service';
import { mergeAll, tap } from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(
    private $const: ConstService
  ) { }
  // public listArray: [];
  public lists$ = this.$const.taskList;

  ngOnInit() {
  }

}
