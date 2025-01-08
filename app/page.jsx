export const metadata = {
  title: "Kaileb Hammontree"
};

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-black">
      <div aria-hidden="true" className="hidden sm:absolute sm:inset-y-0 sm:block sm:size-full">
        <div className="relative mx-auto h-full max-w-7xl">
          <svg
            fill="none"
            width={404}
            height={784}
            viewBox="0 0 404 784"
            className="absolute right-full translate-x-1/4 translate-y-1/4 transform lg:translate-x-1/2"
          >
            <defs>
              <pattern
                x={0}
                y={0}
                id="4522f7d5-8e8c-43ee-89bd-ad34cbfb07fa"
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-[var(--primary4)]" />
              </pattern>
            </defs>
            <rect fill="url(#4522f7d5-8e8c-43ee-89bd-ad34cbfb07fa)" width={404} height={784} />
          </svg>
          <svg
            fill="none"
            width={404}
            height={784}
            viewBox="0 0 404 784"
            className="absolute left-full -translate-x-1/4 -translate-y-3/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
          >
            <defs>
              <pattern
                x={0}
                y={0}
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-[var(--primary4)]" />
              </pattern>
            </defs>
            <rect fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" width={404} height={784} />
          </svg>
        </div>
      </div>

      <div className="relative pb-16 pt-6 sm:pb-24">
        <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[var(--primary2)] sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Welcome To</span>{' '}
              <span className="block text-[var(--primary1)] title-text xl:inline">Kaileb Hammontree</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-white sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              You've made it!

              <br></br>
              <br></br>

              Now it's time to make a decision!

              <br></br>
              <br></br>

              Are you here for Kaileb's music or are you here for web development services?!

              <br></br>
              <br></br>

              Maybe you're here for both?

              <br></br>
              <br></br>
              If you are, that's awesome - You can always get back to this page to navigate to the other portion of his website.

              <br></br>
              <br></br>

              Click on one of the buttons below to continue exploring Kaileb's website.
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="https://music.kailebhammontree.com/"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-[var(--primary1)] px-8 py-3 text-base font-medium text-white hover:bg-white hover:text-black md:px-10 md:py-4 md:text-lg"
                >
                  Music
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:ml-3 sm:mt-0">
                <a
                  href="https://solutions.kailebhammontree.com/"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-[var(--primary5)] px-8 py-3 text-base font-medium text-white hover:bg-white hover:text-black md:px-10 md:py-4 md:text-lg"
                >
                  Web Development
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
