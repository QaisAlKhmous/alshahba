import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HomeContent } from './home-content.model';
import { HOME_CONTENT } from './home-content.static';

@Injectable({ providedIn: 'root' })
export class HomeContentService {
  get(): Observable<HomeContent> {
    return of(HOME_CONTENT);

    // Later you’ll change to:
    // return this.http.get<HomeContent>('/api/public/home');
  }
}
