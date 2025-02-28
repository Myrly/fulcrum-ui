import { Injectable, inject } from '@angular/core';
import {Theme} from '../models/theme.model';
import * as themes from '../themes';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private availableThemes: Theme[] = Object.values(themes).filter(t => t.name);
  private currentTheme: Theme | null = null;

  public getThemes(): Theme[] {
    return this.availableThemes;
  }

  public getCurrentTheme(): Theme | null {
    return this.currentTheme;
  }

  public setTheme(themeName: string): void {
    const theme = this.availableThemes.find(t => t.name === themeName);
    if (!theme) return;

    this.applyTheme(theme);
    this.currentTheme = theme;
  }

  private applyTheme(theme: Theme): void {
    Object.entries(theme.variables).forEach(([name, value]) => {
      document.documentElement.style.setProperty(`--${name}`, value);
    });
  }
}
