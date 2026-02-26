import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    ChevronRight,
    MapPin,
    Globe,
    Moon,
    ShieldCheck,
    HelpCircle,
    LogOut,
    ChevronLeft,
    FileText,
    Bell,
    CreditCard,
    LayoutGrid,
    Store,
    Settings,
    Briefcase,
    Zap,
    Cpu,
    ArrowUpRight,
    Shield,
    Activity,
    Target,
    Layers,
    Lock,
    Radar
} from 'lucide-react';
import { Card } from '../../../components/UI';

const SettingItem = ({ icon: Icon, label, value, onClick, hasToggle, isDanger }) => (
    <motion.button
        whileHover={{ x: 12, backgroundColor: 'rgba(0,166,156,0.02)' }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '2rem 1.75rem',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
    >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            <div style={{
                width: '64px', height: '64px', borderRadius: '20px',
                backgroundColor: isDanger ? 'rgba(240, 90, 40, 0.05)' : 'rgba(0, 166, 156, 0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `2px solid ${isDanger ? 'rgba(240, 90, 40, 0.1)' : 'rgba(0, 166, 156, 0.1)'}`, flexShrink: 0
            }}>
                <Icon size={30} color={isDanger ? 'var(--accent)' : 'var(--primary)'} />
            </div>
            <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: '950', fontSize: '1.2rem', color: isDanger ? 'var(--accent)' : 'var(--black)', letterSpacing: '-0.04em', marginBottom: '4px' }}>{label}</p>
                {value && <p style={{ fontSize: '0.9rem', color: '#B0B0B0', fontWeight: '800', letterSpacing: '0.02em' }}>{value}</p>}
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {hasToggle ? (
                <div style={{
                    width: '60px', height: '32px', borderRadius: '24px',
                    backgroundColor: 'var(--primary)', position: 'relative', padding: '4px',
                    boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.12)', border: '2px solid rgba(0, 166, 156, 0.2)'
                }}>
                    <motion.div
                        layout
                        style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'white', marginLeft: 'auto', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                    />
                </div>
            ) : (
                !isDanger && <ChevronRight size={24} color="#D1D9D9" />
            )}
        </div>
    </motion.button>
);

const SectionHeader = ({ title, icon: Icon }) => (
    <div style={{ padding: '4rem 1rem 2rem', display: 'flex', alignItems: 'center', gap: '14px' }}>
        {Icon && <Icon size={20} color="#B0B0B0" />}
        <p style={{
            fontSize: '0.9rem', fontWeight: '950', color: '#B0B0B0',
            textTransform: 'uppercase', letterSpacing: '0.25rem'
        }}>
            {title}
        </p>
    </div>
);

