import { Injectable } from '@angular/core';
import{Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private _http:Http) { }
postData(url,body){
    return this._http.post(url,body)
  .map((res:Response) => res.json())
}
getData(url){
   return this._http.get(url)
  .map((res:Response) => res.json())
}
deleteData(url){
   return this._http.delete(url)
  .map((res:Response)=> res.json())
}
updateData(url ,body){
  return this._http.patch(url ,body)
  .map((res:Response)=> res.json())
}


}
