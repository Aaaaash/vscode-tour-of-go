import * as React from 'react';
import { Link } from 'office-ui-fabric-react';

export default (props: any) => {
    return (
        <Link onClick={() => props.history.push(props.href)}>
            {props.text}
        </Link>
    );
};
