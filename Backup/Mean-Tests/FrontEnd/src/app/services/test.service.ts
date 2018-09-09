import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from '../models/test';
import { TestsComponent } from '../components/tests/tests.component';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  selectedTest: Test;
  tests: Test[];
  readonly URL_API= 'http://localhost:3000/api/tests'

  constructor(private http: HttpClient) { 
    this.selectedTest = new Test();
  }

  getTests() {
    return this.http.get(this.URL_API);
  }
  postTest(Test: Test) {
    return this.http.post(this.URL_API, Test);
  }
  putTest(Test: Test) {
    return this.http.put(this.URL_API + `/${Test._id}`, Test);
  }
  deleteTest(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }


}
