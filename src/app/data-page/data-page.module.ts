import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSourceComponent } from './data-source/data-source.component';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatGridListModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    RouterModule
  ],
  exports: [DataSourceComponent],
  declarations: [DataSourceComponent]
})
export class DataPageModule { }
