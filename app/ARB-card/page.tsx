"use client";

import React from 'react';

export default function ARBCardPage() {
    return (
        <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
            {/* 
        Using an iframe is the safest and most robust way to embed MindAR + A-Frame within a Next.js App Router environment.
        This prevents hydration conflicts with A-Frame's custom DOM elements.
      */}
            <iframe
                src="/arb-card.html"
                style={{ width: '100%', height: '100%', border: 'none' }}
                allow="camera; gyroscope; accelerometer; magnetometer; xr-spatial-tracking; microphone"
                title="AR Board Card Experience"
            />
        </div>
    );
}
