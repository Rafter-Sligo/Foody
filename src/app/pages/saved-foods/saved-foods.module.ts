import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NavbarComponentModule } from '../../nav/nav.module';
import { SavedFoodsPageRoutingModule } from './saved-foods-routing.module';

import { SavedFoodsPage } from './saved-foods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedFoodsPageRoutingModule,
    NavbarComponentModule
  ],
  declarations: [SavedFoodsPage]
})
export class SavedFoodsPageModule {}
