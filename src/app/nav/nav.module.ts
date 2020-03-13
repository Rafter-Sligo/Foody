import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule, RouterModule],
  declarations: [NavComponent],
  exports: [NavComponent]
})
export class NavbarComponentModule {}
