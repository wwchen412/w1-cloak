import { Injectable } from '@angular/core';

import { mapTo, filter, mergeAll, tap, take, switchMap, throttleTime, map, mergeMap, combineLatest, concatMap } from 'rxjs/operators';
import { interval, of, merge, Subject, BehaviorSubject, Observable, from } from 'rxjs';
import { element } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class ConstService {

  constructor() { }


  public startMin = 25;
  public defaultTime = this.startMin * 60;
  public restTime = 5 * 60;


  // public taskListOnholdList = [];
  // public taskListOnholdSubject = new Subject();
  // public taskListOnholdList$ = of(this.taskListOnholdList);




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
  public taskList$ = new BehaviorSubject<any>(this.taskList);

  public taskListOnhold$ = this.taskList$.pipe(

    map(lists => lists.filter(task => !task.status))
    // tap(task => this.pushToOnhold(task)),
    // tap(_ => console.log('-----------', this.taskListOnholdList)),
    // switchMap(_ => this.taskListOnholdList$)
  );
  public listActive: BehaviorSubject<any> = new BehaviorSubject<any>({ active: false, activeBtn: 'listBtnMenu' });
  public listActive$: Observable<any> = this.listActive.asObservable();
  public alramSettings = true;

  public openTaskList(status: boolean, activeStatusBtn: String) {
    const activeStatus = this.listActive.value;
    if (activeStatus.active && activeStatus.activeBtn !== activeStatusBtn) {
      this.listActive.next({ active: status, activeBtn: activeStatusBtn });
    } else {
      this.listActive.next({ active: !status, activeBtn: activeStatusBtn });
    }

  }
  public changeListStatus(id, checked) {

    for (const task of this.taskList) {
      if (task.id === id) {
        task.status = checked;
        break;
      }

    }
    this.taskList$.next(this.taskList);
  }


}
