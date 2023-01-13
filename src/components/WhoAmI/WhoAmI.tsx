import { useInView, animated } from '@react-spring/web';
import Knowledge from '../Knowledge/Knowledge';
import './whoami.css';
const WhoAmI = () => {
  const isMobile = window.innerWidth < 475;
  let ref;
  let springs;
  !isMobile &&
    ([ref, springs] = useInView(
      () => ({
        from: {
          y: 100,
          opacity: 0,
        },
        to: {
          y: -20,
          opacity: 1,
        },
        config: {
          tension: 280,
          friction: 60,
        },
      }),
      {
        once: true,
        rootMargin: '0px 0px -25% 0px',
      }
    ));
  return (
    <section id="about" className="whoami">
      <animated.div ref={ref} style={springs} className="whoami-box">
        <div className="text-box">
          <h3 className="title">About</h3>
          <p className="text">
            My name is Daniel. I'm a Front-end Web Developer based in Venezuela.
            I'm <span className="bold">passionate</span> about cutting-edge,
            pixel-perfect, responsive and dynamic user experiences.{' '}
          </p>

          <p className="text">
            It all started when I wanted to manipulate a dashboard for a
            self-hosted web service, adjust some colors, text, paddings, tweak
            here and there — at that time, I didn't imagine that hacking around{' '}
            <span className="bold">HTML</span> and{' '}
            <span className="bold">CSS</span> could get this far. It turned out
            to be <span className="bold">much</span> more than that!
          </p>

          <p className="text">
            Nowadays, I don't keep <span className="italic">hacking</span>{' '}
            around <span className="bold">HTML</span> and{' '}
            <span className="bold">CSS</span> anymore. My focus now is to
            develop things for the real world by using those, and of course{' '}
            <span className="bold">JavaScript</span>,{' '}
            <span className="bold">TypeScript</span>,{' '}
            <span className="bold">React</span>,{' '}
            <span className="bold">TailwindCSS</span>,{' '}
            <span className="bold">SCSS</span>, and many more frameworks and
            libraries that I work with every day.{' '}
            <a href="#projects" className="external-link">
              {' '}
              Let me show you what I can do with them!
            </a>
          </p>
        </div>
        <Knowledge />
      </animated.div>
    </section>
  );
};

export default WhoAmI;
