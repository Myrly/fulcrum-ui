import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TestComponent} from '../../../ngx-fulcrum-ui/src/lib/components/test/test.component';
import {Theme, ThemeService} from 'ngx-fulcrum-ui';
import {NgForOf} from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  themes: Theme[] = [];

  constructor(
    private theme: ThemeService,
  ) {
  }

  ngOnInit(): void {
    this.themes = this.theme.getThemes();
    this.theme.setTheme('fulcrum-light');
  }

  changeTheme(theme: Theme): void {
    this.theme.setTheme(theme.name);
  }

}
