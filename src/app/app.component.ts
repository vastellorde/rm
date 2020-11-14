import {Component, OnInit} from '@angular/core';
import {AuthService} from './lazy-components/auth/services/auth.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  isAdmin = false;
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.isLoggedIn$
      .pipe(
        switchMap(res => {
          this.isLoggedIn = res;
          return this.authService.getUser();
        })
      )
      .subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
