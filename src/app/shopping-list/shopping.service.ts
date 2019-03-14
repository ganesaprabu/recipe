import { Ingredient } from '../shared/Ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingService {
    private ingredients: Ingredient[] = [];
    selectedIndexSubscribe = new Subject<number>();

    getIngredients() {
        return this.ingredients;
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    addIngredients(ingredients: Ingredient[]) {
      this.ingredients.push(...ingredients);
    }

    updateIngredient(ingredient: Ingredient, index: number) {
      this.ingredients[index] = ingredient;
    }

    deleteIngredient(index: number) {
      this.ingredients.splice(index, 1);
    }
}
