import { Injectable } from '@angular/core';
import { Product } from '../../environments/interfaces';
import { environment } from '../../environments/environment';
import ResourceDefault from './data/resource.default';
import BundllAu from './data/resource.bundll.au';
import HummAu from './data/resource.humm.au';
import HummCa from './data/resource.humm.ca';
import { IResources } from './resource.interfaces';

@Injectable({
    providedIn: 'root'
})
export class ResourceFactory {

    public GetResource(key: string): string {
        try {
            let resource = this.GetByProduct();

            let value = resource[key];

            if (value !== undefined && value && value.length > 0)
                return value;

            return this.GetDefault()[key] ?? "";
        }
        catch { return ""; }
    }

    private GetByProduct(): IResources {
        switch (environment.product) {
            case Product.BundllAU : return BundllAu;
            case Product.HummAU: return HummAu;
            case Product.HummCA: return HummCa;
            default: return ResourceDefault;
        }
    }

    private GetDefault(): IResources {
         return ResourceDefault;
    }
}