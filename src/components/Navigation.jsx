import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo" style={{ color: 'var(--color-primary)', letterSpacing: '3px' }}>ECHOSIGHT</div>

            {/* Desktop Links */}
            <div className="nav-links">
                <a href="#hero" className="nav-link">Home</a>
                <a href="#platform" className="nav-link">Platform</a>
                <a href="#independence" className="nav-link">Capabilities</a>
                <a href="#tech-foundation" className="nav-link">Tech</a>
                <a href="#advantages" className="nav-link">Advantages</a>
                <a href="#contact" className="btn-primary" style={{ marginLeft: '2rem', fontSize: '0.75rem', padding: '0.5rem 1rem' }}>
                    Join Us
                </a>
            </div>

            {/* Mobile Toggle */}
            <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} color="var(--color-primary)" /> : <Menu size={24} color="var(--color-primary)" />}
            </button>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <a href="#hero" className="mobile-link" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#platform" className="mobile-link" onClick={() => setIsOpen(false)}>Platform</a>
                <a href="#independence" className="mobile-link" onClick={() => setIsOpen(false)}>Capabilities</a>
                <a href="#tech-foundation" className="mobile-link" onClick={() => setIsOpen(false)}>Tech</a>
                <a href="#advantages" className="mobile-link" onClick={() => setIsOpen(false)}>Advantages</a>
                <a href="#contact" className="mobile-link" onClick={() => setIsOpen(false)} style={{ color: 'var(--color-primary)' }}>
                    Join Us
                </a>
            </div>
        </nav>
    );
};

export default Navigation;
