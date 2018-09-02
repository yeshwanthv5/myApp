import { Component } from '@angular/core';

import { DiscoverPage } from '../discover/discover';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DiscoverPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
