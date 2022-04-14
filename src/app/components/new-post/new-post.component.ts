import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from 'src/app/BlogPost';
import { PostService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  post = {} as BlogPost;
  querySub: any;

  constructor(
    private _posts: PostService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

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

  formSubmit(myForm: any) {
    this.post.isPrivate = false;
    this.post.postDate = new Date().toISOString();
    this.post.postedBy = 'BTI425 Student';
    this.post.views = 0;
    if (myForm.value['formTitle']) {
      this.post.title = myForm.value['formTitle'];
    }
    if (myForm.value['formFeaturedImage']) {
      this.post.featuredImage = myForm.value['formFeaturedImage'];
    }
    if (myForm.value['formPost']) {
      this.post.post = myForm.value['formPost'];
    }
    if (myForm.value['formCategory']) {
      this.post.category = myForm.value['formCategory'];
    }
    if (myForm.value['formTags']) {
      this.post.tags = myForm.value['formTags']
        .split(',')
        .map((tag: any) => tag.trim());
    }
    this._posts.newPost(this.post).subscribe((data) => {
      console.log(data);
    });
    this._router.navigate(['admin']);
  }
}
