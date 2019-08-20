import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Route, Router } from 'react-router';

import Footer from './Footer';

const basicHistoryStack = [
    '/basic',
    '/basic/imports',
    '/basic/exportednames',
    '/basic/functions',
    '/basic/functionscontinued'
];

const Basic = () => (
    <>
        <h2>Packages</h2>
        <p>Every Go program is made up of packages.</p>
        <p>Programs start running in package <code>main</code>.</p>
        <p>This program is using the packages with import paths <code>"fmt"</code> and <code>"math/rand"</code>.</p>
        <p>By convention, the package name is the same as the last element of the import path. For instance, the <code>"math/rand"</code> package comprises files that begin with the statement <code>package rand</code>.</p>
        <p><b>Note:</b> The environment in which these programs are executed is deterministic, so each time you run the example program <code>rand.Intn</code> will return the same number.</p>
        <p>(To see a different number, seed the number generator; see <Link href="https://golang.org/pkg/math/rand/#Seed" target="_blank"><code>rand.Seed</code></Link>. Time is constant in the playground, so you will need to use something else as the seed.)</p>
    </>
);

const Imports = () => (
    <>Imports</>
);

const ExportedNames = () => (
    <>Exported Names.</>
);

const Functions = () => (
    <>Functions</>
);

const FunctionsContinued = () => (
    <>Functions Continued.</>
);

const MultipleResults = () => (
    <>Multiple Results</>
);

const NamedReturnValues = () => (
    <>Named Return Values</>
);

export default (props: any) => (
    <>
        <Router history={props.history}>
            <Route exact path='/basic' component={Basic} />
            <Route path='/basic/imports' component={Imports} />
            <Route path='/basic/exportednames' component={ExportedNames} />
            <Route path='/basic/functions' component={Functions} />
            <Route path='/basic/functionscontinued' component={FunctionsContinued} />
            <Route path='/basic/multipleresults' component={MultipleResults} />
            <Route path='/basic/namedreturnvalues' component={NamedReturnValues} />
        </Router>
        <Footer
            history={props.history}
            stack={basicHistoryStack}
            next="/methods"
            prev="/welcome/congratulations"
        />
    </>
);
