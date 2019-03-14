import { Recipe } from './Recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Injectable({providedIn: 'root'})
export class RecipeService {
    private recipes: Recipe[] = [];
    selectedRecipe = new EventEmitter<Recipe>();
    constructor() {
       this.recipes.push(
           new Recipe(
             'Ford',
             'Ford Automotive',
             'https://cdn.pixabay.com/photo/2014/03/19/14/50/ford-290615_960_720.jpg',
             [new Ingredient('Gear', 1), new Ingredient('Tyre', 4)]));
       this.recipes.push(
           new Recipe(
             'Chevrolet',
             'Chevrolet car',
             'https://cdn.pixabay.com/photo/2018/03/23/09/15/chevrolet-3253172_960_720.png',
             [new Ingredient('Engine', 1), new Ingredient('Door', 4)]));
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(recipeName: string): Recipe {
      let recip;
      this.recipes.forEach( (recipe: Recipe) => {
        if (recipe.name === recipeName) {
          recip = recipe;
        }
      });
      return recip;
    }
}
