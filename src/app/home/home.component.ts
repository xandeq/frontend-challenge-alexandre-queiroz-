import { Holiday, Country } from './../_models/holidays';
import { Component, OnInit } from '@angular/core';
import { HolidaysService } from '../_services/holidays.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listData:Country[] = [];

  constructor(private holidaysService: HolidaysService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  private getCountries() {
    this.holidaysService.getCountries().subscribe(
      {
        next: (data: any) => { this.listData = data.countries; console.log(data); },
        error: (e) => console.error(e),
        complete: () => console.info('Complete')
      }
    );
  }
}
