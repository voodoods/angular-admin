import { IUser } from "./types";
import { Component, OnInit } from "@angular/core";
import { UserListService } from "./user-list.service";

@Component({
  selector: "user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.sass"]
})
export class UserListComponent implements OnInit {
  public userList: IUser[];
  public displayedColumns = ["id", "username", "email"];

  constructor(private userListService: UserListService) {}

  getUsers() {
    this.userListService
      .getUserList()
      .subscribe(res => (this.userList = res));
  }

  ngOnInit() {
    this.getUsers();
  }

  onRowClicked(rowIndex : number) {
    console.log("Row clicked: ", rowIndex);
  }
}
