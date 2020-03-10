import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RecipesService } from '../../shared/recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.page.html',
  styleUrls: ['./recipe-edit.page.scss'],
})
export class RecipeEditPage implements OnInit {
  updateRecipeForm: FormGroup;
  id: any;

  constructor(
    private recipeService: RecipesService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.recipeService.getSingleRecipe(this.id).valueChanges().subscribe(res => {
    this.updateRecipeForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateRecipeForm = this.fb.group({
      title: [''],
      foodcategory: [''],
      foodlink: [''],
      notes: ['']
    })
    console.log(this.updateRecipeForm.value)
  }

  updateForm() {
    this.recipeService.editRecipe(this.id, this.updateRecipeForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }

}
