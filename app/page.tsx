import classNames from 'classnames';
import { Silkscreen } from 'next/font/google';
import Image from 'next/image';
import { Send, Terminal } from 'react-feather';

import Button from '@/components/Button';
import Card from '@/components/Card';
import { twMerge } from 'tailwind-merge';

const silkscreen = Silkscreen({ weight: ['700'], subsets: ['latin'] });

const Preface = ({ className }: React.HTMLAttributes<HTMLDivElement>) => (
  <Card
    className={twMerge(
      ['flex', 'w-fit', 'flex-col', 'gap-2', 'text-neutral-50'],
      className,
    )}
    variant="secondary"
  >
    <p className="text-md text-italic max-w-[500px] leading-6">
      I{`'`}m applying to{' '}
      <span className="text-primary-500">Tailwind Labs.</span> because I truly
      feel in my heart that there{`'`}s a spot for me here, a space where I
      could share my creativity and quick-thinking, fueled by the passion and
      unique skills I{`'`}ve honed so far.
    </p>
    <p className="pr-3 text-right">— David B.</p>
  </Card>
);

export default function Home() {
  return (
    <main className="bg-neutral flex min-h-screen p-12">
      <section className="flex h-fit w-full flex-wrap justify-evenly gap-12">
        <div className="flex flex-col gap-8 text-neutral-50 lg:gap-12 lg:py-8">
          <div className="w-full">
            <h3 className="mb-2 text-2xl lg:mb-4 lg:text-4xl xl:mb-6 xl:text-5xl">
              {"Hi, I'm"}
            </h3>
            <h1
              className={classNames([
                'mb-4 text-5xl lg:mb-6 xl:mb-8 xl:text-6xl',
                silkscreen.className,
              ])}
            >
              DAVID BAUTISTA
            </h1>
            <h2 className="text-xl font-bold lg:text-2xl xl:text-3xl">
              YOUR NEXT STAFF SOFTWARE ENGINEER
            </h2>
          </div>
          <div className="flex gap-8">
            <Button>
              <span>Say Hello</span>
              <Send />
            </Button>
            <Button className="demoted" variant="secondary">
              <span>My Work</span>
              <Terminal />
            </Button>
          </div>
          <Preface className="hidden lg:flex" />
        </div>
        <div className="relative h-fit w-full max-w-lg lg:flex-1 xl:max-w-xl">
          <div className="neon-secondary absolute bottom-20 left-20 right-20 top-20 z-0 rounded-full bg-neutral-900"></div>
          <Image
            className="relative z-10 w-full object-contain"
            src="/myself.png"
            alt="Myself"
            width="1024"
            height="1024"
          />
        </div>
        <Preface className="block lg:hidden" />
      </section>
    </main>
  );
}
