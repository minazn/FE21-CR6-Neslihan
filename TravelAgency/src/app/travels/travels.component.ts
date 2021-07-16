import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {
  travels = products;
  constructor() { }

  ngOnInit(): void {
  }

}
