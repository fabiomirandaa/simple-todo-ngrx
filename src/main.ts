import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { TodoEffect } from './app/todo/store/todo.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoReducer } from './app/todo/store/todo.reducers';
import { StoreModule } from '@ngrx/store';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TodoModule } from './app/todo/todo.module';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, TodoModule, StoreModule.forRoot({ todoState: TodoReducer }), StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }), EffectsModule.forRoot([TodoEffect])),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
    ]
})
    .catch(err => console.error(err));
