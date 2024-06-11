import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../navbar/navbar.component";
import { Component } from "@angular/core";

@Component({
  selector: 'index',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})

export class IndexComponent {

}
