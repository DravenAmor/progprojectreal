import "~/styles/globals.css";
import UploadThangButton from "./_components/button";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'



export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (

    <ClerkProvider>
    <html lang="en">
      <body>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadThangButton/>
          <UserButton />
        </SignedIn>
        {children}
      </body>
    </html>
  </ClerkProvider>



    /*
    <html lang="en">
      <body className={`${GeistSans.variable}`}>
      <div className="text-lg">Star Wars is Lyfe</div>
      <div className="italic ...">I have failed you anakin ...</div>
      {children}
      </body>
    </html>
    */
  );
}
