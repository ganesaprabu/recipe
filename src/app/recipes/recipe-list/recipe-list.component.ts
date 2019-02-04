import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  @Output()
  itemEmitter =  new EventEmitter<Recipe>();

  constructor() {
    const rec1 = new Recipe('Ford', 'Ford Automotive Dosa', 'https://cdn.pixabay.com/photo/2018/10/27/23/19/ford-3777615_960_720.jpg');
    const rec2 = new Recipe('Chevrolet', 'Chevrolet car', 'https://cdn.pixabay.com/photo/2014/05/06/19/24/camaro-339169_960_720.jpg');
    this.recipes.push(rec1);
    this.recipes.push(rec2);
  }

  ngOnInit() {
  }

  itemSelected(recipe: Recipe) {
    this.itemEmitter.emit(recipe);
  }

}
