import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    public isLoading = new BehaviorSubject(false);
    private count = 0;

    constructor(private loadingController: LoadingController) { }

    public showSync(message: string = 'update and sync data') {
        this.hide();
        this.count += 1;
        // console.log('count showSync', this.count);
        if (this.count <= 1) { this.presentLoading(false, message); }
    }

    public show() {
        this.count += 1;
        if (this.count <= 1) { this.presentLoading(); }
    }

    public hide() {
        this.count -= 1;
        if (this.count === -1) { this.count = 0; }
        if (!this.count) { this.closeLoading(); }

    }

    private async presentLoading(backdropDismiss = true, message?: string) {
        this.isLoading.next(true);
        const loading = await this.loadingController.create({
            cssClass: 'loading-controller-class',
            spinner: 'bubbles',
            backdropDismiss,
            message
        });
        return await loading.present().then(() => {
            if (!this.isLoading.value) {
                loading.dismiss();
            }
        });
    }

    private async closeLoading() {
        this.isLoading.next(false);
        const loader = await this.loadingController.getTop();
        if (loader) {
            return await loader.dismiss();
        }
    }
}
