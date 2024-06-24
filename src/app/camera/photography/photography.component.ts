import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../../navbar/navbar.component";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'photography',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.scss'
})

export class PhotographyComponent {
  aquarium = ['/P1011568.jpg', '/P1011571.jpg', '/P1011584.jpg', "/P1011585.jpg", "/P1011612.jpg", "/P1011620.jpg", "/P1011628.jpg", "/P1011631.jpg", "/P1011639.jpg"];
  zoo = ["/P1011468.JPG", "/P1011472.JPG", "/P1011512.jpg", "/P1011532.jpg", "/P1011538.jpg"];
  neature = ["/P1000162.jpg", "/P1000189.jpg", "/P1000219.jpg", "/P1000241.jpg", "/P1000249.jpg", "/P1000253.jpg"];
  @Input() imageUrl = '';
  isOpen = false;

  open(url: string) {
    this.imageUrl = url;
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
