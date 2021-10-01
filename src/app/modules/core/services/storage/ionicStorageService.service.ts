import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage'


@Injectable({
    providedIn: 'root'
})
export class IonicStorageService {
    constructor() { }

    async set(key?: string, value?: any) {
        await Storage.set({
            key,
            value
        });
    }
    async setObject(key?: string, value?: any) {
        await Storage.set({
            key,
            value: JSON.stringify(value)
        });
    }

    async get(key?: string) {
        const result = await Storage.get({ key });
        return result;
    }

    async getObject(key?: string) {
        const ret = await Storage.get({ key });
        const user = JSON.parse(ret.value);
    }
    async removeItem(key?: string) {
        await Storage.remove({ key });
    }

    async keys() {
        const { keys } = await Storage.keys();
        return keys;
    }

    async clear() {
        await Storage.clear();
    }

}
