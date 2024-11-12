
import polo from '../../assets/polo.svg'

function Categoria() {
    return (
        <div className="container mx-auto px-4 mt-10 lg:mt-20" id='categoria'>
            {/* Título */}
            <p className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
                DISPONIBLE 30 DE OCTUBRE 6PM HORA PERÚ
            </p>
            {/* Contenedor de categorías */}
            <div>
                {/* Cada categoría */}
                <div className='flex justify-center items-center'>
                    <img src={polo} alt="Polo" className="w-32 h-32 text-center" />

                </div>
                {/* <div className="flex flex-col items-center bg-white shadow-lg p-4 md:p-6 rounded-lg">
                    <img src={categoria} alt="Categoria 1" className="w-full h-auto mb-4 object-cover rounded-md" />
                    <p className="text-center font-medium text-base md:text-lg">Categoria 1</p>
                    <p className="text-center text-gray-500 text-sm md:text-base mt-2">Precio: 7,000 P.</p>
                </div>

                <div className="flex flex-col items-center bg-white shadow-lg p-4 md:p-6 rounded-lg">
                    <img src={categoria} alt="Categoria 2" className="w-full h-auto mb-4 object-cover rounded-md" />
                    <p className="text-center font-medium text-base md:text-lg">Categoria 2</p>
                    <p className="text-center text-gray-500 text-sm md:text-base mt-2">Precio: 7,000 P.</p>
                </div>

                <div className="flex flex-col items-center bg-white shadow-lg p-4 md:p-6 rounded-lg">
                    <img src={categoria} alt="Categoria 3" className="w-full h-auto mb-4 object-cover rounded-md" />
                    <p className="text-center font-medium text-base md:text-lg">Categoria 3</p>
                    <p className="text-center text-gray-500 text-sm md:text-base mt-2">Precio: 7,000 P.</p>
                </div> */}
            </div>
        </div>
    );
}

export default Categoria;
