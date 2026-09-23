/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "Bakehouse by MS",
    suffix: ".",
    tagline: "Cosy & Stylish Bakery",
    description: "Bakehouse by MS offering freshly baked small-batch cookies, decadent brownies, artisanal cakes, and delicious desserts in Janakpuri, New Delhi.",
    keywords: "Bakehouse by MS, bakery Janakpuri, fresh cakes, cookies, brownies, desserts New Delhi, eggless bakes",
    themeColor: "#0d0e12",
    domain: "https://www.swiggy.com/city/delhi/bakehouse-by-ms-janakpuri-rest1365171",
    ogImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmMvDkQyBTwbFYf28eM3mYkcb-jht774EbqMPB_7WUrHlnIC2HAbZMftPlVP-Nn2kMS97VvpxqDKK__1SxbxA5xfE4WTmGNRNa_hhW9gtAYDHVgCM2qOk_KYkqpyY_VqBn2MMO3EC26DZ_w=w326-h312-n-k-no",
    faviconEmoji: "🧁",
    whatsappNumber: "919899663633"
  },

  // --- GLOBAL STYLES & THEMING ---
  styles: {
    colors: {
      bg: "#0d0e12",
      bgCard: "#15181e",
      bgLight: "#1c2028",
      primary: "#d4a373",
      primaryHover: "#faedcd",
      text: "#e0e2ec",
      textMuted: "#9aa0b4",
      accent: "#2c313c"
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Freshly Baked • Small Batch • Made with Love",
    title: "Fresh, Soft & Delicious Artisanal Bakes",
    description: "Step into Bakehouse by MS for handcrafted cookies, fudgy brownies, and exquisite cakes baked fresh daily in Janakpuri.",
    bgImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmMvDkQyBTwbFYf28eM3mYkcb-jht774EbqMPB_7WUrHlnIC2HAbZMftPlVP-Nn2kMS97VvpxqDKK__1SxbxA5xfE4WTmGNRNa_hhW9gtAYDHVgCM2qOk_KYkqpyY_VqBn2MMO3EC26DZ_w=w326-h312-n-k-no",
    stats: [
      { value: "100%", label: "Freshly Baked" },
      { value: "Eggless", label: "Options Available" },
      { value: "5.0 ★", label: "Guest Rating" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "About Us",
    title: "A Cosy Spot for Dessert Lovers & Good Vibes",
    paragraphs: [
      "Welcome to Bakehouse by MS, a cosy and stylish bakery located in Janakpuri, New Delhi. We take pride in creating fresh, soft, and delicious cakes, desserts, and artisanal baked goods that bring pure joy to every occasion.",
      "Whether you are looking for classic cookies, decadent brownies, or a sweet treat to pair with good company, Bakehouse by MS is your ultimate spot for great flavors and warm hospitality."
    ],
    image: "https://lh3.googleusercontent.com/grass-cs/ACvplmOLHjBEwbGGySUgvNXL2fTBysq7zuQgz1aI9l_3IC7tYk61WnMAOHalLvkGROTWVuJuGQ6-tuDT4b96Mwkyr2tKqCNAHdJYrBdds2V-k4DxtQIBqmMnnGaSpVpJ3qHhCAjbsGmX7eD4wdtv=w163-h156-n-k-no",
    imageAlt: "Bakehouse by MS interior and display area",
    experienceValue: "100%",
    experienceLabel: "Handcrafted Love"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "Fresh From Oven",
    title: "Featured Bakehouse Specials",
    badge: "Bestsellers",
    description: "Handpicked treats from our kitchen baked fresh daily using premium ingredients.",
    items: [
      {
        badge: "Eggless",
        img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600",
        alt: "Chocolate Chip Cookie",
        diet: "veg",
        title: "Chocolate Chip Cookie",
        price: "₹45",
        desc: "Classic buttery cookie loaded with gooey chocolate chips, baked to golden perfection."
      },
      {
        badge: "Chef's Pick",
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600",
        alt: "Classic Fudge Brownie",
        diet: "nonveg",
        title: "Classic Fudge Brownie",
        price: "₹100",
        desc: "Rich, dense chocolate fudge brownie with a crackly top and velvety center."
      },
      {
        badge: "Special Combo",
        img: "https://images.unsplash.com/photo-1589218436045-ee320057f443?auto=format&fit=crop&q=80&w=600",
        alt: "Brownie Trial Pack",
        diet: "nonveg",
        title: "Brownie Trial Pack",
        price: "₹290",
        desc: "An assortment box including all four premium brownie flavors: Classic Fudge, Walnut, Nutella, and Salted Caramel."
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Sweet Deals",
    title: "Special Offers & Custom Orders",
    items: [
      {
        tag: "BULK SAVINGS",
        title: "Cookie Boxes",
        desc: "Order classic cookies in boxes of 4 (₹170), 8 (₹325), or 16 (₹630).",
        code: "COOKIEBOX",
        highlight: false
      },
      {
        tag: "SPECIALTY",
        title: "Eggless & Sugar-Free Options",
        desc: "Custom sugar-free treats made with premium monk fruit sweetener (100% natural).",
        code: "SPECIALDIET",
        highlight: true
      },
      {
        tag: "ASSORTED DEAL",
        title: "Brownie Trial Pack @ ₹290",
        desc: "Get 1 of each delicious flavor: Classic Fudge, Walnut, Nutella, & Salted Caramel.",
        code: "BROWNIETRIAL",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Our Complete Menu",
    title: "Freshly Baked Goodness",
    pdfUrl: "assets/bakehouse-menu.pdf",
    pdfFilename: "Bakehouse_by_MS_Menu.pdf",
    categories: [
      { id: "all", label: "All Items", active: true },
      { id: "classic-cookies", label: "Classic Cookies", active: false },
      { id: "premium-cookies", label: "Premium Cookies", active: false },
      { id: "brownies", label: "Brownies", active: false }
    ],
    items: [
      // CLASSIC COOKIES
      {
        category: "classic-cookies",
        img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600",
        title: "Chocolate Chip Cookie",
        price: "₹45",
        diet: "veg",
        desc: "Classic golden cookie loaded with rich chocolate chips. (Box of 4: ₹170 | Box of 8: ₹325 | Box of 16: ₹630)",
        swiggyUrl: "https://www.swiggy.com/city/delhi/bakehouse-by-ms-janakpuri-rest1365171",
        zomatoUrl: "https://www.zomato.com/ncr/bake-house-by-ms-janakpuri-new-delhi?amp=1"
      },
      {
        category: "classic-cookies",
        img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600",
        title: "Chocolate Chunk Cookie",
        price: "₹50",
        diet: "veg",
        desc: "Indulgent cookie filled with oversized chunks of chocolate. (Box of 4: ₹190 | Box of 8: ₹365 | Box of 16: ₹720)",
        swiggyUrl: "https://www.swiggy.com/city/delhi/bakehouse-by-ms-janakpuri-rest1365171",
        zomatoUrl: "https://www.zomato.com/ncr/bake-house-by-ms-janakpuri-new-delhi?amp=1"
      },
      {
        category: "classic-cookies",
        img: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=600",
        title: "Oatmeal Raisin Cookie",
        price: "₹50",
        diet: "veg",
        desc: "Warm spiced oatmeal cookie loaded with juicy plump raisins. (Box of 4: ₹190 | Box of 8: ₹365 | Box of 16: ₹720)",
        swiggyUrl: "https://www.swiggy.com/city/delhi/bakehouse-by-ms-janakpuri-rest1365171",
        zomatoUrl: "https://www.zomato.com/ncr/bake-house-by-ms-janakpuri-new-delhi?amp=1"
      },
      {
        category: "classic-cookies",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdRHmi9wYQ8yu_U0908VTn0NcSGy6R3t_J_pjkZ1hqDw&s=10",
        title: "NY Style Cookie",
        price: "₹50",
        diet: "nonveg",
        desc: "Thick, gooey, New York style chunky cookie. (Box of 4: ₹190 | Box of 8: ₹365 | Box of 16: ₹720)",
        swiggyUrl: "https://www.swiggy.com/city/delhi/bakehouse-by-ms-janakpuri-rest1365171",
        zomatoUrl: "https://www.zomato.com/ncr/bake-house-by-ms-janakpuri-new-delhi?amp=1"
      },
      {
        category: "classic-cookies",
        img: "https://images.unsplash.com/photo-1618923850107-d1a234d7a73a?auto=format&fit=crop&q=80&w=600",
        title: "Multigrain Cookie",
        price: "₹55",
        diet: "veg",
        desc: "Wholesome and crispy multigrain cookie baked with healthy seeds. (Box of 4: ₹210 | Box of 8: ₹405 | Box of 16: ₹800)",
        swiggyUrl: "https://www.swiggy.com/city/delhi/bakehouse-by-ms-janakpuri-rest1365171",
        zomatoUrl: "https://www.zomato.com/ncr/bake-house-by-ms-janakpuri-new-delhi?amp=1"
      },
      {
        category: "classic-cookies",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfIZRKnT_Aoj2ow-ZzNjF6Zt2H4GAaxqmk5ILGnQfHg&s=10",
        title: "Cookie Fries",
        price: "₹45",
        diet: "veg",
        desc: "Fun fry-shaped crunchy cookie sticks perfect for dipping. (Box of 4: ₹170 | Box of 8: ₹325 | Box of 16: ₹630)",
        swiggyUrl: "https://www.swiggy.com/city/delhi/bakehouse-by-ms-janakpuri-rest1365171",
        zomatoUrl: "https://www.zomato.com/ncr/bake-house-by-ms-janakpuri-new-delhi?amp=1"
      },

      // PREMIUM COOKIES
      {
        category: "premium-cookies",
        img: "https://images.unsplash.com/photo-1618889482923-38250401a84e?auto=format&fit=crop&q=80&w=600",
        title: "Red Velvet Cookie",
        price: "₹60",
        diet: "veg",
        desc: "Decadent crimson red velvet cookie with soft white chocolate pockets. (Box of 4: ₹230 | Box of 8: ₹445 | Box of 16: ₹880)",
        swiggyUrl: "https://www.swiggy.com/city/delhi/bakehouse-by-ms-janakpuri-rest1365171",
        zomatoUrl: "https://www.zomato.com/ncr/bake-house-by-ms-janakpuri-new-delhi?amp=1"
      },
      {
        category: "premium-cookies",
        img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
        title: "Cinnamon Churro Cookie",
        price: "₹60",
        diet: "veg",
        desc: "Spiced cookie coated in sweet cinnamon sugar with a churro crumble. (Box of 4: ₹230 | Box of 8: ₹445 | Box of 16: ₹880)",
        swiggyUrl: "https://www.swiggy.com/city/delhi/bakehouse-by-ms-janakpuri-rest1365171",
        zomatoUrl: "https://www.zomato.com/ncr/bake-house-by-ms-janakpuri-new-delhi?amp=1"
      },
      {
        category: "premium-cookies",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSt2fVSnjSZPYNU-HNYuhWHLK53aThqpa_5Q7SO5OUg&s=10",
        title: "Blueberry Chocolate Cookie",
        price: "₹65",
        diet: "veg",
        desc: "Tangy dried blueberries blended with rich dark chocolate chunks. (Box of 4: ₹250 | Box of 8: ₹485 | Box of 16: ₹960)",
        swiggyUrl: "https://www.swiggy.com/city/delhi/bakehouse-by-ms-janakpuri-rest1365171",
        zomatoUrl: "https://www.zomato.com/ncr/bake-house-by-ms-janakpuri-new-delhi?amp=1"
      },
      {
        category: "premium-cookies",
        img: "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?auto=format&fit=crop&q=80&w=600",
        title: "Nutella Rocher Cookie",
        price: "₹65",
        diet: "veg",
        desc: "Stuffed Nutella center topped with crunchy hazelnut Ferrero-style crunches. (Box of 4: ₹250 | Box of 8: ₹485 | Box of 16: ₹960)",
        swiggyUrl: "https://www.swiggy.com/city/delhi/bakehouse-by-ms-janakpuri-rest1365171",
        zomatoUrl: "https://www.zomato.com/ncr/bake-house-by-ms-janakpuri-new-delhi?amp=1"
      },
      {
        category: "premium-cookies",
        img: "https://images.unsplash.com/photo-1607920592519-bab4d7db727d?auto=format&fit=crop&q=80&w=600",
        title: "Classic Brookie",
        price: "₹75",
        diet: "nonveg",
        desc: "The best of both worlds—half chewy chocolate chip cookie, half fudge brownie. (Box of 4: ₹290 | Box of 8: ₹565 | Box of 16: ₹1120)",
        swiggyUrl: "https://www.swiggy.com/city/delhi/bakehouse-by-ms-janakpuri-rest1365171",
        zomatoUrl: "https://www.zomato.com/ncr/bake-house-by-ms-janakpuri-new-delhi?amp=1"
      },
      {
        category: "premium-cookies",
        img: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=600",
        title: "White Chocolate Brookie",
        price: "₹75",
        diet: "nonveg",
        desc: "Brookie hybrid infused with sweet white chocolate chunks. (Box of 4: ₹290 | Box of 8: ₹565 | Box of 16: ₹1120)",
        swiggyUrl: "https://www.swiggy.com/city/delhi/bakehouse-by-ms-janakpuri-rest1365171",
        zomatoUrl: "https://www.zomato.com/ncr/bake-house-by-ms-janakpuri-new-delhi?amp=1"
      },

      // BROWNIES (CONTAINS EGG)
      {
        category: "brownies",
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600",
        title: "Classic Fudge Brownie",
        price: "₹100",
        diet: "nonveg",
        desc: "Ultra fudgy, dense chocolate brownie baked with premium cocoa (Contains Egg).",
        swiggyUrl: "https://www.swiggy.com/city/delhi/bakehouse-by-ms-janakpuri-rest1365171",
        zomatoUrl: "https://www.zomato.com/ncr/bake-house-by-ms-janakpuri-new-delhi?amp=1"
      },
      {
        category: "brownies",
        img: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&q=80&w=600",
        title: "Walnut Brownie",
        price: "₹110",
        diet: "nonveg",
        desc: "Rich fudge brownie loaded with roasted, crunchy walnut pieces (Contains Egg).",
        swiggyUrl: "https://www.swiggy.com/city/delhi/bakehouse-by-ms-janakpuri-rest1365171",
        zomatoUrl: "https://www.zomato.com/ncr/bake-house-by-ms-janakpuri-new-delhi?amp=1"
      },
      {
        category: "brownies",
        img: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&q=80&w=600",
        title: "Nutella Brownie",
        price: "₹120",
        diet: "nonveg",
        desc: "Fudgy brownie swirled generously with creamy hazelnut Nutella spread (Contains Egg).",
        swiggyUrl: "https://www.swiggy.com/city/delhi/bakehouse-by-ms-janakpuri-rest1365171",
        zomatoUrl: "https://www.zomato.com/ncr/bake-house-by-ms-janakpuri-new-delhi?amp=1"
      },
      {
        category: "brownies",
        img: "https://images.unsplash.com/photo-1589218436045-ee320057f443?auto=format&fit=crop&q=80&w=600",
        title: "Salted Caramel Brownie",
        price: "₹120",
        diet: "nonveg",
        desc: "Decadent brownie drizzled with artisanal gooey salted caramel (Contains Egg).",
        swiggyUrl: "https://www.swiggy.com/city/delhi/bakehouse-by-ms-janakpuri-rest1365171",
        zomatoUrl: "https://www.zomato.com/ncr/bake-house-by-ms-janakpuri-new-delhi?amp=1"
      },
      {
        category: "brownies",
        img: "https://images.unsplash.com/photo-1589218436045-ee320057f443?auto=format&fit=crop&q=80&w=600",
        title: "Brownie Trial Pack",
        price: "₹290",
        diet: "nonveg",
        desc: "Includes all 4 brownie flavors: Classic Fudge, Walnut, Nutella, and Salted Caramel.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/bakehouse-by-ms-janakpuri-rest1365171",
        zomatoUrl: "https://www.zomato.com/ncr/bake-house-by-ms-janakpuri-new-delhi?amp=1"
      }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Testimonials",
    title: "What Our Guests Say",
    items: [
      {
        stars: 5,
        text: "\"Finding the perfect spot to unwind and celebrate can truly elevate your mood. A relaxing atmosphere with good company is essential for a memorable chill session. For parties, a vibrant and energetic ambiance can get everyone in a festive spirit. Whether it's a quiet evening or a lively gathering, the right location sets the tone. Creating lasting memories often involves finding the ideal space to share with friends. 🥰😍🥰\"",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
        name: "Naman Khurana",
        role: "Local Guide • 8 reviews"
      },
      {
        stars: 5,
        text: "\"cafe has such a cozy vibe. the quality of the food and drinks was excellent, and the service was outstanding. highly recommended\"",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
        name: "Dyuti",
        role: "Foodie • 3 reviews"
      },
      {
        stars: 5,
        text: "\"Bake house by ms is cosy, stylish bakery. Cakes and desserts are fresh, soft, delicious. A perfect spot for desserts lovers and good vibes!\"",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        name: "Ishpreet Kaur",
        role: "Dessert Enthusiast • 1 review"
      }
    ],
    googleCta: {
      title: "Enjoyed your experience at Bakehouse by MS?",
      desc: "Help others discover our fresh bakes by leaving a review on Google Maps!",
      url: "https://www.zomato.com/ncr/bake-house-by-ms-janakpuri-new-delhi?amp=1"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Visual Experience",
    title: "Inside Bakehouse by MS",
    images: [
      { src: "https://lh3.googleusercontent.com/grass-cs/ACvplmPuP-Wqq85Gf8Rt7NpRmO1NwZKq43o81497JrzCP0BDtfkkgSa7dwPYl2UtblllJUeDHJMC_TybEV3_LedOi7UZuYFzIdq57RP3OntVtufe1uCxss7utBrgf5pGoLdlU_yO4nk=w163-h156-n-k-no", alt: "Bakehouse interior ambiance" },
      { src: "https://lh3.googleusercontent.com/grass-cs/ACvplmPhoRLqsHE0RMFLJ3-QxVlUOlOt4_dCbk6ZxROY9a20PkISvSVRarjUPoOU6Adj3-LLnbpYGY6KpZoJh-ENBwJeTq1gccfbFZIsRlpkwwE2nsZxaARC35YRE773L0IbNtbIOtwjELFUR54=w326-h156-n-k-no", alt: "Fresh baked goods display" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmsWEzHgbCA0-mEuoLzZ1ysX3Je_sLejTakTfRYZYnixd8MyG_LVA9oXrQ4-t22PSL9MNlcmggHAP24YQUWNkPW6BzSB4gPgvSFUq8acenYPv6Q246cpuApx6Cj-6CH52-2xZ-IwTzx4cWY=w243-h406-n-k-no-nu", alt: "Artisanal desserts and drinks" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmWpu6voz4iUU9CBa2EJdRNqDd4-AQKkfBRhL5D7jettvBK34fCpJyV6PTHYdA-PWkItSpptaVLx4ROML-0Ju0IqadsDcoWvaOuyCMuDPCgLM37yX_uFJFH4fUGVlWLYJm_q9nvn3hrk3Q=w243-h244-n-k-no-nu", alt: "Cozy seating corner" }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Location & Hours",
    title: "Visit Our Bakery",
    description: "Drop by our Janakpuri store to enjoy fresh bakes, custom desserts, and a cosy vibe.",
    address: "C4C/307, Janakpuri, New Delhi, Delhi 110058",
    hours: [
      "Monday - Sunday: 10:30 AM - 10:00 PM"
    ],
    email: "hello@bakehousebyms.com",
    phone: "+91 9899663633",
    mapEmbedUrl: "https://maps.google.com/maps?q=C4C/307,+Janakpuri,+New+Delhi,+Delhi+110058&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "Crafting soft, fresh, and delicious artisanal bakes, cookies, brownies, and custom desserts with love.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/bakehousebyms?stkn=MXg0aXJ4Y2xtNzdnNw==", iconClass: "ph-instagram-logo" },
      { platform: "swiggy", url: "https://www.swiggy.com/city/delhi/bakehouse-by-ms-janakpuri-rest1365171", iconClass: "ph-shopping-bag" },
      { platform: "zomato", url: "https://www.zomato.com/ncr/bake-house-by-ms-janakpuri-new-delhi?amp=1", iconClass: "ph-fork-knife" }
    ],
    copyright: "© 2026 Bakehouse by MS. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "Bakehouse_Guest_WiFi",
    password: "bakehousebyms"
  }
};

/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);
