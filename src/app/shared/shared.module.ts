import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { GlobalHeaderComponent } from './components/global-header/global-header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HelpComponent } from './components/help/help.component';
import { IconComponent } from './components/utility/icon/icon.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GlobalHeaderComponent,
    SpinnerComponent,
    HelpComponent,
    IconComponent,
    StepperComponent,
    InputTextComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    GlobalHeaderComponent,
    SpinnerComponent,
    HelpComponent,
    IconComponent,
    InputTextComponent
  ]
})
export class SharedModule { }
