import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = environment.usersUrl;
  constructor(private http: HttpClient) { }

  getUsers():Observable<Array<User>>{
     return this.http.get<Array<User>>(this.userUrl);
  }

  getUserById(id: number):Observable<User>{
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }

  addUSer(user: any){
    return this.http.post(this.userUrl, user);
  }

  updateUSer(user: any){
    return this.http.put(this.userUrl, user);
  }
  
  deleteUSer(id: number){
    return this.http.delete(`${this.userUrl}/${id}`);
  }
  
}
