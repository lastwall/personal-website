import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Section } from '@components/section';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getColor, useReactiveTheme } from '@lib/theme';
import Link from 'next/link';

import author from '@config/author-meta.json';
import css from './css/Hero.module.css';
import profilepic from '/public/images/saeid.jpg';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const Hero: React.FC = () => {
  const { theme } = useReactiveTheme();

  return (
    <Section header="Hi I'm Saeid 👋" id="hero">
      <figure className="md:flex rounded-md bg-gray-100 dark:bg-gray-800 p-8 mb-10 md:p-1 md:pt-2">
          <div className="relative w-80 ">
              <Image  
              src={profilepic}
              className="md:h-auto rounded-full mx-auto" 
              objectFit='cover'
              />
          </div>
        <div className="pt-6 md:p-8 text-center  md:text-left space-y-4">
          <blockquote>
            <p className="prose text-lg dark:prose-dark">
                My Name is <b>Saied Hassanpour</b>, I&apos;m a Web Developer. I have about 10 years experience in Web. I love <b>PHP</b>, <b>Laravel</b> and currently fell in love with <b>Next.js</b> and{' '}
                <b>React</b> with <b>Typescript</b><br></br>
                <Link href="/about">
                  <a>Learn More About Me</a>
                </Link>
            </p>
          </blockquote>
        </div>
      </figure>
      <div className="mt-5 grid lg:block grid-cols-2">
        {author.socials.map((social, index) => (
          <a
            className={css.social}
            href={`/${social.icon}`}
            key={index.toString()}
            style={{
              //@ts-ignore
              '--social-color': getColor(social.color, theme),
              '--social-color-hover': social.icon === 'github' || 'steam' ? getColor(['white', 'black'], theme) : 'white',
            }}
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={['fab', social.icon as IconName]} /> {capitalize(social.icon)}
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Hero;
