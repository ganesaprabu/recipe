import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  editMode = false;
  formObj: FormGroup;
  selectedName: string;
  constructor(private routes: ActivatedRoute, private recipeService: RecipeService) { }

  private initForm() {
    let name = '', imageUrl = '', description = '', recipe: Recipe;
    let ingreArray = new FormArray([]);
    if (this.editMode){
      recipe = this.recipeService.getRecipe(this.selectedName);
      name = recipe.name;
      imageUrl = recipe.imagePath;
      description = recipe.desc;

      if(recipe.ingredients){
        console.log(recipe.ingredients);

        for (let ingre of recipe.ingredients) {
          let formgroup = new FormGroup({
            'name': new FormControl(ingre.name) ,
            'amount': new FormControl(ingre.amount)
          });
          ingreArray.push(formgroup);
        }
      }
    }
    this.formObj = new FormGroup({
      'name': new FormControl(name) ,
      'imageUrl': new FormControl(imageUrl),
      'description': new FormControl(description),
      'ingredients': ingreArray
    });
  }

  ngOnInit() {
    this.routes.params.subscribe(
      (param: Params) => {
        console.log(param['name']);
        this.editMode = (param['name'] != null);
        this.selectedName = param['name'];
        this.initForm();
      }
    );
  }

  onSubmit() {
    console.log(this.formObj);
  }

  getControls() {
    return (<FormArray>this.formObj.get('ingredients')).controls;
  }
}
