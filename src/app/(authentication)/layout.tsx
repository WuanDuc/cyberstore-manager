export default function GuestAuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <section>
      <div className=" w-screen h-screen justify-center flex items-center">
      {children}

      </div>
      </section>;
}