import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import CheckoutSteps from '../components/checkout/CheckoutSteps/CheckoutSteps';
import ShippingForm from '../components/checkout/ShippingForm/ShippingForm';
import PaymentMethods from '../components/checkout/PaymentMethods/PaymentMethods';
import { FiChevronLeft, FiLock } from 'react-icons/fi';

const Checkout = () => {
    const navigate = useNavigate();
    const { cart, cartTotal } = useCart();

    const [currentStep, setCurrentStep] = useState(1);

    // Estados para los formularios
    const [shippingData, setShippingData] = useState({
        fullName: '', email: '', address: '', city: '', zipCode: '', phone: ''
    });
    const [paymentMethod, setPaymentMethod] = useState('card');

    // Redirigir si no hay nada en el carrito
    useEffect(() => {
        if (cart.length === 0) {
            navigate('/carrito');
        }
    }, [cart, navigate]);

    const handlePlaceOrder = () => {
        // Aquí iría la lógica real de crear la orden en el backend
        console.log("Orden creada:", { shippingData, paymentMethod, cart, total: cartTotal });

        // Simulamos éxito y redirigimos
        setTimeout(() => {
            // Asumiendo que tengas una ruta para success
            // Si no tienes OrderSuccess aún, puedes redirigir a home o mostrar un alert
            navigate('/order-success');
        }, 1500);
    };

    const shippingCost = cartTotal > 50 ? 0 : 5.99;
    const finalTotal = cartTotal + shippingCost;

    return (
        <div className="min-h-screen bg-neutral-950 pt-28 pb-12 px-6">
            <div className="container mx-auto max-w-6xl">

                {/* Header del Checkout */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <h1 className="text-3xl font-bold text-white">Finalizar Compra</h1>
                    <CheckoutSteps currentStep={currentStep} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* COLUMNA IZQUIERDA: Formularios */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 md:p-8">

                            {currentStep === 1 && (
                                <ShippingForm
                                    shippingData={shippingData}
                                    setShippingData={setShippingData}
                                    onNext={() => setCurrentStep(2)}
                                />
                            )}

                            {currentStep === 2 && (
                                <PaymentMethods
                                    paymentMethod={paymentMethod}
                                    setPaymentMethod={setPaymentMethod}
                                />
                            )}

                        </div>

                        {/* Botones de Navegación */}
                        <div className="flex justify-between items-center pt-4">
                            {currentStep === 2 ? (
                                <button
                                    onClick={() => setCurrentStep(1)}
                                    className="flex items-center text-neutral-400 hover:text-white transition-colors"
                                >
                                    <FiChevronLeft className="mr-2" /> Volver a Envío
                                </button>
                            ) : (
                                <div /> /* Espaciador */
                            )}

                            {currentStep === 1 ? (
                                <button
                                    form="shipping-form" // Vincula este botón al submit del form
                                    type="submit"
                                    className="px-8 py-3 bg-accent-600 hover:bg-accent-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-accent-900/20"
                                >
                                    Continuar al Pago
                                </button>
                            ) : (
                                <button
                                    onClick={handlePlaceOrder}
                                    className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-900/20 flex items-center gap-2"
                                >
                                    <FiLock /> Pagar {finalTotal.toFixed(2)}€
                                </button>
                            )}
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: Resumen de Orden */}
                    <div className="lg:col-span-1">
                        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sticky top-28">
                            <h3 className="text-lg font-bold text-white mb-6 border-b border-neutral-800 pb-4">Resumen del Pedido</h3>

                            <div className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar mb-6 pr-2">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-neutral-800 bg-neutral-950">
                                            <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
                                        </div>
                                        <div className="flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-white">
                                                    <h3 className="line-clamp-1 text-sm">{item.name}</h3>
                                                    <p className="ml-4 text-sm">{item.price}€</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <p className="text-neutral-500">Cant: {item.quantity}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-neutral-800 pt-4 space-y-2">
                                <div className="flex justify-between text-sm text-neutral-400">
                                    <p>Subtotal</p>
                                    <p>{cartTotal.toFixed(2)}€</p>
                                </div>
                                <div className="flex justify-between text-sm text-neutral-400">
                                    <p>Envío</p>
                                    <p>{shippingCost === 0 ? <span className="text-accent-400 font-bold">GRATIS</span> : `${shippingCost}€`}</p>
                                </div>
                                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-neutral-800 mt-2">
                                    <p>Total</p>
                                    <p>{finalTotal.toFixed(2)}€</p>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center gap-2 text-xs text-neutral-500 justify-center">
                                <FiLock /> Pago 100% seguro encriptado con SSL
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;