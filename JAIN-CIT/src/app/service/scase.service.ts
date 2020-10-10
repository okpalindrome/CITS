import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Case } from '../types';
import { delay } from 'rxjs/operators';
import { Web3Service } from '../blockchain/web3.service';
import { createHostListener } from '@angular/compiler/src/core';


@Injectable({
  providedIn: 'root'
})
export class ScaseService {
  constructor(private web3: Web3Service) { }

  async getCases(): Promise<Case[]>{
    const caseList: Case[] = [];
    const totalCases = await this.web3.call("getAllCases");

    for(let i = 0; i < totalCases; i++){
      const caseValue = await this.web3.call("getCase", i);
      const caseNormalized = this.normalizedData(caseValue, i);
      caseList.push(caseNormalized);
    }
    return caseList;
  }

  createCase(acase : Case){
    this.web3.executeTransaction("setCase", acase.case_name, acase.complainant, acase.suspect,
    acase.a_date, acase.location, acase.agent_name, acase.note);
  }

  private normalizedData(caseValue, i): Case{
      return{
        id: i,
        case_name: caseValue[0],
        complainant: caseValue[1],
        suspect: caseValue[2],
        a_date: caseValue[3],
        location: caseValue[4],
        agent_name: caseValue[5],
        note: caseValue[6]
      }
  }

  onEvent(name: string){
    return this.web3.onEvents(name);
  }
}
