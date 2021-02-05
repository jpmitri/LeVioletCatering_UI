import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { AboutUsComponent } from './ui/about-us/about-us.component';
import { HomeComponent } from './ui/home/home.component';
import { MenuComponent } from './ui/menu/menu.component';
import { SpecialComponent } from './ui/special/special.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'special', component: SpecialComponent },
  { path: '**', component: Page404Component },
  { path: 'Admin', loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
