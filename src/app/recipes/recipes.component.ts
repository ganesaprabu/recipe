import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './Recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeChoosen: Recipe;


  constructor() { }

  ngOnInit() {
  }

  itemSelected(recipe: Recipe) {
    this.recipeChoosen = recipe;
  }

}
