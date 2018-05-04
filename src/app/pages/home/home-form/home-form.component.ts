import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Cliente } from '../../../core/model/clientes.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClienteService } from '../../../core/services/clientes/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
})
export class HomeFormComponent implements OnInit {

  private modelsSubj = new BehaviorSubject<Array<any>>([]);
  private models: Observable<Array<Cliente>> = this.modelsSubj.asObservable();
  private model: Cliente = new Cliente();

  form: FormGroup;

  // apenas para a estilização da tabela
  tableHover = true;
  tableStriped = true;
  tableCondensed = true;
  tableBordered = true;

  constructor(
    private formBuilder: FormBuilder,
    private service: ClienteService,
    private router: Router
  ) {
    this.createForm();

  }

  createForm() {
    this.form = FormBuilder.group({
      id: [''],
      name: [''],
      federalId: [''],
      registration: [''],
      phone: [''],
      phone2: [''],
      email: [''],
      emailCollection: [''],
      residentialPhone: [''],
      commercialPhone: [''],
      emergencyContact: [''],
      emergencyPhone: [''],
      birthday: [''],
      gender: [''],
      federalIdType: [''],
      commercialAddress: [''],
      residentialAdress: [''],
      active: ['']
    });
  }

  ngOnInit() {
  }


  save() {
    const clientesFormValue = this.form.value;
    if (this.form.valid) {
      if (clientesFormValue.id) {
        return this.service.update(clientesFormValue).subscribe(r => {
          console.log('cliente atualizado');
        },
          err => {
            console.log('erro no update');
          });
      } else {
        return this.service.add(clientesFormValue).subscribe(r => {
            console.log('cadastrado novo cliente');
        },
          err => {
            console.log('erro no cadastro');
          });
      }
    }
  }

}
