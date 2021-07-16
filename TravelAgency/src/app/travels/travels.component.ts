import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CaartService } from '../caart.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {

  travels = products;
  product:any;

  constructor(private CS:CaartService) { }

  addToCart(product:any){
    window.alert('Your product has been added to the cart!');
    this.CS.addToCart(product);
  }

  ngOnInit(): void {
  }

}
