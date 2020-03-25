import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VqrPage } from './vqr.page';

const routes: Routes = [
  {
    path: '',
    component: VqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VqrPageRoutingModule {}
