import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#000000]">
        <div className="fixed left-0 top-0 gap-12 justify-self-start px-4 py-4 ">
          <img src="/favicon.png" alt="logo" className="h-20 w-20" />
        </div>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Home Page
          </h1>
        </div>
      </main>
    </>
  );
}
