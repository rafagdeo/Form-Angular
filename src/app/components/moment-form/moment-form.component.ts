import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.scss']
})
export class MomentFormComponent implements OnInit{
  btnText = 'Enviar';

  momentForm!: FormGroup 

  constructor() {}

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      tel: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    });
  }

  get nome() {
    return this.momentForm.get('nome')!;
  }
  get tel() {
    return this.momentForm.get('tel')!;
  }
  get email(){
    return this.momentForm.get('email')!;
  }

  submit() {    
    if (this.momentForm.invalid){
      return;
    }
    console.log("Enviado com sucesso");
    
  }
}
