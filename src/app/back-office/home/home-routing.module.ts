import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeMainComponent } from './home-main/home-main.component';
import { L1Component } from './l1/l1.component';
import { L2Component } from './l2/l2.component';
import { L3Component } from './l3/l3.component';
import { L4Component } from './l4/l4.component';


const routes: Routes = [
    { path: '', component: HomeMainComponent },
    { path: 'L1', component: L1Component },
    { path: 'L2', component: L2Component },
    { path: 'L3', component: L3Component },
    { path: 'L4', component: L4Component }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
