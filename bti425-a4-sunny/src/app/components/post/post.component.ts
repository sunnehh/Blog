import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/BlogPost';
import blogData from '../../blogData.json';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  blogPosts: Array<BlogPost> = blogData;

  constructor() {}

  ngOnInit(): void {}
}
