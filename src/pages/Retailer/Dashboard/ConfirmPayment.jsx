import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft,
    CreditCard,
    Building2,
    Hash,
    User,
    CheckCircle2,
    ShieldCheck,
    ArrowRightLeft,
    Copy,
    AlertTriangle,
    Loader2,
    Lock,
    Zap,
    Cpu,
    Activity,
    Target,
    Shield
} from 'lucide-react';
import { Button, Card } from '../../../components/UI';

const SummaryRow = ({ icon: Icon, label, value, showCopy }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.75rem 0', borderBottom: '2px solid #F9FAFA' }}>
        <div style={{
            width: '56px', height: '56px', borderRadius: '18px',
            backgroundColor: 'rgba(0, 166, 156, 0.05)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            border: '1px solid rgba(0, 166, 156, 0.08)'
        }}>
            <Icon size={26} color="var(--primary)" />
        </div>
        <div style={{ flex: 1 }}>
            <p style={{ fontSize: '0.85rem', fontWeight: '950', color: '#A0B0B0', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>{label}</p>
            <p style={{ fontSize: '1.2rem', fontWeight: '950', color: 'var(--black)', letterSpacing: '-0.03em' }}>{value}</p>
        </div>
        {showCopy && (
            <motion.button
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 166, 156, 0.1)' }}
                whileTap={{ scale: 0.9 }}
                style={{ backgroundColor: '#F3F7F7', border: 'none', padding: '12px', borderRadius: '14px', color: 'var(--primary)', cursor: 'pointer', transition: 'all 0.3s ease' }}
            >
                <Copy size={20} />
            </motion.button>
        )}
    </div>
);

export default function RetailerConfirmPayment() {
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);

    const handleConfirm = () => {
        setIsProcessing(true);
        setTimeout(() => {
            navigate('/retailer/success');
        }, 3500);
    };

    return (
        <div className="app-container" style={{ backgroundColor: '#FBFCFC', minHeight: '100vh', paddingBottom: '5rem', position: 'relative', overflowX: 'hidden' }}>
            {/* Background Aesthetic Architecture */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '40vh', background: 'linear-gradient(180deg, rgba(0, 166, 156, 0.03) 0%, transparent 100%)', pointerEvents: 'none' }} />

            {/* Context Header */}
            <header style={{ padding: '1.5rem', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', position: 'sticky', top: 0, zIndex: 10 }}>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate(-1)}
                    style={{ width: '52px', height: '52px', backgroundColor: '#F3F7F7', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }}
                >
                    <ChevronLeft size={24} color="var(--primary)" />
                </motion.button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px rgba(0, 166, 156, 0.2)' }}>
                        <Lock size={18} color="white" />
                    </div>
                    <h1 style={{ fontSize: '1.1rem', fontWeight: '950', color: 'var(--primary)', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>Secure Checkout</h1>
                </div>
                <div style={{ width: '52px', height: '52px', backgroundColor: '#F3F7F7', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Activity size={24} color="var(--primary)" />
                </div>
            </header>

            <div style={{ padding: '3rem 1.75rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, type: 'spring' }}
                        style={{
                            width: '120px', height: '120px', borderRadius: '44px',
                            backgroundColor: 'rgba(0, 166, 156, 0.04)', display: 'flex',
                            alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem',
                            boxShadow: '0 25px 50px rgba(0, 166, 156, 0.1)',
                            border: '3px solid white', position: 'relative'
                        }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            style={{ position: 'absolute', inset: -10, border: '2px dashed rgba(0, 166, 156, 0.2)', borderRadius: '50%' }}
                        />
                        <ArrowRightLeft size={56} color="var(--primary)" />
                    </motion.div>
                    <p style={{ fontSize: '1rem', color: '#A0B0B0', fontWeight: '950', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Logistics Synchronization Fee</p>
                    <h2 style={{ fontSize: '4.5rem', fontWeight: '950', color: 'var(--black)', letterSpacing: '-0.07em', marginBottom: '0.75rem', lineHeight: '1' }}>₦5,800</h2>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(0, 166, 156, 0.06)', padding: '10px 20px', borderRadius: '14px', border: '1px solid rgba(0, 166, 156, 0.1)' }}>
                        <Zap size={18} color="var(--primary)" fill="var(--primary)" />
                        <span style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: '950', letterSpacing: '-0.01em' }}>Pool Optimization: ₦1,400 Saved</span>
                    </motion.div>
                </div>

                <Card style={{ padding: '2.5rem', borderRadius: '48px', border: '2.5px solid #F0F5F5', backgroundColor: 'white', boxShadow: '0 30px 70px rgba(0,0,0,0.03)', marginBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(0, 166, 156, 0.02))', pointerEvents: 'none' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '3rem' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: 'rgba(0, 166, 156, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 166, 156, 0.1)' }}>
                            <ShieldCheck size={28} color="var(--primary)" />
                        </div>
                        <h3 style={{ fontWeight: '950', fontSize: '1.4rem', color: 'var(--black)', letterSpacing: '-0.04em' }}>Destination Node Hub</h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <SummaryRow icon={Building2} label="Institution Gateway" value="United Bank for Africa (UBA)" />
                        <SummaryRow icon={Hash} label="Hub Access Key" value="1234 5678 8901 12" showCopy />
                        <SummaryRow icon={User} label="Entity Registration" value="RoutePoly Global Hub" />
                    </div>

                    <div style={{ marginTop: '3rem', padding: '1.75rem', backgroundColor: 'rgba(240, 90, 40, 0.04)', borderRadius: '28px', border: '1.5px solid rgba(240, 90, 40, 0.08)', display: 'flex', gap: '1.5rem' }}>
                        <AlertTriangle size={28} color="var(--accent)" style={{ flexShrink: 0 }} />
                        <p style={{ fontSize: '0.95rem', color: '#6A7A7A', fontWeight: '700', lineHeight: '1.7' }}>
                            Perform the exact synchronization transfer to the hub key above. Verification cycle executes in real-time.
                        </p>
                    </div>
                </Card>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                            onClick={handleConfirm}
                            disabled={isProcessing}
                            style={{
                                height: '84px', borderRadius: '30px', fontSize: '1.3rem', fontWeight: '950',
                                boxShadow: '0 30px 60px rgba(0, 166, 156, 0.15)', position: 'relative', overflow: 'hidden'
                            }}
                        >
                            <AnimatePresence mode="wait">
                                {isProcessing ? (
                                    <motion.div
                                        key="processing"
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
                                    >
                                        <Loader2 size={28} className="animate-spin" />
                                        SYNCING ARCHITECTURE...
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="normal"
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
                                    >
                                        <Cpu size={26} />
                                        Authorize Sync Flow
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Button>
                    </motion.div>

                    <div style={{ textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', opacity: 0.5 }}>
                            <Shield size={18} color="#A0B0B0" />
                            <p style={{ fontSize: '0.85rem', color: '#A0B0B0', fontWeight: '850', letterSpacing: '0.12em' }}>
                                SECURED BY ROUTEPOLY QUANTUM STANDARDS
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Simulated Cryptographic Processing Overlay */}
            <AnimatePresence>
                {isProcessing && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed', inset: 0, backgroundColor: 'rgba(255,255,255,0.98)',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            zIndex: 1000, backdropFilter: 'blur(15px)'
                        }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                            style={{ position: 'relative', width: '220px', height: '220px', marginBottom: '4rem' }}
                        >
                            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                                <circle cx="50" cy="50" r="46" fill="none" stroke="#F3F7F7" strokeWidth="8" />
                                <motion.circle
                                    cx="50" cy="50" r="46" fill="none" stroke="var(--primary)" strokeWidth="8"
                                    strokeDasharray="289"
                                    animate={{ strokeDashoffset: [289, 0] }}
                                    transition={{ duration: 3.5, ease: 'easeInOut' }}
                                />
                            </svg>
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <Cpu size={72} color="var(--primary)" />
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ fontSize: '2rem', fontWeight: '950', color: 'var(--black)', marginBottom: '1rem', letterSpacing: '-0.04em' }}>
                            Validating Handshake
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ delay: 0.3 }}
                            style={{ fontSize: '1.1rem', color: 'var(--text-muted)', fontWeight: '750', letterSpacing: '0.05em' }}>
                            INITIALIZING ENCRYPTED FLOW...
                        </motion.p>

                        {/* Status Pings */}
                        <div style={{ display: 'flex', gap: '8px', marginTop: '3rem' }}>
                            {[0, 1, 2].map(i => (
                                <motion.div
                                    key={i}
                                    animate={{ backgroundColor: ['#F3F7F7', 'var(--primary)', '#F3F7F7'] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                                    style={{ width: '12px', height: '12px', borderRadius: '50%' }}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
