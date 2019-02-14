import { Recipe } from './Recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    private recipes: Recipe[] = [];
    selectedRecipe = new EventEmitter<Recipe>();
    constructor() {
       this.recipes.push(new Recipe('Ford', 'Ford Automotive', 'https://cdn.pixabay.com/photo/2014/03/19/14/50/ford-290615_960_720.jpg'));
       this.recipes.push(new Recipe('Chevrolet', 'Chevrolet car', 'https://cdn.pixabay.com/photo/2018/08/28/17/35/chevrolet-3638043_960_720.jpg'));
    }

    getRecipes() {
        return this.recipes.slice();
    }
}