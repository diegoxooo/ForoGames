import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { LogeadoService } from '../../logeado.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {

  userForm = this.fb.group({
    usuario: [null, Validators.required],
    nvContra: [null, Validators.required],
    antContra: [null, Validators.required],
  });

  private urlApi = AppComponent.url + 'usuario/';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: Router,
    private ar: ActivatedRoute,
    private login: LogeadoService
  ) {
   
  }

  onSubmit(): void {

    let mail = this.login.getMail();
    this.http
      .post<any>(this.urlApi + mail, {
        usuario: this.userForm.value.usuario,
        nvContra: this.userForm.value.nvContra,
        antContra: this.userForm.value.antContra,
      })
      .subscribe(() => {
        // console.log(sessionStorage.getItem('token'));
        this.route.navigate(['/']);
      });
  }
}
