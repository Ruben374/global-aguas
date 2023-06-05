import ContactForm from "@/components/ContactForm";
import Banner from "@/components/Banner";

export default function Contact() {
  return (
    <>
      <Banner title="Entrar Em Contacto" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
      <div className="flex flex-col md:flex-row flex-wrap justify-between px-16 ">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <ContactForm />
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center p-4 text-gray-800">
          <p className="font-bold mb-2">Endereço</p>
          <p>Edifício 403, Kinaxixi, Luanda, Angola</p>
          <p className="font-bold mt-4 mb-2">Telefone</p>
          <p>+244 920 000 000</p>
          <p className="font-bold mt-4 mb-2">Email</p>
          <p>geral@gaguas.com</p>
        </div>
      </div>
    </>
  );
}
