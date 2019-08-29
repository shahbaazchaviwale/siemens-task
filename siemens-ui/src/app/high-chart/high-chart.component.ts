import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-high-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.scss']
})
export class HighChartComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {
    chart: {
      marginTop: 10
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      plotBands: [{ // mark the weekend
        color: '#FCFFC5',
      }]
    },

    yAxis: {
      title: {
        text: ''
      },
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false
    },
    series: [{
      data: [25, 15, 26, 21, 24, 26, 33, 25, 15, 25, 22, 24]
    }],
    plotOptions: {
      series: {
          marker: {
              enabled: false
          }
      }
  },
  };
  constructor() { }

  ngOnInit() {
  }

}
