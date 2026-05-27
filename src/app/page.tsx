"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Facebook, Instagram, Linkedin, Sparkles, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="mediumLarge"
        background="grid"
        cardStyle="solid"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "Shop",
          id: "#products",
        },
        {
          name: "Categories",
          id: "#categories",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Flipkart"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplit
      background={{
        variant: "plain",
      }}
      imagePosition="right"
      title="Your Daily Dose of Joy & Essentials"
      description="Discover an incredible range of products from stylish apparel and fun toys to essential home goods. Flipkart brings everything you need, right to your doorstep."
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
        {
          text: "Explore Categories",
          href: "#categories",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/black-friday-concept-with-products-cart_23-2147709350.jpg"
      imageAlt="A vibrant collection of diverse products from clothes, toys, and home essentials, representing an online shopping experience"
      mediaAnimation="opacity"
      fixedMediaHeight={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-young-woman-thinking-buying-something-holding-shopping-bags-with-dreamy-smile-buying-sta_1258-127372.jpg",
          alt: "Happy Shopper 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pretty-young-woman-with-shopping-bags_1187-4178.jpg",
          alt: "Happy Shopper 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/elegant-smiling-woman-with-shopping-bags_329181-3831.jpg",
          alt: "Happy Shopper 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-with-shopping-bags-beautiful-dress_1303-17551.jpg",
          alt: "Happy Shopper 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/modern-man-using-table-couch_23-2147986087.jpg",
          alt: "Happy Shopper 5",
        },
      ]}
      avatarText="Join 1M+ Happy Shoppers!"
      marqueeItems={[
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/top-view-shopping-cart-with-gifts_23-2148285080.jpg",
          alt: "Top view of shopping cart with gifts",
        },
        {
          type: "text-icon",
          text: "Flash Deals",
          icon: Sparkles,
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/row-shopping-trolleys-with-red-blue-handles_23-2147962058.jpg",
          alt: "Row of shopping trolleys with red and blue handles",
        },
        {
          type: "text",
          text: "New Arrivals Daily!",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/colorful-light-bulbs-basket_53876-32315.jpg",
          alt: "Colorful light bulbs in a basket",
        },
      ]}
    />
  </div>

  <div id="categories" data-section="categories">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          tag: "Fashion Forward",
          title: "Stylish Apparel for Everyone",
          subtitle: "Trendy collections, timeless classics.",
          description: "Browse our extensive selection of clothing for men, women, and children. Stay fashionable with the latest trends and essential wardrobe staples.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-people-standing-looking-different-direction_23-2148134027.jpg",
          imageAlt: "Modern fashion clothing on display",
        },
        {
          tag: "Playful Fun",
          title: "Toys & Games for All Ages",
          subtitle: "Inspire joy and imagination.",
          description: "Unleash creativity with our wide range of toys, from educational games for toddlers to action figures and puzzles for older kids.",
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-pop-it-toy-background-close-up_58702-5391.jpg",
          imageAlt: "Colorful assortment of children's toys",
        },
        {
          tag: "Home Comforts",
          title: "Daily Life Essentials",
          subtitle: "Making every day easier.",
          description: "Stock up on household essentials, kitchenware, personal care items, and more. Quality products to enhance your daily living.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-ecological-products-concept_23-2148781889.jpg",
          imageAlt: "Organized collection of home essential products",
        },
      ]}
      title="Explore Our Diverse Product Categories"
      description="From fashion trends to playful wonders and everyday necessities, find exactly what you're looking for with ease."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p-1",
          brand: "Fashionista",
          name: "Men's Casual Blue Shirt",
          price: "$29.99",
          rating: 4,
          reviewCount: "120 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-hipster-male-student-sitting-bench-park_158538-12998.jpg",
          imageAlt: "Men's casual blue cotton shirt",
        },
        {
          id: "p-2",
          brand: "Elegant Wear",
          name: "Women's Floral Summer Dress",
          price: "$45.50",
          rating: 5,
          reviewCount: "85 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-elegant-wome-wear-posing-stylish-bohemian-interior_273443-4294.jpg",
          imageAlt: "Women's floral pattern summer dress",
        },
        {
          id: "p-3",
          brand: "Toy Kingdom",
          name: "Giant Plush Teddy Bear",
          price: "$35.00",
          rating: 4,
          reviewCount: "210 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-kid-holding-teddy-bear-outdoors_23-2151083663.jpg",
          imageAlt: "Large brown plush teddy bear",
        },
        {
          id: "p-4",
          brand: "EduPlay",
          name: "Colorful Building Blocks Set",
          price: "$22.75",
          rating: 5,
          reviewCount: "150 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/non-binary-kid-playing-with-colorful-game-home_23-2148779615.jpg",
          imageAlt: "Colorful educational building blocks",
        },
        {
          id: "p-5",
          brand: "Home Comforts",
          name: "Modern Kitchen Blender",
          price: "$59.99",
          rating: 4,
          reviewCount: "90 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/electric-blender-make-fruit-juice-smoothie-kitchen-table-concept-healthy-diet_639032-174.jpg",
          imageAlt: "Sleek stainless steel kitchen blender",
        },
        {
          id: "p-6",
          brand: "Soft Touch",
          name: "Premium White Bath Towel",
          price: "$12.00",
          rating: 5,
          reviewCount: "300 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-white-terry-bath-towels-flowers_169016-20313.jpg",
          imageAlt: "Folded premium white bath towel",
        },
        {
          id: "p-7",
          brand: "Cozy Kids",
          name: "Kids Cartoon Pajamas",
          price: "$18.99",
          rating: 4,
          reviewCount: "75 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/friendship-concept-with-two-joyful-girls_23-2147814354.jpg",
          imageAlt: "Comfortable kids pajamas with a cartoon design",
        },
        {
          id: "p-8",
          brand: "Executive Style",
          name: "Men's Leather Wallet",
          price: "$25.00",
          rating: 5,
          reviewCount: "110 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-businessman-handsome-model-man-dressed-elegant-brown-suit-with-accessories_158538-11192.jpg",
          imageAlt: "Stylish black leather men's wallet",
        },
      ]}
      title="Featured Products"
      description="Handpicked items from our most popular categories."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "About Flipkart: Your Trusted Online Shop",
        },
      ]}
      buttons={[
        {
          text: "Our Story",
          href: "#",
        },
        {
          text: "Join Our Team",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/side-view-friends-playing-videogames_23-2150571956.jpg"
      imageAlt="A diverse group of people shopping online, depicting community and trust"
      description="Flipkart is India's leading e-commerce platform, empowering millions of customers with a vast selection of products, unbeatable prices, and convenient delivery services. Our mission is to make online shopping accessible and enjoyable for everyone."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Priya Sharma",
          role: "Homemaker",
          testimonial: "Flipkart makes my daily shopping so easy and convenient. The variety is amazing, and delivery is always on time!",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-woman-with-shopping-bags_23-2148733274.jpg",
          imageAlt: "Priya Sharma, happy customer",
        },
        {
          id: "2",
          name: "Rahul Verma",
          role: "IT Professional",
          testimonial: "I always find great deals on clothes and gadgets. Flipkart is my go-to for all online purchases. Highly recommend!",
          imageSrc: "http://img.b2bpic.net/free-photo/view-teenage-boy-using-inhaler-home-respiratory-health-problems_23-2150573988.jpg",
          imageAlt: "Rahul Verma, satisfied customer",
        },
        {
          id: "3",
          name: "Anjali Singh",
          role: "Entrepreneur",
          testimonial: "The quality of products is consistently good, and customer service is fantastic. Flipkart truly cares about its users.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-cheerful-businesswoman-drinking-coffee-smiling-workplace-office_176420-6974.jpg",
          imageAlt: "Anjali Singh, happy entrepreneur",
        },
        {
          id: "4",
          name: "Vikram Patel",
          role: "Student",
          testimonial: "Buying books and electronics has never been easier. The app is super user-friendly and offers great discounts.",
          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-man-with-grey-hair-dark-color-shirt-looking-camera-smiling-happy-positive-pointing-with-thumbs-himself-proud-confident-standing-blue-background_141793-133969.jpg",
          imageAlt: "Vikram Patel, happy student",
        },
        {
          id: "5",
          name: "Divya Gupta",
          role: "Teacher",
          testimonial: "I trust Flipkart for everything from toys for my kids to kitchen essentials. It's reliable and always delivers value.",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-happy-caucasian-woman-with-dark-hair-black-dress-being-happy-after-boyfriend-said-they-going-onsea-vocation-woman-talking-phone-holding-shopping-bags-hands-looking_176420-4672.jpg",
          imageAlt: "Divya Gupta, satisfied teacher",
        },
      ]}
      title="Hear From Our Happy Customers"
      description="We're committed to providing the best online shopping experience, and our customers love us for it!"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Fashionista Co.",
        "ToyLand",
        "HomeGoods Inc.",
        "Tech Innovations",
        "Healthy Living Co.",
        "BookWorms Publishing",
        "ActiveKids Gear",
        "Urban Style",
        "EcoFriendly Solutions",
      ]}
      title="Brands That Trust Us"
      description="We partner with leading brands to bring you the best selection and quality."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How do I place an order?",
          content: "Simply browse our products, add your desired items to the cart, and proceed to checkout. Follow the steps to enter your shipping details and payment information.",
        },
        {
          id: "q2",
          title: "What payment methods are accepted?",
          content: "We accept various payment methods including credit/debit cards, net banking, UPI, and Cash on Delivery (COD) for eligible orders.",
        },
        {
          id: "q3",
          title: "How can I track my order?",
          content: "Once your order is shipped, you will receive a tracking ID via email and SMS. You can use this ID on our 'Track Order' page for real-time updates.",
        },
        {
          id: "q4",
          title: "What is your return policy?",
          content: "We offer a hassle-free return policy within a specified period from delivery, depending on the product category. Please refer to our detailed Returns & Refunds policy page for more information.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-customer-support-representative-wearing-headset-while-working-call-center_637285-133.jpg"
      imageAlt="Customer service representative helping a client"
      mediaAnimation="opacity"
      title="Frequently Asked Questions"
      description="Find quick answers to your most common queries about shopping on Flipkart."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get in Touch with Flipkart Support"
      description="Have questions or need assistance? Our customer support team is here to help you with any queries."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Message",
        rows: 5,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/white-collar-worker-office-interior_329181-10337.jpg"
      imageAlt="Contact form with customer service background"
      mediaAnimation="none"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Flipkart"
      copyrightText="© 2024 Flipkart. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "https://facebook.com/flipkart",
          ariaLabel: "Facebook",
        },
        {
          icon: Twitter,
          href: "https://twitter.com/flipkart",
          ariaLabel: "Twitter",
        },
        {
          icon: Instagram,
          href: "https://instagram.com/flipkart",
          ariaLabel: "Instagram",
        },
        {
          icon: Linkedin,
          href: "https://linkedin.com/company/flipkart",
          ariaLabel: "LinkedIn",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
