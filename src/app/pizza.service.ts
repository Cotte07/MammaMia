import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private selectedIngredients = new BehaviorSubject<Pizza[]>([]);
  selectedIngredients$ = this.selectedIngredients.asObservable();

  // Base de datos de ingredientes con calorías
  private ingredients: Pizza[] = [
    // Masas
    { id: 1, type: 'masa', name: 'Masa Delgada', calories: 200, imageUrl: 'url-masa-delgada' },
    { id: 2, type: 'masa', name: 'Masa Gruesa', calories: 300, imageUrl: 'url-masa-gruesa' },
    { id: 3, type: 'masa', name: 'Masa Integral', calories: 250, imageUrl: 'url-masa-integral' },
    // Quesos
    { id: 4, type: 'queso', name: 'Queso Mozarella', calories: 250, imageUrl: 'url-mozarella' },
    { id: 5, type: 'queso', name: 'Queso Cheddar', calories: 300, imageUrl: 'url-cheddar' },
    { id: 6, type: 'queso', name: 'Queso Parmesano', calories: 280, imageUrl: 'url-parmesano' },
    { id: 7, type: 'queso', name: 'Queso Azul', calories: 270, imageUrl: 'url-azul' },
    // ... Añadir el resto de ingredientes con sus calorías
  ];

  selectIngredient(ingredient: Pizza) {
    const current = this.selectedIngredients.value;
    // Eliminar ingrediente anterior del mismo tipo si existe
    const filtered = current.filter(ing => ing.type !== ingredient.type);
    // Añadir nuevo ingrediente
    this.selectedIngredients.next([...filtered, ingredient]);
  }

  getSelectedIngredients(): Pizza[] {
    return this.selectedIngredients.value;
  }

  getIngredientsByType(type: string): Pizza[] {
    return this.ingredients.filter(ing => ing.type === type);
  }

  getTotalCalories(): number {
    return this.selectedIngredients.value.reduce((total, ing) => total + ing.calories, 0);
  }

  clearSelection() {
    this.selectedIngredients.next([]);
  }
}
