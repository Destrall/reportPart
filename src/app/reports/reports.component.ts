import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
	title = 'List of Hotel Reports';
	
	hReports = {
		"id": 1,
		"room": 1,
		"status": "Vacant",
		"adults": 0,
		"children": 0
	};
	
	hReports2 = {
		"id": 2,
		"room": 2,
		"status": "Occupied",
		"adults": 2,
		"children": 3
	};
	
	hReports3 = {
		"id": 3,
		"room": 3,
		"status": "Shared",
		"adults": 2,
		"children": 1
	};
	
	hReports4 = {
		"id": 4,
		"totalGuests": 8
	};

  constructor() { }

  ngOnInit() {
  }

}
