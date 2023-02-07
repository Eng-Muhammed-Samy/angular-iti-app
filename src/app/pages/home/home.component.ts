import { UserService } from 'src/app/services/user.service';
import { PostServiceService } from './../../services/post-service.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  posts!:Array<Post>;

  constructor(private postService: PostServiceService, private userService: UserService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: res => this.posts = res,
      error: err => console.error(err)
    })
  }

  addUsers(){
   let user:any = {id:1, name: "ahmed"};
    this.userService.addUSer(user);
  }

  

}
