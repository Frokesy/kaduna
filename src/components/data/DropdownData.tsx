import { BotIcon, MissionIcon } from '../Icons';

export const aboutDropdown = [
  {
    id: 1,
    title: 'About us',
    excerpt: 'Building bridges through interfaith understanding and education.',
    link: '/about',
    icon: <MissionIcon />,
  },
  {
    id: 2,
    title: 'Board of trustees',
    excerpt: 'Guided by visionaries dedicated to peace and mutual respect.',
    link: '/about/b.o.t',
    icon: <BotIcon />,
  },
  {
    id: 3,
    title: 'Staff',
    excerpt: 'A committed team empowering communities through shared values.',
    link: '/about/staff',
    icon: <BotIcon />,
  },
];

export const mediaDropdown = [
  {
    id: 1,
    title: 'News',
    excerpt: 'The latest industry news, updates, and info',
    link: '/media/news',
    icon: <MissionIcon />,
  },
  {
    id: 2,
    title: 'Watch Videos',
    excerpt: 'Learn how our customers are making big changes',
    link: '/media/videos',
    icon: <BotIcon />,
  },
  {
    id: 3,
    title: 'Gallery',
    excerpt: 'Get up and running on new features and techniques',
    link: '#',
    icon: <BotIcon />,
  },
];
