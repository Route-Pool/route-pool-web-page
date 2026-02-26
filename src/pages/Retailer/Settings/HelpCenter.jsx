import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ChevronLeft,
    ChevronRight,
    MessageSquare,
    Shield,
    Store,
    LifeBuoy,
    FileText,
    Smartphone,
    ExternalLink,
    Mail,
    PhoneCall,
    Search,
    Zap,
    HelpCircle,
    ArrowUpRight,
    Activity,
    Target,
    Layers,
    Cpu,
    Globe
} from 'lucide-react';
import { Card, Input, Button } from '../../../components/UI';

const SupportCategory = ({ icon: Icon, label, description, onClick, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.8 }}
        whileHover={{ x: 8, backgroundColor: '#fdfdfd', borderColor: 'var(--primary)' }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        style={{
            display: 'flex', alignItems: 'center', gap: '1.5rem',
            padding: '1.75rem', borderRadius: '36px', backgroundColor: 'white',
            border: '2.5px solid #F0F5F5', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            marginBottom: '1.25rem', boxShadow: '0 15px 35px rgba(0,0,0,0.02)'
        }}
    >
        <div style={{
            width: '60px', height: '60px', borderRadius: '20px',
            backgroundColor: 'rgba(0, 166, 156, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '1.5px solid rgba(0, 166, 156, 0.1)', flexShrink: 0
        }}>
            <Icon size={28} color="var(--primary)" />
        </div>
        <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '950', color: 'var(--black)', marginBottom: '4px', letterSpacing: '-0.02em' }}>{label}</h3>
            <p style={{ fontSize: '0.9rem', color: '#A0B0B0', fontWeight: '700', lineHeight: '1.4' }}>{description}</p>
        </div>
        <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#F3F7F7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ChevronRight size={22} color="#A0B0B0" />
        </div>
    </motion.div>
);

