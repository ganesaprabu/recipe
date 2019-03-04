import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../Recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  toAddNew(){
    this.router.navigate(['/recipe','new']);
  }
}
