import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
    private querySource = new BehaviorSubject<string>('');
    currentQuery = this.querySource.asObservable();
    changeQuery(query: string) { this.querySource.next(query); }
}