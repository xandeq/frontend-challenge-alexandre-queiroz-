import { HolidaysService } from './../_services/holidays.service';
import { Holiday } from './../_models/holidays';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-country-holidays',
  templateUrl: './country-holidays.component.html',
  styleUrls: ['./country-holidays.component.css']
})
export class CountryHolidaysComponent implements OnInit {
  listData: Holiday[] = [];
  constructor(private route: ActivatedRoute, private holidaysService: HolidaysService) { }

  ngOnInit(): void {
    let code = this.route.snapshot.paramMap.get('code');
    console.log(code);
    this.holidaysService.getHolidays(code).subscribe(
      {
        next: (data: any) => { this.listData = data.holidays; console.log(data); },
        error: (e:any) => console.error(e),
        complete: () => console.info('Complete')
      }
    );
  }
}
