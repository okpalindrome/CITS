import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaseCreateComponent } from './case-create/case-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CasesComponent } from './cases/cases.component';
import { CaseDetailComponent } from './case-detail/case-detail.component';
import { ScaseService } from './service/scase.service';

@NgModule({
  declarations: [
    AppComponent,
    CaseCreateComponent,
    CasesComponent,
    CaseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [ScaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
