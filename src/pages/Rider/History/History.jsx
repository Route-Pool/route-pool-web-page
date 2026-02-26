import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft,
    Package,
    Calendar,
    Search,
    Filter,
    ArrowUpRight,
    MapPin,
    Clock,
    DollarSign,
    LayoutGrid,
    Target,
    Activity,
    TrendingUp,
    Shield,
    Globe,
    Zap,
    Cpu,
    CheckCircle2,
    Box,
    Layers
} from 'lucide-react';
import { Card, Button } from '../../../components/UI';

const HistoryItem = ({ title, id, status, price, date, time, delay }) => {
    const isCompleted = status === 'COMPLETED';

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            whileHover={{ x: 12, borderColor: isCompleted ? 'var(--primary)' : 'var(--accent)' }}
            whileTap={{ scale: 0.98 }}
            style={{
                display: 'flex', alignItems: 'center', gap: '1.75rem', padding: '1.75rem',
                backgroundColor: 'white', borderRadius: '40px', border: '2.5px solid #F3F7F7',
                marginBottom: '1.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.02)',
                cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative', overflow: 'hidden'
            }}
        >
            <div style={{ position: 'absolute', top: 0, right: 0, width: '30%', height: '100%', background: `linear-gradient(90deg, transparent, ${isCompleted ? 'rgba(0, 166, 156, 0.02)' : 'rgba(240, 90, 40, 0.02)'})`, pointerEvents: 'none' }} />

            <div style={{
                width: '68px', height: '68px', borderRadius: '22px',
                backgroundColor: isCompleted ? 'rgba(0, 166, 156, 0.05)' : 'rgba(240, 90, 40, 0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `1.5px solid ${isCompleted ? 'rgba(0, 166, 156, 0.1)' : 'rgba(240, 90, 40, 0.1)'}`,
                flexShrink: 0, zIndex: 1
            }}>
                <Box size={32} color={isCompleted ? 'var(--primary)' : 'var(--accent)'} />
            </div>

            <div style={{ flex: 1, zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                    <p style={{ fontSize: '1.25rem', fontWeight: '950', color: 'var(--black)', letterSpacing: '-0.03em' }}>{title}</p>
                    <p style={{ fontSize: '1.3rem', fontWeight: '950', color: 'var(--primary)', letterSpacing: '-0.04em' }}>+₦{price}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        padding: '6px 14px', backgroundColor: isCompleted ? 'rgba(74, 222, 128, 0.08)' : 'rgba(255, 215, 0, 0.08)',
                        borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px'
                    }}>
                        <motion.div
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: isCompleted ? '#4ADE80' : '#FFD700', boxShadow: `0 0 10px ${isCompleted ? '#4ADE80' : '#FFD700'}` }}
                        />
                        <span style={{ fontSize: '0.8rem', color: isCompleted ? '#166534' : '#854D0E', fontWeight: '950', letterSpacing: '0.08em' }}>{status}</span>
                    </div>
                    <span style={{ fontSize: '0.9rem', color: '#B0B0B0', fontWeight: '800' }}>• {date} • {time}</span>
                </div>
            </div>

            <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: '#F3F7F7', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid #F0F5F5', zIndex: 1 }}>
                <ArrowUpRight size={24} color="#B0B0B0" />
            </div>
        </motion.div>
    );
};

