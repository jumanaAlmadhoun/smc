import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faTwitter,faYoutube,faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

   myfaFacebook = faFacebook;
   myfaInstagram =  faInstagram;
   myfaTwitter = faTwitter;
   myfaYoutube = faYoutube;
   mylinkedin = faLinkedin;



  constructor() { }

  ngOnInit(): void {
  }

}
