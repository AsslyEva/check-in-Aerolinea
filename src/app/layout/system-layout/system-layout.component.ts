import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-system-layout',
  templateUrl: './system-layout.component.html',
  styleUrls: ['./system-layout.component.scss']
})
export class SystemLayoutComponent implements OnInit{

  title: string = environment.systemName;
  version: string = environment.version;
  usuario= 'Assly Eva Anchiraico Aylas';
  // User = new User();
  nombreCompleto: string = '';
  codigoArea: string = '';
  perfil!: string;
  panelOpenState = false;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    // private _authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.usuario = this._authService.usuario;
    // this.nombreCompleto = `${this.usuario.name} ${this.usuario.fatherLastName} ${this.usuario.motherLastName}`;
    // this.codigoArea = this.usuario.areaCode;
    // this.perfil = this.usuario.perfil.toString();
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 900px)'])
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  logout(){
    // this._authService.logout();
  }
}

