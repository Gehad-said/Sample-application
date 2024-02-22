import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateContractComponent } from './features/contract/create-contract/create-contract.component';


const routes: Routes = [
  {
    path: '',
    component : CreateContractComponent,pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
