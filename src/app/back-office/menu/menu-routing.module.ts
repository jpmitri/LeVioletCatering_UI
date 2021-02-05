import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuMainComponent } from './menu-main/menu-main.component';

const routes: Routes = [
    { path: '', component: MenuMainComponent },
    { path: 'items', component: MenuItemComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MenuRoutingModule { }
