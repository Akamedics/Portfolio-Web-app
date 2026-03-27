import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import VideoSection from "@/components/VideoSection";
import CoursesSection from "@/components/CoursesSection";
import FacultySection from "@/components/FacultySection";
import ReviewCTA from "@/components/ReviewCTA";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <VideoSection />
      <CoursesSection />
      <FacultySection />
      <ReviewCTA />
      <ContactSection />
    </main>
  );
}