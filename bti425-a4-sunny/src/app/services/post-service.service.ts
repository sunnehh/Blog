import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { BlogPost } from '../BlogPost';
import { category } from '../Categories';

const perPage = 6;

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private host: string = 'https://sunny-blog-api.herokuapp.com';
  constructor(private http: HttpClient) {}

  getPosts(
    page: number,
    tag?: string,
    category?: string
  ): Observable<BlogPost[]> {
    let query: string =
      this.host + '/api/posts?page=' + page + '&perPage=' + perPage;
    if (tag != '' && tag != undefined) {
      query += '&tag=' + tag;
    }
    if (category != '' && category != undefined) {
      query += '&category=' + category;
    }
    console.log(query);
    return this.http.get<BlogPost[]>(query);
  }

  getPostsbyId(id: string): Observable<BlogPost> {
    let query: string = this.host + '/api/posts/' + id;
    return this.http.get<BlogPost>(query);
  }

  getCategories(): Observable<category[]> {
    let query: string = this.host + '/api/categories';
    return this.http.get<category[]>(query);
  }

  getTags(): Observable<string[]> {
    let query: string = this.host + '/api/tags';
    return this.http.get<string[]>(query);
  }

  getAllPosts(): Observable<BlogPost[]> {
    let query =
      this.host + '/api/posts?page=1&perPage=' + Number.MAX_SAFE_INTEGER;
    return this.http.get<BlogPost[]>(query);
  }

  newPost(data: BlogPost): Observable<any> {
    let query = this.host + '/api/posts';
    return this.http.post<any>(query, data);
  }

  updatePostById(id: string, data: BlogPost): Observable<any> {
    let query = this.host + '/api/posts/' + id;
    return this.http.put<any>(query, data);
  }

  deletePostById(id: string): Observable<any> {
    let query = this.host + '/api/posts/' + id;
    return this.http.delete<any>(query);
  }
}
