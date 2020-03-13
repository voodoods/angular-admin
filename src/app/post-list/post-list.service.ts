import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlogPost } from './types'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostListService {
  private postListServiceURL = `${environment.POST_LIST_SERVICE_HOST}/posts`

  constructor(
    private http: HttpClient
  ) { }

  getPostList() : Observable<IBlogPost[]> {
    return this.http.get<IBlogPost[]>(this.postListServiceURL)
  }
}
