import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlogPost } from './types'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostListService {
  private postsResourceUrl = 'http://localhost:4001/posts'

  constructor(
    private http: HttpClient
  ) { }

  getPostsList() : Observable<IBlogPost[]> {
    return this.http.get<IBlogPost[]>(this.postsResourceUrl)
  }
}
