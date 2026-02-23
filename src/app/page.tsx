import HeroSection from "@/components/HeroSection";
import FertilizerForm from "@/components/FertilizerForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <HeroSection />

      <main className="py-12 px-4 flex flex-col items-center">
        <FertilizerForm />
      </main>

      <footer className="py-8 text-center border-t border-earth-light/30">
        <p className="text-xs text-mist">
          FarmLite Advisory &mdash; For guidance only. Always consult an agronomist.
        </p>
      </footer>
    </div>
  );
}