export default function RiderHistory() {
    const navigate = useNavigate();

    const historyData = [
        { title: 'Electronic Hub Batch', id: 'EP-9924-01', status: 'COMPLETED', price: '2,800', date: 'FEB 25', time: '14:20' },
        { title: 'Fashion Pulse Delivery', id: 'FP-8831-05', status: 'COMPLETED', price: '1,500', date: 'FEB 25', time: '11:05' },
        { title: 'Home Goods Sync', id: 'HG-7721-09', status: 'VERIFIED', price: '3,200', date: 'FEB 24', time: '18:45' },
        { title: 'Mega Grocery Load', id: 'MG-6610-02', status: 'COMPLETED', price: '4,500', date: 'FEB 24', time: '09:30' },
        { title: 'Office Station Sync', id: 'OS-5501-11', status: 'COMPLETED', price: '1,200', date: 'FEB 23', time: '16:15' },
    ];

    return (
        <div className="app-container" style={{ backgroundColor: '#FBFCFC', minHeight: '100vh', paddingBottom: '6rem', position: 'relative', overflowX: 'hidden' }}>
            {/* Background Aesthetic Architecture */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '40vh', background: 'linear-gradient(180deg, rgba(0, 166, 156, 0.05) 0%, transparent 100%)', pointerEvents: 'none' }} />

            {/* Premium Header Architecture */}
            <header style={{ padding: '1.5rem', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 15px rgba(0,0,0,0.03)', position: 'sticky', top: 0, zIndex: 100 }}>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate(-1)}
                    style={{ width: '52px', height: '52px', backgroundColor: '#F3F7F7', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }}
                >
                    <ChevronLeft size={24} color="var(--primary)" />
                </motion.button>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '1.1rem', fontWeight: '950', color: 'var(--primary)', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>Logistics Ledger</h1>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#4ADE80', boxShadow: '0 0 10px #4ADE80', border: '2px solid white' }} />
                        <p style={{ fontSize: '0.8rem', fontWeight: '900', color: 'var(--accent)', letterSpacing: '0.15em' }}>SYNCED WITH HUB-01</p>
                    </div>
                </div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ width: '52px', height: '52px', borderRadius: '18px', backgroundColor: '#F3F7F7', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }}
                >
                    <Filter size={24} color="var(--primary)" />
                </motion.button>
            </header>

            <div style={{ padding: '3.5rem 2rem' }}>
                {/* Tactical Search Architecture */}
                <div style={{ marginBottom: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            padding: '1.5rem 2rem', backgroundColor: 'white', borderRadius: '32px',
                            border: '2.5px solid #F3F7F7', display: 'flex', alignItems: 'center', gap: '16px',
                            boxShadow: '0 15px 35px rgba(0,0,0,0.02)'
                        }}>
                        <Search size={26} color="#B0B0B0" />
                        <input
                            placeholder="Identify specific operation ID or payload..."
                            style={{ flex: 1, border: 'none', outline: 'none', fontSize: '1.1rem', fontWeight: '800', color: 'var(--black)', background: 'transparent' }}
                        />
                    </motion.div>
                </div>

                {/* Performance Analytics Architecture */}
                <div style={{ marginBottom: '5rem' }}>
                    <Card style={{
                        padding: '3rem', borderRadius: '56px', background: 'linear-gradient(135deg, var(--primary) 0%, #003D34 100%)',
                        color: 'white', position: 'relative', overflow: 'hidden', boxShadow: '0 30px 70px rgba(0, 61, 52, 0.25)'
                    }}>
                        <motion.div
                            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                            style={{ position: 'absolute', top: '-10%', right: '-10%', opacity: 0.08 }}
                        >
                            <Radar size={280} color="white" />
                        </motion.div>

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3.5rem' }}>
                                <div>
                                    <p style={{ fontSize: '1rem', opacity: 0.85, fontWeight: '950', letterSpacing: '0.2rem', textTransform: 'uppercase', marginBottom: '10px' }}>Ledger Total Volume</p>
                                    <h3 style={{ fontSize: '3.5rem', fontWeight: '950', letterSpacing: '-0.06em' }}>₦124,500<span style={{ opacity: 0.4, fontSize: '1.5rem' }}>.00</span></h3>
                                </div>
                                <div style={{ width: '76px', height: '76px', borderRadius: '28px', backgroundColor: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(20px)', border: '1.5px solid rgba(255,255,255,0.3)' }}>
                                    <TrendingUp size={36} />
                                </div>
                            </div>

                            <div style={{ height: '14px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '7px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '1.75rem' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '75%' }}
                                    transition={{ duration: 2, ease: 'easeOut' }}
                                    style={{ height: '100%', backgroundColor: '#4ADE80', borderRadius: '7px', boxShadow: '0 0 20px #4ADE80' }}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Activity size={18} color="#4ADE80" />
                                    <p style={{ fontSize: '1.05rem', fontWeight: '850', opacity: 0.9 }}>Fleet Efficiency Parameter: 75%</p>
                                </div>
                                <span style={{ fontSize: '0.9rem', backgroundColor: 'rgba(255,255,255,0.12)', padding: '8px 16px', borderRadius: '14px', fontWeight: '950', letterSpacing: '0.1rem', border: '1px solid rgba(255,255,255,0.1)' }}>TIER 1 RIDER</span>
                            </div>
                        </div>
                    </Card>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '950', color: 'var(--black)', letterSpacing: '-0.05em' }}>Operation Logs</h2>
                    <motion.div
                        whileHover={{ y: -2, color: 'var(--primary)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#6A7A7A', fontWeight: '950', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                        <Calendar size={20} />
                        <span>TEMPORAL FILTER</span>
                    </motion.div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {historyData.map((item, index) => (
                        <HistoryItem key={index} {...item} delay={index * 0.1} />
                    ))}
                </div>

                {/* Premium Infrastructure Branding */}
                <div style={{ textAlign: 'center', marginTop: '5rem', opacity: 0.4 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
                        <Globe size={20} color="#B0B0B0" />
                        <p style={{ fontSize: '1rem', color: '#B0B0B0', fontWeight: '950', letterSpacing: '0.2rem' }}>
                            ROUTEPOLY TELEMETRY ARCHIVE V3.5
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
