import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class CompteService {
  url = "http://localhost:3003/api/compte";

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(this.url);
  }

  find(id: string) {
    return this.http.get(this.url + "/" + id);
  }

  create(compte) {
    return this.http.post(this.url, compte);
  }

  update(id, values) {
    delete values["_id"];
    return this.http.put(this.url + "/" + id, values);
  }

  delete(id: string) {
    return this.http.delete(this.url + "/" + id);
  }
}
