import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../../navbar/navbar.component";
import { Component } from "@angular/core";

@Component({
  selector: 'photography',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.scss'
})

export class PhotographyComponent {

}
