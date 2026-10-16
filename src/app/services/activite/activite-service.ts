import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActiviteService {
  objectifs: string[] = ['Finir le TP', 'Faire du sport'];

  removeItem(index: number): void {
    this.objectifs.splice(index, 1);
  }
}
