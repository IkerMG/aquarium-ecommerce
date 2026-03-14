import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLock, FiUser, FiPhone, FiArrowRight } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const { login, register, loading, error } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');
  
  // Login form
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  
  // Register form
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});

  const validateLogin = () => {
    const newErrors = {};
    if (!loginData.email.trim()) newErrors.email = 'El email es obligatorio';
    else if (!/\S+@\S+\.\S+/.test(loginData.email)) newErrors.email = 'Email no válido';
    if (!loginData.password) newErrors.password = 'La contraseña es obligatoria';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateRegister = () => {
    const newErrors = {};
    if (!registerData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!registerData.email.trim()) newErrors.email = 'El email es obligatorio';
    else if (!/\S+@\S+\.\S+/.test(registerData.email)) newErrors.email = 'Email no válido';
    if (!registerData.password) newErrors.password = 'La contraseña es obligatoria';
    else if (registerData.password.length < 6) newErrors.password = 'Mínimo 6 caracteres';
    if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!validateLogin()) return;

    try {
      await login(loginData.email, loginData.password);
      toast.success('¡Bienvenido de nuevo!');
      navigate('/mi-cuenta');
    } catch (err) {
      toast.error(err.message || 'Error al iniciar sesión');
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!validateRegister()) return;

    try {
      await register({
        name: registerData.name,
        email: registerData.email,
        phone: registerData.phone
      });
      toast.success('¡Cuenta creada con éxito!');
      navigate('/mi-cuenta');
    } catch (err) {
      toast.error(err.message || 'Error al crear cuenta');
    }
  };

  const inputClasses = (field) => `
    w-full bg-neutral-950 border rounded-xl p-4 pl-12 text-white placeholder-neutral-600
    focus:border-accent-500 focus:ring-1 focus:ring-accent-500/20 outline-none transition-all
    ${errors[field] ? 'border-red-500/50' : 'border-neutral-800'}
  `;

  const tabVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden">
          
          {/* Tabs */}
          <div className="flex border-b border-neutral-800">
            <button
              onClick={() => { setActiveTab('login'); setErrors({}); }}
              className={`flex-1 py-4 text-sm font-medium transition-all relative ${
                activeTab === 'login' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
              }`}
              data-testid="login-tab"
            >
              Iniciar sesión
              {activeTab === 'login' && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-500"
                />
              )}
            </button>
            <button
              onClick={() => { setActiveTab('register'); setErrors({}); }}
              className={`flex-1 py-4 text-sm font-medium transition-all relative ${
                activeTab === 'register' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
              }`}
              data-testid="register-tab"
            >
              Registrarse
              {activeTab === 'register' && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-500"
                />
              )}
            </button>
          </div>

          {/* Form content */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              {activeTab === 'login' ? (
                <motion.div
                  key="login"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                >
                  <h2 className="font-heading text-2xl font-bold text-white mb-2">Bienvenido de nuevo</h2>
                  <p className="text-neutral-500 text-sm mb-8">Accede a tu cuenta Urban Natura</p>

                  {error && (
                    <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleLoginSubmit} className="space-y-5">
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
                      <input
                        type="email"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        placeholder="tu@email.com"
                        className={inputClasses('email')}
                        data-testid="login-email"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div className="relative">
                      <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
                      <input
                        type="password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        placeholder="••••••••"
                        className={inputClasses('password')}
                        data-testid="login-password"
                      />
                      {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-accent-500 hover:bg-accent-400 disabled:bg-neutral-700 text-neutral-950 font-bold rounded-xl transition-all"
                      data-testid="login-submit"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-neutral-950/30 border-t-neutral-950 rounded-full animate-spin" />
                          Entrando...
                        </>
                      ) : (
                        <>
                          Iniciar sesión <FiArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </form>

                  {/* Test credentials */}
                  <div className="mt-8 pt-6 border-t border-neutral-800">
                    <p className="text-xs text-neutral-600 mb-2 text-center">Credenciales de prueba:</p>
                    <div className="flex items-center justify-center gap-2 text-xs">
                      <code className="bg-neutral-950 px-2 py-1 rounded text-accent-400">demo@urbannatura.com</code>
                      <span className="text-neutral-700">/</span>
                      <code className="bg-neutral-950 px-2 py-1 rounded text-accent-400">123456</code>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="register"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                >
                  <h2 className="font-heading text-2xl font-bold text-white mb-2">Crear cuenta</h2>
                  <p className="text-neutral-500 text-sm mb-8">Únete a la comunidad Urban Natura</p>

                  <form onSubmit={handleRegisterSubmit} className="space-y-4">
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
                      <input
                        type="text"
                        value={registerData.name}
                        onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                        placeholder="Tu nombre completo"
                        className={inputClasses('name')}
                        data-testid="register-name"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
                      <input
                        type="email"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        placeholder="tu@email.com"
                        className={inputClasses('email')}
                        data-testid="register-email"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div className="relative">
                      <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
                      <input
                        type="tel"
                        value={registerData.phone}
                        onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                        placeholder="+34 600 000 000 (opcional)"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-4 pl-12 text-white placeholder-neutral-600 focus:border-accent-500 outline-none transition-all"
                        data-testid="register-phone"
                      />
                    </div>

                    <div className="relative">
                      <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
                      <input
                        type="password"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                        placeholder="Contraseña (mín. 6 caracteres)"
                        className={inputClasses('password')}
                        data-testid="register-password"
                      />
                      {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
                    </div>

                    <div className="relative">
                      <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
                      <input
                        type="password"
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                        placeholder="Confirmar contraseña"
                        className={inputClasses('confirmPassword')}
                        data-testid="register-confirm-password"
                      />
                      {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-accent-500 hover:bg-accent-400 disabled:bg-neutral-700 text-neutral-950 font-bold rounded-xl transition-all mt-2"
                      data-testid="register-submit"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-neutral-950/30 border-t-neutral-950 rounded-full animate-spin" />
                          Creando cuenta...
                        </>
                      ) : (
                        <>
                          Crear cuenta <FiArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-xs text-neutral-600 text-center mt-6">
                    Al registrarte aceptas nuestros{' '}
                    <Link to="/terminos" className="text-accent-400 hover:underline">términos</Link>
                    {' '}y{' '}
                    <Link to="/privacidad" className="text-accent-400 hover:underline">política de privacidad</Link>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Back to home */}
        <p className="text-center text-neutral-600 text-sm mt-6">
          <Link to="/" className="hover:text-white transition-colors">← Volver a la tienda</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
