import './globals.css';

export const metadata = {
  title: 'Luke Carter — Unreal Developer · Computer Software · C++',
  description: 'Luke Carter is a Computer Science student at the University of Central Arkansas building gameplay systems in Unreal Engine 5 and networked software in Java and C++.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth bg-black">
      <body className="bg-black text-zinc-100 font-sans antialiased min-h-screen selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
