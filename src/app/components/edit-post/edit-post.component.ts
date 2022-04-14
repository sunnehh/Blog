import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from 'src/app/BlogPost';
import { PostService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  post!: BlogPost;
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

    this._posts.updatePostById(this.post._id, this.post).subscribe((data) => {
      console.log(data);
    });
    this._router.navigate(['admin']);
  }

  deletePost() {
    this._posts.deletePostById(this.post._id).subscribe((data) => {
      console.log(data);
    });
    this._router.navigate(['admin']);
  }
}
