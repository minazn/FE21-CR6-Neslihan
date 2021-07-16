import { Component, OnInit } from '@angular/core';
import { CaartService } from '../caart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items:any;
  total:any;
  constructor(private CS:CaartService) { }

  ngOnInit(): void {
    this.items = this.CS.getItems();
    this.total = this.CS.getTotal();
  }

}
