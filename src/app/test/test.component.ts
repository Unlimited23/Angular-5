import { Component } from '@angular/core';

@Component({
    selector: 'test-app',
    templateUrl: './test.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class TestComponent {
    peshoId: number = 10;
    serverStatus: boolean = true;
    pesho: string = '';

    constructor() {
        this.serverStatus = Math.random() > 0.5;
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getId() {
        return this.peshoId;
    }

    isServerOnline() {
        return 'The server  is \'online\'';
    }

    isServerOffline() {
        return 'The server is \'offline\'';
    }

    checkServerStatus() {
        return this.getServerStatus() === true ? this.isServerOnline() : this.isServerOffline();
    }

    getColor() {
        return this.getServerStatus() === true ? 'green' : 'red';
    }
}