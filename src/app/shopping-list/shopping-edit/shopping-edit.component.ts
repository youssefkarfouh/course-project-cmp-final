import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() itemEmiter = new EventEmitter<Ingredient>();

  newIngredient: Ingredient;

  constructor() {}

  ngOnInit() {}

  addIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
    this.newIngredient = { name: name.value, amount: Number(amount.value) };

    this.itemEmiter.emit(this.newIngredient)
  }
}
