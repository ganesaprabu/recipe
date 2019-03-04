import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe(
      (param: Params) => {
        console.log(param['name']);
      }
    );
  }

}
