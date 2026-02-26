import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Check,
    X,
    ChevronLeft,
    ShieldCheck,
    AlertCircle,
    LayoutGrid,
    History,
    ArrowRight,
    Activity,
    Target,
    Layers,
    Globe,
    Zap,
    Cpu,
    Radar
} from 'lucide-react';
import { Button } from '../../../components/UI';

const FeedbackScreen = ({ type }) => {
    const navigate = useNavigate();
    const isSuccess = type === 'success';

    return (
        <div className="app-container" style={{ padding: '2rem', backgroundColor: '#FBFCFC', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Background Aesthetic Architecture */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none', zIndex: 0 }}>
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px', background: `radial-gradient(circle, ${isSuccess ? 'rgba(0,166,156,0.1)' : 'rgba(240,90,40,0.05)'} 0%, transparent 70%)`, filter: 'blur(60px)' }} />
                <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '400px', height: '400px', background: `radial-gradient(circle, ${isSuccess ? 'rgba(0,166,156,0.05)' : 'rgba(240,90,40,0.1)'} 0%, transparent 70%)`, filter: 'blur(60px)' }} />
            </div>

            <motion.div
                initial={{ scale: 0.5, rotate: -15, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: 'spring', damping: 15, stiffness: 150 }}
                style={{ marginBottom: '4rem', position: 'relative', zIndex: 1 }}
            >
                <div style={{
                    width: '180px', height: '180px', borderRadius: '64px',
                    background: isSuccess
                        ? 'linear-gradient(135deg, var(--primary) 0%, #003D34 100%)'
                        : 'linear-gradient(135deg, var(--accent) 0%, #A03010 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto',
                    boxShadow: isSuccess
                        ? '0 40px 80px rgba(0, 61, 52, 0.3)'
                        : '0 40px 80px rgba(240, 90, 40, 0.25)',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '4px solid white'
                }}>
                    {/* Animated Pulse Architecture */}
                    <AnimatePresence>
                        <motion.div
                            animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0], opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                            style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, white, transparent 75%)' }}
                        />
                    </AnimatePresence>

                    <div style={{
                        width: '88px', height: '88px', borderRadius: '32px', backgroundColor: 'rgba(255,255,255,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(20px)',
                        zIndex: 1, border: '1.5px solid rgba(255,255,255,0.35)',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.15)'
                    }}>
                        {isSuccess ? (
                            <Check size={54} color="white" strokeWidth={4} />
                        ) : (
                            <X size={54} color="white" strokeWidth={4} />
                        )}
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{ maxWidth: '380px', position: 'relative', zIndex: 1 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                    <Activity size={20} color={isSuccess ? 'var(--primary)' : 'var(--accent)'} />
                    <span style={{ fontSize: '0.9rem', color: isSuccess ? 'var(--primary)' : 'var(--accent)', fontWeight: '950', letterSpacing: '0.2rem', textTransform: 'uppercase' }}>
                        {isSuccess ? 'Handshake Synchronized' : 'Handshake Rejected'}
                    </span>
                </div>

                <h1 style={{ fontSize: '3.2rem', fontWeight: '950', color: 'var(--black)', marginBottom: '1.25rem', letterSpacing: '-0.07em', lineHeight: '1' }}>
                    {isSuccess ? 'Node Verified.' : 'Sync Failed.'}
                </h1>

                <p style={{ fontSize: '1.15rem', color: '#6A7A7A', lineHeight: '1.7', marginBottom: '5.5rem', fontWeight: '700' }}>
                    {isSuccess
                        ? 'Your logistics operation has been successfully synchronized. Payout protocol initiated to your wallet hub.'
                        : 'The provided synchronization key does not match regional records. Please re-validate the node key.'}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Button
                            onClick={() => navigate(isSuccess ? '/rider/dashboard' : '/rider/code')}
                            style={{
                                height: '80px', borderRadius: '28px', fontSize: '1.2rem', fontWeight: '950',
                                boxShadow: isSuccess ? '0 30px 60px rgba(0, 61, 52, 0.2)' : '0 30px 60px rgba(240, 90, 40, 0.15)',
                                backgroundColor: isSuccess ? 'var(--primary)' : 'var(--accent)'
                            }}
                        >
                            {isSuccess ? 'Return to Command' : 'Retry Verification'}
                            <ArrowRight size={24} style={{ marginLeft: '12px' }} />
                        </Button>
                    </motion.div>

                    {isSuccess && (
                        <motion.button
                            whileHover={{ y: -2, color: 'var(--black)' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/rider/history')}
                            style={{
                                backgroundColor: 'transparent', border: 'none', color: 'var(--primary)',
                                fontWeight: '950', fontSize: '1.05rem', display: 'flex', alignItems: 'center',
                                justifyContent: 'center', gap: '10px', padding: '1rem', cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <History size={22} />
                            Logistics Ledger
                        </motion.button>
                    )}
                </div>
            </motion.div>

            {/* Premium Infrastructure Branding */}
            <div style={{ position: 'absolute', bottom: '4rem', opacity: 0.4 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
                    <Shield size={18} color="#B0B0B0" />
                    <p style={{ fontSize: '0.9rem', color: '#B0B0B0', fontWeight: '900', letterSpacing: '0.15em' }}>ROUTEPOLY PROTOCOL SYNC V4.0</p>
                </div>
            </div>
        </div>
    );
};

export const RiderSuccess = () => <FeedbackScreen type="success" />;
export const RiderFailed = () => <FeedbackScreen type="failed" />;
