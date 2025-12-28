import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Section = ({
    id,
    title,
    subtitle,
    headline,
    content,
    visual,
    align = 'center',
    className = '',
    isHero = false
}) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 } // Trigger when 20% visible
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const alignClass = align === 'left' ? 'section-left' : (align === 'right' ? 'section-right' : 'section-center');
    const heroClass = isHero ? 'section-hero' : '';

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`section-full ${alignClass} ${heroClass} ${className} ${isVisible ? 'visible' : ''}`}
        >
            <div className={`content-wrapper fade-in ${isVisible ? 'visible' : ''}`}>
                {title && <h4 className="section-label" style={{ color: 'var(--color-primary)', borderColor: 'rgba(238, 252, 84, 0.3)' }}>{title}</h4>}
                {headline && <h2 className="section-headline">{headline}</h2>}
                {subtitle && <h3 className="section-subtitle">{subtitle}</h3>}

                <div className="section-body">
                    {typeof content === 'string' ? <p>{content}</p> : content}
                </div>
            </div>

            {visual && (
                <div className={`visual-wrapper fade-in ${isVisible ? 'visible' : ''}`}>
                    {visual}
                </div>
            )}

            {/* Background elements */}
            <div className="neural-bg"></div>
        </section>
    );
};

export default Section;
