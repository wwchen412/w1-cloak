import { Injectable } from '@angular/core';

import { mapTo, filter, mergeAll, tap, take, switchMap, throttleTime } from 'rxjs/operators';
import { interval, of, merge } from 'rxjs';
import { element } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class ConstService {

  constructor() { }


  public startMin = 25;
  public defaultTime = this.startMin * 60;
  public restTime = 5 * 60;
  public taskListOnholdList = [];




  public taskList = [
    {
      title: 'Call to Mars',
      status: true,
      id: new Date('2019/08/09').getTime().toString()
    }, {
      title: ' Call to Will',
      status: false,
      id: new Date('2019/08/07').getTime().toString()
    }, {
      title: ' Call to Amy',
      status: true,
      id: new Date('2019/08/02').getTime().toString()
    }, {
      title: ' Call to William',
      status: true,
      id: new Date('2019/08/01').getTime().toString()
    }, {
      title: ' Call to Lina',
      status: false,
      id: new Date('2019/08/03').getTime().toString()
    }, {
      title: ' Call to John',
      status: false,
      id: new Date('2019/08/05').getTime().toString()
    }
  ];
  public taskList$ = of(this.taskList);

  public taskListOnhold$ = this.taskList$.pipe(

    mergeAll(),
    filter(task => !task.status),
    tap(task => this.taskListOnholdList.push(task)),
    switchMap(_ => of(this.taskListOnholdList))
  );

  public listActive = false;
  public alramSettings = true;

  public openTaskList(status: boolean) {
    this.listActive = !status;
  }
  public changeListStatus(id, checked) {
    for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].id === id) {
        this.taskList[i].status = checked;
      }
    }
  }


}
