import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../shared/recipes.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.page.html',
  styleUrls: ['./recipe-list.page.scss'],
})

export class RecipeListPage implements OnInit {

  recipeForm: FormGroup;

  constructor(
    private recipeService: RecipesService,
    private router: Router,
    private recipeformbuilder: FormBuilder

  ) {}

  ngOnInit() {
    this.recipeForm = this.recipeformbuilder.group({
      title: [''],
      foodcategory: [''],
      foodlink: [''],
      notes: ['']
    })
  }

  submitNewRecipe = () => {
    this.recipeService.addRecipe(this.recipeForm.value).then(res => {
      console.log('checking...:', res)
      this.recipeForm.reset();
      this.router.navigate(['/home']);
    }).catch(err => console.log('There was an error submitting:', err));
  }

}
