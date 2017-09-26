import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
    JhipsterGateWayApplicationSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        JhipsterGateWayApplicationSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        JhipsterGateWayApplicationSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class JhipsterGateWayApplicationSharedCommonModule {}
