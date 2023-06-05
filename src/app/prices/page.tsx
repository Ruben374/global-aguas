import Cards from "@/components/Cards"
import ContactForm from "@/components/ContactForm"
import Banner from "@/components/Banner"
export default function Prices() {
    return (
        <>
            <Banner title="Nossos Preços" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            <div className="w-full text-center">
                <p className="font-bold text-6xl">
                    Escolha Seus planos
                </p>
                <p className="">
                    Lorem ipsum dolor sit, amet consectet
                </p>
            </div>
            <Cards />
        </>
    )
}