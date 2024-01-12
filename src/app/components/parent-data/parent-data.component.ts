import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent {

  animals: Animal [] = [
    { name: 'Neo', type: 'Dog', age: 4 },
    { name: 'Tom', type: 'Cat', age: 3},
    { name: 'Frida', type: 'Dog', age: 2},
    { name: 'Bob', type: 'Horse', age: 1},
  ];

  animalDetails = '';
  showAge (animal: Animal){
    this.animalDetails = `O ${animal.name} tem ${animal.age} anos!`
  };
}

