import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Switch, Route } from 'react-router';

const Welcome = () => (
    <>
    <h2>Hello, 世界</h2>
        <p>Welcome to a tour of the <Link href="https://golang.org/" target="_blank">Go programming language</Link>.</p>
        <p>The tour is divided into a list of modules that you can access by clicking on <Link href="javascript:highlight(&quot;.logo&quot;)" target="_self">A Tour of Go</Link> on the top left of the page.</p>
        <p>You can also view the table of contents at any time by clicking on the <Link href="javascript:highlightAndClick(&quot;.nav&quot;)" target="_self">menu</Link> on the top right of the page.</p>
        <p>Throughout the tour you will find a series of slides and exercises for you to complete.</p>
        <p>You can navigate through them using</p>
        <ul>
            <li><Link href="javascript:highlight(&quot;.prev-page&quot;)" target="_self">"Previous"</Link> or <code>PageUp</code> to go to the previous page,</li>
        </ul>
        <ul>
            <li><Link href="javascript:highlight(&quot;.next-page&quot;)" target="_self">"Next"</Link> or <code>PageDown</code> to go to the next page.</li>
        </ul>
        <p>The tour is interactive. Click the <Link href="javascript:highlightAndClick(&quot;#run&quot;)" target="_self">Run</Link> button now (or press <code>Shift</code> + <code>Enter</code>) to compile and run the program on a remote server. The result is displayed below the code.</p>
        <p>These example programs demonstrate different aspects of Go. The programs in the tour are meant to be starting points for your own experimentation.</p>
        <p>Edit the program and run it again.</p>
        <p>When you click on <Link href="javascript:highlightAndClick(&quot;#format&quot;)" target="_self">Format</Link>(shortcut: <code>Ctrl</code> + <code>Enter</code>), the text in the editor is formatted using the <Link href="https://golang.org/cmd/gofmt/" target="_blank">gofmt</Link> tool. You can switch syntax highlighting on and off by clicking on the <Link href="javascript:highlightAndClick(&quot;.syntax-checkbox&quot;)" target="_self">syntax</Link> button.</p>
        <p>When you're ready to move on, click the <Link href="javascript:highlightAndClick(&quot;.next-page&quot;)" target="_self">right arrow</Link> below or type the <code>PageDown</code> key.</p>
    </>
);

const GoLocal = () => (
    <>
        <h2>Go local</h2>
        <p>The tour is available in other languages:</p>
        <ul>
            <li><Link href="https://go-tour-br.appspot.com/" target="_blank">Brazilian Portuguese — Português do Brasil</Link></li>
            <li><Link href="https://go-tour-ca.appspot.com/" target="_blank">Catalan — Català</Link></li>
            <li><Link href="https://tour.go-zh.org/" target="_blank">Simplified Chinese — 中文（简体）</Link></li>
            <li><Link href="https://go-tour-zh-tw.appspot.com/" target="_blank">Traditional Chinese — 中文（繁體）</Link></li>
            <li><Link href="https://go-tour-cz.appspot.com/" target="_blank">Czech — Česky</Link></li>
            <li><Link href="https://go-tour-fr.appspot.com/" target="_blank">French — Français</Link></li>
            <li><Link href="https://go-tour-de.appspot.com/" target="_blank">German — Deutsch</Link></li>
            <li><Link href="https://go-tour-he.appspot.com/" target="_blank">Hebrew — עִבְרִית</Link></li>
            <li><Link href="https://go-tour-id2.appspot.com/" target="_blank">Indonesian — Bahasa Indonesia</Link></li>
            <li><Link href="https://go-tour-ita.appspot.com/" target="_blank">Italian — Italiano</Link></li>
            <li><Link href="https://go-tour-jp.appspot.com/" target="_blank">Japanese — 日本語</Link></li>
            <li><Link href="https://go-tour-kr.appspot.com/" target="_blank">Korean — 한국어</Link></li>
            <li><Link href="https://go-tour-ro.appspot.com/" target="_blank">Romanian — Română</Link></li>
            <li><Link href="https://go-tour-ru-ru.appspot.com/" target="_blank">Russian - Русский</Link></li>
            <li><Link href="https://gotour-es.appspot.com/" target="_blank">Spanish — Español</Link></li>
            <li><Link href="https://go-tour-th.appspot.com/" target="_blank">Thai - ภาษาไทย</Link></li>
            <li><Link href="https://go-tour-turkish.appspot.com/" target="_blank">Turkish - Türkçe</Link></li>
            <li><Link href="https://go-tour-ua.appspot.com/" target="_blank">Ukrainian — Українська</Link></li>
            <li><Link href="https://go-tour-uz.appspot.com/" target="_blank">Uzbek — Ўзбекча</Link></li>
        </ul>
        <p>Click the <Link href="javascript:highlightAndClick(&quot;.next-page&quot;)" target="_self">"Next"</Link> button or type <code>PageDown</code> to continue.</p>
    </>
);

export default () => (
    <>
        <Switch>
            <Route exact path='/welcome' component={Welcome} />
            <Route path='/welcome/2' component={GoLocal} />
        </Switch>
    </>
);
