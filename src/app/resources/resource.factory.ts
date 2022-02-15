import { Injectable } from '@angular/core';
import { Product } from '../../environments/interfaces';
import { environment } from '../../environments/environment';
import ResourceDefault from './themes/resource.default';
import BundllAu from './themes/resource.bundll.au';
import HummAu from './themes/resource.humm.au';
import HummCa from './themes/resource.humm.ca';
import { IResources, ThemeKeys, EnableKeys } from './resource.interfaces';

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

    public IsEnabled(key: EnableKeys): boolean {
        let value = this.GetResource(key);
        return value === 'true'
    }

    public GetByTheme(key: ThemeKeys): string {
        return this.GetResource(key);
    }

    public GetByProduct(): IResources {
        switch (environment.product) {
            case Product.BundllAU : return BundllAu;
            case Product.HummAU: return HummAu;
            case Product.HummCA: return HummCa;
            default: return ResourceDefault;
        }
    }

    public GetDefault(): IResources {
         return ResourceDefault;
    }
}