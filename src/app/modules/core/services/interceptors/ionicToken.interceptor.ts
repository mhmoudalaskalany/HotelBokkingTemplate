import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError, from } from 'rxjs';
import { map, catchError, switchMap, finalize, timeout, tap } from 'rxjs/operators';
import { IonicStorageService } from '../storage/ionicStorageService.service';
import { Router } from '@angular/router';
import { TranslationService } from '../localization/translation.service';
import { LoadingService } from 'shared/services/loading/loader.service';


const TOKEN_KEY = 'token';

@Injectable()
export class IonicTokenInterceptor implements HttpInterceptor {

    loaderToShow: any;
    loadingPresent = false;

    constructor(
        private loading: LoadingService,
        private storage: IonicStorageService,
        private router: Router,
        private localize: TranslationService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const currLang = this.localize.lang;

        return from(this.storage.get('inquiry-token'))
            .pipe(
                switchMap(token => {
                    if (token) {
                        const lang = this.setLang(currLang);
                        // request = request.clone({
                        //      headers: request.headers.set('Authorization', 'Bearer ' + token.value) ,
                        //     });
                        request = request.clone({
                            setHeaders: {
                                Authorization: `Bearer ${token.value}`,
                                lang: lang ? lang : 'en-US'
                            }
                        });
                    }

                    if (!request.headers.has('Content-Type')) {
                        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
                    }
                    this.loading.show();
                    return next.handle(request).pipe(
                        timeout(300000),
                        tap(
                            (e: HttpEvent<any>) => {
                                if (e instanceof HttpResponse) {
                                    this.loading.hide();
                                }
                                this.loading.hide();
                            },
                            (error: any) => {
                                if (error instanceof HttpErrorResponse) {
                                    this.loading.hide();
                                    if (error.status === 401) {
                                        this.router.navigate(['/login']);
                                    }
                                    console.log('eeeee', error);
                                }
                            }
                        ),
                        catchError(e => {
                            this.loading.hide();
                            return throwError(e);
                        }),
                        finalize(() => {
                            this.loading.hide();

                        }
                        )
                    );
                }));


    }

    setLang(currLang): string {
        let lang;
        switch (currLang) {
            case 'ar': {
                lang = 'ar-EG';
                break;
            }
            case 'en': {
                lang = 'en-US';
                break;
            }
            case 'fr': {
                lang = 'fr-FR';
                break;
            }
            default: {
                lang = 'en-US';
                break;
            }
        }
        return lang;
    }

}

