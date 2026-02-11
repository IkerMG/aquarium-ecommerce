import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

/**
 * Button Component - Modern, elegant, and highly customizable
 * 
 * @param {Object} props
 * @param {'primary'|'secondary'|'outline'|'ghost'|'danger'} props.variant - Button style variant
 * @param {'sm'|'md'|'lg'|'xl'} props.size - Button size
 * @param {boolean} props.fullWidth - Make button full width
 * @param {boolean} props.loading - Show loading state
 * @param {boolean} props.disabled - Disable button
 * @param {React.ReactNode} props.leftIcon - Icon to display on the left
 * @param {React.ReactNode} props.rightIcon - Icon to display on the right
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Button content
 */
const Button = ({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    loading = false,
    disabled = false,
    leftIcon,
    rightIcon,
    onClick,
    className,
    children,
    type = 'button',
    ...props
}) => {

    // Base styles - Always applied
    const baseStyles = clsx(
        'inline-flex items-center justify-center gap-2',
        'font-medium transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-60',
        'relative overflow-hidden',
        {
            'w-full': fullWidth,
            'cursor-not-allowed': disabled || loading,
        }
    );

    // Variant styles
    const variantStyles = {
        primary: clsx(
            'bg-gradient-to-r from-primary-500 to-primary-600',
            'text-white shadow-elegant',
            'hover:from-primary-600 hover:to-primary-700',
            'hover:shadow-elegant-lg hover:-translate-y-0.5',
            'active:translate-y-0',
            'focus:ring-primary-500',
            'disabled:hover:translate-y-0 disabled:hover:shadow-elegant'
        ),
        secondary: clsx(
            'bg-gradient-to-r from-secondary-500 to-secondary-600',
            'text-white shadow-elegant',
            'hover:from-secondary-600 hover:to-secondary-700',
            'hover:shadow-elegant-lg hover:-translate-y-0.5',
            'active:translate-y-0',
            'focus:ring-secondary-500',
            'disabled:hover:translate-y-0 disabled:hover:shadow-elegant'
        ),
        outline: clsx(
            'bg-transparent border-2 border-primary-500',
            'text-primary-600 hover:text-white',
            'hover:bg-primary-500 hover:border-primary-600',
            'hover:shadow-md hover:-translate-y-0.5',
            'active:translate-y-0',
            'focus:ring-primary-500',
            'disabled:hover:bg-transparent disabled:hover:text-primary-600',
            'disabled:hover:translate-y-0'
        ),
        ghost: clsx(
            'bg-transparent text-neutral-700',
            'hover:bg-neutral-100 hover:text-neutral-900',
            'focus:ring-neutral-400',
            'disabled:hover:bg-transparent'
        ),
        danger: clsx(
            'bg-gradient-to-r from-error to-red-600',
            'text-white shadow-elegant',
            'hover:from-red-600 hover:to-red-700',
            'hover:shadow-elegant-lg hover:-translate-y-0.5',
            'active:translate-y-0',
            'focus:ring-error',
            'disabled:hover:translate-y-0 disabled:hover:shadow-elegant'
        ),
    };

    // Size styles
    const sizeStyles = {
        sm: 'px-3 py-1.5 text-sm rounded-md',
        md: 'px-5 py-2.5 text-base rounded-lg',
        lg: 'px-6 py-3 text-lg rounded-lg',
        xl: 'px-8 py-4 text-xl rounded-xl',
    };

    // Loading spinner
    const LoadingSpinner = () => (
        <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            />
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
        </svg>
    );

    return (
        <motion.button
            type={type}
            className={clsx(
                baseStyles,
                variantStyles[variant],
                sizeStyles[size],
                className
            )}
            onClick={onClick}
            disabled={disabled || loading}
            whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
            {...props}
        >
            {/* Ripple effect overlay */}
            <span className="absolute inset-0 overflow-hidden rounded-inherit">
                <span className="absolute inset-0 bg-white/20 transform scale-0 rounded-full transition-transform duration-500 group-active:scale-100" />
            </span>

            {/* Content */}
            <span className="relative flex items-center gap-2">
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    leftIcon && <span className="flex-shrink-0">{leftIcon}</span>
                )}

                {children && (
                    <span className={clsx({ 'opacity-0': loading && !leftIcon && !rightIcon })}>
                        {children}
                    </span>
                )}

                {!loading && rightIcon && (
                    <span className="flex-shrink-0">{rightIcon}</span>
                )}
            </span>
        </motion.button>
    );
};

export default Button;