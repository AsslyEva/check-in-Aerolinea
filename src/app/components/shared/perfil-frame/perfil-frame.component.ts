import { Component, OnInit, Input, EventEmitter, Output, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-frame',
  templateUrl: './perfil-frame.component.html',
  styleUrls: ['./perfil-frame.component.scss']
})
export class PerfilFrameComponent implements OnInit {

  @Input() numero: number = 1;
  @Input() title: string = '';
  @Input() link: string = '/';

  color: string = 'rgba(0, 165, 165, 1)';

  constructor(private router: Router,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    switch (this.numero) {
      case 1:
        this.color = '#8EC321';
        break;
      case 2:
        this.color = '#EB3219';
        break;
      case 3:
        this.color = '#00A5A5';
        break;
      case 4:
        this.color = '#FFAF00';
        break;
      case 5:
        this.color = '#323C37';
        break;
      case 6:
        this.color = '#7758d6';
        break;
      default:
        break;
    }
  }

}


