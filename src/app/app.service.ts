import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TreeModel} from './angular-ui-tree/tree.types';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  tempsURL = 'http://localhost:3000/temps';
  abcURL = 'http://localhost:3000/abc';
  tempList: any;

  constructor(private http: HttpClient) {
    this.tempList = this.getTemps();
  }

  getTemps(): Observable<TreeModel> {
    return this.http.get<TreeModel>(this.tempsURL);
  }

  getABCURL(): Observable<TreeModel> {
    return this.http.get<TreeModel>(this.abcURL);
  }
}
