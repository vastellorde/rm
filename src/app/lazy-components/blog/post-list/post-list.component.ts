import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  pages = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

}
