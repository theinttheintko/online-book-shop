import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../service/book.service';
import { CartService } from '../../service/cart.service'; 
import { Book } from 'src/app/data/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent implements OnInit {
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private cartService: CartService 
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.findBookById(id).subscribe((data: any) => {
      this.book = data;
    });
  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
    console.log("Book added to cart successfully:", book.title);
    alert(book.title + " has been added to the cart!");
}
}