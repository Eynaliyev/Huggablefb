import { Component, Inject } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import firebase from 'firebase';

import {AuthProvider} from './providers/auth-provider'; 
import {ChatsProvider} from './providers/chats-provider'; 
import {UserProvider} from './providers/user-provider'; 
import {UtilProvider} from './providers/util-provider'; 
import { 
    FIREBASE_PROVIDERS,  
    defaultFirebase,  
    firebaseAuthConfig,  
    FirebaseRef, 
    AngularFire, 
    AuthProviders,  
    AuthMethods 
} from 'angularfire2'; 

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    const firebaseConfig = {
      apiKey: "AIzaSyDI22hmtv2clf3WYdo2y04z_h-eCfbv_F4",
        authDomain: "huggable-9e981.firebaseapp.com",
        databaseURL: "https://huggable-9e981.firebaseio.com/",
        storageBucket: "gs://huggable-9e981.appspot.com",
        messagingSenderId: "272489685620"
    };
    firebase.initializeApp(firebaseConfig);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }




}
