import * as React from 'react';

import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import Link from './Link';

export default (props: any) => (
    <>
        <h1>Welcome to a tour of Go</h1>
        <h2>Using the tour</h2>
        <p>Welcome to a tour of the <Link target="_blank" href="https://golang.org/">Go programming language</Link>. The tour covers the most important features of the language, mainly:</p>
        <MessageBar className="message-bar" messageBarType={MessageBarType.info}>
            <Link href="/welcome" text="Welcome!" history={props.history} />
            <p>Learn how to use this tour: including how to navigate the different lessons and how to run code.</p>
        </MessageBar>
        <h2>Basics</h2>
        <p>The starting point, learn all the basics of the language.</p>
        <p>Declaring variables, calling functions, and all the things you need to know before moving to the next lessons.</p>
        <MessageBar className="message-bar" messageBarType={MessageBarType.info}>
            <Link href="/basics" text="Packages, variables, and functions." history={props.history} />
            <p>Learn the basic components of any Go program.</p>
        </MessageBar>
        <MessageBar className="message-bar" messageBarType={MessageBarType.info}>
            <Link href="/flowcontrol" text="Flow control statements: for, if, else, switch and defer" history={props.history} />
            <p>Learn how to control the flow of your code with conditionals, loops, switches and defers.</p>
        </MessageBar>
        <MessageBar className="message-bar" messageBarType={MessageBarType.info}>
            <Link href="/moretypes" text="More types: structs, slices, and maps." history={props.history} />
            <p>Learn how to define types based on existing ones: this lesson covers structs, arrays, slices, and maps.</p>
        </MessageBar>
        <h2>Methods and interfaces</h2>
        <p>Learn how to define methods on types, how to declare interfaces, and how to put everything together.</p>
        <MessageBar messageBarType={MessageBarType.info}>
            <Link href="/methods" text="Methods and interfaces" history={props.history} />
            <p>This lesson covers methods and interfaces, the constructs that define objects and their behavior.</p>
        </MessageBar>
        <h2>Concurrency</h2>
        <p>Go provides concurrency features as part of the core language.</p>
        <p>This module goes over goroutines and channels, and how they are used to implement different concurrency patterns.</p>
        <MessageBar messageBarType={MessageBarType.info}>
            <Link href="/concurrency" text="Concurrency" history={props.history} />
            <p>Go provides concurrency constructions as part of the core language. This lesson presents them and gives some examples on how they can be used.</p>
        </MessageBar>
        <div className="footer">
            <PrimaryButton text="Get Started" onClick={() => props.history.push('/welcome')} />
        </div>
    </>
);
