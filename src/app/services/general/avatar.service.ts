import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  private readonly apiUrl = "https://ui-avatars.com/api/"

  constructor(private http: HttpClient) {
  }

  load(name: string): Observable<Blob> {
    return this.http.get(this.apiUrl, {
      params: {
        name: name,
        background: 'random',
        size: '512',
        rounded: true,

      },
      responseType: 'blob'
    });
  }
}
