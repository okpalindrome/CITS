import { Component } from '@angular/core';
import { ScaseService } from './service/scase.service';
import { Case } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;
  activeCase = null;

  cases = this.cs.getCases();

  constructor(private cs: ScaseService){}

  ngOnInit(){
    this.cs.onEvent("caseIsCreated").subscribe(() => {
      this.cases = this.cs.getCases();
    });
  }

  setActiveCase(acase){
    this.activeCase = acase;
  }

  handleCaseCreate(acase: Case){
    this.cs.createCase(acase);
  }

}


