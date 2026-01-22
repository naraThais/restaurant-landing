import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SpecialDishes from '@/components/SpecialDishes';
import Welcome from '@/components/Welcome';
import Chef from '@/components/Chef';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SpecialDishes />
      <Welcome />
      <Chef />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}
