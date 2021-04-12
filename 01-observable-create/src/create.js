import { displayLog } from './utils';
import { Observable } from 'rxjs';

export default () => {
    /** start coding */

    const hello = Observable.create(function (obseerver) {
        obseerver.next("Hello");
        setTimeout(() => {
            obseerver.next("World");
        }, 2000);

    });

    const subscribe = hello.subscribe(evt => displayLog(evt));


    /** end coding */
}