import style from './HeroSection.module.css';

const Hero = () => {
  return (
    <header className='flex flex-col items-center text-center p-6  overflow-hidden desktop:flex-row desktop:justify-around desktop:items-start desktop:mt-10  '>
      <div className='relative '>
        <div className='rotate-[-80deg] absolute  left-[-5.5rem] bottom-12 desktop:top-0  '>
          <h2
            className={`text-neutral text-lg  mb-2 desktop:text-2xl  ${style.welcome} `}
          >
            Welcome to
          </h2>
        </div>

        <h1
          className={`font-heading text-5xl mt-8 font-bold desktop:text-9xl ${style.name}`}
        >
          Veronica <br /> Strand
        </h1>
      </div>

      <div className={`p-10 ${style.quote}`}>
        <h2 className='font-heading desktop:text-2xl p-2 text-neutral'>
          Fullstack Developer
        </h2>
        <blockquote
          className={`font-body text-accent tracking-widest desktop:max-w-2xl desktop:text-2xl   `}
        >
          “It’s an endless journey of growth, and that’s what excites me the
          most. Whether it’s mastering a new technology, refining my skills, or
          solving complex problems, I’m always eager to push myself further.”
        </blockquote>
      </div>
    </header>
  );
};

export default Hero;
