import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private http = inject(HttpClient);
  private config: any = null;

  loadAppConfig() {
    return firstValueFrom(
      this.http.get('/config.json')
    ).then(data => {
      this.config = data;
    });
  }

  get apiUrl(): string {
    return this.config?.apiUrl;
  }
}
