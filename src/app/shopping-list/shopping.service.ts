import { Ingredient } from '../shared/Ingredient.model';

export class ShoppingService {
    private ingredients: Ingredient[] = [];

    getIngredients() {
        return this.ingredients;
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    addIngredients(ingredients: Ingredient[]) {
      this.ingredients.push(...ingredients);
    }
}
