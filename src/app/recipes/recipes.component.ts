import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './Recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  recipeChoosen: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log();
    this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => {
        this.recipeChoosen = recipe;
      }
    );
  }
}
