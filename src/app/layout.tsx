import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
const inter = localFont({src:'./fonts/Inter.ttf',variable:'--font-inter',display:'swap',weight:'100 900'});
const display = localFont({src:'./fonts/SpaceGrotesk.ttf',variable:'--font-display',display:'swap',weight:'300 700'});
const mono = localFont({src:'./fonts/JetBrainsMono.ttf',variable:'--font-mono',display:'swap',weight:'100 800'});
export const metadata: Metadata = {
  title:'Syed Saleh | Software, Data & Applied AI',
  description:'Explore Syed Saleh’s work in software development, Virginia Tech Baseball analytics, LLVM research, and applied AI.',
  metadataBase:new URL('https://syedsaleh.dev'),
  openGraph:{title:'Syed Saleh | Software, Data & Applied AI',description:'A different perspective on software, data, and compiler research.',type:'website'},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) {
  return <html lang="en"><body className={`${inter.variable} ${display.variable} ${mono.variable}`}>{children}</body></html>;
}
