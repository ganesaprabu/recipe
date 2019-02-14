import { Ingredient } from '../shared/Ingredient.model';

export class ShoppingService {
    private ingredients: Ingredient[] = [];
    
    getIngredients() {
        return this.ingredients;
    }

    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);        
    }
}