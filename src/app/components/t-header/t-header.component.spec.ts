import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { THeaderComponent } from './components/t-header.component';

describe('THeaderComponent', () => {
  let component: THeaderComponent;
  let fixture: ComponentFixture<THeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ THeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(THeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
