import { Component, OnInit } from '@angular/core';
import { IMenuEntry } from './types'

@Component({
  selector: 'app-main-menu',
  templateUrl: './app-main-menu.component.html',
  styleUrls: ['./app-main-menu.component.sass']
})
export class AppMainMenuComponent implements OnInit {

  public menuEntries : IMenuEntry[]

  constructor() { }

  ngOnInit() {
    this.menuEntries = [
      { title: 'dashboard', path: '/'},
      { title: 'blog posts', path: '/posts'}
    ]
  }

}
