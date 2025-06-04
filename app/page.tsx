import BookingSteps from "@/components/BookingSteps";
import CapturedTales from "@/components/CapturedTales";
import ContactForm from "@/components/ContactForm";
import ExperienceWeProvideGsap from "@/components/ExperienceWeProvideGsap";
import FAQSection from "@/components/FAQSection";
import FeedGallery from "@/components/FeedGallery";
import FounderNote from "@/components/FounderNote";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";

const feedImages = [
  "/Images/f1.webp",
  "/Images/f2.webp",
  "/Images/f3.webp",
  "/Images/f4.webp",
  "/Images/f5.webp",
  "/Images/f6.webp",
  "/Images/f7.webp",
  "/Images/f8.webp",
  "/Images/f9.webp",
  "/Images/f10.webp",
  "/Images/f11.webp",
  "/Images/f12.webp",
  "/Images/f13.webp",
  "/Images/f14.webp",
  "/Images/f15.webp",
  "/Images/f16.webp",
  "/Images/f17.webp",
  "/Images/f18.webp",
  "/Images/f19.webp",
  "/Images/f20.webp",
  "/Images/f21.webp",
];

export default function Home() {
  return (
    <div className="bg-[#EAE7D8]">
      <Navbar />

      {/* Hero Section */}
      <SectionWrapper id="hero">
        <Header />
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper id="about">
        <FounderNote />
        <CapturedTales />
      </SectionWrapper>

      {/* Services/Weddings Section */}
      <SectionWrapper id="weddings">
        <ExperienceWeProvideGsap />
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper id="services">
        <BookingSteps />
        <Testimonials />
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact-us">
        <ContactForm />
        <FeedGallery images={feedImages} />
      </SectionWrapper>

      {/* FAQs Section */}
      <SectionWrapper id="faqs">
        <FAQSection />
      </SectionWrapper>

      <Footer />
    </div>
  );
}
