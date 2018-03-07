import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private username = '';
  isVisible = false;
  log = [];

  constructor() { }

  ngOnInit() {
  }

  getUsername() {
    return this.username;
  }

  onResetUser() {
    this.username = '';
  }

  togglePasswordButton() {
    this.isVisible = !this.isVisible;
    this.log.push(new Date());
  }
}
