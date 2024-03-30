import Image from 'next/image';
import { Send, Terminal } from 'react-feather';

import Button from '@/components/Button';

import { Silkscreen } from 'next/font/google';
import classNames from 'classnames';

const silkscreen = Silkscreen({ weight: ['700'], subsets: ['latin'] });

export default function Home() {
  return (
    <main className="bg-neutral flex min-h-screen p-12">
      <section className="flex h-fit w-full flex-wrap justify-evenly gap-12">
        <div className="flex flex-col gap-8 text-neutral-50 lg:gap-12 lg:py-12">
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
              STAFF SOFTWARE ENGINEER
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
        </div>
        <div className="relative h-fit w-full max-w-lg lg:flex-1 xl:max-w-xl">
          <div
            id="dot-behind-that-will-have-the-shadow-behind-the-image"
            className="neon-secondary absolute bottom-20 left-20 right-20 top-20 z-0 rounded-full bg-neutral-900"
          ></div>
          <Image
            className="relative z-10 w-full object-contain"
            src="/myself.png"
            alt="Myself"
            width="1024"
            height="1024"
          />
        </div>
      </section>
    </main>
  );
}
