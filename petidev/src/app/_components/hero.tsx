import {WhatsappLogo} from '@phosphor-icons/react/dist/ssr'
export function Home (){
    return(
        <section className="bg-[#E84C3D] text-white relative overflow-hidden">

        <div>
                <article>

                    <div className="space-y-6">
                        <h1 className="text-3x1 md:text-4xl lg:text-5xl font-bold leading-10">
                            Seu pet merece, carinho e atenção especial!
                        </h1>

                        <p className="lg:text-lg">Oferecemos os melhores serviços,
                        para garantir o bem-estar
                        e a felicidade felicidade do seu amigo de quatro patas!</p>

                            <a href="#" className="bg-green-500 px-5 py-2 rounded-md font-semibold
                            flex items-center justify-center w-fit gap-2">
                                <WhatsappLogo clasName='w-4 h-5'/>
                                Contato via whatsapp
                            </a>

                        <div className="mt-8">
                            <p className="txt-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">10%</b>de desconto na primeira compra!
                            </p>
                        </div>
                    </div>

            </article>
        </div>

        </section>
    )
}