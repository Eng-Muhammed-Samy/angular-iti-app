import { PostServiceService } from './../../services/post-service.service';
import { User } from './../../interfaces/user.interface';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId!: number;
  user!:User
  posts!: Array<Post>
  userPosts !: Array<Post>
  constructor(private userService: UserService, private route: ActivatedRoute, private postService: PostServiceService) {
    
 }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.userId = param['id'])

    this.userService.getUserById(this.userId).subscribe(user => this.user = user);

    this.postService.getPosts().subscribe(res => {
      
      this.userPosts = res.filter(post => post.userId == this.userId)
      console.log(this.userPosts);
    })

   
  }

}
