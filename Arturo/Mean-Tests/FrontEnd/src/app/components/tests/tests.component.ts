import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { NgForm } from '@angular/forms';
import { Test } from '../../models/test';

declare var M: any;

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css'],
  providers: [TestService]
})
export class TestsComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.getTests();
  }

  addTest(form: NgForm) {
    if (form.value._id) {
      this.testService.putTest(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Test Updated Perfectly' });
          this.getTests();
        })
    } else {
      this.testService.postTest(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Test Saved Perfectly' });
          this.getTests();
        });
    }
  }

  getTests() {
    this.testService.getTests()
      .subscribe(res => {
        this.testService.tests = res as Test[];
        console.log(res);
      });
  }

  editTest(test: Test) {
    this.testService.selectedTest = test;
  }

  deleteTest(_id: string) {
    if (confirm('Are you sure?')) {
      this.testService.deleteTest(_id)
        .subscribe(res => {
          this.getTests();
          M.toast({ html: 'Test Deleted' });
        });
    }

  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.testService.selectedTest = new Test();
    }

  }

}
