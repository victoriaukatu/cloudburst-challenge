import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { Recipes } from '../shared/Recipes';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  recipeCollection: AngularFireList<any>;
  singleRecipe: AngularFireObject<any>;

  constructor(private recipeDatabase: AngularFireDatabase) { }


  // This will allow the user to add a new recipe
  addRecipe(food: Recipes) {
    console.log(this.recipeCollection);
    return this.recipeCollection.push({
      title: food.title,
      foodcategory: food.foodcategory,
      foodlink: food.foodlink,
      notes: food.notes
    })
  }

  // This will retrieve the entire list of recipes
  getRecipes = () => {
    this.recipeCollection = this.recipeDatabase.list('/recipes');
    return this.recipeCollection;
  }

  // This will bring the user to where they can edit their recipe
  // editRecipe(id, food: Recipes) {
  //   return this.recipeCollection.update({
  //     title: food.title,
  //     foodcategory: food.foodcategory,
  //     foodlink: food.foodlink,
  //     notes: food.notes
  //   })
  // }

  // This allows users to delete a recipe
  deleteRecipe(id: string) {
    this.singleRecipe = this.recipeDatabase.object('/recipes/' + id);
    this.singleRecipe.remove();
  }


}


