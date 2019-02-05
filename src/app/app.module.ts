import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';

// Custom Directive
import { BasicHighlightDirective } from './directive/basicHighlight.directive';
import { RendererHighlightDirective } from './directive/renderer-highlight.directive';
import { EventlistenerHighlightDirective } from './directive/eventlistener-highlight.directive';
import { HostBindingHighlightDirective } from './directive/hostBinding-highlight.directive';
import { AdvancedDirective } from './directive/advanced.directive';
import { StructuralDirective } from './directive/structural.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    BasicHighlightDirective,
    RendererHighlightDirective,
    EventlistenerHighlightDirective,
    HostBindingHighlightDirective,
    AdvancedDirective,
    StructuralDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
