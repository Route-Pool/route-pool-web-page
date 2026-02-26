import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Check,
    ChevronLeft,
    Package,
    MapPin,
    Truck,
    ShieldCheck,
    Zap,
    Navigation,
    Clock,
    Box,
    ArrowUpRight,
    Search,
    Radar,
    Cpu,
    Activity,
    Target,
    Globe,
    Shield
} from 'lucide-react';
import { Button, Card } from '../../../components/UI';

export const RetailerSuccess = () => {
    const navigate = useNavigate();
    return (
        <div className="app-container" style={{ padding: '0', backgroundColor: '#FBFCFC', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Background Architecture */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50vw', height: '50vw', backgroundColor: 'var(--primary)', filter: 'blur(100px)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40vw', height: '40vw', backgroundColor: 'var(--accent)', filter: 'blur(100px)', borderRadius: '50%' }} />
            </div>

            <motion.div
                initial={{ scale: 0, rotate: -30, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: 'spring', damping: 14, stiffness: 200 }}
                style={{ marginBottom: '4rem', position: 'relative', zIndex: 1 }}
            >
                <div style={{
                    width: '180px', height: '180px', borderRadius: '64px',
                    background: 'linear-gradient(135deg, #00A69C 0%, #004D41 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto',
                    boxShadow: '0 40px 80px rgba(0, 77, 65, 0.25)',
                    position: 'relative', overflow: 'hidden', border: '4px solid white'
                }}>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                        transition={{ duration: 12, repeat: Infinity }}
                        style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 70%)' }}
                    />
                    <div style={{
                        width: '90px', height: '90px', borderRadius: '32px', backgroundColor: 'rgba(255,255,255,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(15px)',
                        zIndex: 1, border: '2px solid rgba(255,255,255,0.3)'
                    }}>
                        <Check size={54} color="white" strokeWidth={5} />
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, cubicBezier: [0.4, 0, 0.2, 1] }}
                style={{ maxWidth: '380px', padding: '0 2rem', position: 'relative', zIndex: 1 }}
            >
                <h1 style={{ fontSize: '2.8rem', fontWeight: '950', color: 'var(--black)', marginBottom: '1.25rem', letterSpacing: '-0.06em', lineHeight: '1' }}>Shipment <span style={{ color: 'var(--primary)' }}>Synced.</span></h1>
                <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '4rem', fontWeight: '650' }}>
                    Your logistics protocol has been successfully injected into the regional neural pool. AI optimization active.
                </p>

                <Card style={{
                    backgroundColor: 'rgba(0, 166, 156, 0.04)', padding: '2rem', borderRadius: '40px',
                    display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '5rem',
                    border: '2px solid rgba(0, 166, 156, 0.1)', boxShadow: '0 15px 35px rgba(0,0,0,0.02)'
                }}>
                    <div style={{
                        width: '64px', height: '64px', borderRadius: '20px', backgroundColor: 'white',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 25px rgba(0,0,0,0.04)',
                        border: '1px solid #F0F5F5'
                    }}>
                        <Zap size={32} color="var(--primary)" fill="var(--primary)" />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <p style={{ fontSize: '1rem', fontWeight: '950', color: 'var(--primary)', marginBottom: '4px', letterSpacing: '-0.02em' }}>Pool Efficiency Active</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '750' }}>Synchronization saved you ₦1,400</p>
                    </div>
                </Card>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                        onClick={() => navigate('/retailer/progress')}
                        style={{
                            height: '84px', borderRadius: '30px', fontSize: '1.25rem', fontWeight: '900',
                            boxShadow: '0 30px 60px rgba(0, 77, 65, 0.22)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px'
                        }}>
                        Access Live Tracking
                        <Navigation size={26} />
                    </Button>
                </motion.div>

                <div style={{ marginTop: '3rem', opacity: 0.4 }}>
                    <p style={{ fontSize: '0.85rem', fontWeight: '850', color: '#A0B0B0', letterSpacing: '0.12em' }}>
                        ROUTEPOLY LOGISTICS PROTOCOL V3.0
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export const RetailerProgress = () => {
    const navigate = useNavigate();
    return (
        <div className="app-container" style={{ paddingBottom: '4rem', backgroundColor: '#FBFCFC', minHeight: '100vh' }}>
            {/* Premium Header Architecture */}
            <header style={{ padding: '1.5rem', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', position: 'sticky', top: 0, zIndex: 10 }}>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate('/retailer/dashboard')}
                    style={{ width: '52px', height: '52px', backgroundColor: '#F3F7F7', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }}
                >
                    <ChevronLeft size={24} color="var(--primary)" />
                </motion.button>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '1.1rem', fontWeight: '950', color: 'var(--primary)', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>Tracking Manifest</h1>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                        <motion.div
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#4ADE80', boxShadow: '0 0 10px #4ADE80' }} />
                        <p style={{ fontSize: '0.75rem', fontWeight: '900', color: 'var(--accent)', letterSpacing: '0.12em' }}>SYNC: OPTIMAL</p>
                    </div>
                </div>
                <div style={{ width: '52px', height: '52px', backgroundColor: '#F3F7F7', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Activity size={24} color="var(--primary)" />
                </div>
            </header>

            <div style={{ padding: '2.5rem 1.75rem' }}>
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        padding: '2.5rem',
                        background: 'linear-gradient(135deg, var(--primary) 0%, #004D41 100%)',
                        borderRadius: '48px', color: 'white', marginBottom: '3.5rem',
                        boxShadow: '0 25px 60px rgba(0, 77, 65, 0.25)',
                        position: 'relative', overflow: 'hidden'
                    }}
                >
                    <div style={{ position: 'absolute', top: '-15%', right: '-10%', opacity: 0.08, transform: 'rotate(15deg)' }}>
                        <Radar size={220} color="white" />
                    </div>

                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '3rem' }}>
                            <div style={{
                                width: '70px', height: '70px', backgroundColor: 'rgba(255,255,255,0.15)',
                                borderRadius: '24px', display: 'flex', alignItems: 'center',
                                justifyContent: 'center', backdropFilter: 'blur(15px)',
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}>
                                <Box size={36} color="white" />
                            </div>
                            <div>
                                <h1 style={{ fontWeight: '950', fontSize: '1.5rem', letterSpacing: '-0.04em', lineHeight: '1.1', marginBottom: '4px' }}>Traveling Bag Payload</h1>
                                <p style={{ fontSize: '0.9rem', opacity: 0.7, fontWeight: '800', letterSpacing: '0.1em' }}>ID# RP-SYN-998240</p>
                            </div>
                        </div>

                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', marginBottom: '1.25rem', fontWeight: '900', letterSpacing: '0.1em' }}>
                                <span style={{ opacity: 0.75 }}>ROUTING STATUS</span>
                                <span style={{ color: '#4ADE80', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Cpu size={16} />
                                    AI OPTIMIZING...
                                </span>
                            </div>
                            <div style={{ height: '10px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '5px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <motion.div
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                    style={{ width: '35%', height: '100%', background: 'linear-gradient(90deg, transparent, white, transparent)', opacity: 0.6 }}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                    <Card style={{ padding: '2.5rem', borderRadius: '44px', backgroundColor: 'white', border: '2.5px solid #F0F5F5', boxShadow: '0 15px 40px rgba(0,0,0,0.02)' }}>
                        <h3 style={{ fontSize: '0.85rem', fontWeight: '950', marginBottom: '3.5rem', color: '#A0B0B0', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Logistics Trajectory</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '15px', top: '30px', bottom: '30px', width: '3px', borderLeft: '3px dashed #F3F7F7' }} />

                            <div style={{ display: 'flex', gap: '1.75rem', position: 'relative', zIndex: 2 }}>
                                <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: 'white', border: '7px solid var(--primary)', flexShrink: 0, boxShadow: '0 0 20px rgba(0, 166, 156, 0.15)' }} />
                                <div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '900', letterSpacing: '0.1em', marginBottom: '6px' }}>ORIGIN HUB</p>
                                    <p style={{ fontWeight: '950', fontSize: '1.2rem', color: 'var(--black)', letterSpacing: '-0.03em', lineHeight: '1.1' }}>Sarah's General Store</p>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: '700', marginTop: '4px' }}>Terminal: Zone 4 • Status: Active</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.75rem', position: 'relative', zIndex: 2 }}>
                                <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: 'white', border: '7px solid var(--accent)', flexShrink: 0, boxShadow: '0 0 20px rgba(240, 90, 40, 0.15)' }} />
                                <div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '900', letterSpacing: '0.1em', marginBottom: '6px' }}>DESTINATION NODE</p>
                                    <p style={{ fontWeight: '950', fontSize: '1.2rem', color: 'var(--black)', letterSpacing: '-0.03em', lineHeight: '1.1' }}>12 Aba-Owerri Rd, Aba</p>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: '700', marginTop: '4px' }}>Sector: East • Status: Syncing</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        style={{ padding: '2rem', borderRadius: '40px', backgroundColor: 'rgba(0, 166, 156, 0.05)', border: '2px solid rgba(0, 166, 156, 0.1)', display: 'flex', alignItems: 'center', gap: '1.5rem', boxShadow: '0 10px 25px rgba(0,166,156,0.03)' }}>
                        <div style={{ width: '60px', height: '60px', backgroundColor: 'white', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.04)', flexShrink: 0 }}>
                            <ShieldCheck size={32} color="var(--primary)" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <p style={{ fontSize: '1.1rem', fontWeight: '950', color: 'var(--primary)', marginBottom: '4px', letterSpacing: '-0.02em' }}>Secure Exchange Protocol</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '700', lineHeight: '1.5' }}>A unique cryptographic synchronization key will be generated upon rider proximity.</p>
                        </div>
                    </motion.div>

                    <Button
                        variant="outline"
                        onClick={() => navigate('/retailer/dashboard')}
                        style={{
                            height: '80px', borderRadius: '28px', border: '2.5px solid #F0F5F5',
                            fontWeight: '950', fontSize: '1.15rem', color: 'var(--black)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px',
                            marginTop: '1.5rem', backgroundColor: 'white'
                        }}
                    >
                        <Search size={22} color="var(--primary)" />
                        Return to Command Center
                    </Button>
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem', opacity: 0.5 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '12px 24px', backgroundColor: 'rgba(0, 166, 156, 0.05)', borderRadius: '16px' }}>
                        <Shield size={18} color="var(--primary)" />
                        <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '950', letterSpacing: '0.12em' }}>ENCRYPTED TELEMETRY STREAM</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
