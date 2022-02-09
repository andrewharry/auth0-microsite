import { NgModule } from '@angular/core';
import { ResourceFactory } from './resource.factory';
import { ResourcePipe } from './resource.pipe';

@NgModule({
    declarations: [ResourcePipe],
    exports: [ResourcePipe],
    providers: [ResourceFactory]
})
export class ResourceModule { }