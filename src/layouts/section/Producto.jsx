import ImageGallery from 'react-image-gallery';
import ejemplo from '../../assets/producto/ejemplo.png';
import 'react-image-gallery/styles/css/image-gallery.css';
import whatsap from '../../assets/whatsap.svg'

const products = [
    {
        id: 1,
        title: "HOODIE 7 BOLSILLOS",
        price: 55,
        subtitle: "GRIXX",
        description: "Los gastos de envío se calculan en la pantalla de pago.",
        img: [ejemplo, ejemplo],
        isAvailable: false, // o true si está disponible
    },
    // Puedes agregar más productos aquí
];

function Producto() {
    return (
        <div className="container mx-auto px-4 py-8">
            {products.map(product => (
                <div key={product.id} className="flex flex-col lg:flex-row gap-8">
                    {/* Galería de Imágenes */}
                    <div className="lg:w-1/2">
                        <ImageGallery
                            items={product.img.map(image => ({ original: image, thumbnail: image }))}
                            showPlayButton={false}
                            showFullscreenButton={true}
                        />
                    </div>

                    {/* Información del Producto */}
                    <div className="lg:w-1/2 lg:pl-8">
                        <p className="text-sm text-gray-500">{product.subtitle}</p>
                        <h1 className="text-2xl lg:text-4xl font-bold mb-4">{product.title}</h1>
                        <p className="text-lg lg:text-2xl font-semibold mb-4">
                            ${product.price.toLocaleString()} ${' '}
                            <span className="text-gray-500">{product.isAvailable ? "" : "Agotado"}</span>
                        </p>
                        <p className="text-gray-500 mb-4">{product.description}</p>

                        {/* Selección de Talla */}
                        <div className="mb-6">
                            <p className="font-semibold mb-2">TALLA</p>
                            <div className="flex flex-wrap gap-2">
                                <button className="px-4 py-2 border rounded-full">XS</button>
                                <button className="px-4 py-2 border rounded-full">S/M</button>
                                <button className="px-4 py-2 border rounded-full">L/XL</button>
                            </div>
                        </div>

                        {/* Selección de Cantidad */}
                        <div className="mb-6">
                            <p className="font-semibold mb-2">Cantidad</p>
                            <div className="flex items-center gap-4">
                                <button className="px-4 py-2 border">-</button>
                                <input type="text" value="1" readOnly className="w-12 text-center border" />
                                <button className="px-4 py-2 border">+</button>
                            </div>
                        </div>

                        <a
                            target='_blank' rel="noopener noreferrer"
                            className="flex mt-4 k bg-black text-sm justify-center font-bold px-4 py-4 text-white border-b-2 transition-colors duration-300 ease-in-out hover:bg-[#2e2e2e] hover:text-white"
                            href={`https://wa.me/+51984249706?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20${encodeURIComponent(product.title)}`}>
                            <img src={whatsap} alt="WhatsApp" className="w-6 h-6 mr-2" />
                            Reservar
                        </a>
         
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Producto;
