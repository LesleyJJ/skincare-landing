'use client';

import { useState } from 'react';
import {
  Star,
  CheckCircle,
  Leaf,
  Droplets,
  Sparkles,
  FlaskConical,
  ChevronDown,
  Play,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-pink-50 to-green-50">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">

                <span className="text-pink-400">Glowé</span> - Glow Naturally in Just{' '}
                <span className="text-pink-400">7 Days</span>{' '}
                <span className="text-4xl">✨</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our Vitamin C Brightening Serum is packed with natural antioxidants
                for healthier, radiant skin.
              </p>
              <button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Shop Now
              </button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-green-100 rounded-2xl flex items-center justify-center">
                  <FlaskConical className="w-32 h-32 text-pink-400" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-100 rounded-full p-3">
                <Sparkles className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Say Goodbye To...
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">😴</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-700">Dull & tired-looking skin</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-700">Uneven skin tone</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-700">Dark spots</h3>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-pink-400 mb-4">
              And Hello To Radiance with <span className="text-pink-500">Glowé</span>
            </h3>
            <p className="text-xl text-gray-600">
              with our dermatologist-tested formula.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                100% Natural Ingredients
              </h3>
              <p className="text-gray-600">Gentle yet effective</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Hydration Boost
              </h3>
              <p className="text-gray-600">Locks in moisture all day</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Visible Results in 7 Days
              </h3>
              <p className="text-gray-600">Clinically proven</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FlaskConical className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Lightweight Formula
              </h3>
              <p className="text-gray-600">Non-sticky, fast absorbing</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Yours Today
            </button>
          </div>
        </div>
      </section>

      {/* Ingredients Transparency Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              What&apos;s Inside Matters
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🍊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Vitamin C</h3>
              <p className="text-gray-600">Brightens and reduces dark spots</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Hyaluronic Acid</h3>
              <p className="text-gray-600">Deep hydration & plumping</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Aloe Vera</h3>
              <p className="text-gray-600">Soothes and calms irritation</p>
            </div>
          </div>
          <div className="bg-green-50 rounded-2xl p-8 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-green-700 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                No Parabens
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                No Sulfates
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Cruelty-Free
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;I noticed brighter skin in just a week! Feels so refreshing.&rdquo;
              </p>
              <p className="font-semibold text-gray-800">- Sarah M.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Best serum I&apos;ve tried. Non-greasy and perfect for sensitive skin.&rdquo;
              </p>
              <p className="font-semibold text-gray-800">- Anjali K.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;My skin has never looked better. Worth every penny!&rdquo;
              </p>
              <p className="font-semibold text-gray-800">- Maria L.</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              See Why Customers Love It
            </button>
          </div>
        </div>
      </section>

      {/* Video/Demo Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-pink-100 to-green-100 rounded-3xl p-12 mb-8">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Play className="w-12 h-12 text-pink-400 ml-1" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Watch how easy it is to add radiance to your daily routine
              </h3>
              <p className="text-gray-600">
                See the transformation in action
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Offers Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Choose Your Glow Plan
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">1 Bottle</h3>
              <div className="text-4xl font-bold text-pink-400 mb-6">$29.99</div>
              <button className="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
                Buy Now
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-pink-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Save 10%
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">2 Bottles</h3>
              <div className="text-4xl font-bold text-pink-400 mb-6">$54.99</div>
              <button className="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
                Buy Now
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-yellow-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Best Deal
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">3 Bottles</h3>
              <div className="text-4xl font-bold text-pink-400 mb-2">$74.99</div>
              <p className="text-green-600 font-semibold mb-6">Save 20% + Free Shipping</p>
              <button className="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
                Buy Now
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-red-600 font-semibold text-lg">
              ⚠️ Only 50 left in stock – Order Today!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Got Questions? We&apos;ve Got Answers.
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              {
                q: "Is it safe for sensitive skin?",
                a: "Yes, our serum is dermatologically tested and hypoallergenic, making it safe for all skin types including sensitive skin."
              },
              {
                q: "How long until I see results?",
                a: "Most users see improvements within 7 days of consistent use. For best results, use twice daily."
              },
              {
                q: "Is it cruelty-free?",
                a: "100% cruelty-free & vegan. We never test on animals and all our ingredients are plant-based."
              },
              {
                q: "Can men use it too?",
                a: "Absolutely! Our formula is suitable for all skin types and genders. Many men love the lightweight, non-greasy feel."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 py-6">
                <button
                  className="w-full text-left flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">{faq.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {openFaq === index && (
                  <p className="mt-4 text-gray-600">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-400 to-green-400">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Your <span className="text-yellow-200">Glowé</span> Awaits ✨
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Join thousands of satisfied customers and start your journey to radiant skin with Glowé today.
          </p>
          <button className="bg-white hover:bg-gray-100 text-pink-400 font-bold py-6 px-12 rounded-full text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Shop Now & Start Glowing
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Glowé</h3>
              <p className="text-gray-400">
                Transform your skin with our premium Vitamin C Brightening Serum.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>support@glowe.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>1-800-GLOWE</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Glowé. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
