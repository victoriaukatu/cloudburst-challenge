import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeListPageRoutingModule } from './recipe-list-routing.module';

import { RecipeListPage } from './recipe-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeListPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RecipeListPage]
})
export class RecipeListPageModule {}
