import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCartPageComponent } from './book-cart-page.component';

describe('BookCartPageComponent', () => {
  let component: BookCartPageComponent;
  let fixture: ComponentFixture<BookCartPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookCartPageComponent]
    });
    fixture = TestBed.createComponent(BookCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
