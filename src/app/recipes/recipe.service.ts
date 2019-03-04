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
             [new Ingredient('Gear', 1, 'This is Gear'), new Ingredient('Tyre', 4, 'This is Tyre')]));
       this.recipes.push(
           new Recipe(
             'Chevrolet',
             'Chevrolet car',
             'https://cdn.pixabay.com/photo/2018/12/06/12/50/corvette-3859797_960_720.jpg',
             [new Ingredient('Engine', 1, 'This is Engine'), new Ingredient('Door', 4, 'This is Door')]));
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
