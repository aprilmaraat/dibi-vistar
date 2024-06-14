import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgZorroModule } from '../../modules/ng-zorro.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, NgZorroModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
