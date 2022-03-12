import { Injectable, ɵLocaleDataIndex } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(public http: HttpClient) { }
  public async getSource(apiPath: string): Promise<Observable<any>> {
    let result = this.http.get(environment.endpoint + apiPath);
    return result;
  }

  public async postData(name: string, collecName: string, price: number, quantity: number, imageURL: string, description: string) {
    return this.http.post(environment.endpoint + 'api', {
      data: {
        name: name,
        price: price,
        description: description,
        quantity: quantity,
        imageURL: imageURL
      },
      collectionName: collecName,
    });
  }
  public async putData(name: string, collecName: string, docId: string, price: number, quantity: number, imageURL: string, description: string) {
    return this.http.put(environment.endpoint + 'api/update', {
      data: {
        name: name,
        price: price,
        description: description,
        quantity: quantity,
        imageURL: imageURL
      }, docId: docId,
      collectionName: collecName,
    });
  }

}
