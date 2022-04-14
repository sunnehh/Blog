import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/BlogPost';
import { PostService } from 'src/app/services/post-service.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/Comment';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css'],
})
export class PostDataComponent implements OnInit {
  post!: BlogPost;
  querySub: any;
  comment = {} as Comment;

  constructor(private _posts: PostService, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.querySub = this._route.params.subscribe((params) => {
      this._posts.getPostsbyId(params['id']).subscribe((data) => {
        this.post = data;
      });
    });
  }

  ngOnDestroy() {
    if (this.querySub) this.querySub.unsubscribe();
  }

  submitComment(commentArea: any) {
    this.comment.author = commentArea.value['username'];
    this.comment.comment = commentArea.value['usercomment'];
    this.comment.date = new Date().toISOString();
    // push this comment to the current post

    this.post.comments.push(this.comment);
    // update the current post
    this._posts.updatePostById(this.post._id, this.post).subscribe();
  }
}
