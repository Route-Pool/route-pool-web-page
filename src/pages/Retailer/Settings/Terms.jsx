import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft,
    Scale,
    ShieldCheck,
    FileText,
    Gavel,
    Lock,
    Activity,
    Globe,
    Cpu,
    Shield,
    Target,
    Layers,
    Radar,
    Zap
} from 'lucide-react';
import { Button } from '../../../components/UI';

const LegalSection = ({ icon: Icon, title, content, delay }) => (
    <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        style={{ marginBottom: '3.5rem', position: 'relative' }}
    >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: 'rgba(0, 166, 156, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid rgba(0, 166, 156, 0.1)' }}>
                <Icon size={24} color="var(--primary)" />
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '950', color: 'var(--black)', letterSpacing: '-0.03em' }}>{title}</h2>
        </div>
        <p style={{ fontSize: '1.05rem', color: '#6A7A7A', lineHeight: '1.8', fontWeight: '700' }}>
            {content}
        </p>
    </motion.section>
);

export default function RetailerTerms() {
    const navigate = useNavigate();

    return (
        <div className="app-container" style={{ backgroundColor: '#FBFCFC', minHeight: '100vh', paddingBottom: '7rem', position: 'relative', overflowX: 'hidden' }}>
            {/* Background Aesthetic Architecture */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '40vh', background: 'linear-gradient(180deg, rgba(0, 166, 156, 0.05) 0%, transparent 100%)', pointerEvents: 'none' }} />

            {/* Context Header Architecture */}
            <header style={{ padding: '1.5rem', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', position: 'sticky', top: 0, zIndex: 100 }}>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate(-1)}
                    style={{ width: '52px', height: '52px', backgroundColor: '#F3F7F7', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }}
                >
                    <ChevronLeft size={24} color="var(--primary)" />
                </motion.button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--primary)', boxShadow: '0 0 12px var(--primary)', border: '2.5px solid white' }} />
                    <h1 style={{ fontSize: '1.1rem', fontWeight: '950', color: 'var(--primary)', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>Protocol & Legal</h1>
                </div>
                <div style={{ width: '52px', height: '52px', backgroundColor: '#F3F7F7', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Scale size={24} color="var(--primary)" />
                </div>
            </header>

            <div style={{ padding: '4rem 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            width: '110px', height: '110px', borderRadius: '40px',
                            backgroundColor: 'rgba(0, 166, 156, 0.05)', display: 'flex',
                            alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem',
                            border: '3px solid white', boxShadow: '0 25px 55px rgba(0, 166, 156, 0.12)',
                            position: 'relative'
                        }}
                    >
                        <FileText size={54} color="var(--primary)" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            style={{ position: 'absolute', inset: -12, borderRadius: '48px', border: '2px dashed var(--primary)', opacity: 0.3 }}
                        />
                    </motion.div>
                    <h2 style={{ fontSize: '2.8rem', fontWeight: '950', color: 'var(--black)', marginBottom: '1.25rem', letterSpacing: '-0.07em', lineHeight: '1.1' }}>Service Standards <br /><span style={{ color: 'var(--primary)' }}>& Protocols.</span></h2>
                    <p style={{ fontSize: '1rem', color: '#B0B0B0', fontWeight: '900', letterSpacing: '0.15rem' }}>VERSION 4.2 • FEB 26, 2026</p>
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                    <LegalSection
                        icon={Gavel}
                        title="1. Terms of Operations"
                        content="By engaging with the RoutePoly ecosystem, you acknowledge our role as an AI-driven logistics orchestrator. Merchant nodes are granted a revocable license to utilize our proprietary routing algorithms for high-density batching and dispatching physical payloads."
                        delay={0.1}
                    />

                    <LegalSection
                        icon={Lock}
                        title="2. Data Stewardship"
                        content="We adhere to quantum-grade standards for merchant data protection. Your logistical trajectories, financial telemetry, and manifest metadata are end-to-end encrypted and never disclosed to competing entities within the neural pool."
                        delay={0.2}
                    />

                    <LegalSection
                        icon={Scale}
                        title="3. Merchant Liability Matrix"
                        content="Retailers maintain full cryptographic responsibility for the legal compliance and structural integrity of all payloads submitted to the pool. Any hazardous, illicit, or prohibited payloads will trigger immediate terminal suspension."
                        delay={0.3}
                    />

                    <LegalSection
                        icon={ShieldCheck}
                        title="4. Trust Architecture"
                        content="Our 'Security-First' protocol requires all payload handovers to be validated via dual-factor cryptographic handshake. Successful transfer occurs only when the merchant authorizes the rider's unique biometric or digital signature."
                        delay={0.4}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    style={{
                        marginTop: '6rem', padding: '3rem', backgroundColor: 'white',
                        borderRadius: '48px', border: '3px solid #F3F7F7', textAlign: 'center',
                        boxShadow: '0 20px 45px rgba(0,0,0,0.02)', position: 'relative', overflow: 'hidden'
                    }}
                >
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(0, 166, 156, 0.02))', pointerEvents: 'none' }} />
                    <p style={{ fontSize: '1.1rem', color: '#6A7A7A', fontWeight: '750', lineHeight: '1.7', position: 'relative', zIndex: 1 }}>
                        Need legal clarification or protocol assistance?<br />
                        <span style={{ color: 'var(--primary)', fontWeight: '950', cursor: 'pointer', display: 'block', marginTop: '12px', fontSize: '1.2rem' }}>legal@routepoly.io</span>
                    </p>
                </motion.div>

                {/* Premium Infrastructure Branding */}
                <div style={{ textAlign: 'center', marginTop: '6rem', paddingBottom: '3rem' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', opacity: 0.4 }}>
                        <Shield size={20} color="#B0B0B0" />
                        <p style={{ fontSize: '1rem', color: '#B0B0B0', fontWeight: '950', letterSpacing: '0.2rem' }}>
                            ROUTEPOLY COMPLIANCE ENGINE V4.2
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
