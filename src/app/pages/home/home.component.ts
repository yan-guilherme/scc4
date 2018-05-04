import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Cliente } from '../../core/model/clientes.model';
import { ClienteService } from '../../core/services/clientes/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private modelsSubj = new BehaviorSubject<Array<any>>([]);
  private models: Observable<Array<Cliente>> = this.modelsSubj.asObservable();
  private model: Cliente = new Cliente();

  tableHover = true;
  tableStriped = true;
  tableCondensed = true;
  tableBordered = true;

  constructor(
    private service: ClienteService,
    private router: Router
  ) {}

  ngOnInit() {
    this.service.get()
      .subscribe(
        adapter => {
          this.modelsSubj.next(adapter.data);

        },
        err => {
          console.log('erro');
        });
  }

  cadastrarCliente() {
    this.router.navigate(['./home-form/home-form']);
  }

  delete(cliente) {
    this.service.delete(cliente.id)
      .subscribe(ok => {
        console.log('deletado');
      },
        err => {
          console.log('erro');
        });
  }

}
