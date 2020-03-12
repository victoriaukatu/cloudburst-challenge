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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public formbuilder: FormBuilder
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.recipeService.getSingleRecipe(this.id).valueChanges().subscribe(res => {
    this.updateRecipeForm.setValue(res);
    });
  }

  // Display form to edit recipe entry
  ngOnInit() {
    this.updateRecipeForm = this.formbuilder.group({
      title: [''],
      foodcategory: [''],
      foodlink: [''],
      notes: ['']
    })
    console.log(this.updateRecipeForm.value)
  }

  // This function runs the editRecipe function using the information entered into the form and then
  // directs the user back to the home page
  updateForm() {
    this.recipeService.editRecipe(this.id, this.updateRecipeForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }

}