export default function RetailerSettings() {
    const navigate = useNavigate();

    return (
        <div className="app-container" style={{ backgroundColor: '#FBFCFC', minHeight: '100vh', paddingBottom: '7rem', position: 'relative', overflowX: 'hidden' }}>
            {/* Background Aesthetic Architecture */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '45vh', background: 'linear-gradient(180deg, rgba(0, 166, 156, 0.05) 0%, transparent 100%)', pointerEvents: 'none' }} />

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
                    <h1 style={{ fontSize: '1.1rem', fontWeight: '950', color: 'var(--primary)', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>Merchant Admin</h1>
                </div>
                <div style={{ width: '52px', height: '52px', backgroundColor: '#F3F7F7', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Activity size={24} color="var(--primary)" />
                </div>
            </header>

            <div style={{ padding: '0 2rem' }}>
                {/* Profile Mastery Module */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    style={{ marginTop: '4rem' }}
                >
                    <Card
                        onClick={() => navigate('/retailer/profile')}
                        style={{
                            padding: '2.5rem', backgroundColor: 'white', border: '3px solid #F3F7F7',
                            display: 'flex', alignItems: 'center', gap: '2.5rem', cursor: 'pointer',
                            borderRadius: '56px', boxShadow: '0 30px 70px rgba(0,0,0,0.05)',
                            position: 'relative', overflow: 'hidden'
                        }}
                    >
                        {/* Interactive Background Glow */}
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(240, 90, 40, 0.02))', pointerEvents: 'none' }} />

                        <div style={{
                            width: '100px', height: '100px', borderRadius: '36px',
                            background: 'linear-gradient(135deg, var(--accent) 0%, #E04E1B 100%)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '2.4rem', fontWeight: '950', color: 'white',
                            boxShadow: '0 25px 55px rgba(240, 90, 40, 0.25)', position: 'relative', border: '3px solid white'
                        }}>
                            SA
                            <motion.div
                                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                                style={{ position: 'absolute', bottom: '-6px', right: '-6px', width: '32px', height: '32px', backgroundColor: 'var(--primary)', borderRadius: '50%', border: '4px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Zap size={14} color="white" fill="white" />
                            </motion.div>
                        </div>
                        <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                            <h2 style={{ fontWeight: '950', fontSize: '2rem', color: 'var(--black)', marginBottom: '6px', letterSpacing: '-0.06em', lineHeight: '1' }}>Sarah Arinze</h2>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <ShieldCheck size={18} color="var(--primary)" />
                                <p style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '950', letterSpacing: '0.1rem' }}>VERIFIED HUB PARTNER</p>
                            </div>
                        </div>
                        <div style={{
                            width: '60px', height: '60px', borderRadius: '22px',
                            backgroundColor: 'rgba(0,166,156,0.05)', display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                            border: '2px solid rgba(0,166,156,0.1)',
                            boxShadow: '0 10px 20px rgba(0,166,156,0.05)'
                        }}>
                            <ArrowUpRight size={28} color="var(--primary)" />
                        </div>
                    </Card>
                </motion.div>

                <SectionHeader title="Entity Command" icon={Target} />
                <Card padding="0" style={{ border: '3px solid #F3F7F7', borderRadius: '56px', overflow: 'hidden', backgroundColor: 'white', boxShadow: '0 20px 45px rgba(0,0,0,0.01)' }}>
                    <SettingItem icon={User} label="Partner Credentials" value="Legal documentation & registry sync" onClick={() => navigate('/retailer/profile')} />
                    <div style={{ height: '3px', backgroundColor: '#F9FAFA', margin: '0 2rem' }} />
                    <SettingItem icon={CreditCard} label="Payment Infrastructure" value="Invoicing cycles & node fees" onClick={() => { }} />
                    <div style={{ height: '3px', backgroundColor: '#F9FAFA', margin: '0 2rem' }} />
                    <SettingItem icon={Bell} label="Operation Telemetry" value="Real-time terminal alerts" hasToggle />
                </Card>

                <SectionHeader title="Logistics Registry" icon={Layers} />
                <Card padding="0" style={{ border: '3px solid #F3F7F7', borderRadius: '56px', overflow: 'hidden', backgroundColor: 'white', boxShadow: '0 20px 45px rgba(0,0,0,0.01)' }}>
                    <SettingItem icon={MapPin} label="Destination Registry" value="High-frequency address book" onClick={() => navigate('/retailer/addresses')} />
                    <div style={{ height: '3px', backgroundColor: '#F9FAFA', margin: '0 2rem' }} />
                    <SettingItem icon={Globe} label="Regional Adaptation" value="Localization & linguistic sync" onClick={() => navigate('/retailer/language')} />
                    <div style={{ height: '3px', backgroundColor: '#F9FAFA', margin: '0 2rem' }} />
                    <SettingItem icon={Moon} label="Midnight Interface" value="Low-light strategic view" hasToggle />
                </Card>

                <SectionHeader title="Security Protocol" icon={Lock} />
                <Card padding="0" style={{ border: '3px solid #F3F7F7', borderRadius: '56px', overflow: 'hidden', backgroundColor: 'white', boxShadow: '0 20px 45px rgba(0,0,0,0.01)' }}>
                    <SettingItem icon={Lock} label="Access Encryption" value="Manage secure passkeys" onClick={() => navigate('/retailer/forget-password')} />
                    <div style={{ height: '3px', backgroundColor: '#F9FAFA', margin: '0 2rem' }} />
                    <SettingItem icon={FileText} label="Merchant Standards" value="Regulatory compliance handbook" onClick={() => navigate('/retailer/terms')} />
                </Card>

                <SectionHeader title="Support Architecture" icon={HelpCircle} />
                <Card padding="0" style={{ border: '3px solid #F3F7F7', borderRadius: '56px', overflow: 'hidden', backgroundColor: 'white', boxShadow: '0 20px 45px rgba(0,0,0,0.01)' }}>
                    <SettingItem icon={HelpCircle} label="Resource Library" value="Platform technical documentation" onClick={() => navigate('/retailer/help')} />
                    <div style={{ height: '3px', backgroundColor: '#F9FAFA', margin: '0 2rem' }} />
                    <SettingItem icon={LogOut} label="Secure Session Termination" value="De-activate hub terminal" isDanger onClick={() => navigate('/')} />
                </Card>

                {/* Premium Hub Status Branding */}
                <div style={{ textAlign: 'center', marginTop: '8rem', paddingBottom: '3rem' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', opacity: 0.4 }}>
                        <Radar size={22} color="#B0B0B0" />
                        <p style={{ fontSize: '1.1rem', color: '#B0B0B0', fontWeight: '950', letterSpacing: '0.25rem' }}>
                            ROUTEPOLY MERCHANT TERMINAL • V3.5
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
