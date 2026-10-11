import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../../app-config.service';
import {AuthService} from '../authService';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  imports: [
    FormsModule
  ],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login implements OnInit {

  username = '';
  password = '';

  constructor(private http: HttpClient,
              private config: AppConfigService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.config.loadAppConfig();
  }

  onSubmit() {
    const url = this.config.apiUrl;

    this.http.post(url + 'login',
        {username: this.username, password: this.password}, { observe: 'response' })
        .subscribe(() => {
      this.authService.login();
      this.router.navigate(['/profile']);
    })
  }
}
