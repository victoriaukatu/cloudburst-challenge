import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'recipe-list',
    loadChildren: () => import('./pages/recipe-list/recipe-list.module').then( m => m.RecipeListPageModule)
  },
  {
    path: 'recipe-details',
    loadChildren: () => import('./pages/recipe-details/recipe-details.module').then( m => m.RecipeDetailsPageModule)
  },
  {
    path: 'recipe-edit',
    loadChildren: () => import('./pages/recipe-edit/recipe-edit.module').then( m => m.RecipeEditPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
