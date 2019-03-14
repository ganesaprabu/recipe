import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingService } from '../shopping.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shopFormref') shopFormref: NgForm;
  flag: boolean = true;
  ingredient: Ingredient;
  editMode = false;
  selectedIndex: number;
  subscription: Subscription;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.selectedIndexSubscribe.subscribe(
      (index: number) => {
        const ingredient = this.shoppingService.getIngredient(index) ;
        this.shopFormref.setValue({
          name: ingredient.name,
          amount: ingredient.amount
        });
        this.selectedIndex = index;
        this.editMode = true;
      },
      (error: Error) =>{
        console.log(error);
      }
    );
  }

  onSubmitForm() {
    this.ingredient = {
      name: this.shopFormref.value.name,
      amount: this.shopFormref.value.amount
    };
    if(this.editMode) {
      this.shoppingService.updateIngredient(this.ingredient, this.selectedIndex);
    } else {
      this.shoppingService.addIngredient(this.ingredient);
    }
    this.clear();
  }

  clear() {
    this.editMode = false;
    this.shopFormref.reset();
  }

  delete () {
    this.shoppingService.deleteIngredient(this.selectedIndex);
    this.clear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
