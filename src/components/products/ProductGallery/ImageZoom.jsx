import React, { useState } from 'react';

const ImageZoom = ({ src, alt }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [showZoom, setShowZoom] = useState(false);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setPosition({ x, y });
    };

    return (
        <div
            className="relative overflow-hidden rounded-lg bg-gray-100 w-full h-96 sm:h-[500px] cursor-crosshair group"
            onMouseEnter={() => setShowZoom(true)}
            onMouseLeave={() => setShowZoom(false)}
            onMouseMove={handleMouseMove}
        >
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover object-center"
            />

            {/* Lupa / Zoom Overlay */}
            {showZoom && (
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundPosition: `${position.x}% ${position.y}%`,
                        backgroundSize: '250%', // Cuánto zoom aplica
                        backgroundRepeat: 'no-repeat'
                    }}
                />
            )}
        </div>
    );
};

export default ImageZoom;