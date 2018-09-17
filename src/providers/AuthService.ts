import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerService } from './ServerService';

@Injectable()
export class AuthService {

  constructor(public http: HttpClient, private server: ServerService) { }

  login(usuario) {
    return this.http.post(this.server.request('Auth', 'Login'), usuario);
  }
}