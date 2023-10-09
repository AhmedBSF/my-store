import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  fullName: string = '';
  price: number = 0;

  ngOnInit(): void {
    let orderInfo = JSON.parse(localStorage.getItem('orderInfo') || '{}');
    this.fullName = orderInfo.name;
    this.price = Number(orderInfo.price);
  }
}
