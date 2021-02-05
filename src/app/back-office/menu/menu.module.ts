import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  declarations: [MenuMainComponent, MenuItemComponent],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
