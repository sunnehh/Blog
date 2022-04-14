import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/Categories';
import { PostService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-categories-widget',
  templateUrl: './categories-widget.component.html',
  styleUrls: ['./categories-widget.component.css'],
})
export class CategoriesWidgetComponent implements OnInit {
  categories: Array<category> = [];
  errorMsg = '';
  constructor(private posts: PostService) {}

  ngOnInit(): void {
    this.posts.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (err) => {
        this.errorMsg = 'error getting categories';
      }
    );
  }
}
