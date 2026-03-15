/* eslint-disable react-hooks/static-components */
"use client";

import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const session = null;

  const navItems = [{ href: "#profissionais", label: "Profissionais" }];

  const NavLinks = () => {
    return (
      <>
        {navItems.map((item) => (
          <Button
            key={item.href}
            onClick={() => setIsOpen(false)}
            className="bg-zinc-100 text-zinc-800 hover:bg-zinc-200 hover:shadow-2xl"
          >
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}

        {session ? (
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2"
          >
            Acessar Clínica
          </Link>
        ) : (
          <Button>
            <LogIn />
            Portal da Clínica
          </Button>
        )}
      </>
    );
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-999 py-4 px-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-zinc-900">
          Odonto<span className="text-emerald-500">PRO</span>
        </Link>
        <nav className="hidden md:flex items-center">
          <NavLinks />
        </nav>

        <Sheet open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              className="text-black hover:bg-emerald-100 bg-emerald-300"
              size="icon"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="z-1000 bg-white">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Veja nossos links</SheetDescription>
            <nav className="flex flex-col space-y-4 mt-6 px-8">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
export default Header;
