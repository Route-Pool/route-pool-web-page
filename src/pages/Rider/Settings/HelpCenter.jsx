import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft,
    Search,
    ChevronRight,
    MessageSquare,
    Shield,
    Phone,
    LifeBuoy,
    FileText,
    Users,
    ExternalLink,
    Zap,
    Cpu,
    Headphones,
    HelpCircle,
    Activity,
    Target,
    Layers,
    Globe,
    Radar
} from 'lucide-react';
import { Card, Input, Button } from '../../../components/UI';

const HelpCategory = ({ icon: Icon, label, description, onClick, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        whileHover={{ x: 12, backgroundColor: 'white', borderColor: 'var(--primary)' }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        style={{
            display: 'flex', alignItems: 'center', gap: '1.5rem',
            padding: '1.75rem', borderRadius: '40px', backgroundColor: 'rgba(0, 166, 156, 0.03)',
            border: '3px solid #F3F7F7', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            marginBottom: '1.5rem', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.02)',
            position: 'relative', overflow: 'hidden'
        }}
    >
        <div style={{
            width: '64px', height: '64px', borderRadius: '20px',
            backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 12px 24px rgba(0, 166, 156, 0.08)', border: '1.5px solid rgba(0, 166, 156, 0.15)',
            zIndex: 1
        }}>
            <Icon size={28} color="var(--primary)" />
        </div>
        <div style={{ flex: 1, zIndex: 1 }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '950', color: 'var(--black)', marginBottom: '4px', letterSpacing: '-0.02em' }}>{label}</h3>
            <p style={{ fontSize: '0.9rem', color: '#6A7A7A', fontWeight: '750', lineHeight: '1.5' }}>{description}</p>
        </div>
        <ChevronRight size={22} color="#D1D9D9" />
    </motion.div>
);

