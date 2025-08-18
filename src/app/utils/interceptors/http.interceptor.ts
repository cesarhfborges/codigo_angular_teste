import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest, HttpInterceptor as HttpIntercept} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpInterceptor implements HttpIntercept {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newHeaders = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return next.handle(newHeaders);
  }
}
