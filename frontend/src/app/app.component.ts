import { Component } from '@angular/core';
import { SearchService } from './service/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-book-shop';

  navbarSearchQuery: string = '';

  constructor(private searchService: SearchService) {}

  onSearch() {
    this.searchService.changeQuery(this.navbarSearchQuery);
  }
}
