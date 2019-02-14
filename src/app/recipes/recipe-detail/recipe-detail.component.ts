import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../Recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService, private shoppingService: ShoppingService) {
    console.log('Inside cons');
  }

  ngOnInit() {
  }

  toShoppingList() {
    this.shoppingService.addIngredients(this.selectedRecipe.ingredients);
  }
}
