import { Ingredient } from '../shared/Ingredient.model';

export class Recipe {
    public name: string;
    public desc: string;
    public imagePath: string;
    ingredients: Ingredient[];

    constructor(name: string, desc: string, imagepath: string, ingredients: Ingredient[]){
        this.name = name;
        this.desc = desc;
        this.imagePath = imagepath;
        this.ingredients = ingredients;
    }
}
