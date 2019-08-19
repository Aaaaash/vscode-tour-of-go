import * as React from 'react';

import { Link } from 'office-ui-fabric-react';

export default () => (
    <>
        <p>Hello, 世界</p>
        <p>Welcome to a tour of the Go programming language.</p>
        <p>The tour is divided into a list of modules that you can access by clicking on A Tour of Go  on the top left of the page.</p>
        <p>You can also view the table of contents at any time by clicking on the menu on the top right of the page.</p>
        <p>Throughout the tour you will find a series of slides and exercises for you to complete.</p>
        <p>You can navigate through them using</p>
        <p><Link>Previous</Link> or PageUp to go to the previous page,</p>
        <p><Link>Next</Link> or PageDown to go to the next page.</p>
    </>
);
