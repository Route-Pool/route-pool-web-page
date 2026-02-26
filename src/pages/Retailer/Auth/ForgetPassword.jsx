import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Truck,
    ChevronLeft,
    Mail,
    KeyRound,
    ShieldAlert,
    Cpu,
    ArrowRight,
    Lock,
    Zap,
    Shield
} from 'lucide-react';
import { Button, Input } from '../../../components/UI';

export default function RetailerForgetPassword() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/retailer/otp', { state: { phone: email } });
        }, 2000);
    };

    return (
        <div className="app-container" style={{ padding: '0', backgroundColor: '#FBFCFC', minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* Background Architecture */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40vh', zIndex: 0, opacity: 0.3 }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)', backgroundSize: '36px 36px', opacity: 0.1 }} />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, -45, 0] }}
                    transition={{ duration: 25, repeat: Infinity }}
                    style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '350px', height: '350px', border: '1.5px dashed var(--primary)', borderRadius: '50%', opacity: 0.1 }}
                />
            </div>

            {/* Context Header */}
            <header style={{ position: 'relative', zIndex: 10, padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate(-1)}
                    style={{ width: '52px', height: '52px', backgroundColor: 'white', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid #F0F5F5', boxShadow: '0 10px 25px rgba(0,0,0,0.03)', cursor: 'pointer' }}
                >
                    <ChevronLeft size={24} color="var(--primary)" />
                </motion.button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '36px', height: '36px', backgroundColor: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Lock size={20} color="white" />
                    </div>
                    <span style={{ fontWeight: '950', color: 'var(--primary)', fontSize: '1.4rem', letterSpacing: '-0.04em' }}>RoutePoly</span>
                </div>
                <div style={{ width: '52px' }} />
            </header>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ flex: 1, padding: '3.5rem 1.75rem', position: 'relative', zIndex: 1 }}
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    style={{
                        width: '110px', height: '110px', borderRadius: '40px',
                        backgroundColor: 'rgba(240, 90, 40, 0.05)', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', marginBottom: '4rem',
                        border: '2px solid white', boxShadow: '0 25px 50px rgba(240, 90, 40, 0.05)'
                    }}>
                    <KeyRound size={54} color="var(--accent)" />
                </motion.div>

                <div style={{ marginBottom: '4.5rem' }}>
                    <h1 style={{ fontSize: '2.6rem', fontWeight: '900', color: 'var(--black)', marginBottom: '1.25rem', letterSpacing: '-0.05em', lineHeight: '1.1' }}>Credential <span style={{ color: 'var(--accent)' }}>Recovery.</span></h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', fontWeight: '600', lineHeight: '1.6', maxWidth: '340px' }}>
                        Enter your professional terminal identifier to receive an advanced synchronization code.
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p style={{ fontSize: '0.8rem', fontWeight: '900', color: '#A0B0B0', letterSpacing: '0.15em', marginLeft: '6px', textTransform: 'uppercase' }}>Administrator Account</p>
                        <Input
                            placeholder="Professional Email or Terminal ID"
                            icon={Mail}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ height: '80px', borderRadius: '28px', border: '2.5px solid #F0F5F5', padding: '0 1.75rem' }}
                            required
                        />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '2rem', backgroundColor: 'rgba(240, 90, 40, 0.03)', borderRadius: '32px', border: '2.5px solid rgba(240, 90, 40, 0.08)' }}>
                        <ShieldAlert size={32} color="var(--accent)" style={{ flexShrink: 0 }} />
                        <p style={{ fontSize: '0.95rem', color: 'var(--accent)', fontWeight: '750', lineHeight: '1.6' }}>
                            Security Protocol: We will never request your synchronization code via non-encrypted channels.
                        </p>
                    </div>

                    <div style={{ marginTop: '3.5rem' }}>
                        <Button
                            type="submit"
                            disabled={loading}
                            style={{
                                height: '84px', borderRadius: '30px', fontSize: '1.3rem', fontWeight: '900',
                                boxShadow: '0 30px 60px rgba(240, 90, 40, 0.2)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px',
                                backgroundColor: 'var(--accent)'
                            }}
                        >
                            {loading ? (
                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}>
                                    <Cpu size={32} />
                                </motion.div>
                            ) : (
                                <>
                                    Initiate Recovery
                                    <ArrowRight size={28} />
                                </>
                            )}
                        </Button>
                    </div>
                </form>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', fontWeight: '750' }}>
                        Recall your access key? <span onClick={() => navigate('/retailer/signin')} style={{ color: 'var(--primary)', fontWeight: '950', cursor: 'pointer', textDecoration: 'underline' }}>Return to Login</span>
                    </p>
                </div>
            </motion.div>

            {/* Subtle Footer Bio */}
            <div style={{ padding: '2.5rem 1.75rem', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 24px', backgroundColor: 'rgba(0, 166, 156, 0.05)', borderRadius: '16px', border: '1px solid rgba(0, 166, 156, 0.1)' }}>
                    <Shield size={18} color="var(--primary)" />
                    <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '950', letterSpacing: '0.1em' }}>SECURED BY ROUTEPOLY PROTOCOL V3.0</span>
                </div>
            </div>
        </div>
    );
}
