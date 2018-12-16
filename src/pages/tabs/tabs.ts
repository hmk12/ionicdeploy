import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { RegisterPage } from '../register/register';
import { PaperPage} from '../paper/paper';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = SignupPage;
  tab5Root = RegisterPage;
  tab6Root = PaperPage;

  constructor() {

  }
}
