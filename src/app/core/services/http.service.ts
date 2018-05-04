import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';


import { Service } from './service-helper.service';


@Injectable()
export class HttpService {
  private baseurl = Service.API_ENDPOINT;

  constructor(private http: Http) {}

  public post(url, obj) {
    return this.http.post(url, obj).map(res => res.json());
  }

  public get(url, id = null) {
    if (id != null && id !== undefined && id !== '') { url = url + '/' + id; }

    return this.http.get(url).map(res => res.json());
  }

  public getParams(url, params) {
    const options = new RequestOptions({ params: params });

    return this.http.get(url, options).map(res => res.json());
  }

  public deleteParams(url, params) {

    const options = new RequestOptions({ params: params });

    return this.http.delete(url, options).map(res => res.json());
  }

  public getHeaders(url, hdrs) {

    const headers = new Headers();

    for (let i = 0; i < hdrs.length; i++) {
      headers.append(hdrs[i].nome, hdrs[i].valor);
    }
    const options = new RequestOptions({ headers: headers });
    return this.http.get(url, options).map(res => res.json());
  }

  public put(url, obj) {

    console.log(url, obj);
    return this.http.put(url, obj).map(res => res.json());
  }

  public delete(url, id = null) {

    let paramId = '';
    if (id) {
      paramId = `/${id}`;
    }
    return this.http.delete(`${url}${paramId}`).map(res => res.json());
  }
}
