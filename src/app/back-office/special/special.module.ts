import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialMainComponent } from './special-main/special-main.component';
import { ItemComponent } from './item/item.component';
import { SpecialRoutingModule } from './special-routing.module';



@NgModule({
  declarations: [SpecialMainComponent, ItemComponent],
  imports: [
    CommonModule,
    SpecialRoutingModule
  ]
})
export class SpecialModule { }
