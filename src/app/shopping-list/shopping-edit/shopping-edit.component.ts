import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') name: ElementRef;
  @ViewChild('inputAmount') amount: ElementRef;

  @Output()
  addEmitter = new EventEmitter<Ingredient>();
  ingredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    this.ingredient = {
      name: this.name.nativeElement.value,
      amount: this.amount.nativeElement.value
    };

    this.addEmitter.emit(this.ingredient);
  }
}
