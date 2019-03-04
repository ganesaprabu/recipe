import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../Recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService,
              private shoppingService: ShoppingService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.selectedRecipe = this.recipeService.getRecipe(param['name']);
      }
    );
  }

  toShoppingList() {
    this.shoppingService.addIngredients(this.selectedRecipe.ingredients);
  }
}
