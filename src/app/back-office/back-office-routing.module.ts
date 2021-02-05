import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { FaviconComponent } from './favicon/favicon.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { LogInComponent } from './log-in/log-in.component';
import { NgModule } from '@angular/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

const routes: Routes = [
    { path: '', component: LogInComponent },
    { path: '**', component: LogInComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'about', component: AboutComponent },
    { path: 'favicon', component: FaviconComponent },
    { path: 'logo', component: LogoComponent },
    { path: 'user', component: UserComponent },
    { path: 'navmenu', component: NavMenuComponent },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
    { path: 'special', loadChildren: () => import('./special/special.module').then(m => m.SpecialModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
