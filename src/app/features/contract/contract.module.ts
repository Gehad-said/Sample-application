import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { TreatySlipComponent } from './treaty-slip/treaty-slip.component';
import { MatButtonModule } from '@angular/material/button';
import { CreateContractComponent } from './create-contract/create-contract.component';


@NgModule({
  declarations: [TreatySlipComponent, CreateContractComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    MatButtonModule
  ],
  exports: [TreatySlipComponent],
})
export class ContractModule { }
