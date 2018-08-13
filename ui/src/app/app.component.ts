import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CONFIG } from './config/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RentA2Z';
  ping = 'pinging...';

  ngOnInit(): void {
    const url = CONFIG.url;
    console.log('URL:', url);
    const appointment = {};
    console.log('REQUEST URL:', url + '/api/ping');
    axios.get(url + '/api/ping').then(result => {
        const response = result.data;
        if (response) {
          this.ping = response.message === 'pong!' ? 'Online' : 'Offline';
          console.log('ping:', this.ping);
        }
      })
      .catch(error => {
          console.error('ERRRO:', error);
      });
  }

}
