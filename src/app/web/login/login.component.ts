import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email:string;
  public password:string;
  constructor(public authService:AuthService, public router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onsubmitLogin(){
    this.authService.LoginEmail(this.email,this.password).then((res)=>{
      /*alert('Usuario logueado');*/
      this.toastr.success('', 'Logeado correctamente!');
      this.router.navigate(['/admin']);


      console.log(res);
    }).catch((err)=>{
      this.toastr.error('',"Acceso Denegado");
      console.log(err);
    })

}
}
