"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const BOOK_URL = "https://book.khora.ar";

const navLinks = [
  { href: "#soluciones", label: "Soluciones" },
  { href: "#caracteristicas", label: "Características" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%202%20feb%202026%2C%2007_33_48%20p.m.-agTM3kgW0EZxhQtisrkMifJlF6xhlZ.png"
              alt="Khora Logo"
              width={40}
              height={40}
              className="h-10 w-10"
              priority
              loading="eager"
            />
            <span className="text-xl font-bold text-slate-800">Khora</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
              <a href={BOOK_URL} target="_blank" rel="noreferrer">
                Solicitar demo
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col pt-4">
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <a href={BOOK_URL} target="_blank" rel="noreferrer">
                    Solicitar demo
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
