import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];
  constructor(private shoppingService: ShoppingService) {

  }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
  }

  selectedItem(index: number) {
    console.log(index);
    this.shoppingService.selectedIndexSubscribe.next(index);
  }
}
