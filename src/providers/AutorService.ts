import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerService } from './ServerService';

@Injectable()
export class AutorService {

    constructor(public http: HttpClient, private server: ServerService) { }

    All() {
        return this.http.get(this.server.request('Autor', 'All'));
    }

    Novo(autor) {
        return this.http.post(this.server.request('Autor', 'New'), autor);
    }
}