import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = "Ahmed's Store";
  links: { label: string; url: string }[] = [
    { label: '🛍', url: '/products' },
    { label: '🛒', url: '/cart' },
  ];
}
