import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Receta de Prueba', 'Una receta simple', 'http://recetasdecocina.elmundo.es/wp-content/uploads/2017/12/receta-tournedo-ternera.jpg'),
    new Recipe('Otra receta de prueba', 'Una receta un poco más complicada', 'http://www.annarecetasfaciles.com/files/patatas-rellenas-de-carne-portada-815x458.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeWasSelected.emit(recipe);
  }

}
