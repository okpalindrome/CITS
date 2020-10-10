import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../types';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.scss']
})
export class CaseDetailComponent implements OnInit {
  @Input() actcase: Case;
  constructor() { }

  ngOnInit(): void {
  }

}
