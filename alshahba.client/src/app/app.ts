import { HttpClient } from '@angular/common/http';
import { Component, signal,OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Layout } from './layout/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true, 
  imports: [Layout], 
  styleUrl: './app.css'
})
export class App implements OnInit {


  constructor(private http: HttpClient) {}

  ngOnInit() {
    
  }

 

  protected readonly title = signal('alshahba.client');
}
