import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ArabicNamePatternDirective } from './directives/arabicNameValidator.directive';
import { EnglishNamePatternDirective } from './directives/englishNameValidator.directive';
import { RtlDirective } from './directives/rtl.directive';




@NgModule({
    declarations: [
        EnglishNamePatternDirective,
        ArabicNamePatternDirective,
        RtlDirective
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    exports: [
        EnglishNamePatternDirective,
        ArabicNamePatternDirective,
        RtlDirective,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
    ]
})
export class SharedModule { }
