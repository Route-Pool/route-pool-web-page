import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Truck,
    ChevronLeft,
    LogIn,
    Mail,
    Lock,
    Store,
    ShieldCheck,
    User,
    Briefcase,
    Zap,
    Cpu,
    ArrowRight,
    Shield
} from 'lucide-react';
import { Button, Input } from '../../../components/UI';

export default function RetailerSignIn() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/retailer/dashboard');
        }, 2000);
    };

    return (
        <div className="app-container" style={{ padding: '0', backgroundColor: '#FBFCFC', minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* Background Architecture */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40vh', zIndex: 0, overflow: 'hidden', opacity: 0.4 }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)',
                    backgroundSize: '40px 40px', opacity: 0.08
                }} />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
                    style={{ position: 'absolute', top: '-120px', left: '-120px', width: '450px', height: '450px', border: '1.5px dashed var(--primary)', borderRadius: '50%', opacity: 0.15 }}
                />
            </div>

            {/* Premium Header Architecture */}
            <header style={{ position: 'relative', zIndex: 10, padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate('/')}
                    style={{ width: '52px', height: '52px', backgroundColor: 'white', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid #F0F5F5', boxShadow: '0 10px 25px rgba(0,0,0,0.03)', cursor: 'pointer' }}
                >
                    <ChevronLeft size={24} color="var(--primary)" />
                </motion.button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '36px', height: '36px', backgroundColor: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px rgba(0, 166, 156, 0.25)' }}>
                        <Briefcase size={20} color="white" />
                    </div>
                    <span style={{ fontWeight: '950', color: 'var(--primary)', fontSize: '1.5rem', letterSpacing: '-0.04em' }}>RoutePoly</span>
                </div>
                <div style={{ width: '52px' }} />
            </header>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ flex: 1, padding: '3.5rem 1.75rem', position: 'relative', zIndex: 1 }}
            >
                <div style={{ marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '2.6rem', fontWeight: '900', color: 'var(--black)', marginBottom: '1rem', letterSpacing: '-0.05em', lineHeight: '1.1' }}>Merchant <span style={{ color: 'var(--primary)' }}>Command.</span></h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: '600', lineHeight: '1.6', maxWidth: '340px' }}>
                        Sign in to your professional terminal to orchestrate your regional logistics pool.
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: '900', color: '#A0B0B0', letterSpacing: '0.15em', marginLeft: '6px', textTransform: 'uppercase' }}>Administrator Node</p>
                        <Input
                            placeholder="Professional Email or Mobile"
                            name="emailOrPhone"
                            icon={Mail}
                            value={formData.emailOrPhone}
                            onChange={handleChange}
                            style={{ height: '76px', borderRadius: '26px', border: '2.5px solid #F0F5F5', padding: '0 1.75rem' }}
                            required
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: '900', color: '#A0B0B0', letterSpacing: '0.15em', marginLeft: '6px', textTransform: 'uppercase' }}>Access Token</p>
                        <Input
                            placeholder="Secure Terminal Passphrase"
                            name="password"
                            type="password"
                            icon={Lock}
                            value={formData.password}
                            onChange={handleChange}
                            style={{ height: '76px', borderRadius: '26px', border: '2.5px solid #F0F5F5', padding: '0 1.75rem' }}
                            required
                        />
                        <div style={{ textAlign: 'right', marginTop: '0.5rem' }}>
                            <span
                                onClick={() => navigate('/retailer/forget-password')}
                                style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '950', cursor: 'pointer', letterSpacing: '-0.01em' }}
                            >
                                Recover Command Access?
                            </span>
                        </div>
                    </div>

                    <div style={{ marginTop: '2.5rem' }}>
                        <Button
                            type="submit"
                            disabled={loading}
                            style={{
                                height: '80px', borderRadius: '28px', fontSize: '1.25rem', fontWeight: '900',
                                boxShadow: '0 30px 60px rgba(0, 77, 65, 0.18)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px'
                            }}
                        >
                            {loading ? (
                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}>
                                    <Cpu size={30} />
                                </motion.div>
                            ) : (
                                <>
                                    Establish Link
                                    <ArrowRight size={26} />
                                </>
                            )}
                        </Button>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', fontWeight: '700' }}>
                            New professional? <span onClick={() => navigate('/retailer/signup')} style={{ color: 'var(--primary)', fontWeight: '950', cursor: 'pointer', textDecoration: 'underline' }}>Register Node</span>
                        </p>
                    </div>

                    <div style={{ marginTop: '5.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', marginBottom: '2.5rem' }}>
                            <div style={{ flex: 1, height: '2px', backgroundColor: '#F0F5F5', borderRadius: '1px' }} />
                            <span style={{ fontSize: '0.85rem', color: '#A0B0B0', fontWeight: '900', letterSpacing: '0.25em' }}>FLEET INTERFACE</span>
                            <div style={{ flex: 1, height: '2px', backgroundColor: '#F0F5F5', borderRadius: '1px' }} />
                        </div>
                        <motion.button
                            type="button"
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => navigate('/rider/signin')}
                            style={{
                                width: '100%', padding: '1.85rem', borderRadius: '32px',
                                border: '2.5px solid #F0F5F5', backgroundColor: 'white', color: 'var(--black)',
                                fontWeight: '950', cursor: 'pointer', fontSize: '1.15rem',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem',
                                boxShadow: '0 15px 40px rgba(0,0,0,0.02)'
                            }}
                        >
                            <User size={24} color="var(--primary)" />
                            Switch to Rider Terminal
                        </motion.button>
                    </div>
                </form>
            </motion.div>

            {/* Subtle Security Status Board */}
            <div style={{ padding: '2.5rem 1.75rem', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 24px', backgroundColor: 'rgba(0, 166, 156, 0.05)', borderRadius: '16px', border: '1px solid rgba(0, 166, 156, 0.1)' }}>
                    <Shield size={18} color="var(--primary)" />
                    <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '950', letterSpacing: '0.1em' }}>SECURED BY ROUTEPOLY PROTOCOL V3.0</span>
                </div>
            </div>
        </div>
    );
}
