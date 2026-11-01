import {Component} from '@angular/core';
import {HeaderService} from '../header-service';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {

  constructor(public headerService: HeaderService) { }
}
