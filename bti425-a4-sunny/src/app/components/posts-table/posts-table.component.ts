import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/app/BlogPost';
import { PostService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css'],
})
export class PostsTableComponent implements OnInit {
  posts: BlogPost[] = [];
  querySub: any;

  constructor(private _posts: PostService, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._posts.getAllPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
