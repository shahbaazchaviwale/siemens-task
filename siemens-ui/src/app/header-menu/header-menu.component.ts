import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  public activeMenu: string;
  constructor() { }

  ngOnInit() {
    this.activeMenu = 'home'
  }

  setMenu(manuItem){
    this.activeMenu = manuItem;
  }


}
