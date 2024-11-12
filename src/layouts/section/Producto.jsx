import ImageGallery from 'react-image-gallery';


import one from '../../assets/producto/one.jpeg';
import one1 from '../../assets/producto/one1.jpeg';
import one2 from '../../assets/producto/one2.jpeg';
import one3 from '../../assets/producto/one3.jpeg';
import one4 from '../../assets/producto/one4.jpeg';


import two from '../../assets/producto/two.jpeg';
import two1 from '../../assets/producto/two1.jpeg';
import two2 from '../../assets/producto/two2.jpeg';
import two3 from '../../assets/producto/two3.jpeg';
import two4 from '../../assets/producto/two4.jpeg';


import 'react-image-gallery/styles/css/image-gallery.css';
import whatsap from '../../assets/whatsap.svg'

const products = [
    {
        id: 1,
        title: "Addicted to this",
        price: 40,
        subtitle: "Soux.style",
        description: "Edición limitada te hará sentir único. Con un diseño urbano y audaz, perfecto para quienes no tienen miedo de mostrar su lado rebelde.",
        material: "Jersey 20/1 algodón 100% reactivo",
        corte: "Boxy Fit",
        color: "Negro",
        estampado: "Serigrafía Tacto 0",
        coleccion: "Greek Fever",
        talla: "S - M - L",
        img: [one ,one2, one1, one3, one4],
        isAvailable: true,
    },
    {
        id: 2,
        title: "The fall of Icarus",
        price: 40,
        subtitle: "Vape Addiction",
        description: "Este polo se ve reflejado en la historia mítica de un joven que desafío los límites. Con un diseño para quienes se rebelan, que no temen señalar los errores de la sociedad y no se conforman con lo que los atrapa.",
        material: "Jersey 20/1 algodón 100% reactivo",
        corte: "Boxy Fit",
        color: "Negro",
        estampado: "Serigrafía Tacto 0",
        coleccion: "Greek Fever",
        talla: "S - M - L",
        img: [two1, two, two2, two3, two4],
        isAvailable: true,
    },
   /*  {
        id: 2, 
        title: "The fall of Icarus", 
        subtitle:"Vape Addiction", 
        description: "Este polo se ve reflejado en la historia mítica de un joven que desafío los límites. Con un diseño para quienes se rebelan, que no temen señalar los errores de la sociedad y no se conforman con lo que los atrapa.",
        img: [one1, one2],
        isAvailable: false,
    } */
    // Puedes agregar más productos aquí
];

function Producto() {
    return (
        <div className="container mx-auto px-4 py-8" id='producto'>
            {products.map(product => (
                <div key={product.id} className="flex flex-col lg:flex-row gap-8 mt-20">
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
                            S/{product.price.toLocaleString()} {''}
                            <span className="relative line-through font-thin text-gray-600 ml-2">S/50</span>
                            <span className="text-gray-500">{product.isAvailable ? "" : "Agotado"}</span>
                        </p>
                        <p className="text-gray-500 mb-4">{product.description}</p>
                        <p>{product.material}</p>
                        <p>{product.corte}</p>
                        <p>{product.color}</p>
                        <p>{product.estampado}</p>
                        <p>{product.coleccion}</p>

                        {/* Selección de Talla */}
                        <div className="mb-6">
                            <p className="font-semibold mb-2">TALLA DISPONIBLE</p>
                            <div className="flex flex-wrap gap-2">
                                <button className="px-4 py-2 border rounded-full">S</button>
                                <button className="px-4 py-2 border rounded-full">M</button>
                                <button className="px-4 py-2 border rounded-full">L</button>
                            </div>
                        </div>

                        {/* Selección de Cantidad */}
                        {/* <div className="mb-6">
                            <p className="font-semibold mb-2">Cantidad</p>
                            <div className="flex items-center gap-4">
                                <button className="px-4 py-2 border">-</button>
                                <input type="text" value="1" readOnly className="w-12 text-center border" />
                                <button className="px-4 py-2 border">+</button>
                            </div>
                        </div> */}

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
