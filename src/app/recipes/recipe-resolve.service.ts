import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './Recipe.model';
import { Observable } from 'rxjs';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})


export class RecipeResolveService implements Resolve<Recipe>{

  constructor(private recipeService: RecipeService) { }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot,
          routerStateSnapshot: RouterStateSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {
    return this.recipeService.getRecipe(activatedRouteSnapshot.params['name']);
  }
}
