import {Component, OnInit, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../../app-config.service';
import {NgClass} from '@angular/common';
import {HeaderService} from '../header-service';

@Component({
  imports: [
    NgClass
  ],
  selector: 'app-starmap',
  styleUrl: './starmap.scss',
  templateUrl: './starmap.html',
})
export class Starmap implements OnInit {
  planets!: Map<String, Planet>;
  planetsArray = signal<Array<Planet>>([]);

  constructor(private http: HttpClient,
              private config: AppConfigService,
              private headerService: HeaderService) {}

  ngOnInit() {
    this.headerService.setPageType('starmap');
    this.config.loadAppConfig().then(() => {
      const url = this.config.apiUrl;
      this.http.get<PlanetsAllResponse>(url + 'planets-all').subscribe((data: PlanetsAllResponse) => {
        console.log(data);
        this.planets = data.planets;
        const newPlanets = Array.from(Object.values(data.planets)) as Planet[];
        console.log(newPlanets);
        this.planetsArray.set(newPlanets);
      });
    });

  }
}

type PlanetsAllResponse = { planets: Map<String, Planet>};

type Planet = {
  planet: string,
  x: number,
  y: number,
  controller: string,
  image: string,
  sizeable_economy: boolean
}
