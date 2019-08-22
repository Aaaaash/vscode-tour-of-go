import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Route, Router } from 'react-router';

import Footer from './Footer';
import { vscode } from '../api';
import { Events } from '../common/event';

const welcomeHistoryStack = [
    '/welcome',
    '/welcome/golocal',
    '/welcome/gooffline',
    '/welcome/goplayground',
    '/welcome/congratulations',
];

const Welcome = () => {
    vscode.postMessage(JSON.stringify({ event: Events.openEditor, filePath: 'welcome/hello.go' }));
    return (
        <>
            <h2>Hello, 世界</h2>
            <p>Welcome to a tour of the <Link href="https://golang.org/" target="blank">Go programming language</Link>.</p>
            <p>The tour is divided into a list of modules that you can access by clicking on <Link target="self">A Tour of Go</Link> on the top left of the page.</p>
            <p>You can also view the table of contents at any time by clicking on the <Link target="self">menu</Link> on the top right of the page.</p>
            <p>Throughout the tour you will find a series of slides and exercises for you to complete.</p>
            <p>You can navigate through them using</p>
            <ul>
                <li><Link target="self">"Previous"</Link> or <code>PageUp</code> to go to the previous page,</li>
            </ul>
            <ul>
                <li><Link target="self">"Next"</Link> or <code>PageDown</code> to go to the next page.</li>
            </ul>
            <p>The tour is interactive. Click the <Link target="self">Run</Link> button now (or press <code>Shift</code> + <code>Enter</code>) to compile and run the program on a remote server. The result is displayed below the code.</p>
            <p>These example programs demonstrate different aspects of Go. The programs in the tour are meant to be starting points for your own experimentation.</p>
            <p>Edit the program and run it again.</p>
            <p>When you click on <Link target="self">Format</Link>(shortcut: <code>Ctrl</code> + <code>Enter</code>), the text in the editor is formatted using the <Link href="https://golang.org/cmd/gofmt/" target="blank">gofmt</Link> tool. You can switch syntax highlighting on and off by clicking on the <Link href="javascript:highlightAndClick(&quot;.syntax-checkbox&quot;)" target="self">syntax</Link> button.</p>
            <p>When you're ready to move on, click the <Link target="self">right arrow</Link> below or type the <code>PageDown</code> key.</p>
        </>
    );
};

const GoLocal = () => (
    <>
        <h2>Go local</h2>
        <p>The tour is available in other languages:</p>
        <ul>
            <li><Link href="https://go-tour-br.appspot.com/" target="blank">Brazilian Portuguese — Português do Brasil</Link></li>
            <li><Link href="https://go-tour-ca.appspot.com/" target="blank">Catalan — Català</Link></li>
            <li><Link href="https://tour.go-zh.org/" target="blank">Simplified Chinese — 中文（简体）</Link></li>
            <li><Link href="https://go-tour-zh-tw.appspot.com/" target="blank">Traditional Chinese — 中文（繁體）</Link></li>
            <li><Link href="https://go-tour-cz.appspot.com/" target="blank">Czech — Česky</Link></li>
            <li><Link href="https://go-tour-fr.appspot.com/" target="blank">French — Français</Link></li>
            <li><Link href="https://go-tour-de.appspot.com/" target="blank">German — Deutsch</Link></li>
            <li><Link href="https://go-tour-he.appspot.com/" target="blank">Hebrew — עִבְרִית</Link></li>
            <li><Link href="https://go-tour-id2.appspot.com/" target="blank">Indonesian — Bahasa Indonesia</Link></li>
            <li><Link href="https://go-tour-ita.appspot.com/" target="blank">Italian — Italiano</Link></li>
            <li><Link href="https://go-tour-jp.appspot.com/" target="blank">Japanese — 日本語</Link></li>
            <li><Link href="https://go-tour-kr.appspot.com/" target="blank">Korean — 한국어</Link></li>
            <li><Link href="https://go-tour-ro.appspot.com/" target="blank">Romanian — Română</Link></li>
            <li><Link href="https://go-tour-ru-ru.appspot.com/" target="blank">Russian - Русский</Link></li>
            <li><Link href="https://gotour-es.appspot.com/" target="blank">Spanish — Español</Link></li>
            <li><Link href="https://go-tour-th.appspot.com/" target="blank">Thai - ภาษาไทย</Link></li>
            <li><Link href="https://go-tour-turkish.appspot.com/" target="blank">Turkish - Türkçe</Link></li>
            <li><Link href="https://go-tour-ua.appspot.com/" target="blank">Ukrainian — Українська</Link></li>
            <li><Link href="https://go-tour-uz.appspot.com/" target="blank">Uzbek — Ўзбекча</Link></li>
        </ul>
        <p>Click the <Link target="self">"Next"</Link> button or type <code>PageDown</code> to continue.</p>
    </>
);

const GoOffline = () => (
    <>
        <h2>Go offline</h2>
        <p>This tour is also available as a stand-alone program that you can use without access to the internet.</p>
        <p>The stand-alone tour is faster, as it builds and runs the code samples on your own machine.</p>
        <p>To run the tour locally install and run the tour binary:</p>
        <pre>go get golang.org/x/tour tour</pre>
        <p>The tour program will open a web browser displaying  your local version of the tour.</p>
        <p>Or, of course, you can continue to take the tour through this web site.</p>
    </>
);

const GoPlayground = () => {
    vscode.postMessage(JSON.stringify({ event: Events.openEditor, filePath: 'welcome/sandbox.go' }));
    return (
        <>
            <h2>The Go Playground</h2>
            <p>This tour is built atop the <Link href="https://play.golang.org/" target="blank">Go Playground</Link>, a web service that runs on <Link href="https://golang.org/" target="blank">golang.org</Link>'s servers.</p>
            <p>The service receives a Go program, compiles, links, and runs the program inside a sandbox, then returns the output.</p>
            <p>There are limitations to the programs that can be run in the playground:</p>
            <ul>
                <li>In the playground the time begins at 2009-11-10 23:00:00 UTC (determining the significance of this date is an exercise for the reader). This makes it easier to cache programs by giving them deterministic output.</li>
            </ul>
            <ul>
                <li>There are also limits on execution time and on CPU and memory usage, and the program cannot access external network hosts.</li>
            </ul>
            <p>The playground uses the latest stable release of Go.</p>
            <p>Read "<Link href="https://blog.golang.org/playground" target="blank">Inside the Go Playground</Link>" to learn more.</p>
        </>
    );
}

const Congratulations = () => (
    <>
        <h2>Congratulations</h2>
        <p>You've finished the first module of the tour!</p>
        <p>Now click on <Link target="self">A Tour of Go</Link> to find out what else you can learn about Go, or go directly to the <Link href="javascript:click('.next-page')" target="self">next lesson</Link>.</p>
    </>
);

export default (props: any) => (
    <>
        <Router history={props.history}>
            <Route exact path='/welcome' component={Welcome} />
            <Route path='/welcome/golocal' component={GoLocal} />
            <Route path='/welcome/gooffline' component={GoOffline} />
            <Route path='/welcome/goplayground' component={GoPlayground} />
            <Route path='/welcome/congratulations' component={Congratulations} />
        </Router>
        <Footer
            history={props.history}
            stack={welcomeHistoryStack}
            next="/basic"
            prev="/"
        />
    </>
);
