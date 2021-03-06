import { Component, OnInit } from '@angular/core';
import { ConstService } from 'src/app/services/const.service';
import { interval, of, Subject, BehaviorSubject } from 'rxjs';
import { map, filter, mergeMap, switchMap, tap, takeWhile, takeUntil, find, mergeAll } from 'rxjs/operators';


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  constructor(
    public $const: ConstService
  ) { }

  public activeIndex = new BehaviorSubject<number>(0);
  public index;

  public alramSettings = this.$const.alramSettings;
  public taskListOnhold$ = this.$const.taskListOnhold$;

  public countTime = this.$const.defaultTime;
  private timerPaused = new Subject;
  public workingStatus = false;
  public time$ = this.timerPaused.pipe(
    filter(x => !!x),
    // tslint:disable-next-line: deprecation
    mergeMap(
      intervalTime => interval(1000).pipe(takeUntil(this.timerPaused)),
      (status, time) => ({ status, time: this.countTime - 1 })
    ),
    takeWhile(x => x.time >= 0),
  ).subscribe(x => {
    if (x.time === 0) {
      this.countTime = this.$const.defaultTime;
    } else {
      this.countTime = x.time;
    }

  });

  public getTimePercent() {
    const r = document.querySelector('.circle_fill').getAttribute('r');
    const processTime = (this.$const.defaultTime - this.countTime) / this.$const.defaultTime * 2;
    const circlePercent = +r * processTime * Math.PI;
    return circlePercent;
  };
  public updateListIndex(index) {
    this.activeIndex.next(index++);
    this.index = index++;
    console.log(index);
  }



  onPause() {
    this.timerPaused.next(false);
    this.workingStatus = false;
  }

  onResume() {
    this.timerPaused.next(true);
    this.workingStatus = true;
  }
  toggleAlram(alarm) {
    this.alramSettings = !alarm;
  }
  ngOnInit() {

  }

}
