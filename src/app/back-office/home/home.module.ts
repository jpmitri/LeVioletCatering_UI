import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main/home-main.component';
import { L1Component } from './l1/l1.component';
import { L2Component } from './l2/l2.component';
import { L3Component } from './l3/l3.component';
import { L4Component } from './l4/l4.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeMainComponent, L1Component, L2Component, L3Component, L4Component],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
