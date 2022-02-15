export class DeviceWidthService {
    public width: number = self.innerWidth;

    get isMobile(): boolean { return this.width <= 425; }

    get notMobile(): boolean { return !this.isMobile; }
}