import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { LeftpageComponent } from './Components/leftpage/leftpage.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { RightpageComponent } from './Components/rightpage/rightpage.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageComponent,
    LeftpageComponent,
    HomepageComponent,
    RightpageComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    FormsModule,
  ]
})
export class PageModule { }
