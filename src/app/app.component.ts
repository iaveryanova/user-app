import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/service/user.service';
import { IUser } from './shared/model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  users: IUser[] = [];
  selectedUser!: IUser;

  constructor (private userService: UserService) {

  }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  public getUserById(id: number) {
    this.userService.getUserById(id).subscribe(user => {
      this.selectedUser = user;
    })
  }
}
