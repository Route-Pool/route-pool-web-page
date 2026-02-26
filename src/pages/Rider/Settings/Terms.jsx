import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, FileText, ShieldCheck, Gavel, AlertOctagon, Scale, Activity, Globe, Radar, Shield } from 'lucide-react';

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

export default function RiderTerms() {
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
                    <h1 style={{ fontSize: '1.1rem', fontWeight: '950', color: 'var(--primary)', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>Fleet Regulations</h1>
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
                    <h2 style={{ fontSize: '2.8rem', fontWeight: '950', color: 'var(--black)', marginBottom: '1.25rem', letterSpacing: '-0.07em', lineHeight: '1.1' }}>Rider <br /><span style={{ color: 'var(--primary)' }}>Standards.</span></h2>
                    <p style={{ fontSize: '1rem', color: '#B0B0B0', fontWeight: '900', letterSpacing: '0.15rem' }}>EFFECTIVE: FEB 26, 2026</p>
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                    <LegalSection
                        icon={Gavel}
                        title="1. Logistics Partnership"
                        content="As a Rider in the RoutePoly ecosystem, you act as an independent logistics contractor. This agreement governs your use of our transit optimization engine and the fulfillment of batched delivery orders."
                        delay={0.1}
                    />

                    <LegalSection
                        icon={ShieldCheck}
                        title="2. Safety & Verification"
                        content="Riders must undergo mandatory identity validation (Upload Proof) and maintain a valid government-issued operating license. All terminal transfers must be validated via OTP to ensure chain-of-custody integrity."
                        delay={0.2}
                    />

                    <LegalSection
                        icon={Scale}
                        title="3. Performance Metrics"
                        content="Your terminal access is subject to efficiency benchmarks. Repeated delays, batch rejections, or negative merchant feedback may result in temporary terminal isolation or fleet suspension."
                        delay={0.3}
                    />

                    <LegalSection
                        icon={AlertOctagon}
                        title="4. Forbidden Activities"
                        content="Tampering with cargo, sharing terminal credentials, or circumventing the AI routing paths is strictly prohibited. RoutePoly maintains zero tolerance for protocol violations that compromise pool security."
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
                        Operating under RoutePoly Protocol V4.2<br />
                        Questions? Contact <span style={{ color: 'var(--primary)', fontWeight: '950' }}>compliance@routepoly.io</span>
                    </p>
                </motion.div>

                {/* Premium Infrastructure Branding */}
                <div style={{ textAlign: 'center', marginTop: '6rem', paddingBottom: '3rem' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', opacity: 0.4 }}>
                        <Shield size={20} color="#B0B0B0" />
                        <p style={{ fontSize: '1rem', color: '#B0B0B0', fontWeight: '950', letterSpacing: '0.2rem' }}>
                            ROUTEPOLY CIPHER PROTECTION
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
