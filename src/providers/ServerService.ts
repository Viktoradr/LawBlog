import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {

  private server = 'http://localhost:65051/api/';

  constructor( ) { }

  request(controller, method, param = '') {
      return this.server +
      controller + '/' +
      method +
      (param !== '' ? ('/' + param) : '');
  }

}
