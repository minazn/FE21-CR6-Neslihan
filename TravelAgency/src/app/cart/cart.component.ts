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
  total:any; //I tried number, but didnt work
  discount: any; //same here
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
    let sum = this.CS.getTotal();
    if (sum>200){
      this.total = (sum*0.9).toFixed(2);
      this.discount = (sum - this.total).toFixed(2);
    }else if(sum>500){
      this.total=(sum*0.8).toFixed(2);
      this.discount=(sum-this.total).toFixed(2);
    }else{
      this.total=sum;
      this.discount=0;
    }
  
  }

  onSubmit(customerData:any) {
    console.warn('Your order has been submitted', customerData); 
    this.items = this.CS.clearCart(); 
    this.checkoutForm.reset();
  
  }

}
