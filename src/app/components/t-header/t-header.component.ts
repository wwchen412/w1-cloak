import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-t-header',
  templateUrl: './t-header.component.html',
  styleUrls: ['./t-header.component.scss']
})
export class THeaderComponent implements OnInit {

  constructor() { }
  @Input() menuActive;
  ngOnInit() {
  }

}
