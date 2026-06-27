import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-book-cart-page',
  templateUrl: './book-cart-page.component.html',
  styleUrls: ['./book-cart-page.component.scss']
})
export class BookCartPageComponent implements OnInit {

  constructor(
    public cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCheckout(): void {
    console.log("Checkout button was clicked!"); 
    
    this.cartService.clearCart();
    console.log("Cart cleared."); 
    alert('Thank you! Your purchase was successful.');
    
    this.router.navigate(['/home']).then(result => {
      console.log("Navigation result: ", result); 
    });
  }

  get totalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  get totalItems(): number {
    return this.cartService.getTotalItems();
  }
}