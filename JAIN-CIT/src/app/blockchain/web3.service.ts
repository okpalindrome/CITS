import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Injectable, NgZone } from '@angular/core';
import { observable, Observable } from 'rxjs';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

const contractAbi = require("./contractABI.json")
declare var window: any;

@Injectable({
  providedIn: 'root'
})

export class Web3Service {
private web3: Web3;
private contract: Contract;
private contractAddr = '0xbF8606E4B2FF0DB2789b6131e59b7Fe79D596f90';

  constructor(private zone:NgZone) {
    if(window.web3){
      this.web3 = new Web3(window.ethereum);
      this.contract = new this.web3.eth.Contract(
        contractAbi,
        this.contractAddr
        );
    }
    else{
      console.warn("Metamask extension not found, please install and connecct to local server")
    }
   }

   getAccount(): Promise<string> {
     return this.web3.eth.getAccounts().then((accounts) => accounts[0]);
   }

   async executeTransaction(fnName:string, ...args: any[]): Promise<void> {
     const acc = await this.getAccount();
     this.contract.methods[fnName](...args).send({from: acc});
   }

   async call(fnName:string, ...args: any[]){
    const acc = await this.getAccount();
    return this.contract.methods[fnName](...args).call({from: acc});
   }

   onEvents(event: string) {
     return new Observable((observer) => {
       this.contract.events[event]().on('data', (data) => {
        this.zone.run(() => {
          observer.next({
            event: data.event,
            payload: data.returnValues,
          });
        });
       });
     });
   }
}
