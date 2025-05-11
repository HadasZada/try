import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule,MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit{
  ngOnInit(): void {
    this.products.push("hello");
    this.products.push("for");
    this.products.push("everyOne");
  }
  products:Array<string> = new Array<string>();
  deleate(){
    this.products.pop();
  }
  

}
