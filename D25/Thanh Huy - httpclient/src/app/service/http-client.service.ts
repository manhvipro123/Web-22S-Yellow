import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(public http: HttpClient) {}

  public async getHelloWorld(apiPath: string): Promise<Observable<any>> {
    let result = this.http.get(environment.endpoint + apiPath);
    return result;
  }

  public async postData(
    id: string,
    collectName: string,
    Name: string,
    Des: string,
    Price: number,
    PhotoURL: string,
    Quantity: number
  ) {
    return this.http.post(environment.endpoint + 'api', {
      data: {
        id: id,
        Name: Name,
        Des: Des,
        Price: Price,
        PhotoURL: PhotoURL,
        Quantity: Quantity,
      },
      collectionName: collectName,
    });
  }
}
