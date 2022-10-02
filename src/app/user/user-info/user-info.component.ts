import { Component, OnInit } from '@angular/core';
import { IUser } from '../../shared/model/user.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() user!: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
