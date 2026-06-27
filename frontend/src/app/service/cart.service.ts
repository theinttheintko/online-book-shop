import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../data/book';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Book[] = [];

  private cartSubject = new BehaviorSubject<Book[]>([]);
  $cart = this.cartSubject.asObservable();

  addToCart(book: Book) {
    this.items.push(book);
    this.cartSubject.next(this.items); 
    console.log("Successfully added to cart:", this.items);
  }

  getTotalItems(): number {
    return this.items.length; 
  }

  getTotalPrice(): number {
    return this.items.reduce((total, book) => total + (book.price || 0), 0);
  }

  clearCart() {
    this.items = [];
    this.cartSubject.next(this.items); 
  }
}
