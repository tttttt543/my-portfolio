import { animated, useSpring } from '@react-spring/web';
import { Button } from '@/components';
import './hero.css';
// import { Me } from '@static/images';
const Hero = () => {
  const isMobile = window.innerWidth < 800;
  let firstBoot;
  let secondBoot;
  !isMobile &&
    ((firstBoot = useSpring({
      from: {
        opacity: 0,
        y: 50,
      },
      to: {
        opacity: 1,
        y: 0,
      },
      delay: 1900,
      config: {
        tension: 210,
        friction: 30,
      },
    })),
    (secondBoot = useSpring({
      from: {
        opacity: 0,
        y: 30,
      },
      to: {
        opacity: 1,
        y: 0,
      },
      delay: 2200,
      config: {
        tension: 280,
        friction: 60,
      },
    })));
  return (
    <section className="hero">
      <div className="hero-box">
        <div className="text-box">
          <p className="hello-world">Hello, World!</p>
          <animated.h1 style={firstBoot} className="title">
            I'm <br className="break" /> <span className="name">Yamada Tetsuo</span>
          </animated.h1>
          <animated.div style={secondBoot}>
            <h2 className="sub-title">I build things for the Web.</h2>
            <p className="intro">
              I'm a Full Stack Developer committed to create functional and aesthetically pleasing Web Applications.{' '}
              <span className="status">I'm currently looking for new opportunities!</span>
            </p>
            <Button title="See My Projects" link="#projects" />
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
