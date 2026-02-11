import React from 'react';
import { FiCheck } from 'react-icons/fi';
import clsx from 'clsx';

const steps = [
    { id: 1, name: 'Envío' },
    { id: 2, name: 'Pago' },
    { id: 3, name: 'Confirmación' },
];

const CheckoutSteps = ({ currentStep }) => {
    return (
        <nav aria-label="Progress">
            <ol role="list" className="flex items-center">
                {steps.map((step, stepIdx) => (
                    <li key={step.name} className={clsx(stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative')}>
                        {step.id < currentStep ? (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="h-0.5 w-full bg-accent-600" />
                                </div>
                                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-accent-600 hover:bg-accent-500">
                                    <FiCheck className="h-5 w-5 text-white" aria-hidden="true" />
                                </div>
                            </>
                        ) : step.id === currentStep ? (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="h-0.5 w-full bg-neutral-800" />
                                </div>
                                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent-600 bg-neutral-950" aria-current="step">
                                    <span className="h-2.5 w-2.5 rounded-full bg-accent-600" aria-hidden="true" />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="h-0.5 w-full bg-neutral-800" />
                                </div>
                                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-600 bg-neutral-950 hover:border-neutral-500">
                                    <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-neutral-600" aria-hidden="true" />
                                </div>
                            </>
                        )}
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-neutral-400 w-max">
                            {step.name}
                        </span>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default CheckoutSteps;