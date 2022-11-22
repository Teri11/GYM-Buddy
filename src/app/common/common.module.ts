import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


const components:any[] =[
  NavbarComponent,
  FooterComponent,
]

@NgModule({
  declarations: [ ...components],
  imports: [
    AngularCommonModule 
  ],
  exports: [
    ...components
  ]
})
export class CommonModule { }
