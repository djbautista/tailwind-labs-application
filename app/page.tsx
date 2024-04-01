import classNames from 'classnames';
import { Silkscreen } from 'next/font/google';
import Image from 'next/image';
import { Send, Terminal } from 'react-feather';

import Button from '@/components/Button';
import Card from '@/components/Card';
import { twMerge } from 'tailwind-merge';

const silkscreen = Silkscreen({ weight: ['700'], subsets: ['latin'] });

interface TailwindnizerProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary';
}

const Tailwindnizer = ({
  children,
  variant,
  className,
  ...props
}: TailwindnizerProps) => (
  <span
    {...props}
    className={twMerge(
      'font-light',
      variant === 'secondary' ? 'text-secondary-500' : 'text-primary-500',
      className,
    )}
  >
    {children}
  </span>
);

const Preface = ({ className }: React.HTMLAttributes<HTMLDivElement>) => (
  <Card
    className={twMerge(['flex', 'w-fit', 'flex-col', 'gap-2'], className)}
    variant="secondary"
  >
    <p className="text-md text-italic max-w-[500px] font-light leading-6">
      I&apos;m applying to <Tailwindnizer>Tailwind Labs.</Tailwindnizer> because
      I truly feel in my heart that there&apos;s a spot for me here, a space
      where I could share my creativity and quick-thinking, fueled by the
      passion and unique skills I&apos;ve honed so far.
    </p>
    <p className="pr-3 text-right">— David B.</p>
  </Card>
);

const Section = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => (
  <section
    className={twMerge(
      ['flex', 'w-full', 'flex-wrap', 'justify-evenly', 'gap-12'],
      className,
    )}
  >
    {children}
  </section>
);

export default function Home() {
  return (
    <main className="min-h-screen flex-col bg-neutral p-12 text-neutral-50">
      <Section>
        <div className="flex flex-col gap-8 lg:gap-12 lg:py-8">
          <div className="w-full">
            <h3 className="mb-2 text-2xl font-light lg:mb-4 lg:text-4xl xl:mb-6 xl:text-5xl">
              Hi, I&apos;m
            </h3>
            <h1
              className={classNames([
                'mb-4 text-5xl lg:mb-6 xl:mb-8 xl:text-6xl',
                silkscreen.className,
              ])}
            >
              DAVID BAUTISTA
            </h1>
            <h2 className="text-xl font-extralight lg:text-2xl xl:text-3xl">
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
          <div className="absolute bottom-20 left-20 right-20 top-20 z-0 rounded-full bg-neutral-900 neon-secondary"></div>
          <Image
            className="relative z-10 w-full object-contain"
            src="/myself.png"
            alt="Myself"
            width="1024"
            height="1024"
          />
        </div>
        <Preface className="block lg:hidden" />
      </Section>
      <Section className="block py-24 text-center">
        <h3 className="mb-12 text-2xl font-medium">— About Me —</h3>
        <div className="flex w-full flex-col items-center gap-4 text-justify font-extralight lg:gap-8 lg:p-12">
          <p>
            I am a Software Engineer —<b>Product Enginner</b>— with more than 8
            years of experience in Full-Stack development, and more than 3
            leading Front-End teams. And when I said Full-Stack, I mean it. I
            have experience in everything end-to-end: from the database, to the
            user interface; from data visualization, to building robust back-end
            services; from SEO optimization and performance tuning, to software
            architecture with AWS services to deploy entire applications... and
            much more.
          </p>
          <p className="hidden lg:block">
            I specialize in crafting high-quality, accessible user interfaces
            with a focus on performance and what I like to call &quot;UX
            Smothness&quot;. My expertise in the JavaScript and TypeScript
            ecosystems —particularly with <Tailwindnizer>React</Tailwindnizer>,
            and <Tailwindnizer>Node.js</Tailwindnizer>— allows me to bring all
            the time the best practices and the latest technologies to the
            table.
          </p>
          <p>
            Of course, I am still under construction, all we are forever.
            However, with my Master&apos;s in Software Engineering underway, I
            am pretty sure that I am on the right path to join eventually a team
            like <Tailwindnizer>Tailwind Labs</Tailwindnizer>. And that&apos;s
            something else that makes me shine all the time:{' '}
            <b>I am a —really— crazy fast learner</b>. I have a couple of
            stories about how I learned a new technology in a weekend and then
            implemented it in a production environment the next Monday without
            any bugs or issues.
          </p>
          <p className="my-3 flex flex-col gap-3 text-center font-normal lg:text-left lg:text-lg">
            <span className="flex flex-col gap-x-1 gap-y-3 lg:flex-row">
              <span>I am a problem solver, and I love to be one.</span>
              <span>I am a team player, and I love to be one.</span>
            </span>
            <span className="hidden lg:block">
              <span>
                I am a mentor, and I love to be one. I am a leader, and I love
                to be one.
              </span>
            </span>
            <span>
              I am a Software/Product Engineer, and{' '}
              <Tailwindnizer className="font-normal" variant="secondary">
                I love to be one.
              </Tailwindnizer>
            </span>
          </p>
          <p className="lg:text-xl">
            I am truly eager to give this experience to contribute to Tailwind
            CSS, Headless UI, and new projects comming soon.
          </p>
        </div>
      </Section>
    </main>
  );
}
