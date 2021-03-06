import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { THeaderComponent } from './components/t-header/t-header.component';
import { ClockComponent } from './components/clock/clock.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { MinuteSecondsPipe } from './minute-seconds.pipe';
import { SideBarComponent } from './components/side-bar/side-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    THeaderComponent,
    ClockComponent,
    TaskListComponent,
    MinuteSecondsPipe,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
