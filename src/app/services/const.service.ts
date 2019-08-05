import { Injectable } from '@angular/core';

import { mapTo } from 'rxjs/operators';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConstService {

  constructor() { }

  public startMin = 25;
  public defaultTime = this.startMin * 60 ;
  public intervalTime = interval(1000).pipe(mapTo(-1));
  public restTime = 5 * 60;





  public taskList = [
    {
      title: 'Call to Mars',
      status: true,
      id: '1564979718104'
    }, {
      title: ' Call to Wil',
      status: true,
      id: '1564979718120'
    }
  ];

}
