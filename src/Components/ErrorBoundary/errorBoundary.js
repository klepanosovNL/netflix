import React from 'react';

const ErrorBoundary = (props) => {
    const OopsText = () => (
        <h2>
            Oops, something went wrong... We are dooing our the best to fix the issue
        </h2>
    )

    let isOk = false;

    return <>{isOk ? props.children : <OopsText />}</>
}

export default ErrorBoundary