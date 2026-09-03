import { Container } from "@/components/container/Container";
import Tabs from "@/components/ui/Tabs";
import { Typography } from "@/components/ui/Typography";

export default function About() {
  return (
      <section className="w-full h-auto py-24">
          <Container>
              <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                      <Typography variant="lead" component="div" className="text-primary-400 uppercase font-haffer-r">// <span className="text-text">A propos</span></Typography>
                      <Typography variant="h2" component="h2">Pourquoi me choisir ?</Typography>
                  </div>
                  <div className="max-w-2xl flex flex-col gap-4">
                      <Typography variant="body" component="p" className="font-haffer-r text-dark text-balance">Développeur web freelance à Madagascar,créative design ,expert WordPress, WooCommerce et SEO, avec plus de 5 ans d’expérience et plus de 50 sites web professionnels conçus dans divers secteurs.</Typography>
                      <Typography variant="body" component="p" className="font-haffer-r text-dark">En tant que freelance déclaré, j'offre des prestations fiables et conforme aux standards professionnels.</Typography>
                  </div>
              </div>

              {/* Tabs */}
              <div className="mt-10">
                  <Tabs />
              </div>
          </Container>
    </section>
  )
}
