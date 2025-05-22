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
import Footer from "../components/Footer";

const feedImages = [
  "/Images/Feed1.png",
  "/Images/Feed2.png",
  "/Images/Feed3.png",
  "/Images/Feed4.png",
  "/Images/Feed5.png",
  "/Images/Feed6.png",
  "/Images/Feed1.png",
  "/Images/Feed2.png",
  "/Images/Feed3.png",
  "/Images/Feed4.png",
  "/Images/Feed5.png",
  "/Images/Feed6.png",


];

export default function Home() {
  return (
    <div className="bg-[#EAE7D8]">
      <Navbar />
      <Header />
      <FounderNote />
      <CapturedTales />
      <ExperienceWeProvideGsap />
      <BookingSteps />
      <Testimonials />
      <ContactForm />
      <FeedGallery images={feedImages} />
      <FAQSection />
      <Footer />

    </div>
  );
}
