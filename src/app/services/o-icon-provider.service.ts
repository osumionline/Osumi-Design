import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';
import { catchError, shareReplay, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OIconProviderService {
  private http: HttpClient = inject(HttpClient);

  private iconList: Record<string, Observable<string>> = {}; // Almacenamos ambas soluciones: base64 y texto SVG

  getIcon(id: string): Observable<string> {
    // Si el icono ya está en el caché, lo devolvemos directamente
    if (!this.iconList[id]) {
      this.iconList[id] = this.loadIcon(id).pipe(shareReplay(1)); // Compartimos el observable
    }
    return this.iconList[id]; // Devuelve el observable
  }

  private loadIcon(id: string): Observable<string> {
    const extension: string | undefined = id.split('.').pop(); // Obtenemos la extensión para determinar el tipo de icono

    // Si el archivo es SVG, lo tratamos como texto
    if (extension === 'svg') {
      return this.loadSvgIcon(id);
    }

    // Si el archivo no es SVG, lo tratamos como una imagen binaria (JPG, PNG, etc.)
    return this.loadImageIcon(id);
  }

  private loadSvgIcon(id: string): Observable<string> {
    return this.http.get(id, { responseType: 'text' }).pipe(
      catchError((error): Observable<string> => {
        console.error(`Error loading SVG icon ${id}: ${error}`);
        return of(''); // Retornamos un string vacío si falla la carga
      }),
      shareReplay(1) // Cacheamos el resultado
    );
  }

  private loadImageIcon(id: string): Observable<string> {
    return this.http.get(id, { responseType: 'blob' }).pipe(
      catchError((error): Observable<Blob> => {
        console.error(`Error loading image icon ${id}: ${error}`);
        return of(new Blob()); // Retornamos un Blob vacío si falla la carga
      }),
      switchMap((blob: Blob): Observable<string> => {
        // Convertimos el Blob en una URL base64
        return this.convertBlobToBase64(blob);
      }),
      shareReplay(1) // Cacheamos el resultado
    );
  }

  private convertBlobToBase64(blob: Blob): Observable<string> {
    const reader = new FileReader();
    reader.readAsDataURL(blob);

    return new Observable<string>((observer: Subscriber<string>): void => {
      reader.onloadend = (): void => {
        observer.next(reader.result as string); // Base64 result
        observer.complete();
      };
      reader.onerror = (err): void => {
        observer.error(err);
      };
    });
  }
}
