
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function LuxuryBrandWebsite() {
  const BRAND = "Devigail Luxe";
  const TAGLINE = "Carry Confidence. Walk in Style.";

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#3B2A1A]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-serif tracking-wide">{BRAND}</h1>
        <nav className="space-x-6 text-sm">
          <a href="#shop" className="hover:underline">Shop</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 py-20"
      >
        <h2 className="text-5xl font-serif mb-4">Luxury Bags & Slippers</h2>
        <p className="text-lg mb-8">{TAGLINE}</p>
        <Button className="rounded-2xl px-8">Shop on Instagram</Button>
      </motion.section>

      {/* Products */}
      <section id="shop" className="px-6 py-16 grid md:grid-cols-3 gap-6">
        {["Signature Bags", "Elegant Slippers", "Bestie Collection"].map((item) => (
          <Card key={item} className="rounded-2xl shadow-md">
            <CardContent className="p-6 text-center">
              <ShoppingBag className="mx-auto mb-4" />
              <h3 className="font-semibold text-lg">{item}</h3>
              <p className="text-sm mt-2">Designed for style & comfort.</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* About */}
      <section id="about" className="px-6 py-20 bg-[#EAD7C2] text-center">
        <h3 className="text-3xl font-serif mb-4">Our Story</h3>
        <p className="max-w-xl mx-auto">
          Devigail Luxe was founded by two best friends with a shared love for
          elevated style. Our mission is to deliver luxurious bags and slippers
          that combine comfort, confidence, and timeless elegance.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-16 text-center">
        <h3 className="text-2xl font-serif mb-4">Stay Connected</h3>
        <p className="mb-6">Follow us for new arrivals & exclusive drops.</p>
        <Button variant="outline" className="rounded-2xl">@devigailluxe</Button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm">
        © {new Date().getFullYear()} {BRAND}. All rights reserved.
      </footer>
    </div>
  );
}
