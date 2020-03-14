import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedFoodsPage } from './saved-foods.page';

const routes: Routes = [
  {
    path: '',
    component: SavedFoodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedFoodsPageRoutingModule {}
