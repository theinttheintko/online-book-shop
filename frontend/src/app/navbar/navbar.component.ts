import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchQuery: string = '';

  constructor(
    private searchService: SearchService,
    public cartservice: CartService 
  ) {}

  onSearch() {
    this.searchService.changeQuery(this.searchQuery);
  }
}
