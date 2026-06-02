import { Observable } from "rxjs";
import { GraClass } from "../classes/gra.class";

export interface GetDataInterface {
    Get(): Observable<GraClass[]>;
    GetByID(id: number): Observable<GraClass>;
    Delete(id: number): Observable<boolean>;
}