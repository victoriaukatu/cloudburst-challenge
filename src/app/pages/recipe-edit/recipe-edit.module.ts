import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeEditPageRoutingModule } from './recipe-edit-routing.module';

import { RecipeEditPage } from './recipe-edit.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RecipeEditPageRoutingModule
  ],
  declarations: [RecipeEditPage]
})
export class RecipeEditPageModule {}
