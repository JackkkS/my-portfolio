import NavBar from './NavBar';
import Social from './Social';
import ReactTypingEffect from 'react-typing-effect';
import { useTheme } from './ThemeContext';

function Home() {
  const { isLightMode ,bgColorClass, textClass } = useTheme();

  return (
    <div>
      <NavBar />
      <div className={`min-h-screen flex items-center justifly-center font-mono  ${isLightMode}? ${bgColorClass} ${textClass} `}>
        <div className="container mx-auto px-4">
          <div>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-7 p-5 text-center">Punyapon Meekeaw</h3>
            <ReactTypingEffect text={["I'm a Web Developer"]} speed={100} eraseDelay={900} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl flex my-4 p-5 sm:p-10 justify-center"/>
          </div>
          <Social />
        </div>
      </div>
    </div>
  );
}

export default Home;
