import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { GlobalHeaderComponent } from './components/global-header/global-header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HelpComponent } from './components/help/help.component';
import { IconComponent } from './components/utility/icon/icon.component';
import { StepperComponent } from './components/stepper/stepper.component';



@NgModule({
  declarations: [
    GlobalHeaderComponent,
    SpinnerComponent,
    HelpComponent,
    IconComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    GlobalHeaderComponent,
    SpinnerComponent,
    HelpComponent,
    IconComponent
  ]
})
export class SharedModule { }
