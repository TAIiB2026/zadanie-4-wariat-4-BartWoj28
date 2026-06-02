import { Component, inject } from '@angular/core';
import { GET_DATA_TOKEN } from '../tokens/get-data.token';

@Component({
  selector: 'taiib2-gry',
  standalone: false,
  templateUrl: './gry.component.html',
  styles: ``
})
export class GryComponent {
  private readonly service = inject(GET_DATA_TOKEN);
  public data$ = this.service.Get();

  usunGre(id: number) {
    if (confirm('Czy na pewno chcesz usunąć tę grę?')) {
      this.service.Delete(id).subscribe(() => {
        this.data$ = this.service.Get();
      });
    }
  }
}
