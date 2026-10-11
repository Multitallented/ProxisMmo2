import {Component, OnInit, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../../app-config.service';
import {Router} from '@angular/router';
import {catchError, of} from 'rxjs';

@Component({
  imports: [
    FormsModule
  ],
  selector: 'app-register',
  styleUrl: './register.scss',
  templateUrl: './register.html',
})
export class Register implements OnInit{
  username = '';
  password = '';
  password2 = '';
  error = signal<string>('');

  constructor(private http: HttpClient, private config: AppConfigService, private router: Router) { }

  ngOnInit(): void {
    this.config.loadAppConfig();
  }

  onSubmit() {
    this.error.set('');

    if (this.username.length < 3 || this.username.length > 20 || !this.username.match(/^[a-zA-Z0-9_]+$/)) {
      this.error.set('Username must be at between 3 and 20 characters long');
      return;
    }

    if (this.password !== this.password2) {
      this.error.set('Passwords do not match');
      return;
    }

    if (this.password.length < 8) {
      this.error.set('Invalid password');
      return;
    }

    const url = this.config.apiUrl;
    this.http.post(url + 'register', {username: this.username, password: this.password})
      .pipe(
        catchError(err => {
          this.error.set(err.error.detail);
          return of(null);
        })).subscribe((data) => {
          if (data) {
            this.router.navigate(['/login']);
          }
    });
  }
}
