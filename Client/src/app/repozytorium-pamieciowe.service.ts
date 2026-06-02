import { Injectable } from '@angular/core';
import { GetDataInterface } from './interfaces/get-data.interface';
import { FormSubmitInterface } from './interfaces/form-submit.interface';
import { Observable, of } from 'rxjs';
import { GraClass } from './classes/gra.class';

@Injectable()
export class RepozytoriumPamiecioweService implements GetDataInterface, FormSubmitInterface {
  private idGenerator = 1;
  private readonly data: GraClass[] = [
    new GraClass(this.idGenerator++, "Wiedźmin 3", 129.99, new Date(2015, 4, 19)),
    new GraClass(this.idGenerator++, "Cyberpunk 2077", 199.99, new Date(2020, 11, 10)),
    new GraClass(this.idGenerator++, "Minecraft", 89.99, new Date(2011, 10, 18)),
    new GraClass(this.idGenerator++, "Grand Theft Auto V", 149.99, new Date(2013, 8, 17)),
    new GraClass(this.idGenerator++, "The Elder Scrolls V: Skyrim", 119.99, new Date(2011, 10, 11))
  ]

  Post(nazwa: string, cena: number, data: Date): Observable<boolean> {
    const newObj = new GraClass(this.idGenerator++, nazwa, cena, data);
    this.data.push(newObj);
    return of(true);
  }

  Put(id: number, nazwa: string, cena: number, data: Date): Observable<boolean> {
    const obj = this.data.find(x => x.id === id);
    if(obj) {
      obj.tytul = nazwa;
      obj.cena = cena;
      obj.dataPremiery = data;
      return of(true);
    }

    return of(false);
  }

  Get(): Observable<GraClass[]> {
    const kopia = this.data.map(x => new GraClass(x.id, x.tytul, x.cena, x.dataPremiery));
    return of(kopia);
  }

  GetByID(id: number): Observable<GraClass> {
    const obj = this.data.find(x => x.id === id);
    if(obj) {
      const kopia = new GraClass(obj.id, obj.tytul, obj.cena, obj.dataPremiery);
      return of(kopia);
    }

    throw new Error("Nie znaleziono obiektu.");
  }

Delete(id: number): Observable<boolean> {
    console.warn(`Wywołano atrapę usuwania dla ID: ${id}. Akcja zignorowana.`);
    return of(true); // Natychmiast zwraca "sukces"
  }
  
}
