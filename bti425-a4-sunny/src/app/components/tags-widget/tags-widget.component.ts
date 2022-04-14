import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-tags-widget',
  templateUrl: './tags-widget.component.html',
  styleUrls: ['./tags-widget.component.css'],
})
export class TagsWidgetComponent implements OnInit {
  tags: Array<string> = [];
  errorMsg = '';

  constructor(private posts: PostService) {}

  ngOnInit(): void {
    this.posts.getTags().subscribe(
      (data) => {
        this.tags = data;
      },
      (err) => {
        this.errorMsg = 'error getting categories';
      }
    );
  }
}
