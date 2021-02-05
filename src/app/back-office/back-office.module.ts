import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { FaviconComponent } from './favicon/favicon.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { BackOfficeRoutingModule } from './back-office-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';


@NgModule({
  declarations: [UserComponent, AboutComponent, FaviconComponent, FooterComponent, NavbarComponent, LogoComponent, LogInComponent, NavMenuComponent],
  imports: [
    CommonModule,
    BackOfficeRoutingModule
  ]
})
export class BackOfficeModule { }
