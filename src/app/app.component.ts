import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'weatherapp';
  wdata:any = {}
  qdata:any = {}

  private apiUrl = 'https://api.weatherapi.com/v1/forecast.json?key=c666dbf417bf408882e170152231107&q=kolkata';
  private quoteApiUrl = 'https://api.api-ninjas.com/v1/quotes?category=success';
  private quoteHeader = {headers: { 'X-Api-Key': 'e2xgZtqCBKqSKmixojSXFw==iUZyMXxrs7mBGR2H'}};

  ngOnInit(): void {
    initFlowbite();

    axios.get(this.apiUrl)
    .then(res => {
      this.wdata = res.data;
      console.log(res);
    })
    .catch(error => {
      console.error(error);
    });

    axios.get(this.quoteApiUrl,this.quoteHeader)
    .then(res => {
      this.qdata = res.data[0];
      console.log(res);
    })
    .catch(error => {
      console.error(error);
    });
  }
}
