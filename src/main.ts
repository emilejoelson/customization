import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';

// Replace 'YOUR_LICENSE_KEY' with the actual license key obtained from Syncfusion
registerLicense(
  'ORg4AjUWIQA/Gnt2U1hhQlJBfVddX2BWfFN0QXNYfVRxdl9GYUwxOX1dQl9nSXlRckRhW3lbdHZTR2c='
);

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
  })
  .catch((err) => console.error(err));
