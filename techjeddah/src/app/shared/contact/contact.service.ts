import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private BaseUrl = 'https://techjeddah-bmat.vercel.app/contact/addContact';

  constructor(private http: HttpClient) {}

  addContact(data: any) {
    return this.http.post(this.BaseUrl, data);
  }
}
