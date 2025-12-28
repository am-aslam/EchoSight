import React, { useRef, useState } from 'react';
import explodedImg from '../assets/hardware_exploded.png';
import { Layers, Zap, Wifi } from 'lucide-react';

const HardwareViewer = () => {
    const containerRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        // Calculate rotation (-15deg to 15deg)
        const rotateY = (x - 0.5) * 30;
        const rotateX = (0.5 - y) * 30;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            className="hardware-viewer-container"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="hardware-card"
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                }}
            >
                <div className="hardware-image-wrapper">
                    <img src={explodedImg} alt="Exploded Hardware View" className="hardware-model" />
                    <div className="scan-line"></div>

                    {/* Floating Hotspots */}
                    <div className="hotspot" style={{ top: '20%', left: '50%', transform: 'translateZ(40px)' }}>
                        <div className="hotspot-dot"></div>
                        <div className="hotspot-label">
                            <Layers size={14} /> Neural Chip
                        </div>
                    </div>

                    <div className="hotspot" style={{ top: '60%', left: '20%', transform: 'translateZ(60px)' }}>
                        <div className="hotspot-dot"></div>
                        <div className="hotspot-label">
                            <Zap size={14} /> Power Core
                        </div>
                    </div>

                    <div className="hotspot" style={{ top: '40%', right: '20%', transform: 'translateZ(50px)' }}>
                        <div className="hotspot-dot"></div>
                        <div className="hotspot-label">
                            <Wifi size={14} /> Signal Tx
                        </div>
                    </div>
                </div>
            </div>

            <div className="viewer-controls">
                <span>INTERACTIVE 3D MODEL</span>
                <div className="controls-hint">MOVE CURSOR TO ROTATE</div>
            </div>
        </div>
    );
};

export default HardwareViewer;
