import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TricksRoutingModule } from './tricks-routing.module';
import { TricksComponent } from './tricks.component';


@NgModule({
  declarations: [
    TricksComponent
  ],
  imports: [
    CommonModule,
    TricksRoutingModule
  ]
})
export class TricksModule { }
