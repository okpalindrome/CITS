import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  @Input() a_date: string;
  @Input() case_name: string;
  @Input() agent_name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
