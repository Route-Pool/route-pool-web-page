import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Truck,
    ChevronLeft,
    ShieldCheck,
    Mail,
    Phone,
    Lock,
    User,
    CheckCircle2,
    Briefcase,
    Zap,
    Cpu,
    ArrowRight,
    Target
} from 'lucide-react';
import { Button, Input } from '../../../components/UI';

export default function RetailerSignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
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
            navigate('/retailer/otp', { state: { phone: formData.emailOrPhone } });
        }, 2000);
    };

    return (
        <div className="app-container" style={{ padding: '0', backgroundColor: '#FBFCFC', minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* Background Stratum Architecture */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '35vh', zIndex: 0, overflow: 'hidden', opacity: 0.3 }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1.5px, transparent 0)',
                    backgroundSize: '40px 40px', opacity: 0.1
                }} />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 15, repeat: Infinity }}
                    style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', backgroundColor: 'var(--primary)', filter: 'blur(120px)', borderRadius: '50%' }}
                />
            </div>

            {/* Context Header Architecture */}
            <header style={{ position: 'relative', zIndex: 10, padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate('/')}
                    style={{ width: '52px', height: '52px', backgroundColor: 'white', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid #F0F5F5', boxShadow: '0 10px 25px rgba(0,0,0,0.03)', cursor: 'pointer' }}
                >
                    <ChevronLeft size={24} color="var(--primary)" />
                </motion.button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '36px', height: '36px', backgroundColor: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Briefcase size={20} color="white" />
                    </div>
                    <span style={{ fontWeight: '950', color: 'var(--primary)', fontSize: '1.4rem', letterSpacing: '-0.04em' }}>RoutePoly</span>
                </div>
                <div style={{ width: '52px' }} />
            </header>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ flex: 1, padding: '2.5rem 1.75rem', position: 'relative', zIndex: 1 }}
            >
                <div style={{ marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--black)', marginBottom: '1rem', letterSpacing: '-0.05em', lineHeight: '1.1' }}>Merchant <span style={{ color: 'var(--primary)' }}>Onboarding.</span></h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: '600', lineHeight: '1.6', maxWidth: '320px' }}>
                        Establish your enterprise node and orchestrate regional logistics efficiency.
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: '900', color: '#A0B0B0', letterSpacing: '0.15em', marginLeft: '6px' }}>REPRESENTATIVE NAME</p>
                        <Input
                            placeholder="Full Registry Name"
                            name="name"
                            icon={User}
                            value={formData.name}
                            onChange={handleChange}
                            style={{ height: '76px', borderRadius: '26px', border: '2.5px solid #F0F5F5' }}
                            required
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: '900', color: '#A0B0B0', letterSpacing: '0.15em', marginLeft: '6px' }}>COMMUNICATION NODE</p>
                        <Input
                            placeholder="Professional Email or Mobile"
                            name="emailOrPhone"
                            icon={Mail}
                            value={formData.emailOrPhone}
                            onChange={handleChange}
                            style={{ height: '76px', borderRadius: '26px', border: '2.5px solid #F0F5F5' }}
                            required
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: '900', color: '#A0B0B0', letterSpacing: '0.15em', marginLeft: '6px' }}>COMMAND PASSKEY</p>
                        <Input
                            placeholder="Set Secure Passphrase"
                            name="password"
                            type="password"
                            icon={Lock}
                            value={formData.password}
                            onChange={handleChange}
                            style={{ height: '76px', borderRadius: '26px', border: '2.5px solid #F0F5F5' }}
                            required
                        />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginTop: '1rem', padding: '1.75rem', backgroundColor: 'white', borderRadius: '32px', border: '2.5px solid #F0F5F5' }}>
                        <ShieldCheck size={28} color="var(--primary)" style={{ flexShrink: 0 }} />
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', fontWeight: '650' }}>
                            By initializing registration, you verify adherence to the <span style={{ color: 'var(--black)', fontWeight: '900' }}>Service Protocol</span> and <span style={{ color: 'var(--black)', fontWeight: '900' }}>Commercial Directives</span>.
                        </p>
                    </div>

                    <div style={{ marginTop: '2.5rem' }}>
                        <Button
                            type="submit"
                            disabled={loading}
                            style={{
                                height: '80px', borderRadius: '28px', fontSize: '1.2rem', fontWeight: '900',
                                boxShadow: '0 25px 50px rgba(0, 77, 65, 0.15)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'
                            }}
                        >
                            {loading ? (
                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}>
                                    <Cpu size={30} />
                                </motion.div>
                            ) : (
                                <>
                                    Initialize Account
                                    <ArrowRight size={24} />
                                </>
                            )}
                        </Button>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '2rem', paddingBottom: '3rem' }}>
                        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', fontWeight: '650' }}>
                            Existing partner? <span onClick={() => navigate('/retailer/signin')} style={{ color: 'var(--primary)', fontWeight: '950', cursor: 'pointer', textDecoration: 'underline' }}>Login to Command</span>
                        </p>
                    </div>
                </form>
            </motion.div>

            <div style={{ padding: '2rem 1.75rem', textAlign: 'center' }}>
                <p style={{ fontSize: '0.85rem', color: '#BBB', fontWeight: '850', letterSpacing: '0.12em' }}>
                    © 2026 ROUTEPOLY MERCHANT SERVICES
                </p>
            </div>
        </div>
    );
}
