import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TreeModel} from 'ng2-tree';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  tempsURL = 'http://localhost:3000/temps';
  abcURL = 'http://localhost:3000/abc';

  constructor(private http: HttpClient) {
  }

  getTemps(): Observable<TreeModel> {
    return this.http.get<TreeModel>(this.tempsURL);
  }

  getABCURL(): Observable<TreeModel> {
    return this.http.get<TreeModel>(this.abcURL);
  }
}
