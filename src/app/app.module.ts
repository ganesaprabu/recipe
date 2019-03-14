import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';

// Custom Directive (For Test)
import { BasicHighlightDirective } from './test_directive/basicHighlight.directive';
import { RendererHighlightDirective } from './test_directive/renderer-highlight.directive';
import { EventlistenerHighlightDirective } from './test_directive/eventlistener-highlight.directive';
import { HostBindingHighlightDirective } from './test_directive/hostBinding-highlight.directive';
import { AdvancedDirective } from './test_directive/advanced.directive';
import { StructuralDirective } from './test_directive/structural.directive';

// Custom Directive (Created for this project)
import { DropDownDirective } from './shared/directive/dropdown.directive';

import { DropDownBindDirective } from './shared/directive/dropdown.bind.directive';
import { ShoppingService } from './shopping-list/shopping.service';
import { RoutingModule } from './app.routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


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
    StructuralDirective,

    DropDownBindDirective,
    DropDownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
