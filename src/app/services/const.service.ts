import { Injectable } from '@angular/core';

import { mapTo, filter, mergeAll, tap, take } from 'rxjs/operators';
import { interval, of, merge } from 'rxjs';

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
      id: new Date('2019/08/07').getTime().toString()
    }, {
      title: ' Call to Wil',
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
      title: ' Call to josehph',
      status: false,
      id: new Date('2019/08/05').getTime().toString()
    }
  ];
  public taskList$ = of(this.taskList);

  public taskListOnhold$ = this.taskList$.pipe(

    mergeAll(),
    filter(task => task.status),
    // tap(task => this.taskListOnholdList.push(task)),
    tap(console.log)
  );

  public listActive = false;
  public alramSettings = true;

  public openTaskList(status: boolean) {
    this.listActive = !status;
  }
}