export default function RetailerHelpCenter() {
    const navigate = useNavigate();

    return (
        <div className="app-container" style={{ backgroundColor: '#FBFCFC', minHeight: '100vh', paddingBottom: '6rem', position: 'relative', overflowX: 'hidden' }}>
            {/* Background Aesthetic Architecture */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: '70vw', height: '70vw', background: 'radial-gradient(circle at center, rgba(0, 166, 156, 0.04) 0%, transparent 70%)', transform: 'translate(20%, -20%)', pointerEvents: 'none' }} />

            {/* Context Header Architecture */}
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
                        <HelpCircle size={18} color="white" />
                    </div>
                    <h1 style={{ fontSize: '1.1rem', fontWeight: '950', color: 'var(--primary)', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>Merchant Support</h1>
                </div>
                <div style={{ width: '52px', height: '52px', backgroundColor: '#F3F7F7', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Activity size={24} color="var(--primary)" />
                </div>
            </header>

            <div style={{ padding: '3rem 1.75rem' }}>
                {/* Hero Assistance Deck */}
                <div style={{ marginBottom: '4.5rem', textAlign: 'center' }}>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        style={{ width: '100px', height: '100px', borderRadius: '36px', backgroundColor: 'rgba(0, 166, 156, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem', border: '2.5px solid white', boxShadow: '0 20px 45px rgba(0, 166, 156, 0.08)' }}
                    >
                        <LifeBuoy size={48} color="var(--primary)" />
                    </motion.div>
                    <h2 style={{ fontSize: '2.4rem', fontWeight: '950', color: 'var(--black)', marginBottom: '1rem', letterSpacing: '-0.06em', lineHeight: '1.1' }}>Mission Control <br /><span style={{ color: 'var(--primary)' }}>Support.</span></h2>
                    <p style={{ fontSize: '1.1rem', color: '#A0B0B0', fontWeight: '750', lineHeight: '1.7', maxWidth: '320px', margin: '0 auto 2.5rem' }}>
                        Access high-priority resources or establish a link to a logistics specialist.
                    </p>

                    <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', left: '1.75rem', top: '50%', transform: 'translateY(-50%)', zIndex: 1, color: 'var(--primary)' }}>
                            <Search size={26} />
                        </div>
                        <Input
                            placeholder="Describe your operational bottleneck..."
                            style={{
                                paddingLeft: '4.75rem', height: '80px', borderRadius: '28px',
                                border: '2.5px solid #F3F7F7', backgroundColor: 'white',
                                boxShadow: '0 15px 35px rgba(0,0,0,0.02)', fontSize: '1.1rem', fontWeight: '850'
                            }}
                        />
                    </div>
                </div>

                {/* Service Frameworks Ledger */}
                <div style={{ marginBottom: '4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.25rem', padding: '0 0.5rem' }}>
                        <h2 style={{ fontSize: '0.95rem', fontWeight: '950', color: '#A0B0B0', textTransform: 'uppercase', letterSpacing: '0.2rem' }}>Support Taxonomies</h2>
                        <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--primary)', borderRadius: '2px' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <SupportCategory
                            icon={Store}
                            label="Command Logistics"
                            description="Managing inventory registries and merchant nodes."
                            delay={0.1}
                        />
                        <SupportCategory
                            icon={Shield}
                            label="Security & Compliance"
                            description="KYB documentation and cryptographic handshakes."
                            delay={0.2}
                        />
                        <SupportCategory
                            icon={LifeBuoy}
                            label="Financial Intelligence"
                            description="Payout cycles, pool savings, and fee architecture."
                            delay={0.3}
                        />
                        <SupportCategory
                            icon={Smartphone}
                            label="Interface Protocols"
                            description="Tutorials and guides for the merchant terminal."
                            delay={0.4}
                        />
                    </div>
                </div>

                {/* Priority Channels Matrix */}
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '0.95rem', fontWeight: '950', color: '#A0B0B0', textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '2.25rem', marginLeft: '0.5rem' }}>Priority Uplinks</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <motion.div whileHover={{ y: -6 }}>
                            <Card style={{ padding: '2.5rem 1.75rem', textAlign: 'center', borderRadius: '44px', border: '2.5px solid #F3F7F7', backgroundColor: 'white', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(0, 166, 156, 0.02))', pointerEvents: 'none' }} />
                                <div style={{ width: '64px', height: '64px', borderRadius: '22px', backgroundColor: 'rgba(0, 166, 156, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '1px solid rgba(0,166,156,0.1)' }}>
                                    <Mail size={30} color="var(--primary)" />
                                </div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: '950', color: 'var(--black)', marginBottom: '6px', letterSpacing: '-0.02em' }}>Direct Mail</h4>
                                <p style={{ fontSize: '0.85rem', color: '#A0B0B0', fontWeight: '750' }}>LATENCY: 2H</p>
                                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                    <ArrowUpRight size={20} color="var(--primary)" />
                                </div>
                            </Card>
                        </motion.div>
                        <motion.div whileHover={{ y: -6 }}>
                            <Card style={{ padding: '2.5rem 1.75rem', textAlign: 'center', borderRadius: '44px', border: '2.5px solid #F3F7F7', backgroundColor: 'white', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(240, 90, 40, 0.02))', pointerEvents: 'none' }} />
                                <div style={{ width: '64px', height: '64px', borderRadius: '22px', backgroundColor: 'rgba(240, 90, 40, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '1px solid rgba(240,90,40,0.1)' }}>
                                    <PhoneCall size={30} color="var(--accent)" />
                                </div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: '950', color: 'var(--black)', marginBottom: '6px', letterSpacing: '-0.02em' }}>Voice Link</h4>
                                <p style={{ fontSize: '0.85rem', color: '#A0B0B0', fontWeight: '750' }}>SYNC: 9AM-6PM</p>
                                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                    <ArrowUpRight size={20} color="var(--accent)" />
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '6rem', opacity: 0.4 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                        <Globe size={18} color="#A0B0B0" />
                        <p style={{ fontSize: '0.9rem', color: '#A0B0B0', fontWeight: '900', letterSpacing: '0.15em' }}>
                            ROUTEPOLY INTELLECT SERVICES V4.2
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
