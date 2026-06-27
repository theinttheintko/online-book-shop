import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Book } from '../data/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookSubject: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  $books: Observable<Book[]> = this.bookSubject.asObservable();

  constructor(private http: HttpClient) {
    this.init();
  }

  init() {
    this.getAllBook().subscribe({
      next: data => this.bookSubject.next(data),
      error: err => console.log('Error loading books:', err)
    });
  }

  findBookById(id: number): Observable<Book> {
    return this.$books.pipe(
      map(books => {
        const found = books.find(b => b.id == id);
        if (!found) {
          throw new Error('Book not found');
        }
        return found;
      })
    );
  }

  private getAllBook(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:8080/api/books-list');
  }
}