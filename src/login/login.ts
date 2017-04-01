import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';

const styles = require('./login.css');
const template = require('./login.html');

@Component({
  selector: 'login',
  template: template,
  styles: [styles]
})
export class Login {
  constructor(public router: Router, public http: Http) {
  }

  login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:5946/rest/api/login', body, { headers: contentHeaders })
      .subscribe(
      response => {
		if (response.json().status === true) {
			localStorage.setItem('id_token', response.json().token);
			this.router.navigate(['home']);
		} else {
			alert('login failed.');
			console.log(response);
		}
      },
      error => {
        alert(error.text());
        console.log(error.text());
      }
      );
  }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }
}