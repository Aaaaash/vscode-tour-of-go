import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Route, Router } from 'react-router';

import Footer from './Footer';
import { vscode } from '../api';
import { Events } from '../common/event';

const basicHistoryStack = [
    '/basic',
    '/basic/imports',
    '/basic/exportednames',
    '/basic/functions',
    '/basic/functionscontinued'
];

const Basic = () => {
    vscode.postMessage(JSON.stringify({ event: Events.openEditor, filePath: 'basics/packages.go' }));
    return (
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
}

const Imports = () => {
    vscode.postMessage(JSON.stringify({ event: Events.openEditor, filePath: 'basics/imports.go' }));
    return (
        <>
            <h2>Imports</h2>
            <p>This code groups the imports into a parenthesized, "factored" import statement.</p>
            <p>You can also write multiple import statements, like:</p>
            <pre>import "fmt"
            import "math"</pre>
            <p>But it is good style to use the factored import statement.</p>
        </>
    );
}

const ExportedNames = () => {
    vscode.postMessage(JSON.stringify({ event: Events.openEditor, filePath: 'basics/exported-names.go' }));
    return (
        <>
            <h2>Exported names</h2>
            <p>In Go, a name is exported if it begins with a capital letter.
                For example, <code>Pizza</code> is an exported name, as is <code>Pi</code>, which is exported from
                the <code>math</code> package.</p>
            <p><code>pizza</code> and <code>pi</code> do not start with a capital letter, so they are not exported.</p>
            <p>When importing a package, you can refer only to its exported names. Any "unexported" names are not accessible from outside the package.</p>
            <p>Run the code. Notice the error message.</p>
            <p>To fix the error, rename <code>math.pi</code> to <code>math.Pi</code> and try it again.</p>
        </>
    );
}

const Functions = () => {
    vscode.postMessage(JSON.stringify({ event: Events.openEditor, filePath: 'basics/functions.go' }));
    return (
        <>
            <h2>Functions</h2>
            <p>A function can take zero or more arguments.</p>
            <p>In this example, <code>add</code> takes two parameters of type <code>int</code>.</p>
            <p>Notice that the type comes <i>after</i> the variable name.</p>
            <p>(For more about why types look the way they do, see the <a href="https://blog.golang.org/gos-declaration-syntax" target="blank">article on Go's declaration syntax</a>.)</p>
        </>
    );
}

const FunctionsContinued = () => {
    vscode.postMessage(JSON.stringify({ event: Events.openEditor, filePath: 'basics/functions-continued.go' }));
    return (
        <>
            <h2>Functions continued</h2>
            <p>When two or more consecutive named function parameters share a type, you can omit the type from all but the last.</p>
            <p>In this example, we shortened</p>
            <pre>x int, y int</pre>
            <p>to</p>
            <pre>x, y int</pre>
        </>
    );
}

const MultipleResults = () => {
    vscode.postMessage(JSON.stringify({ event: Events.openEditor, filePath: 'basics/multiple-results.go' }));
    return (
        <>
            <h2>Multiple results</h2>
            <p>A function can return any number of results.</p>
            <p>The <code>swap</code> function returns two strings.</p>
        </>
    );
}

const NamedReturnValues = () => {
    vscode.postMessage(JSON.stringify({ event: Events.openEditor, filePath: 'basics/named-results.go' }));
    return (
        <>
            <h2>Named return values</h2>
            <p>Go's return values may be named. If so, they are treated as variables defined at the top of the function.</p>
            <p>These names should be used to document the meaning of the return values.</p>
            <p>A <code>return</code> statement without arguments returns the named return values. This is known as a "naked" return.</p>
            <p>Naked return statements should be used only in short functions, as with the example shown here. They can harm readability in longer functions.</p>
        </>
    );
}

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
