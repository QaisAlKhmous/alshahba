import { Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {

  ngAfterViewInit() {
    // Wait 100ms for Angular to finish rendering the HTML
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }
}
