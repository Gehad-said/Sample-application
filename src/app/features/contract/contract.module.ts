import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { TreatySlipComponent } from './treaty-slip/treaty-slip.component';
import { MatButtonModule } from '@angular/material/button';
import { CreateContractComponent } from './create-contract/create-contract.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [TreatySlipComponent, CreateContractComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatSelectModule
    
  ],
  exports: [TreatySlipComponent,CreateContractComponent],
})
export class ContractModule { }
