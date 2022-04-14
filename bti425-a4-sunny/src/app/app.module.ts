import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/post/post.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CardComponent } from './components/card/card.component';
import { SearchWidgetComponent } from './components/search-widget/search-widget.component';
import { LastestPostsWidgetComponent } from './components/lastest-posts-widget/lastest-posts-widget.component';
import { CategoriesWidgetComponent } from './components/categories-widget/categories-widget.component';
import { TagsWidgetComponent } from './components/tags-widget/tags-widget.component';
import { PostDataComponent } from './components/post-data/post-data.component';
import { PagingComponent } from './components/paging-component/paging-component.component';
import { FooterPostsComponent } from './components/footer-posts/footer-posts.component';
import { FormsModule } from '@angular/forms';
import { PostsTableComponent } from './components/posts-table/posts-table.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { NewPostComponent } from './components/new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    PostComponent,
    PageNotFoundComponent,
    CardComponent,
    SearchWidgetComponent,
    LastestPostsWidgetComponent,
    CategoriesWidgetComponent,
    TagsWidgetComponent,
    PostDataComponent,
    PagingComponent,
    FooterPostsComponent,
    PostsTableComponent,
    EditPostComponent,
    NewPostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
