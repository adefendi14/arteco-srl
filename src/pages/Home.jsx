import Hero from '../components/Hero'
import ScrollReveal from '../components/ScrollReveal'
import {
  CertificationsSection,
  CtaBanner,
  PartnersSection,
  ProductsPreview,
  SectorsPreview,
  ServicesPreview,
  TestimonialsSection,
} from '../components/Sections'

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <SectorsPreview />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <ProductsPreview />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <ServicesPreview />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <CertificationsSection />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <PartnersSection />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <CtaBanner />
      </ScrollReveal>
    </>
  )
}
