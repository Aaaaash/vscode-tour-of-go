import * as React from 'react';

import { Link } from 'office-ui-fabric-react';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';

export default () => (
    <>
        <h1>Welcome to a tour of Go</h1>
        <h2>Using the tour</h2>
        <p>Welcome to a tour of the Go programming language. The tour covers the most important features of the language, mainly:</p>
        <MessageBar className="message-bar" messageBarType={MessageBarType.info}>
            <Link>Welcome!</Link>
            <p>Learn how to use this tour: including how to navigate the different lessons and how to run code.</p>
        </MessageBar>
        <h2>Basics</h2>
        <p>The starting point, learn all the basics of the language.</p>
        <p>Declaring variables, calling functions, and all the things you need to know before moving to the next lessons.</p>
        <MessageBar className="message-bar" messageBarType={MessageBarType.info}>
            <Link>Packages, variables, and functions.</Link>
            <p>Learn the basic components of any Go program.</p>
        </MessageBar>
        <MessageBar className="message-bar" messageBarType={MessageBarType.info}>
            <Link>Flow control statements: for, if, else, switch and defer</Link>
            <p>Learn how to control the flow of your code with conditionals, loops, switches and defers.</p>
        </MessageBar>
        <MessageBar className="message-bar" messageBarType={MessageBarType.info}>
            <Link>More types: structs, slices, and maps.</Link>
            <p>Learn how to define types based on existing ones: this lesson covers structs, arrays, slices, and maps.</p>
        </MessageBar>
        <h2>Methods and interfaces</h2>
        <p>Learn how to define methods on types, how to declare interfaces, and how to put everything together.</p>
        <MessageBar messageBarType={MessageBarType.info}>
            <Link>Methods and interfaces</Link>
            <p>This lesson covers methods and interfaces, the constructs that define objects and their behavior.</p>
        </MessageBar>
        <h2>Concurrency</h2>
        <p>Go provides concurrency features as part of the core language.</p>
        <p>This module goes over goroutines and channels, and how they are used to implement different concurrency patterns.</p>
        <MessageBar messageBarType={MessageBarType.info}>
            <Link>Concurrency</Link>
            <p>Go provides concurrency constructions as part of the core language. This lesson presents them and gives some examples on how they can be used.</p>
        </MessageBar>
    </>
);
 