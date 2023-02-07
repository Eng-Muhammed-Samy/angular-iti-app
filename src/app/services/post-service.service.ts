import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private postsUrl =  environment.postsUrl;
  constructor(private http:HttpClient) { }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.postsUrl);
  }
  getPostById(id: number): Observable<Post>{
    return this.http.get<Post>(`${this.postsUrl}/${id}`);
  }
}
