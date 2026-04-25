import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';   // ✅ add this
import { Observable } from 'rxjs';

import { HomeContent } from './home-content.model';
import { HomeContentService } from './home-content.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],          // ✅ and add here
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  content$: Observable<HomeContent>;

  constructor(private homeContentService: HomeContentService) {
    this.content$ = this.homeContentService.get();
  }

  ngAfterViewInit() {
    setTimeout(() => window.dispatchEvent(new Event('resize')), 100);
  }
}
