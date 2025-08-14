// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NNaF1cWWhPYVFwWmFZfVtgdVdMZF1bRHNPMyBoS35Rc0VmW3hecHBUR2JZUEF3VEBU');
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
