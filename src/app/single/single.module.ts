import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleRoutingModule } from './single-routing.module';
import { SingleComponent } from './single.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [SingleComponent],
  imports: [
    CommonModule,
    SingleRoutingModule,
    RouterModule,
    ComponentsModule
  ]
})
export class SingleModule { }
