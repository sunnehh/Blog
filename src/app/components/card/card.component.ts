import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/BlogPost';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() post!: BlogPost;

  constructor() {}

  ngOnInit(): void {}
}
