import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/data/book';
import { BookService } from 'src/app/service/book.service';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-boo-list',
  templateUrl: './boo-list.component.html',
  styleUrls: ['./boo-list.component.scss']
})
export class BooListComponent implements OnInit {
  allBooks: Book[] = [];
  filteredBooks: Book[] = [];

  constructor(
    private bookservice: BookService, 
    private searchService: SearchService 
  ) {}

  ngOnInit(): void {
    this.bookservice.$books.subscribe(data => {
      this.allBooks = data;
      this.filteredBooks = data;
    });

    this.searchService.currentQuery.subscribe(query => {
      this.filteredBooks = this.allBooks.filter(book => 
        book.title?.toLowerCase().includes(query.toLowerCase())
      );
    });
  }
}