import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';


import { HttpService } from '../http.service';
import { Service } from '../service-helper.service';

@Injectable()
export class ClienteService {

  private url = Service.API_ENDPOINT;

  constructor(private service: HttpService) {}

  get() {
    return this.service.get(this.url, null);
  }

  getById(id) {
    return this.service.get(this.url, id);
  }

  add(obj) {
    return this.service.post(this.url, obj);
  }

  update(obj) {
    return this.service.put(this.url, obj);
  }

  delete(id) {
    return this.service.delete(this.url, id);
  }
}

