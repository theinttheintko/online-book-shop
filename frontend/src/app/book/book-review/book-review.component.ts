import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.scss']
})
export class BookReviewComponent implements OnInit {

  reviews = [
    { user: 'Aung Aung', rating: 5, comment: 'တကယ်ကောင်းတဲ့ စာအုပ်ပါ၊ အားလုံးဖတ်သင့်တယ်။' },
    { user: 'Su Su', rating: 4, comment: 'ဇာတ်အိမ်က တော်တော် စိတ်ဝင်စားဖို့ကောင်းတယ်!' },
    { user: 'Kyaw Kyaw', rating: 3.5, comment: 'အလယ်နားမှာ နည်းနည်း ပျင်းဖို့ကောင်းပေမယ့် အဆုံးသတ်က ရှယ်ပဲ။' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
    
}