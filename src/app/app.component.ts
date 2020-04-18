import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: '一棵樹',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: '今天看到一顆整齊的樹'
    },
    {
      title: '雪山',
      imageUrl: 'assets/mountain.jpeg',
      username: '登山愛好者',
      content: '這是一張雪山的照片'
    },
    {
      title: '山地自行車',
      imageUrl: 'assets/biking.jpeg',
      username: '三地',
      content: '一台自行車'
    },
    {
      title: '山地自行車',
      imageUrl: 'assets/biking.jpeg',
      username: '三地',
      content: '一台自行車'
    }
  ];
}
