import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangeWorkerComponent } from './ui/change-worker/change-worker.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [AppComponent, TableWorkersComponent, AddformWorkerComponent, ChangeWorkerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    TextMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
