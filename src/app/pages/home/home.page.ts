import { Component, OnInit } from '@angular/core';
import { Recipes } from '../../shared/Recipes';
import { RecipesService } from '../../shared/recipes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  Recipes = [];

  constructor(
    private recipeService: RecipesService
  ) { }

  ngOnInit() {
    this.gatherRecipes();
    let recipeBank = this.recipeService.getRecipes();
    recipeBank.snapshotChanges().subscribe(res => {
      this.Recipes = [];
      res.forEach(dish => {
        let a = dish.payload.toJSON();
        a['$key'] = dish.key;
        this.Recipes.push(a as Recipes);
      })
    })
  }

  gatherRecipes() {
    this.recipeService.getRecipes().valueChanges().subscribe(res => {
      console.log('response received:', res);
    })
  }

  deleteRecipe(id) {
    this.recipeService.deleteRecipe(id);
  }

}
