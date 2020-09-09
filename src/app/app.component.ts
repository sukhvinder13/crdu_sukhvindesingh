import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { CrudService } from './services/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicCrud';
  submitted = false;
  isLoading = false;

  editForm: FormGroup;
  responseDataYes: Array<any>;
  responseDataNo: Array<any>;
  constructor(public formBuilder: FormBuilder,
    private _service :CrudService) { }

  ngOnInit() {
    this.isLoading = false;
    this.editForm = this.formBuilder.group({
      studentName: ['', Validators.required],
      subjects: this.formBuilder.array([
        this.initResponseYes(),
      ])
    });
  }
  get f() {
    return this.editForm.controls;
  }
  initResponseYes() {
    return this.formBuilder.group({
      subjectName: ['', Validators.required],
      subjectMarks: ['', Validators.required],
      // no: ['', Validators.required]
    })
  }
  addResponseYes() {
    // add address to the list
    const control = <FormArray>this.editForm.get('subjects');
    control.push(this.initResponseYes());
  }
  removeResponseYes(i: number) {
    // remove address from the list
    const control = <FormArray>this.editForm.get('subjects');
    control.removeAt(i);
  }
  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    console.log(this.editForm.value);
    if (!this.editForm.valid) {
      console.log('editForm not created!')
    } else {
      this._service.createStudentDetails(this.editForm.value).subscribe(
        (res) => {
          console.log(' successfully created!')
          // this.editForm.reset(this.editForm.value);
        }, (error) => {
          console.log(error);
        });
    }
  }
}