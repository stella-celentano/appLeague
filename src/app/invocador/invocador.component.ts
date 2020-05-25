import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { ApiService } from './../service/api.service';
import { Invocador } from './../model/invocador';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-invocador',
  templateUrl: './invocador.component.html',
  styleUrls: ['./invocador.component.scss']
})
export class InvocadorComponent implements OnInit {

  invocador: Invocador
  formInv: FormGroup

  private _httpReq: Subscription

  messageApi: string
  statusResponse: number

  constructor(
    private _router: Router,
    private _service: ApiService,
    private _builder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInv = this._builder.group({
      nameInv: this._builder.control('', [Validators.required])
    });
  }

  getInvocador() {
    let nickName =  this.formInv.value['nameInv']
    this._httpReq = this._service.getInvocador(nickName).subscribe(response => {
      this.statusResponse = response.status
      this.messageApi = response.body['message']
      this.invocador = response.body
    }, err => {
      this.messageApi = err.error['message']
      this.statusResponse = err.status
    })
  }

}
