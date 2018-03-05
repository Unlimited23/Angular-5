import { Component } from '@angular/core';

@Component({
    selector: 'test-app',
    templateUrl: './test.component.html',
})
export class TestComponent {
    peshoId: number = 10;
    isOnline: boolean = true;
    pesho: string = '';

    getOnline() {
        return this.isOnline;
    }

    getId() {
        return this.peshoId;
    }
}