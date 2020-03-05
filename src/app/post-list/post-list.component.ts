import { IBlogPost } from "./types";
import { Component, OnInit } from "@angular/core";
import { PostListService } from "./post-list.service";

@Component({
  selector: "post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.sass"]
})
export class PostListComponent implements OnInit {
  public blogPosts: IBlogPost[];
  public displayedColumns = ["id", "title", "userId"];

  constructor(private postListService: PostListService) {}

  getBlogPosts() {
    this.postListService
      .getPostsList()
      .subscribe(res => (this.blogPosts = res));
  }

  ngOnInit() {
    this.getBlogPosts();
  }

  onRowClicked(row) {
    console.log("Row clicked: ", row);
  }
}
