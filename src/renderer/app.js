import xs from 'xstream';
import { run } from '@cycle/xstream-run';
import { makeDOMDriver } from '@cycle/dom';
import { html } from 'snabbdom-jsx';

const main = () => {
    return {
        DOM: xs.periodic(1000)
            .map(i =>
                <div>
                    <h1>{i} seconds elapsed</h1>
                </div>
            )
    };
};

const drivers = {
    DOM: makeDOMDriver('#app')
};

run(main, drivers);