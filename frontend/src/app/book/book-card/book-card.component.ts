import { Component, Input } from '@angular/core';
import { Book } from 'src/app/data/book';
import { CartService } from 'src/app/service/cart.service'; 

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() book!: Book; 

  constructor(private cartService: CartService) {} 
  addToCart(book: Book) {
    this.cartService.addToCart(book);
    alert(book.title + " has been added to Cart!");
  }
}
