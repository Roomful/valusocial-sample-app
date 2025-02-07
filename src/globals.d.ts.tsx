// globals.d.ts
import {ValuApi} from "@arkeytyp/valu-api";

declare global {
  interface Window {
    valuApi?: ValuApi; // Declaring 'valuApi' as an optional property of global Window
  }

  var valuApi: ValuApi; // Declaring valuApi globally
}

export {};
