import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ChevronLeft,
    Package,
    MapPin,
    Search,
    Filter,
    ArrowRight,
    TrendingDown,
    Calendar,
    Box,
    FileText,
    History,
    Zap,
    Cpu,
    Target,
    Activity,
    Shield
} from 'lucide-react';
import { Card, Button } from '../../../components/UI';

const HistoryItem = ({ id, destination, status, date, price }) => {
    const isDelivered = status === 'DELIVERED';

    return (
        <motion.div
            whileHover={{ y: -6, backgroundColor: '#fdfdfd' }}
            whileTap={{ scale: 0.98 }}
            style={{
                padding: '1.5rem', backgroundColor: 'white', borderRadius: '32px',
                border: '1.5px solid #F0F5F5', marginBottom: '1.5rem',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                boxShadow: '0 12px 30px rgba(0,0,0,0.02)', cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
        >
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{
                    width: '60px', height: '60px', backgroundColor: isDelivered ? 'rgba(0, 166, 156, 0.05)' : '#F9FBFA',
                    borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: `1.5px solid ${isDelivered ? 'rgba(0, 166, 156, 0.1)' : '#F0F5F5'}`, flexShrink: 0
                }}>
                    <Package size={28} color={isDelivered ? 'var(--primary)' : '#A0B0B0'} />
                </div>
                <div>
                    <p style={{ fontWeight: '950', fontSize: '1.1rem', color: 'var(--black)', letterSpacing: '-0.03em', marginBottom: '4px' }}>{id}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <MapPin size={14} color="#A0B0B0" />
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700' }}>{destination}</p>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '1.1rem', fontWeight: '950', color: 'var(--black)', marginBottom: '6px', letterSpacing: '-0.02em' }}>₦{price}</p>
                <div style={{
                    fontSize: '0.75rem', fontWeight: '900', color: isDelivered ? 'var(--primary)' : '#A0B0B0',
                    backgroundColor: isDelivered ? 'rgba(0, 166, 156, 0.08)' : '#F0F5F5',
                    padding: '6px 14px', borderRadius: '10px', letterSpacing: '0.08em', display: 'inline-block'
                }}>
                    {status}
                </div>
            </div>
        </motion.div>
    );
};

export default function RetailerHistory() {
    const navigate = useNavigate();

    const historyData = [
        { id: 'RP-CD-9924', destination: '12 Aba-Owerri Rd', status: 'DELIVERED', date: 'Oct 12, 2023', price: '5,800' },
        { id: 'RP-CD-9940', destination: 'Block C, Housing Estate', status: 'DELIVERED', date: 'Oct 10, 2023', price: '4,200' },
        { id: 'RP-CD-9955', destination: 'Osisioma Junction Area', status: 'DISPATCHED', date: 'Oct 08, 2023', price: '3,500' },
        { id: 'RP-CD-9988', destination: 'Gowon Sector 4', status: 'ARCHIVED', date: 'Oct 05, 2023', price: '6,400' },
    ];

    return (
        <div className="app-container" style={{ backgroundColor: '#FBFCFC', minHeight: '100vh', paddingBottom: '4rem' }}>
            {/* Premium Header Architecture */}
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
                        <History size={18} color="white" />
                    </div>
                    <h1 style={{ fontSize: '1.2rem', fontWeight: '950', color: 'var(--primary)', letterSpacing: '-0.04em', textTransform: 'uppercase' }}>Shipment Archive</h1>
                </div>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    style={{ width: '52px', height: '52px', borderRadius: '18px', backgroundColor: '#F3F7F7', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }}
                >
                    <Filter size={22} color="var(--primary)" />
                </motion.button>
            </header>

            <div style={{ padding: '2.5rem 1.75rem' }}>
                {/* Advanced Search Module */}
                <div style={{ marginBottom: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            padding: '1.4rem 1.75rem', backgroundColor: 'white', borderRadius: '28px',
                            border: '2px solid #F0F5F5', display: 'flex', alignItems: 'center', gap: '16px',
                            boxShadow: '0 12px 30px rgba(0,0,0,0.02)'
                        }}>
                        <Search size={24} color="#A0B0B0" />
                        <input
                            placeholder="Track shipment ID or target destination..."
                            style={{ flex: 1, border: 'none', outline: 'none', fontSize: '1.05rem', fontWeight: '700', color: 'var(--black)', background: 'transparent' }}
                        />
                    </motion.div>
                </div>

                {/* Spend Intelligence Architecture */}
                <div style={{ marginBottom: '4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: '950', color: 'var(--black)', letterSpacing: '-0.04em' }}>Logistics Intelligence</h2>
                        <span style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '900', letterSpacing: '-0.02em' }}>OCTOBER 2023 CYCLE</span>
                    </div>
                    <Card style={{
                        padding: '2.5rem', borderRadius: '45px',
                        background: 'linear-gradient(135deg, #004D41 0%, #002D26 100%)',
                        color: 'white', position: 'relative', overflow: 'hidden',
                        boxShadow: '0 25px 60px rgba(0, 45, 38, 0.25)'
                    }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.08, transform: 'translate(15%, -15%) scale(1.2)' }}>
                            <Activity size={260} color="white" />
                        </div>

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <p style={{ fontSize: '0.85rem', opacity: 0.7, fontWeight: '900', letterSpacing: '0.15em', marginBottom: '8px', textTransform: 'uppercase' }}>Total Logistics Spend</p>
                                    <h3 style={{ fontSize: '2.8rem', fontWeight: '950', letterSpacing: '-0.06em' }}>₦19,900</h3>
                                </div>
                                <div style={{ width: '60px', height: '60px', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                                    <FileText size={28} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '2.5rem', marginTop: '2.5rem' }}>
                                <div>
                                    <p style={{ fontSize: '0.75rem', opacity: 0.6, fontWeight: '900', letterSpacing: '0.05em' }}>POOL SAVINGS</p>
                                    <p style={{ fontSize: '1.25rem', fontWeight: '950', color: '#4ADE80', marginTop: '4px' }}>₦4,200 <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>(21%)</span></p>
                                </div>
                                <div style={{ width: '2px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '1px' }} />
                                <div>
                                    <p style={{ fontSize: '0.75rem', opacity: 0.6, fontWeight: '900', letterSpacing: '0.05em' }}>VOLUME</p>
                                    <p style={{ fontSize: '1.25rem', fontWeight: '950', marginTop: '4px' }}>14 <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Parcels Sync</span></p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Archive Flow Module */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '950', color: 'var(--black)', letterSpacing: '-0.04em' }}>Archive Flow</h2>
                    <motion.div
                        whileTap={{ scale: 0.95 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '950', fontSize: '0.9rem', cursor: 'pointer' }}>
                        <Calendar size={18} />
                        <span>Temporal Sort</span>
                    </motion.div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {historyData.map((item, index) => (
                        <HistoryItem key={index} {...item} />
                    ))}
                </div>

                <Button
                    variant="outline"
                    onClick={() => navigate('/retailer/dashboard')}
                    style={{
                        height: '76px', borderRadius: '26px', border: '2.5px solid #F0F5F5',
                        fontWeight: '950', color: '#A0B0B0', marginTop: '2.5rem', width: '100%',
                        fontSize: '1.1rem', backgroundColor: 'transparent'
                    }}
                >
                    Load More Archive Records
                </Button>

                <div style={{ textAlign: 'center', marginTop: '4rem', opacity: 0.5 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                        <Shield size={16} color="#A0B0B0" />
                        <p style={{ fontSize: '0.8rem', color: '#A0B0B0', fontWeight: '850', letterSpacing: '0.12em' }}>
                            SECURED BY ROUTEPOLY ARCHIVE PROTOCOL
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
