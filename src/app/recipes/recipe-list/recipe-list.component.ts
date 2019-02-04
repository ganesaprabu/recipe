import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor() {
    const rec1 = new Recipe('Dosa', 'Plain Dosa', 'https://cdn.pixabay.com/photo/2016/10/25/13/42/indian-1768906_960_720.jpg');
    const rec2 = new Recipe('Idly', 'Idly Sambar', 'https://cdn.pixabay.com/photo/2014/12/22/12/22/food-577224_960_720.jpg');
    this.recipes.push(rec1);
    this.recipes.push(rec2);
  }

  ngOnInit() {
  }

}
