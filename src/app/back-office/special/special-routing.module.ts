import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemComponent } from './item/item.component';
import { SpecialMainComponent } from './special-main/special-main.component';

const routes: Routes = [
    { path: '', component: SpecialMainComponent },
    { path: 'items', component: ItemComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SpecialRoutingModule { }
