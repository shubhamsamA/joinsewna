"use client";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-16 border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
       
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-black">SEWNA</h2>
          <p className="text-sm leading-relaxed">
            Connecting you with independent designers to create unique, tailored fashion.
          </p>
        </div>

      
        <div>
          <h3 className="font-semibold text-black mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/categories?slug=all" className="hover:text-black">All Categories</Link></li>
            <li><Link href="/new-arrivals" className="hover:text-black">New Arrivals</Link></li>
            <li><Link href="/designers" className="hover:text-black">Designers</Link></li>
            <li><Link href="/custom-orders" className="hover:text-black">Custom Orders</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-black mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-black">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-black">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-black">FAQ</Link></li>
            <li><Link href="/privacy" className="hover:text-black">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-black mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <Link href="https://instagram.com" target="_blank"><FaInstagram className="hover:text-black" /></Link>
            <Link href="https://twitter.com" target="_blank"><FaTwitter className="hover:text-black" /></Link>
            <Link href="https://facebook.com" target="_blank"><FaFacebook className="hover:text-black" /></Link>
            <Link href="https://linkedin.com" target="_blank"><FaLinkedin className="hover:text-black" /></Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} SEWNA. All rights reserved.
      </div>
    </footer>
  );
}
