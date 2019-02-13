import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  flag: boolean = true;

  @ViewChild('inputName') name: ElementRef;
  @ViewChild('inputAmount') amount: ElementRef;
  @ViewChild('inputDesc') desc: ElementRef;

  ingredient: Ingredient;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  addIngredient() {
    this.ingredient = {
      name: this.name.nativeElement.value,
      amount: this.amount.nativeElement.value,
      desc: this.desc.nativeElement.value
    };

    this.shoppingService.addIngredients(this.ingredient);
  }
}
