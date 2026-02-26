import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, ChevronLeft, Check, Lock, ShieldCheck, CheckCircle2, Cpu, ArrowRight, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Input } from '../../../components/UI';

export default function RetailerResetPassword() {
    const navigate = useNavigate();
    const [showSuccess, setShowSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowSuccess(true);
        }, 2000);
    };

    return (
        <div className="app-container" style={{ padding: '0', backgroundColor: '#FBFCFC', minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* Background Architecture */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40vh', zIndex: 0, opacity: 0.3 }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)', backgroundSize: '36px 36px', opacity: 0.1 }} />
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
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ flex: 1, padding: '3.5rem 1.75rem', position: 'relative', zIndex: 1 }}
            >
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    style={{
                        width: '110px', height: '110px', borderRadius: '40px',
                        backgroundColor: 'rgba(0, 166, 156, 0.05)', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', marginBottom: '4rem',
                        border: '2px solid white', boxShadow: '0 25px 50px rgba(0, 166, 156, 0.05)'
                    }}>
                    <Lock size={54} color="var(--primary)" />
                </motion.div>

                <div style={{ marginBottom: '4.5rem' }}>
                    <h1 style={{ fontSize: '2.6rem', fontWeight: '900', color: 'var(--black)', marginBottom: '1.25rem', letterSpacing: '-0.05em', lineHeight: '1.1' }}>Passkey <span style={{ color: 'var(--primary)' }}>Rotation.</span></h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', fontWeight: '600', lineHeight: '1.6', maxWidth: '340px' }}>
                        Establish a high-density cryptographic key for your professional terminal to maintain elite security standards.
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p style={{ fontSize: '0.8rem', fontWeight: '900', color: '#A0B0B0', letterSpacing: '0.15em', marginLeft: '6px', textTransform: 'uppercase' }}>Advanced Passkey</p>
                        <Input
                            placeholder="Set Command Passphrase"
                            type="password"
                            icon={Lock}
                            style={{ height: '80px', borderRadius: '28px', border: '2.5px solid #F0F5F5', padding: '0 1.75rem' }}
                            required
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p style={{ fontSize: '0.8rem', fontWeight: '900', color: '#A0B0B0', letterSpacing: '0.15em', marginLeft: '6px', textTransform: 'uppercase' }}>Confirm Key</p>
                        <Input
                            placeholder="Re-enter Passphrase"
                            type="password"
                            icon={ShieldCheck}
                            style={{ height: '80px', borderRadius: '28px', border: '2.5px solid #F0F5F5', padding: '0 1.75rem' }}
                            required
                        />
                    </div>

                    <div style={{ marginTop: '3.5rem' }}>
                        <Button
                            type="submit"
                            disabled={loading}
                            style={{
                                height: '84px', borderRadius: '30px', fontSize: '1.3rem', fontWeight: '900',
                                boxShadow: '0 30px 60px rgba(0, 77, 65, 0.18)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px'
                            }}
                        >
                            {loading ? (
                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}>
                                    <Cpu size={32} />
                                </motion.div>
                            ) : (
                                <>
                                    Finalize Handshake
                                    <ArrowRight size={28} />
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </motion.div>

            {/* Success Visual Overlay */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.85)',
                            backdropFilter: 'blur(35px)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100,
                            padding: '2rem'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.85, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            style={{
                                backgroundColor: 'white', borderRadius: '52px', padding: '4.5rem 3rem',
                                textAlign: 'center', maxWidth: '440px', width: '100%',
                                boxShadow: '0 50px 120px rgba(0,0,0,0.4)',
                                position: 'relative', overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute', top: '-30px', left: '-30px', width: '180px', height: '180px',
                                backgroundColor: 'rgba(0, 166, 156, 0.04)', borderRadius: '50%', zIndex: 0
                            }} />

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <motion.div
                                    animate={{
                                        scale: [1, 1.15, 1],
                                        boxShadow: ['0 0 0 0px rgba(0, 166, 156, 0.15)', '0 0 0 25px rgba(0, 166, 156, 0)', '0 0 0 0px rgba(0, 166, 156, 0.15)']
                                    }}
                                    transition={{ duration: 2.5, repeat: Infinity }}
                                    style={{
                                        width: '110px', height: '110px', borderRadius: '42px', backgroundColor: '#F0F9F8',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 3rem',
                                        border: '3px solid white'
                                    }}>
                                    <CheckCircle2 size={54} color="var(--primary)" strokeWidth={3} />
                                </motion.div>
                                <h2 style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--black)', marginBottom: '1.25rem', letterSpacing: '-0.06em' }}>Command Updated</h2>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '4rem', fontWeight: '650' }}>
                                    Your professional terminal access key has been successfully rotated. Global re-authorization is now mandated.
                                </p>
                                <Button
                                    onClick={() => navigate('/retailer/signin')}
                                    style={{
                                        height: '80px', borderRadius: '28px', fontSize: '1.2rem', fontWeight: '900',
                                        boxShadow: '0 25px 45px rgba(0, 166, 156, 0.22)'
                                    }}>
                                    Return to Command
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Subtle Footer Bio */}
            <div style={{ padding: '2.5rem 1.75rem', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 28px', backgroundColor: 'rgba(0, 166, 156, 0.05)', borderRadius: '16px', border: '1px solid rgba(0, 166, 156, 0.1)' }}>
                    <Shield size={18} color="var(--primary)" />
                    <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '950', letterSpacing: '0.1em' }}>SECURED BY ROUTEPOLY PROTOCOL V3.0</span>
                </div>
            </div>
        </div>
    );
}
