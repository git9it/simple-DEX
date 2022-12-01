import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import sky from '../src/images/parallax/sky.jpg';
import cloud1 from '../src/images/parallax/cloud1.png';
import cloud2 from '../src/images/parallax/cloud2.png';
import cloud3 from '../src/images/parallax/cloud3.png';
import mountBg from '../src/images/parallax/mountBg.png';
import mountFg from '../src/images/parallax/mountFg.png';
import mountMg from '../src/images/parallax/mountMg.png';

export default function App() {
  return (
    <>
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={0.4} className="section1">
          <img src={sky} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5} className="section1">
          <img src={mountBg} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6} className="section1">
          <img src={mountMg} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.7} className="section1">
          <img src={cloud2} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.8} className="section1">
          <img src={mountFg} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.9} className="section1">
          <img src={cloud1} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1} className="section1">
          <img src={cloud3} alt="" />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
