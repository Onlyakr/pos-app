import "@/styles/globals.css";
import type { Metadata } from "next";
import { Kanit, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/provider/theme-provider";
import { User, users } from "@/lib/usersdata";
import { SignInForm } from "@/components/SignInForm";
import AppLayout from "@/components/AppLayout";

const kanit = Kanit({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Books Dealer",
  description: "POS Application for managing sales",
};

const user = users[0];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${kanit.className} ${dmSans.className} bg-muted min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {user ? (
            <AppLayout user={user as User}>{children}</AppLayout>
          ) : (
            <SignInForm />
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
