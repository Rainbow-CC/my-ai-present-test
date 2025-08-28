import React, { useState } from 'react';

interface ZoomableImageProps {
    src: string;
    alt: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ src, alt }) => {
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <div
            className={`mx-auto mt-8 cursor-pointer transition-all duration-500 ease-in-out ${isZoomed ? 'max-w-full' : 'max-w-2xl'}`}
            onClick={() => setIsZoomed(!isZoomed)}
        >
            <img
                src={src}
                alt={alt}
                className="w-full rounded-lg shadow-lg"
            />
        </div>
    );
};

export default ZoomableImage;