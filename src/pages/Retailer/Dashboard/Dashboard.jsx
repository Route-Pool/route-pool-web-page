import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu,
    User,
    MapPin,
    Send,
    HelpCircle,
    Phone,
    Package,
    ChevronRight,
    TrendingUp,
    Clock,
    Plus,
    Box,
    Truck,
    CheckCircle2,
    DollarSign,
    LayoutGrid,
    Search,
    Store,
    Briefcase,
    Zap,
    Cpu,
    ArrowUpRight,
    Shield,
    Bell,
    Activity,
    Target,
    Layers
} from 'lucide-react';
import { Button, Input, Card } from '../../../components/UI';

const StatMiniCard = ({ label, value, icon: Icon, color, trend }) => (
    <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ flex: 1 }}
    >
        <Card style={{
            height: '100%', padding: '1.75rem', border: '2px solid #F0F5F5',
            borderRadius: '36px', backgroundColor: 'white', position: 'relative',
            overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.02)'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: `${color}08`, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1.5px solid ${color}15` }}>
                    <Icon size={24} color={color} />
                </div>
                {trend && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4ADE80', fontSize: '0.85rem', fontWeight: '950' }}>
                        <ArrowUpRight size={16} />
                        {trend}
                    </div>
                )}
            </div>
            <p style={{ fontSize: '0.85rem', fontWeight: '950', color: '#A0B0B0', letterSpacing: '0.12em', marginBottom: '6px', textTransform: 'uppercase' }}>{label}</p>
            <p style={{ fontSize: '2.2rem', fontWeight: '950', color: 'var(--black)', letterSpacing: '-0.05em' }}>{value}</p>
        </Card>
    </motion.div>
);

