import { Injectable } from '@angular/core';
import { Tutos } from './mock-tutos';

import { LoggerService } from '../logger.service'; //Injection autre service

@Injectable({
  providedIn: 'root'
})
export class TutoService {

  constructor(private logger: LoggerService) { }

  getTutos() { 
    this.logger.log('TutoService : get tutos..');
  	return Tutos; 
  }
}
