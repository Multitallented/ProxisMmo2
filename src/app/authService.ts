import {Service, signal} from '@angular/core';

@Service()
export class AuthService {
  // Using Angular Signals for modern state tracking (or use a BehaviorSubject if on an older version)
  private isLoggedInSignal = signal<boolean>(this.hasToken());

  constructor() {}

  // Helper to check if a valid token exists in storage
  private hasToken(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  // Expose the status as a read-only signal
  get isLoggedIn() {
    return this.isLoggedInSignal.asReadonly();
  }

  login() {
    localStorage.setItem('auth_token', "true");
    this.isLoggedInSignal.set(true);
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.isLoggedInSignal.set(false);
  }
}
