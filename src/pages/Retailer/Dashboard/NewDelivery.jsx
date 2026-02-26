import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ChevronLeft,
    Package,
    MapPin,
    Phone,
    FileText,
    Truck,
    Box,
    Send,
    AlertCircle,
    BadgeInfo,
    ChevronRight,
    Zap,
    Cpu,
    ArrowRight,
    Target,
    Layers,
    Shield,
    Activity,
    Globe
} from 'lucide-react';
import { Button, Input, Select, Card } from '../../../components/UI';

export default function RetailerNewDelivery() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        category: 'Traveling Bag',
        description: '',
        location: '',
        phone: ''
    });

    const categories = [
        { value: 'Traveling Bag', label: 'Logistic Batch (Industrial)' },
        { value: 'Box', label: 'Medium Payload (Box)' },
        { value: 'Envelope', label: 'Express Document (Secure)' },
        { value: 'Other', label: 'Custom Payload Node' }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/retailer/confirm-payment');
    };

    return (
        <div className="app-container" style={{ backgroundColor: '#FBFCFC', minHeight: '100vh', paddingBottom: '6rem', position: 'relative', overflowX: 'hidden' }}>
            {/* Background Aesthetic Architecture */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: '60vw', height: '60vw', background: 'radial-gradient(circle at center, rgba(0, 166, 156, 0.04) 0%, transparent 70%)', transform: 'translate(20%, -20%)', pointerEvents: 'none' }} />

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
                        <Send size={18} color="white" />
                    </div>
                    <h1 style={{ fontSize: '1.1rem', fontWeight: '950', color: 'var(--primary)', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>Initialize Payload</h1>
                </div>
                <div style={{ width: '52px', height: '52px', backgroundColor: '#F3F7F7', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Activity size={22} color="var(--primary)" />
                </div>
            </header>

            <div style={{ padding: '3rem 1.75rem' }}>
                {/* Tactical Mission Overview */}
                <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, type: 'spring' }}
                        style={{
                            width: '100px', height: '100px', borderRadius: '36px',
                            backgroundColor: 'rgba(0, 166, 156, 0.05)', display: 'flex',
                            alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem',
                            border: '2.5px solid white', boxShadow: '0 20px 45px rgba(0, 166, 156, 0.08)'
                        }}
                    >
                        <Layers size={48} color="var(--primary)" />
                    </motion.div>
                    <h2 style={{ fontSize: '2.4rem', fontWeight: '950', color: 'var(--black)', marginBottom: '1rem', letterSpacing: '-0.06em', lineHeight: '1.1' }}>Parcel Node <br /><span style={{ color: 'var(--primary)' }}>Registration.</span></h2>
                    <p style={{ fontSize: '1.1rem', color: '#A0B0B0', lineHeight: '1.7', fontWeight: '650', maxWidth: '320px', margin: '0 auto' }}>
                        Define yours logistics parameters to synchronize with the regional neural pool.
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
                    >
                        {/* High-Fidelity Inputs */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '6px' }}>
                                <Cpu size={16} color="var(--primary)" />
                                <p style={{ fontSize: '0.85rem', fontWeight: '950', color: '#A0B0B0', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Payload Strategy</p>
                            </div>
                            <Select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                options={categories}
                                style={{ height: '80px', borderRadius: '28px', border: '2.5px solid #F0F5F5', padding: '0 1.75rem', fontSize: '1.1rem', fontWeight: '950', backgroundColor: 'white', color: 'var(--black)' }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '6px' }}>
                                <FileText size={16} color="var(--primary)" />
                                <p style={{ fontSize: '0.85rem', fontWeight: '950', color: '#A0B0B0', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Manifest Details</p>
                            </div>
                            <Input
                                placeholder="e.g. Industrial components, Electronics..."
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                style={{ height: '80px', borderRadius: '28px', border: '2.5px solid #F0F5F5', fontSize: '1.1rem', fontWeight: '850' }}
                                required
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '6px' }}>
                                <MapPin size={16} color="var(--accent)" />
                                <p style={{ fontSize: '0.85rem', fontWeight: '950', color: '#A0B0B0', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Target Coordinate</p>
                            </div>
                            <Input
                                placeholder="Recipient full terminal address"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                style={{ height: '80px', borderRadius: '28px', border: '2.5px solid #F0F5F5', fontSize: '1.1rem', fontWeight: '850' }}
                                required
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '6px' }}>
                                <Phone size={16} color="var(--primary)" />
                                <p style={{ fontSize: '0.85rem', fontWeight: '950', color: '#A0B0B0', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Secure Contact Link</p>
                            </div>
                            <Input
                                placeholder="Primary communication node"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                style={{ height: '80px', borderRadius: '28px', border: '2.5px solid #F0F5F5', fontSize: '1.1rem', fontWeight: '850' }}
                                required
                            />
                        </div>
                    </motion.div>

                    {/* Security Handshake Card */}
                    <Card style={{
                        padding: '2.25rem', borderRadius: '44px', backgroundColor: 'white',
                        border: '2.5px solid #F0F5F5', boxShadow: '0 20px 50px rgba(0,0,0,0.02)',
                        display: 'flex', gap: '1.75rem', position: 'relative', overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(0, 166, 156, 0.03))', pointerEvents: 'none' }} />
                        <div style={{ width: '64px', height: '64px', borderRadius: '22px', backgroundColor: 'rgba(0, 166, 156, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(0, 166, 156, 0.1)' }}>
                            <Shield size={32} color="var(--primary)" />
                        </div>
                        <div>
                            <p style={{ fontSize: '1.15rem', fontWeight: '950', color: 'var(--black)', marginBottom: '6px', letterSpacing: '-0.02em' }}>Logistics Assurance</p>
                            <p style={{ fontSize: '0.9rem', color: '#A0B0B0', fontWeight: '700', lineHeight: '1.6' }}>
                                Your payload will be synchronized with a premium carrier node upon cryptographic handshake.
                            </p>
                        </div>
                    </Card>

                    <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                                type="submit"
                                style={{
                                    height: '84px', borderRadius: '30px', fontSize: '1.3rem', fontWeight: '950',
                                    boxShadow: '0 30px 65px rgba(0, 77, 65, 0.2)', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', gap: '16px', letterSpacing: '-0.01em'
                                }}
                            >
                                Authorize Flow
                                <ArrowRight size={28} />
                            </Button>
                        </motion.div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', opacity: 0.5 }}>
                                <Globe size={16} color="#A0B0B0" />
                                <p style={{ fontSize: '0.85rem', color: '#A0B0B0', fontWeight: '850', letterSpacing: '0.12em' }}>
                                    ROUTEPOLY QUANTUM PROTOCOL ACTIVE
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
