import { Component, OnInit } from '@angular/core';
import { CaartService } from '../caart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items:any;
  total:any;
 checkoutForm;

 
  constructor(private CS:CaartService, private FB: FormBuilder) { 
    this.checkoutForm = this.FB.group({
      name: '',
      address: '',
      email: ""
    });
   }

  ngOnInit(): void {
    this.items = this.CS.getItems();
    this.total = this.CS.getTotal();
  }

  onSubmit(customerData:any) {
    console.warn('Your order has been submitted', customerData); 
    this.items = this.CS.clearCart(); 
    this.checkoutForm.reset();
  
  }

}
