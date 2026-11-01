import {Service, signal} from '@angular/core';

@Service()
export class HeaderService {
  private pageTypeSignal = signal<string>('normal');

  constructor() { }

  get pageType() {
    return this.pageTypeSignal.asReadonly();
  }

  setPageType(type: string) {
    this.pageTypeSignal.set(type);
  }
}
