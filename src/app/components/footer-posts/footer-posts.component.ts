import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/BlogPost';
import { PostService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css'],
})
export class FooterPostsComponent implements OnInit {
  blogPosts: Array<BlogPost> = [];
  errorMsg: string = '';

  constructor(private posts: PostService) {}

  ngOnInit(): void {
    this.posts.getPosts(1).subscribe(
      (data) => {
        this.blogPosts = data.slice(0, 3);
      },
      (err) => {
        this.errorMsg = 'error getting posts!';
      }
    );
  }
}
