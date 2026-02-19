"use client";

import Image from "next/image";

const footerLinks = {
  Technology: [
    { label: "Overview", href: "#technology" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Applications", href: "#applications" },
  ],
  Company: [
    { label: "Vision", href: "#vision" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#contact" },
  ],
  Resources: [
    { label: "Research", href: "#technology" },
    { label: "Press", href: "#contact" },
    { label: "FAQ", href: "#technology" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-4">
              <Image src="/logo.png" alt="GPropel" width={70} height={70} className="rounded-xl" />
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-sm">
              Building the world&apos;s first zero-emission road propulsion
              system. New physics in mobility — roads that power vehicles.
            </p>
            <p className="text-muted text-sm leading-relaxed max-w-sm mt-4">
              Get in touch:{" "}
              <a href="mailto:info@gpropel.com" className="text-primary hover:underline">info@gpropel.com</a>
              {" | "}
              <a href="mailto:sam.s@gpropel.com" className="text-primary hover:underline">sam.s@gpropel.com</a>
              {" | "}
              <a href="tel:+61448352415" className="text-muted hover:text-foreground transition-colors">+61 448 352 415</a>
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Green Propel. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy-policy"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/privacy-policy"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
