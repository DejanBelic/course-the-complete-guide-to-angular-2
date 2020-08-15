import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('This is a recipe', 'Recipe description', 'https://i2.wp.com/www.primaverakitchen.com/wp-content/uploads/2019/03/Garlic-Butter-Baked-Chicken-Breast-Primavera-Kitchen-2.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
