import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptionsArgs, Request, Response,
               ConnectionBackend, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpClient extends Http {

  constructor(protected _backend: ConnectionBackend, protected _defaultOptions: RequestOptions) {

    super(_backend, _defaultOptions);
console.log('vvvvvvvvvvvvv');
  }

  _setCustomHeaders(options?: RequestOptionsArgs): RequestOptionsArgs {
 console.log('bbbbbbbbbbbb');
    if (!options) {
      options = new RequestOptions({});
    }
    if (localStorage.getItem('id_token')) {

      if (!options.headers) {

        options.headers = new Headers();


      }
      options.headers.set('X-AUTH-TOKEN', localStorage.getItem('id_token'));
    }
    return options;
  }


  request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
console.log('aaaaaaaa');
    options = this._setCustomHeaders(options);
    return super.request(url, options);
  }
}
