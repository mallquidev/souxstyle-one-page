import modelo from '../../assets/modelo.png';

function Nosotros() {
    return (
        <>
            <article className="relative pt-24 bg-black text-white" id='nosotros'>
                {/* Imagen centrada y responsive */}
                <img
                    src={modelo}
                    alt="Modelo"
                    className="mx-auto w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-auto object-cover"
                />
                {/* Contenedor de texto superpuesto */}
                <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between  mb-16 px-6 md:px-10 lg:px-14 text-white">
                    {/* Sección de Texto */}
                    <div className="text-center md:text-left md:ml-14 mt-8 md:mt-0">
                        <div>
                            <p className="text-4xl md:text-6xl lg:text-8xl font-semibold">SOUXXST</p>
                            <p className="text-4xl md:text-6xl lg:text-8xl font-semibold">WEAR</p>
                        </div>
                        <p className="mt-4 text-sm md:text-base lg:text-lg">
                            El mejor diseño además <br /> con el mejor material
                        </p>
                    </div>

                    {/* Botón */}
                    <div className="mt-6 md:mt-0 md:mr-14">
                        <button className="bg-white text-black px-10 py-4 md:px-20 md:py-8 rounded-full text-sm md:text-base lg:text-lg hover:bg-gray-400"
                            onClick={() => {
                                document.getElementById('producto').scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Ver
                        </button>
                    </div>
                </div>
            </article>
        </>
    );
}

export default Nosotros;
