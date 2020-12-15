import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = [
		{
				"group": "Dataset 1",
				"date": "2018-12-31T21:00:00.000Z",
				"value": 0
		},
		{
				"group": "Dataset 1",
				"date": "2019-01-05T21:00:00.000Z",
				"value": -37312
		},
		{
				"group": "Dataset 1",
				"date": "2019-01-07T21:00:00.000Z",
				"value": -22392
		},
		{
				"group": "Dataset 1",
				"date": "2019-01-14T21:00:00.000Z",
				"value": -52576
		},
		{
				"group": "Dataset 1",
				"date": "2019-01-18T21:00:00.000Z",
				"value": 20135
		},
		{
				"group": "Dataset 2",
				"date": "2018-12-31T21:00:00.000Z",
				"value": 47263
		},
		{
				"group": "Dataset 2",
				"date": "2019-01-04T21:00:00.000Z",
				"value": 14178
		},
		{
				"group": "Dataset 2",
				"date": "2019-01-07T21:00:00.000Z",
				"value": 23094
		},
		{
				"group": "Dataset 2",
				"date": "2019-01-12T21:00:00.000Z",
				"value": 45281
		},
		{
				"group": "Dataset 2",
				"date": "2019-01-18T21:00:00.000Z",
				"value": -63954
		}
];
	options = {
		"title": "Area (time series - natural curve)",
		"axes": {
				"bottom": {
						"title": "2019 Annual Sales Figures",
						"mapsTo": "date",
						"scaleType": "time"
				},
				"left": {
						"mapsTo": "value",
						"scaleType": "linear"
				}
		},
		"curve": "curveNatural",
		"height": "400px"
};
}
