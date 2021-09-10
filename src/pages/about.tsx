import type { GetStaticProps } from 'next';
import { Section } from '@components/section';
import Image  from 'next/image'
import { getByPath } from '@lib/mdx';
import imageUrl from 'public/images/saeid2.jpg';

import MDX from '@components/mdx';

const extensions = [
  {
    name: 'Bracket Pair Colorizer 2',
    item: 'CoenraadS.bracket-pair-colorizer-2',
  },
  {
    name: 'Eslint',
    item: 'dbaeumer.vscode-eslint',
  },
  {
    name: 'Git History',
    item: 'donjayamanne.githistory',
  },
  {
    name: 'GitLens - Git supercharged',
    item: 'eamodio.gitlens',
  },
  {
    name: 'Material Icon Theme',
    item: 'pkief.material-icon-theme',
    iconTheme: true,
  },
  {
    name: 'Night Owl',
    item: 'sdras.night-owl',
    colorTheme: true,
  },
  {
    name: 'Prettier - Code formatter',
    item: 'esbenp.prettier-vscode',
  },
  {
    name: 'Remote - Containers',
    item: 'ms-vscode-remote.remote-containers',
  },
  {
    name: 'Tailwind CSS IntelliSense',
    item: 'bradlc.vscode-tailwindcss',
  },
  {
    name: 'Visual Studio IntelliCode',
    item: 'visualstudioexptteam.vscodeintellicode',
  },
];

interface AboutProps {
  about: Record<string, any>;
}

const About: Page<AboutProps> = ({ about }) => {
  return <MDX scope={ {extensions,imageUrl}} components={{ Section,Image }} mdxSource={about.mdxSource} />;
};

About.layoutProps = {
  title: 'About LastWall ',
  description: `Hi my name is Saeid Hassanpour. I was born in Iran/Gilan. I have got my Bachelor's degree in computer engineering at the Karaj PNU university.`,
};

export const getStaticProps: GetStaticProps = async () => {
  const about = await getByPath('about');
  return {
    props: {
      about,
    },
  };
};

export default About;
