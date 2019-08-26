import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConstService } from 'src/app/services/const.service';
import { mergeAll, tap } from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @ViewChild ('addTaskText') inputTask: ElementRef;

  constructor(
    private $const: ConstService
  ) { }
  public lists;
  public lists$ = this.$const.taskList$;


  public toggleFinish(evt) {
    const listId = evt.target.id;
    const ori_status = evt.target.checked;
    this.$const.changeListStatus(listId, ori_status);
  }

  ngOnInit() {
    // console.log(this.inputTask);
  }
  public addTaskBtn(inputText) {
    const text = inputText.value.trim();
    // this.$const.taskList$.pipe()
    this.$const.taskList.push({
      'id': Date.now().toString(),
      'status': false,
      'title': text
    });
    inputText.value = '';
  }

}