export default function RetailerDashboard() {
    const navigate = useNavigate();
    const [isRequesting, setIsRequesting] = useState(false);

    return (
        <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#FBFCFC', position: 'relative', overflowX: 'hidden', paddingBottom: '9rem' }}>
            {/* High-Fidelity Strategic Architecture */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50vh', zIndex: 0, overflow: 'hidden' }}>
                <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200"
                    alt="Strategic Map"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1, filter: 'grayscale(100%) contrast(1.1) brightness(1.1)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, #FBFCFC 95%)' }} />

                {/* Live Neural Node Pings */}
                {[
                    { t: '22%', l: '25%', c: 'var(--primary)', d: 0 },
                    { t: '42%', l: '68%', c: 'var(--accent)', d: 1.2 },
                    { t: '55%', l: '18%', c: 'var(--primary)', d: 0.8 },
                    { t: '30%', l: '82%', c: 'var(--primary)', d: 2 },
                    { t: '70%', l: '45%', c: 'var(--accent)', d: 1.5 }
                ].map((dot, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            scale: [1, 2.5, 1],
                            opacity: [0.3, 0.7, 0.3],
                            boxShadow: [`0 0 0px ${dot.c}`, `0 0 25px ${dot.c}`, `0 0 0px ${dot.c}`]
                        }}
                        transition={{ duration: 5, repeat: Infinity, delay: dot.d, ease: 'easeInOut' }}
                        style={{
                            position: 'absolute', top: dot.t, left: dot.l,
                            width: '12px', height: '12px', borderRadius: '50%',
                            backgroundColor: dot.c, zIndex: 1, border: '2px solid white'
                        }}
                    />
                ))}
            </div>

            {/* Merchant Command Header */}
            <header style={{ position: 'relative', zIndex: 10, padding: '2rem 1.75rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigate('/retailer/settings')}
                        style={{
                            width: '64px', height: '64px', backgroundColor: 'white',
                            borderRadius: '22px', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
                            cursor: 'pointer', border: '2.5px solid #F0F5F5'
                        }}
                    >
                        <Menu size={30} color="var(--primary)" />
                    </motion.div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                            <motion.div
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--primary)', boxShadow: '0 0 12px var(--primary)' }} />
                            <p style={{ fontSize: '0.85rem', color: '#A0B0B0', fontWeight: '950', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Command Core</p>
                        </div>
                        <h1 style={{ fontSize: '1.75rem', fontWeight: '950', color: 'var(--black)', letterSpacing: '-0.04em', lineHeight: '1' }}>Elite Hub <span style={{ color: 'var(--primary)' }}>#01</span></h1>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        style={{ width: '56px', height: '56px', backgroundColor: 'white', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #F0F5F5', position: 'relative' }}
                    >
                        <Bell size={24} color="#A0B0B0" />
                        <div style={{ position: 'absolute', top: '16px', right: '16px', width: '10px', height: '10px', backgroundColor: 'var(--accent)', borderRadius: '50%', border: '2px solid white' }} />
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -4, scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigate('/retailer/profile')}
                        style={{
                            width: '64px', height: '64px', backgroundColor: 'var(--accent)',
                            borderRadius: '22px', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', boxShadow: '0 20px 45px rgba(240, 90, 40, 0.22)',
                            cursor: 'pointer', border: '3px solid white'
                        }}
                    >
                        <User size={30} color="white" />
                    </motion.div>
                </div>
            </header>

            <div style={{ position: 'relative', zIndex: 1, padding: '0 1.75rem' }}>
                {/* Advanced Analytics Matrix */}
                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '4rem' }}>
                    <StatMiniCard label="Protocol Volume" value="₦245k" icon={DollarSign} color="var(--primary)" trend="+14.2%" />
                    <StatMiniCard label="Active Fleet" value="14" icon={Truck} color="var(--accent)" />
                </div>

                {/* Operations Architecture Hub */}
                <div style={{ marginBottom: '5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: '950', color: 'var(--black)', letterSpacing: '-0.05em' }}>Mission Operations</h2>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '900', fontSize: '0.9rem' }}>
                            <Activity size={18} />
                            LIVE FEED
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '1.5rem' }}>
                        <motion.div
                            whileHover={{ y: -8, boxShadow: '0 30px 70px rgba(0, 77, 65, 0.25)' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => navigate('/retailer/new-delivery')}
                            style={{
                                padding: '2.5rem 2.25rem', borderRadius: '48px', backgroundColor: 'var(--primary)',
                                color: 'white', cursor: 'pointer', position: 'relative', overflow: 'hidden',
                                display: 'flex', flexDirection: 'column', gap: '2rem', transition: 'all 0.4s ease'
                            }}
                        >
                            <div style={{ position: 'absolute', top: '-15%', right: '-10%', opacity: 0.1, transform: 'rotate(15deg)' }}>
                                <Send size={180} color="white" />
                            </div>
                            <div style={{ width: '70px', height: '70px', borderRadius: '24px', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
                                <Zap size={36} fill='white' />
                            </div>
                            <div>
                                <h3 style={{ fontWeight: '950', fontSize: '1.8rem', letterSpacing: '-0.04em', lineHeight: '1.1', marginBottom: '8px' }}>Launch <br />Payload</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: '850', letterSpacing: '0.1em' }}>EXPRESS PROTOCOL</span>
                                    <ChevronRight size={18} />
                                </div>
                            </div>
                        </motion.div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <motion.div
                                whileHover={{ y: -6, backgroundColor: '#fdfdfd', borderColor: 'var(--primary)' }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    flex: 1, padding: '1.75rem', borderRadius: '36px', backgroundColor: 'white',
                                    color: 'var(--black)', cursor: 'pointer', border: '2.5px solid #F3F7F7',
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.02)',
                                    display: 'flex', flexDirection: 'column', gap: '1.25rem', transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{ width: '52px', height: '52px', borderRadius: '18px', backgroundColor: 'rgba(0, 166, 156, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 166, 156, 0.1)' }}>
                                    <Layers size={26} color="var(--primary)" />
                                </div>
                                <p style={{ fontWeight: '950', fontSize: '1.2rem', letterSpacing: '-0.02em', color: 'var(--black)' }}>Bulk Batch</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -6, backgroundColor: '#fdfdfd', borderColor: 'var(--accent)' }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => navigate('/retailer/addresses')}
                                style={{
                                    flex: 1, padding: '1.75rem', borderRadius: '36px', backgroundColor: 'white',
                                    color: 'var(--black)', cursor: 'pointer', border: '2.5px solid #F3F7F7',
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.02)',
                                    display: 'flex', flexDirection: 'column', gap: '1.25rem', transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{ width: '52px', height: '52px', borderRadius: '18px', backgroundColor: 'rgba(240, 90, 40, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(240, 90, 40, 0.1)' }}>
                                    <Target size={26} color="var(--accent)" />
                                </div>
                                <p style={{ fontWeight: '950', fontSize: '1.2rem', letterSpacing: '-0.02em', color: 'var(--black)' }}>Registry</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Live Telemetry Matrix */}
                <div style={{ marginBottom: '5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: '950', color: 'var(--black)', letterSpacing: '-0.05em' }}>Tracking Matrix</h2>
                        <motion.button
                            whileHover={{ backgroundColor: '#FBFCFC' }}
                            whileTap={{ scale: 0.9 }}
                            style={{ backgroundColor: 'white', border: '2.5px solid #F0F5F5', color: 'var(--primary)', fontWeight: '950', fontSize: '0.9rem', padding: '12px 22px', borderRadius: '18px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.02)' }}
                        >
                            <LayoutGrid size={20} />
                            ALL NODES
                        </motion.button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            { id: 'SYNC-9921', status: 'In Transit', target: 'Ayobo Sector Hub', time: '14M', icon: Truck, color: 'var(--primary)', progress: 78 },
                            { id: 'POOL-9922', status: 'Assigning', target: 'Lekki Phase 2 Core', time: '05M', icon: Cpu, color: 'var(--accent)', progress: 24 }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 * i }}
                                whileHover={{ x: 10, borderColor: item.color }}
                                style={{
                                    padding: '2rem', borderRadius: '44px', backgroundColor: 'white',
                                    border: '2.5px solid #F3F7F7', display: 'flex', flexDirection: 'column', gap: '2rem',
                                    boxShadow: '0 18px 40px rgba(0,0,0,0.02)', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', cursor: 'pointer'
                                }}
                                onClick={() => navigate('/retailer/progress')}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
                                    <div style={{
                                        width: '64px', height: '64px', borderRadius: '22px',
                                        backgroundColor: `${item.color}08`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        border: `2px solid ${item.color}15`
                                    }}>
                                        <item.icon size={32} color={item.color} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                                            <p style={{ fontSize: '1.3rem', fontWeight: '950', color: 'var(--black)', letterSpacing: '-0.05em' }}>{item.id}</p>
                                            <span style={{ fontSize: '0.75rem', fontWeight: '950', color: item.color, backgroundColor: `${item.color}08`, padding: '6px 12px', borderRadius: '10px', letterSpacing: '0.05em', border: `1px solid ${item.color}15` }}>{item.status.toUpperCase()}</span>
                                        </div>
                                        <p style={{ fontSize: '1rem', color: '#A0B0B0', fontWeight: '800' }}>DEST: {item.target}</p>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <motion.div animate={{ opacity: [1, 0.6, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                                            <p style={{ fontSize: '1.2rem', fontWeight: '950', color: 'var(--black)', letterSpacing: '-0.04em' }}>{item.time}</p>
                                            <p style={{ fontSize: '0.75rem', color: '#A0B0B0', fontWeight: '900', letterSpacing: '0.05em' }}>ETA</p>
                                        </motion.div>
                                    </div>
                                </div>
                                <div style={{ height: '10px', backgroundColor: '#F3F7F7', borderRadius: '5px', overflow: 'hidden', border: '1px solid #F0F5F5' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${item.progress}%` }}
                                        transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
                                        style={{ height: '100%', backgroundColor: item.color, boxShadow: `0 0 15px ${item.color}40`, borderRadius: '5px' }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Infrastructure Registry Nodes */}
                <section style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: '950', color: '#A0B0B0', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Terminal Links</h3>
                        <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '900', cursor: 'pointer' }}>EXPAND ALL</span>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', paddingBottom: '2.5rem', scrollbarWidth: 'none', marginLeft: '-1.75rem', paddingLeft: '1.75rem' }}>
                        {[
                            { label: 'Saved Nodes', icon: MapPin, route: '/retailer/addresses' },
                            { label: 'Merchant Log', icon: Store, route: '/retailer/history' },
                            { label: 'Support Core', icon: HelpCircle, route: '/retailer/help' },
                            { label: 'Hub Shield', icon: Shield, route: '/retailer/settings' }
                        ].map((node, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -8, borderColor: 'var(--primary)', backgroundColor: 'white' }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => node.route && navigate(node.route)}
                                style={{
                                    minWidth: '160px', padding: '2rem 1.5rem', borderRadius: '40px', backgroundColor: 'white',
                                    border: '2.5px solid #F3F7F7', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem',
                                    textAlign: 'center', cursor: 'pointer', boxShadow: '0 15px 35px rgba(0,0,0,0.01)', transition: 'all 0.4s ease'
                                }}
                            >
                                <div style={{ width: '60px', height: '60px', borderRadius: '20px', backgroundColor: '#F9FBFA', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid #F3F7F7' }}>
                                    <node.icon size={28} color="var(--primary)" />
                                </div>
                                <span style={{ fontSize: '1rem', fontWeight: '950', color: 'var(--black)', letterSpacing: '-0.02em', lineHeight: '1.2' }}>{node.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Tactical Command Status Center */}
            <div style={{ position: 'fixed', bottom: '2.5rem', left: '1.75rem', right: '1.75rem', zIndex: 1000 }}>
                <motion.div
                    initial={{ y: 120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 150 }}
                    style={{
                        padding: '1.5rem 2.5rem', backgroundColor: 'rgba(0, 77, 65, 0.98)', borderRadius: '36px',
                        backdropFilter: 'blur(40px)', border: '2px solid rgba(255,255,255,0.12)',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        boxShadow: '0 40px 100px rgba(0,0,0,0.5)'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                        <motion.div
                            animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                            style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#4ADE80', boxShadow: '0 0 20px #4ADE80' }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ color: 'white', fontSize: '1rem', fontWeight: '950', letterSpacing: '0.12em' }}>TERMINAL ONLINE</span>
                            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontWeight: '900', letterSpacing: '0.05em' }}>SECURE LINK VERIFIED</span>
                        </div>
                    </div>

                    <div style={{ height: '32px', width: '2px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '1px' }} />

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}>
                            <Cpu size={24} color="rgba(255,255,255,0.7)" />
                        </motion.div>
                        <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', fontWeight: '900', letterSpacing: '-0.01em' }}>V3.1 NEURAL SYNC</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Subtle Aesthetic Grain */}
            <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', opacity: 0.015, zIndex: 9999, backgroundImage: 'url("https://www.transparenttextures.com/patterns/p6.png")' }} />
        </div>
    );
}
