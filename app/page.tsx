import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
      <main className="flex flex-col items-center justify-center gap-8 text-center">
        <Image
          src="/lumax_logo.jpg"
          alt="Lumax Academy Logo"
          width={400}
          height={133}
          priority
          className="max-w-full h-auto"
        />
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Website under construction
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </main>
    </div>
  );
}
