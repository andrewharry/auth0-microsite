import { Pipe, PipeTransform } from '@angular/core';
import { ResourceFactory } from './resource.factory';

@Pipe({ name: 'resource' })
export class ResourcePipe implements PipeTransform {

    constructor(private factory: ResourceFactory) {}

    transform(value: string): any {
        return this.factory.GetResource(value) ?? '';
    }
}