import * as React from 'react';
import { Button, PrimaryButton } from 'office-ui-fabric-react/lib/Button';

function getNextPathname(stack: string[], currentPathname: string, next: string) {
    const index = stack.findIndex((pathname) => pathname === currentPathname);
    return index < stack.length - 1 ? stack[index + 1] : next;
}

function getPrevPathname(stack: string[], currentPathname: string, prev: string) {
    const index = stack.findIndex((pathname) => pathname === currentPathname);
    return index > 0 ? stack[index - 1] : prev;
}

export default (props: any) => {
    return (
        <div className="footer">
            <span className="count">
                {props.stack.findIndex((pathname: string) => pathname === props.history.location.pathname) + 1} / {props.stack.length}
            </span>
            <Button
                className="primary-button"
                text="Previous"
                onClick={() => props.history.push(getPrevPathname(props.stack, props.history.location.pathname, props.prev))}
            />
            <PrimaryButton
                className="primary-button"
                text="Next"
                onClick={() => props.history.push(getNextPathname(props.stack, props.history.location.pathname, props.next))}
            />
        </div>
    );
};
