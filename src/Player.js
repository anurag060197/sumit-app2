import React from 'react'
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';
function Player({ url }) {
    return (
        <div style={{ width: "100vw", height: "100vh", backgroundColor: "black", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "80vw", height: "80vh" }}>
                <ShakaPlayer autoPlay src={url} />
            </div>
        </div>
    )
}

export default Player

