

import './App.css';
import React, { useEffect, useState } from 'react';

import 'antd/dist/antd.css';
import './index.css';
import { Card, Col, Row } from 'antd';
import Aos from "aos";
import "aos/dist/aos.css";
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

import Player from './Player';



function App() {
  const [play, setPlay] = useState(false);
  const [url, setUrl] = useState("");
  const [data, setData] = useState("");

  const data1 = [
    // 
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"

  ]


  function playVideo(num) {

    setPlay(true)
    setData(data1[num]);
  }
  useEffect(() => {
    setUrl(data)
  }, [data])
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (

    <div style={{ position: "relative" }}  >
      <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" style={{ textAlign: "center" }}><h1 style={{ color: "darkgoldenrod" }}>Moboitics Welcomes You In the Worlds First Toon Show For Kids  </h1></div>
      <hr />
      <div className="site-card-wrapper"  >

        <Row gutter={16}  >
          <Col data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" span={8}>
            <Card title="Doremon Loves Nobita " bordered={false} style={{ backgroundColor: "cornsilk" }} >
              <div style={{ height: "400px", width: "300px" }}>
                <img onClick={() => playVideo(0)} style={{ width: "300px", height: "300px" }} src="https://i.gifer.com/1ABG.gif" />
                <p>Doraemon is a fictional character in the Japanese manga and anime series of the same name created by Fujiko Fujio, the pen name of writing team Hiroshi Fujimoto and Motoo Abiko.  </p>
              </div>
            </Card>
          </Col>
          <Col data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" span={8}>
            <Card title="Dragon Ball Z " bordered={false} style={{ backgroundColor: "white" }} >
              <div style={{ height: "400px", width: "300px" }}>
                <img onClick={() => playVideo(1)} style={{ width: "300px", height: "300px" }} src="https://thumbs.gfycat.com/AgedExcellentGrosbeak-max-1mb.gif" />
                <p>"Dragon Ball Z" follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept..  </p>
              </div>
            </Card>
          </Col>
          <Col data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" span={8}>
            <Card title="The Batman-3" bordered={false} style={{ backgroundColor: "yellow" }} >
              <div style={{ height: "400px", width: "300px" }}>
                <img onClick={() => playVideo(2)} style={{ width: "300px", height: "300px" }} src="https://i.gifer.com/origin/f1/f12cb12ab90554c315d04e4651b205c8_w200.gif" />
                <p>Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale. </p>
              </div>
            </Card>
          </Col>
          <Col data-aos="zoom-out-right" span={8}>
            <Card title="Pokemon the raisen " bordered={false} style={{ backgroundColor: "white" }} >
              <div style={{ height: "400px", width: "300px" }}>
                <img onClick={() => playVideo(3)} style={{ width: "300px", height: "300px" }} src="https://images.ctfassets.net/l3l0sjr15nav/NCqT6EmgLiydETEgvagXG/24e1571ad345881afc6e775bf6f86a82/200611-EN-GIF-GIFs-Rule.gif" />
                <p>Pokémon is a series of video games developed by Game Freak and published by Nintendo and The Pokémon Company under the Pokémon media franchise </p>
              </div>
            </Card>
          </Col>
          <Col data-aos="zoom-out-down" span={8}>
            <Card title="Black Big Bunny" bordered={false} style={{ backgroundColor: "lightgrey" }} >
              <div style={{ height: "400px", width: "300px" }}>
                <img onClick={() => playVideo(4)} style={{ width: "300px", height: "300px" }} src="https://bestanimations.com/media/cartoons/291472622minionsyesreactiongif.gif" />
                <p>Bugs Bunny is an animated cartoon character created in the late 1930s by Leon Schlesinger Productions and voiced originally by Mel Blanc </p>
              </div>
            </Card>
          </Col>
          <Col data-aos="zoom-out-left" span={8}>
            <Card title="Noddy Real Hero " bordered={false} style={{ backgroundColor: "white" }} >
              <div style={{ height: "400px", width: "300px" }}>
                <img onClick={() => playVideo(5)} style={{ width: "300px", height: "300px" }} src="https://c.tenor.com/PYndGORNv7YAAAAM/cartoons-kids.gif" />
                <p>The show follows the adventures of the mischievous yet helpful, wooden toy, Noddy, in the town of Toyland.Noddy first appeared in a book series published between 1949 and 1963 </p>
              </div>
            </Card>
          </Col>

        </Row>
      </div>
      {play &&
        <div style={{ position: "absolute", top: '0', zIndex: '10' }}>
          <div style={{ position: "fixed" }}>
            <button onClick={() => (setPlay(false))} style={{
              right: "40px",
              position: "absolute",
              top: "40px",
              zIndex: "10",
              color: "blue"
            }} >close</button>
            <Player url={url} />
          </div>
        </div>}
    </div>
  );
}

export default App;

