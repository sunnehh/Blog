import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/app/BlogPost';
import { PostService } from 'src/app/services/post-service.service';
import blogData from '../../blogData.json';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogPosts: Array<BlogPost> = [];
  errorMsg: string = '';

  public page: number = 1;
  public tag: string = '';
  public category: string = '';
  public querySub: any = '';

  constructor(
    private _postService: PostService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.querySub = this._route.queryParams.subscribe((params) => {
      if (params['tag']) {
        this.tag = params['tag'];
        this.category = '';
      } else {
        this.tag = '';
      }
      if (params['category']) {
        this.category = params['category'];
        this.tag = '';
      } else {
        this.category = '';
      }
      this.getPage(+params['page'] || 1);
    });
  }

  getPage(num: number) {
    this._postService.getPosts(num, this.tag, this.category).subscribe(
      (data) => {
        this.blogPosts = data;
        this.page = num;
      },
      (err) => {
        this.errorMsg = 'error getting page';
      }
    );
  }

  ngOnDestroy() {
    if (this.querySub) this.querySub.unsubscribe();
  }
}
