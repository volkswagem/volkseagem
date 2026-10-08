import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuickActions from '@/components/QuickActions';
import StepGuide from '@/components/StepGuide';

export default function HomePage() {
  return (
    <div className="app-wrap">
      <div className="app-panel">
        <div className="app-content">
          <Header />
          <main>
            <Hero />
            <QuickActions />
            <StepGuide />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
