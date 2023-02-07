import { PostServiceService } from './../../services/post-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  id!: number;
  post!: Post;
  constructor(private postService: PostServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.params.subscribe(param => this.id = param['id']));
    this.postService.getPostById(this.id).subscribe(res => this.post = res)
  }

}
