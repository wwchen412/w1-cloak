import { Injectable } from '@angular/core';

import { mapTo, filter, mergeAll ,tap } from 'rxjs/operators';
import { interval, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConstService {

  constructor() { }


  public startMin = 25;
  public defaultTime = this.startMin * 60;
  public restTime = 5 * 60;





  public taskList = [
    {
      title: 'Call to Mars',
      status: true,
      id: '1564979718104'
    }, {
      title: ' Call to Wil',
      status: false,
      id: '1564979718120'
    }
  ];

  public taskList$ = of(this.taskList);
  public taskListOnhold = this.taskList$.pipe(
    mergeAll(),
    filter(task => task.status),
    tap(console.log)
  ).subscribe();

  public listActive = false;

  public openTaskList(status: boolean) {
    this.listActive = !status;
  }
}
