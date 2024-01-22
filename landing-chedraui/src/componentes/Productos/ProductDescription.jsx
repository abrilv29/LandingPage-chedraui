import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../Carrito/CartContext';
import { HiStar } from 'react-icons/hi';
import { BsCart2 } from 'react-icons/bs';

const ProductDescription = () => {
    const { id } = useParams();
    const { addToCart, cartItems } = useCart();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const obtenerProductoPorId = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProducto(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener el producto', error);
                setError('Error fetching data. Please try again later.');
                setLoading(false);
            }
        };

        obtenerProductoPorId();
    }, [id]);

    const isProductInCart = (productId) => {
        return cartItems.some((item) => item.id === productId);
    };

    const handleAddToCart = () => {
        addToCart(producto);
    };

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error al cargar el producto: {error}</p>;
    }

    if (!producto) {
        // Producto no encontrado, redirige a la página de error
        navigate('/pagina-de-error');
        return null;
    }

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < Math.floor(rating); i++) {
            stars.push(<HiStar key={i} className="text-yellow-400" />);
        }
        return stars;
    };

    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl p-8 border border-gray-300 rounded-lg font-montserrat">
                {/* Columna izquierda para la imagen */}
                <div className="flex justify-center items-center">
                    <img src={producto.image} alt={producto.title} className="w-full h-auto max-w-md" />
                </div>

                {/* Columna derecha para la información */}
                <div>
                    <h2 className=" text-3xl font-semibold text-customBlue py-3 font-monserrat ">{producto.title}</h2>
                    <p className="text-gray-600">{producto.description}</p>

                    <div className="mt-4 flex flex-col">
                        <p className="text-gray-800 font-bold text-3xl">Precio: ${producto.price}</p>
                        <p className="text-gray-600 font-medium font-monserrat py-2">Categoría: {producto.category}</p>
                    </div>

                    <div className="flex items-center">
                        {renderStars(producto.rating.rate)}
                        <span className="mr-2 ml-3 rounded bg-yellow-300 px-2.5 py-0.5 text-xs font-montserrat font-semibold">{producto.rating.rate}</span>
                    </div>


                    {/* Botón de Agregar al Carrito */}
                    <button
                        onClick={handleAddToCart}
                        className={`flex items-center justify-center rounded-md ${isProductInCart(producto.id) ? 'bg-red-500' : 'bg-[#e57308]'} px-4 sm:px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-customBlue focus:outline-none focus:ring-4 focus:ring-${isProductInCart(producto.id) ? 'red-300' : 'blue-300'} mt-4`}
                    >
                        <BsCart2 className="text-white text-xl mr-2 h-6 w-6" />
                        {isProductInCart(producto.id) ? 'Eliminar del carrito' : 'Agregar al carrito'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
