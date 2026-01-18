'use client';

import { FlipCard } from '@/components/animate-ui/components/community/flip-card';

const data = {
  title: 'Animate UI',
  subtitle: 'Biblioteca de componentes',
  description:
    'Una distribución de componentes animados, open-source, hecha con React, TypeScript, Tailwind CSS y Motion.',
  image:
    'https://pbs.twimg.com/profile_images/1950218390741618688/72447Y7e_400x400.jpg',
  url: 'https://github.com/animate-ui',
};

export const FlipCardDemo = () => {
  return <FlipCard data={data} />;
};
