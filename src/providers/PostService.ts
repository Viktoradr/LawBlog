import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerService } from './ServerService';

@Injectable()
export class PostService {

    constructor(public http: HttpClient, private server: ServerService) { }

    All() {
        return this.http.get(this.server.request('Post', 'All'));
    }

    Novo(post) {
        return this.http.post(this.server.request('Post', 'New'), post);
    }
}