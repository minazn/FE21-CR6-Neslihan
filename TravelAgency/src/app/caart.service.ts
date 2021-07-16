//sorry for the typing error (caart)

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaartService {
  items:any = [];
  constructor() { }

  addToCart(product:any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getTotal(){
    let sum = 0;
    for (let val of this.items){
      sum += val.price;
    }
    return sum;
  }

  clearCart() {
    this.items = [];
    return this.items;

  }
}
