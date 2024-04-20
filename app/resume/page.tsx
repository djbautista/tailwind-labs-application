import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

import { FiArrowLeft } from 'react-icons/fi';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-neutral p-12 text-neutral-50">
      <div className="text-center">
        <h1 className="mb-2 text-5xl font-bold">MY AWESOME RESUME</h1>
        <p className="mb-12 text-xl text-neutral-200">
          Not as amazing as my personal page!
        </p>
        <div className="mb-4 flex justify-center space-x-4">
          <Link href="/">
            <Button className="demoted" variant="secondary">
              <FiArrowLeft />
              <span className="font-medium">GO BACK</span>
            </Button>
          </Link>
          <Link
            href="/davidbautista.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            locale={false}
          >
            <Button>
              <span>DOWNLOAD RESUME</span>
            </Button>
          </Link>
        </div>
        <p className="text-md mx-auto max-w-96 text-neutral-500">
          Your download should start automatically. Not seeing it? Hit above to
          do it manually.
        </p>
      </div>
    </main>
  );
}