export default function RiderHelpCenter() {
    const navigate = useNavigate();

    return (
        <div className="app-container" style={{ padding: '0', backgroundColor: '#FBFCFC', minHeight: '100vh', paddingBottom: '7rem', position: 'relative', overflowX: 'hidden' }}>
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
                    <h1 style={{ fontSize: '1.1rem', fontWeight: '950', color: 'var(--primary)', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>Logistics Support</h1>
                </div>
                <div style={{ width: '52px', height: '52px', backgroundColor: '#F3F7F7', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Activity size={24} color="var(--primary)" />
                </div>
            </header>

            <div style={{ padding: '3.5rem 2rem' }}>
                {/* Hero Support Deck Architecture */}
                <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            width: '100%', padding: '3.5rem 2rem',
                            background: 'linear-gradient(135deg, var(--primary) 0%, #003D34 100%)',
                            borderRadius: '56px', color: 'white', position: 'relative', overflow: 'hidden',
                            boxShadow: '0 30px 65px rgba(0, 61, 52, 0.25)', marginBottom: '3.5rem'
                        }}
                    >
                        {/* Background Animation Architecture */}
                        <motion.div
                            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                            style={{ position: 'absolute', bottom: '-20%', right: '-15%', opacity: 0.1 }}
                        >
                            <Radar size={220} color="white" />
                        </motion.div>

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h2 style={{ fontSize: '2.4rem', fontWeight: '950', marginBottom: '1.25rem', letterSpacing: '-0.06em', lineHeight: '1.1' }}>Protocol Assistance.</h2>
                            <p style={{ fontSize: '1.15rem', opacity: 0.85, fontWeight: '750', lineHeight: '1.6', maxWidth: '320px', margin: '0 auto' }}>
                                Access the global knowledge base or initiate a direct link to a support hub.
                            </p>
                        </div>
                    </motion.div>

                    {/* Proactive Search Architecture */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ position: 'absolute', left: '1.75rem', top: '50%', transform: 'translateY(-50%)', zIndex: 1, color: 'var(--primary)' }}>
                            <Search size={28} />
                        </div>
                        <Input
                            placeholder="Identify terminal issues..."
                            style={{
                                paddingLeft: '4.5rem', height: '80px', borderRadius: '32px',
                                border: '3.5px solid #F3F7F7', backgroundColor: 'white',
                                boxShadow: '0 15px 35px rgba(0,0,0,0.02)', fontSize: '1.1rem', fontWeight: '800'
                            }}
                        />
                    </div>
                </div>

                <div style={{ marginBottom: '5rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', padding: '0 1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Zap size={20} color="var(--accent)" fill="var(--accent)" />
                            <h2 style={{ fontSize: '0.9rem', fontWeight: '950', color: '#B0B0B0', textTransform: 'uppercase', letterSpacing: '0.2rem' }}>Logistics Categories</h2>
                        </div>
                        <Globe size={20} color="var(--primary)" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <HelpCategory
                            icon={LifeBuoy}
                            label="Account Architecture"
                            description="Identity verification and biometric security management."
                            delay={0.1}
                        />
                        <HelpCategory
                            icon={MessageSquare}
                            label="Operational Disputes"
                            description="Resolution for transit protocols and payout node issues."
                            delay={0.2}
                        />
                        <HelpCategory
                            icon={Users}
                            label="Rider Fleet Hub"
                            description="Synchronize with other elite logistical nodes globally."
                            delay={0.3}
                        />
                        <HelpCategory
                            icon={Shield}
                            label="Safety Protocols"
                            description="Emergency claims and operational hardware assistance."
                            delay={0.4}
                        />
                    </div>
                </div>

                <div style={{ marginBottom: '4rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem', padding: '0 1rem' }}>
                        <Phone size={20} color="var(--accent)" />
                        <h2 style={{ fontSize: '0.9rem', fontWeight: '950', color: '#B0B0B0', textTransform: 'uppercase', letterSpacing: '0.2rem' }}>Direct Comms</h2>
                    </div>
                    <Card style={{ padding: '0.5rem', borderRadius: '48px', border: '3.5px solid #F3F7F7', backgroundColor: 'white', overflow: 'hidden', boxShadow: '0 20px 45px rgba(0,0,0,0.02)' }}>
                        <motion.button
                            whileHover={{ backgroundColor: 'rgba(240, 90, 40, 0.02)' }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                width: '100%', padding: '2rem', border: 'none', background: 'transparent',
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                borderBottom: '2px solid #F3F7F7', cursor: 'pointer', borderRadius: '40px 40px 0 0',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '20px', backgroundColor: 'rgba(240, 90, 40, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid rgba(240, 90, 40, 0.1)' }}>
                                    <Phone size={28} color="var(--accent)" />
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <span style={{ fontWeight: '950', fontSize: '1.2rem', color: 'var(--black)', display: 'block', letterSpacing: '-0.02em' }}>Emergency Helpline</span>
                                    <span style={{ fontSize: '0.9rem', color: '#6A7A7A', fontWeight: '750' }}>Direct prioritized link to Hub Cmd</span>
                                </div>
                            </div>
                            <ExternalLink size={24} color="#D1D9D9" />
                        </motion.button>
                        <motion.button
                            whileHover={{ backgroundColor: 'rgba(0, 166, 156, 0.02)' }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                width: '100%', padding: '2rem', border: 'none', background: 'transparent',
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                cursor: 'pointer', borderRadius: '0 0 40px 40px',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '20px', backgroundColor: 'rgba(0, 166, 156, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid rgba(0, 166, 156, 0.1)' }}>
                                    <Cpu size={28} color="var(--primary)" />
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <span style={{ fontWeight: '950', fontSize: '1.2rem', color: 'var(--black)', display: 'block', letterSpacing: '-0.02em' }}>Network Health Monitor</span>
                                    <span style={{ fontSize: '0.9rem', color: '#6A7A7A', fontWeight: '750' }}>Live operational regional check</span>
                                </div>
                            </div>
                            <ExternalLink size={24} color="#D1D9D9" />
                        </motion.button>
                    </Card>
                </div>

                {/* Premium Infrastructure Branding */}
                <div style={{ textAlign: 'center', marginTop: '6rem', paddingBottom: '3rem' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', opacity: 0.4 }}>
                        <Layers size={20} color="#B0B0B0" />
                        <p style={{ fontSize: '1rem', color: '#B0B0B0', fontWeight: '950', letterSpacing: '0.2rem' }}>
                            ROUTEPOLY LOGISTICS ECOSYSTEM V4.5
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
