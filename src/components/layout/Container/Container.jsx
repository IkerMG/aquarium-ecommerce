import React from 'react';
import clsx from 'clsx';

const Container = ({ children, className, fluid = false }) => {
    return (
        <div
            className={clsx(
                'mx-auto px-6 w-full',
                {
                    'container': !fluid,
                    'max-w-full': fluid
                },
                className
            )}
        >
            {children}
        </div>
    );
};

export default Container;