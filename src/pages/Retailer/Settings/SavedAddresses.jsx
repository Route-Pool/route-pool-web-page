import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft,
    MapPin,
    Search,
    Trash2,
    Plus,
    Home,
    Briefcase,
    Navigation,
    Store,
    Map,
    Activity,
    Target,
    Layers,
    Globe,
    Shield,
    Radar,
    Zap
} from 'lucide-react';
import { Card, Input, Button } from '../../../components/UI';

const AddressItem = ({ address, type, label, delay }) => {
    const icons = {
        store: Store,
        work: Briefcase,
        home: Home,
        other: Navigation
    };
    const Icon = icons[type] || Navigation;

    return (
        <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            whileHover={{ x: 12, borderColor: 'var(--primary)', backgroundColor: 'white' }}
            style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '2rem', backgroundColor: 'white', borderRadius: '44px',
                border: '3px solid #F3F7F7', marginBottom: '1.75rem',
                boxShadow: '0 20px 45px rgba(0,0,0,0.02)', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative', overflow: 'hidden'
            }}
        >
            <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center', flex: 1, zIndex: 1 }}>
                <div style={{
                    width: '68px', height: '68px', borderRadius: '22px',
                    backgroundColor: 'rgba(0, 166, 156, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, border: '2px solid rgba(0, 166, 156, 0.15)',
                    boxShadow: '0 10px 20px rgba(0, 166, 156, 0.05)'
                }}>
                    <Icon size={30} color="var(--primary)" />
                </div>
                <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.9rem', fontWeight: '950', color: '#B0B0B0', textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '4px' }}>{label || 'Terminal Node'}</p>
                    <p style={{ fontSize: '1.25rem', color: 'var(--black)', fontWeight: '950', lineHeight: '1.2', letterSpacing: '-0.04em' }}>{address}</p>
                </div>
            </div>
            <motion.button
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(240, 90, 40, 0.1)' }}
                whileTap={{ scale: 0.9 }}
                style={{
                    background: 'rgba(240, 90, 40, 0.05)', border: 'none', cursor: 'pointer',
                    width: '56px', height: '56px', borderRadius: '18px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s ease', marginLeft: '1.5rem', zIndex: 1,
                    border: '1.5px solid rgba(240, 90, 40, 0.1)'
                }}
            >
                <Trash2 size={24} color="var(--accent)" />
            </motion.button>
        </motion.div>
    );
};

export default function RetailerSavedAddresses() {
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
                    <h1 style={{ fontSize: '1.1rem', fontWeight: '950', color: 'var(--primary)', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>Terminal Registry</h1>
                </div>
                <div style={{ width: '52px', height: '52px', backgroundColor: '#F3F7F7', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Activity size={24} color="var(--primary)" />
                </div>
            </header>

            <div style={{ padding: '3.5rem 2rem' }}>
                {/* Advanced Integration Hub Architecture */}
                <div style={{ marginBottom: '5rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ marginBottom: '3.5rem' }}>
                        <h2 style={{ fontSize: '2.8rem', fontWeight: '950', color: 'var(--black)', marginBottom: '1.25rem', letterSpacing: '-0.07em', lineHeight: '1' }}>Register New <br /><span style={{ color: 'var(--primary)' }}>Terminal Node.</span></h2>
                        <p style={{ fontSize: '1.2rem', color: '#6A7A7A', lineHeight: '1.7', fontWeight: '750', maxWidth: '340px' }}>
                            Synchronize frequent delivery destinations with the RoutePoly neural infrastructure.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '1.75rem', top: '50%', transform: 'translateY(-50%)', zIndex: 1, color: 'var(--primary)' }}>
                                <Search size={28} />
                            </div>
                            <Input
                                placeholder="Search or input terminal address..."
                                style={{
                                    paddingLeft: '4.5rem', height: '80px', borderRadius: '32px',
                                    border: '3.5px solid #F3F7F7', backgroundColor: 'white', fontSize: '1.1rem', fontWeight: '800',
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.02)'
                                }}
                            />
                        </div>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button style={{ height: '84px', borderRadius: '32px', fontSize: '1.35rem', fontWeight: '950', boxShadow: '0 30px 60px rgba(0, 166, 156, 0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                                <Map size={30} />
                                Protocol New Location
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Registry Ledger Architecture */}
                <div style={{ marginBottom: '5rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', padding: '0 1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Zap size={20} color="var(--accent)" fill="var(--accent)" />
                            <h2 style={{ fontSize: '0.9rem', fontWeight: '950', color: '#B0B0B0', textTransform: 'uppercase', letterSpacing: '0.2rem' }}>Active Registry Ledger</h2>
                        </div>
                        <div style={{ backgroundColor: 'rgba(0,166,156,0.08)', padding: '8px 18px', borderRadius: '16px', border: '1.5px solid rgba(0,166,156,0.1)' }}>
                            <span style={{ fontSize: '0.95rem', fontWeight: '950', color: 'var(--primary)', letterSpacing: '0.05em' }}>3 NODES DETECTED</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <AddressItem type="store" label="PRIMARY DISTRIBUTION HUB" address="Ikeja Distribution Hub, 45 Airport Road, Lagos, NG" delay={0.1} />
                        <AddressItem type="work" label="MERCHANT RETAIL CENTER" address="Lekki Phase 1 Retail Center, Plot 12 Admiralty Way, Lagos" delay={0.2} />
                        <AddressItem type="other" label="SATELLITE WAREHOUSE" address="Victoria Island Warehouse, Block B, 401234, Nigeria" delay={0.3} />
                    </div>
                </div>

                {/* Premium Infrastructure Branding */}
                <div style={{ textAlign: 'center', marginTop: '6rem', paddingBottom: '3rem' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', opacity: 0.4 }}>
                        <Globe size={20} color="#B0B0B0" />
                        <p style={{ fontSize: '1rem', color: '#B0B0B0', fontWeight: '950', letterSpacing: '0.2rem' }}>
                            ROUTEPOLY TERMINAL SERVICES V3.5
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
