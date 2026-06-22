import NavbarLogo from "./NavbarLogo";
import { font } from "./tokens";

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center bg-background"
      style={{ fontFamily: font.body }}
    >
      <nav className="w-full flex items-center justify-center py-6">
        <NavbarLogo />
      </nav>
      <main className="w-full flex-1 flex flex-col items-center px-4 pb-16">
        {children}
      </main>
    </div>
  );
}
