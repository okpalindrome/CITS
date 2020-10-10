import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Case } from '../types';
@Component({
  selector: 'app-case-create',
  templateUrl: './case-create.component.html',
  styleUrls: ['./case-create.component.scss']
})
export class CaseCreateComponent{
  caseForm: FormGroup;

  @Output() caseCreated: EventEmitter<Case> = new EventEmitter( )
  constructor(private fb: FormBuilder) {
    this.caseForm = this.fb.group({
      id: this.fb.control('', [Validators.required]),
      case_name: this.fb.control('', [Validators.required]),
      complainant: this.fb.control('', [Validators.required]),
      suspect: this.fb.control('', [Validators.required]),
      date: this.fb.control('', [Validators.required]),
      location: this.fb.control('', [Validators.required]),
      assigned_agent: this.fb.control('', [Validators.required]),
      note: this.fb.control('', [Validators.required]),
    });
  }

  submitForm(){
    const formData: Case = {
      id: this.caseForm.get("id").value,
      case_name: this.caseForm.get("case_name").value,
      agent_name: this.caseForm.get("assigned_agent").value,
      a_date: this.caseForm.get("date").value,
      location: this.caseForm.get("location").value,
      complainant: this.caseForm.get("complainant").value,
      suspect: this.caseForm.get("suspect").value,
      note: this.caseForm.get("note").value
    };
    this.caseCreated.emit(formData);
  }
}
