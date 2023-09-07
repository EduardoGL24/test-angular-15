import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Eduardo García';

  constructor(private router: Router) { }

  isLoginPage(): boolean {
    const currentUrl = this.router.url;
    return currentUrl === '/';
  }

}
