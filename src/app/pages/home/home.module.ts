import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Service } from '../../core/services/service-helper.service';
import { HttpService } from '../../core/services/http.service';
import {
  MatIconModule,
  MatGridListModule,
  MatListModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatMenuModule,
  MatFormFieldModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [],
  exports: [],
  providers: [Service, HttpService]
})
export class HomeModule { }
