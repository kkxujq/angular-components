import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GtSelectItemComponent } from './select-item.component';
import { GtSelectComponent } from './select.component';
import { GtTemplateComponent } from './select-template.component';
import { GtTemplateDirective } from './select-template.directive';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        GtSelectComponent,
        GtSelectItemComponent,
        GtTemplateComponent,
        GtTemplateDirective
    ],
    exports: [
        GtSelectComponent,
        GtSelectItemComponent,
        GtTemplateComponent,
        GtTemplateDirective
    ]
})

export class GtSelectModule {
}
