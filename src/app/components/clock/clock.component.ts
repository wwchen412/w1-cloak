import { Component, OnInit } from '@angular/core';
import { ConstService } from 'src/app/services/const.service';
import { interval, of, Subject } from 'rxjs';
import { map, filter, mergeMap, switchMap, tap, takeWhile, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  constructor(
    private $const: ConstService
  ) { }

  public countTime = this.$const.defaultTime;
  private timerPaused = new Subject;
  public time$ = this.timerPaused.pipe(
    filter(x => !!x),
    mergeMap(
      intervalTime => interval(1000).pipe(takeUntil(this.timerPaused)),
      (status, time) => ({ status, time: this.countTime - 1 })
    ),
    takeWhile(x => x.time >= 0),
  ).subscribe(x => {
    this.countTime = x.time;
  })

  onPause() {
     this.timerPaused.next(false);
  }

  onResume() {

    this.timerPaused.next(true);
  }
  ngOnInit() {

  }

}
