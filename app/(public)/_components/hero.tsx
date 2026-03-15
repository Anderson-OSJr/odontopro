import { Button } from "@/components/ui/button";
import Image from "next/image";
import doctorImg from "@/public/doctor-hero.png";

const Hero = () => {
  return (
    <section className="bg-white pb-4 md:pb-0">
      <div className="container mx-auto px-4 pt-20 sm:px-6 lg:px-8">
        <main className="flex items-center justify-center">
          <article className="space-y-8 max-w-3xl flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl max-w-2xl font-bold">
              Encontre os melhores profissionais em um único local!
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Nós somos uma plataforma para profissionais da saúde com foco em
              agilizar seu atendimento de forma simplificada e organizada.
            </p>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white w-fit px-6 font-semibold">
              Encontre uma clínica
            </Button>
          </article>

          <div className="hidden md:block">
            <Image
              src={doctorImg}
              alt="Foto Ilustrativa"
              width={340}
              height={400}
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </main>
      </div>
    </section>
  );
};
export default Hero;
