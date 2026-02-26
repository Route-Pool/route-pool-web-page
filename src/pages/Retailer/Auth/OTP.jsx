import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft,
    ShieldCheck,
    RefreshCw,
    Smartphone,
    Cpu,
    ArrowRight,
    Lock,
    Zap,
    Shield
} from 'lucide-react';
import { Button } from '../../../components/UI';

export default function RetailerOTP() {
    const navigate = useNavigate();
    const location = useLocation();
    const phone = location.state?.phone || '+234 813 567 ****';
    const [otp, setOtp] = useState(['', '', '', '', '']);
    const [timer, setTimer] = useState(30);
    const [loading, setLoading] = useState(false);
    const inputRefs = useRef([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleChange = (index, value) => {
        if (!/^\d*$/.test(value)) return;
        if (value.length > 1) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 4) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/retailer/dashboard');
        }, 2000);
    };

    return (
        <div className="app-container" style={{ padding: '0', backgroundColor: '#FBFCFC', minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* Background Architecture */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '35vh', zIndex: 0, opacity: 0.3 }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)', backgroundSize: '32px 32px', opacity: 0.1 }} />
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ flex: 1, padding: '3.5rem 1.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}
            >
                <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ width: '110px', height: '110px', borderRadius: '40px', backgroundColor: 'rgba(0, 166, 156, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '3.5rem', border: '2px solid white', boxShadow: '0 25px 50px rgba(0, 166, 156, 0.05)' }}>
                    <Smartphone size={54} color="var(--primary)" />
                </motion.div>

                <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                    <h2 style={{ fontSize: '2.4rem', fontWeight: '900', color: 'var(--black)', marginBottom: '1.25rem', letterSpacing: '-0.05em' }}>Access <span style={{ color: 'var(--primary)' }}>Verification.</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6', fontWeight: '600', maxWidth: '320px', margin: '0 auto' }}>
                        An elite cryptographic authentication code has been dispatched to your node at <br />
                        <span style={{ color: 'var(--black)', fontWeight: '950' }}>{phone}</span>
                    </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '6rem' }}>
                    {otp.map((digit, i) => (
                        <motion.input
                            key={i}
                            ref={el => inputRefs.current[i] = el}
                            type="text"
                            inputMode="numeric"
                            value={digit}
                            maxLength={1}
                            onChange={(e) => handleChange(i, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(i, e)}
                            whileFocus={{ scale: 1.15, border: '4px solid var(--primary)', boxShadow: '0 20px 40px rgba(0, 166, 156, 0.18)' }}
                            style={{
                                width: '64px',
                                height: '84px',
                                backgroundColor: 'white',
                                border: digit ? '3.5px solid var(--primary)' : '3.5px solid #F0F5F5',
                                borderRadius: '24px',
                                textAlign: 'center',
                                fontSize: '2rem',
                                fontWeight: '900',
                                color: 'var(--primary)',
                                outline: 'none',
                                boxShadow: digit ? '0 15px 30px rgba(0, 166, 156, 0.12)' : 'none',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                letterSpacing: '-0.05em'
                            }}
                        />
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginBottom: 'auto' }}>
                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '750', marginBottom: '1.25rem' }}>
                        Experiencing transmission latency?
                    </p>
                    <AnimatePresence mode="wait">
                        {timer > 0 ? (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                style={{ fontSize: '1.1rem', color: 'var(--black)', fontWeight: '950', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                                <RefreshCw size={20} className="animate-spin" color="var(--primary)" />
                                SYNC AVAILABLE IN {timer}S
                            </motion.div>
                        ) : (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: '950', fontSize: '1.15rem', cursor: 'pointer', textDecoration: 'underline', letterSpacing: '-0.01em' }}>
                                RETRANSMIT ACCESS TOKEN
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>

                <div style={{ width: '100%', marginTop: '4rem' }}>
                    <Button
                        disabled={otp.some(d => !d) || loading}
                        onClick={handleVerify}
                        style={{
                            height: '80px', borderRadius: '28px', fontSize: '1.3rem', fontWeight: '900',
                            boxShadow: !otp.some(d => !d) ? '0 30px 60px rgba(0, 77, 65, 0.2)' : 'none',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px'
                        }}
                    >
                        {loading ? (
                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}>
                                <Cpu size={32} />
                            </motion.div>
                        ) : (
                            <>
                                Establish Authorization
                                <ArrowRight size={28} />
                            </>
                        )}
                    </Button>
                </div>
            </motion.div>

            {/* Verification Security Board */}
            <div style={{ padding: '2.5rem 1.75rem', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '12px 28px', backgroundColor: 'rgba(0, 166, 156, 0.05)', borderRadius: '16px', border: '1px solid rgba(0, 166, 156, 0.1)' }}>
                    <ShieldCheck size={20} color="var(--primary)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '950', letterSpacing: '0.12em' }}>ENCRYPTED END-TO-END VERIFICATION</span>
                </div>
            </div>
        </div>
    );
}
