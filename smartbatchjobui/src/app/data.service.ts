import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreateBatchJob } from 'src/app/model/create-batch-jobDto'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = "http://localhost:8080/api";
  dialogData: any;
  constructor(private httpClient: HttpClient) { }

  public create = (route: string, body: any) => {
    return this.httpClient.post(this.createCompleteRoute
      (route, this.REST_API_SERVER), body, this.generateHeaders());
  }
  public get = (route: string, body: any) => {
    return this.httpClient.get(this.createCompleteRoute
      (route, this.REST_API_SERVER));
  }
  public getAll(): Observable<CreateBatchJob> {
    let urlForAllData = "http://localhost:8080/api/cbj/allGet";
    return this.httpClient.get<CreateBatchJob>(urlForAllData);
  }
  getAlldata() {
    return this.httpClient.get('http://localhost:8080/api/cbj/allGet');
  }
  private createCompleteRoute = (route: String, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }
  addCreateBatchJob(createBatchJob: CreateBatchJob): void {
    this.dialogData = createBatchJob;
  }

  updateCreateBatchJob(createBatchJob: CreateBatchJob): void {
    this.dialogData = createBatchJob;
  }

  deleteCreateBatchJob(id: number): void {
    console.log(id);
  }
}