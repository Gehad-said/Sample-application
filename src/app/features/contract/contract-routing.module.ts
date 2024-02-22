import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateContractComponent } from './create-contract/create-contract.component';

const routes: Routes = [
  {
    path: '',
    component: CreateContractComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
