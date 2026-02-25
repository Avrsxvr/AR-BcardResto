'use client';

import React, { useEffect, useRef, useState } from 'react';
import 'mind-ar-ts';

export default function ARScanner() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (!started) return;

        // This is where we would initialize MindAR.
        // Since we don't have the .mind file yet, this is a placeholder structure.
        // You will need to compile your target images into a targets.mind file
        // and place it in the public/ folder.

        console.log("AR Experience Started");

        // Example initialization (commented out until assets are ready):
        /*
        const mindThree = new window.MINDAR.IMAGE.MindARThree({
          container: containerRef.current,
          imageTargetSrc: '/targets.mind',
        });
        
        const {renderer, scene, camera} = mindThree;
        
        const anchor = mindThree.addAnchor(0);
        const geometry = new THREE.PlaneGeometry(1, 0.55);
        const material = new THREE.MeshBasicMaterial( {color: 0x00ffff, transparent: true, opacity: 0.5} );
        const plane = new THREE.Mesh( geometry, material );
        anchor.group.add(plane);
        
        mindThree.start();
        
        renderer.setAnimationLoop(() => {
          renderer.render(scene, camera);
        });
        */

        return () => {
            // Cleanup logic here
            // mindThree.stop();
        };
    }, [started]);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            {!started && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/80 text-white p-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">Ready to Explore?</h2>
                    <p className="mb-6 max-w-md">
                        Point your camera at the menu images to see the magic happen.
                        Ensure you are in a well-lit environment.
                    </p>
                    <button
                        onClick={() => setStarted(true)}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
                    >
                        Start AR Camera
                    </button>
                </div>
            )}

            <div
                ref={containerRef}
                className="w-full h-full"
            >
                {/* AR Canvas will be injected here by MindAR */}
                {started && (
                    <div className="absolute top-4 left-0 w-full text-center text-white/50 pointer-events-none">
                        <p>Scanning for targets...</p>
                        {/* Placeholder visual since MindAR isn't actually running yet */}
                        <div className="mt-20 border-2 border-orange-500/50 w-64 h-64 mx-auto rounded-lg animate-pulse" />
                    </div>
                )}
            </div>

            {/* UI Overlay for AR Mode */}
            {started && (
                <div className="absolute bottom-8 left-0 w-full flex justify-center z-50">
                    <button
                        onClick={() => setStarted(false)}
                        className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full text-sm"
                    >
                        Exit AR
                    </button>
                </div>
            )}
        </div>
    );
}
