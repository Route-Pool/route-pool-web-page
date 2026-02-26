import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft,
    User,
    Phone,
    Mail,
    Camera,
    ShieldCheck,
    MapPin,
    Building2,
    Store,
    ArrowRight,
    Settings,
    Briefcase,
    Zap,
    Cpu,
    Shield,
    Activity,
    Target,
    Layers,
    Globe,
    Radar
} from 'lucide-react';
import { Button, Card } from '../../../components/UI';

const ProfileField = ({ icon: Icon, label, value, onEdit, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        whileHover={{ x: 12, backgroundColor: '#fdfdfd' }}
        style={{
            display: 'flex', alignItems: 'center', gap: '2rem',
            padding: '2.5rem 2rem', borderBottom: '3px solid #F9FAFA',
            backgroundColor: 'white', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative', overflow: 'hidden'
        }}
    >
        <div style={{
            width: '64px', height: '64px', borderRadius: '20px',
            backgroundColor: 'rgba(0, 166, 156, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, border: '2px solid rgba(0, 166, 156, 0.15)',
            boxShadow: '0 10px 20px rgba(0, 166, 156, 0.05)'
        }}>
            <Icon size={30} color="var(--primary)" />
        </div>
        <div style={{ flex: 1 }}>
            <p style={{ fontSize: '0.9rem', fontWeight: '950', color: '#B0B0B0', textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '6px' }}>{label}</p>
            <p style={{ fontSize: '1.4rem', color: 'var(--black)', fontWeight: '950', letterSpacing: '-0.04em', lineHeight: '1.1' }}>{value}</p>
        </div>
        <motion.button
            whileHover={{ scale: 1.05, borderColor: 'var(--primary)', color: 'white', backgroundColor: 'var(--primary)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onEdit}
            style={{
                background: 'transparent', border: '3px solid #F3F7F7', color: 'var(--primary)',
                padding: '12px 24px', borderRadius: '20px', fontSize: '1rem', fontWeight: '950', cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
        >
            Modify
        </motion.button>
    </motion.div>
);

export default function RetailerProfile() {
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
                    <h1 style={{ fontSize: '1.1rem', fontWeight: '950', color: 'var(--primary)', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>Entity Registry</h1>
                </div>
                <div style={{ width: '52px', height: '52px', backgroundColor: '#F3F7F7', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Settings size={24} color="var(--primary)" />
                </div>
            </header>

            {/* Premium Avatar Mastery Architecture */}
            <div style={{ padding: '5rem 2rem 4.5rem', textAlign: 'center', backgroundColor: 'white', borderRadius: '0 0 64px 64px', boxShadow: '0 25px 60px rgba(0,0,0,0.04)', borderBottom: '3px solid #F3F7F7', position: 'relative', zIndex: 1 }}>
                <div style={{ position: 'relative', width: '190px', height: '190px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, type: 'spring' }}
                        style={{
                            width: '100%', height: '100%', borderRadius: '64px',
                            background: 'linear-gradient(135deg, var(--accent) 0%, #C03E1B 100%)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '4.8rem', fontWeight: '950', color: 'white',
                            boxShadow: '0 35px 75px rgba(240, 90, 40, 0.25)', position: 'relative', overflow: 'hidden',
                            border: '4px solid white'
                        }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                            style={{ position: 'absolute', inset: 0, opacity: 0.15, background: 'radial-gradient(circle, white 2px, transparent 0)', backgroundSize: '24px 24px' }}
                        />
                        SA
                    </motion.div>
                    <motion.button
                        whileHover={{ scale: 1.1, rotate: -10 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                            position: 'absolute', bottom: '-10px', right: '-10px',
                            width: '72px', height: '72px', backgroundColor: 'white', borderRadius: '24px', border: '7px solid white',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.15)', cursor: 'pointer'
                        }}
                    >
                        <Camera size={32} color="var(--primary)" />
                    </motion.button>
                </div>

                <h2 style={{ marginTop: '3.5rem', fontSize: '2.8rem', fontWeight: '950', color: 'var(--black)', letterSpacing: '-0.07em', lineHeight: '1.1' }}>Sarah Arinze.</h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '1.5rem' }}
                >
                    <div style={{ padding: '12px 24px', borderRadius: '20px', backgroundColor: 'rgba(0, 166, 156, 0.06)', display: 'flex', alignItems: 'center', gap: '12px', border: '2px solid rgba(0, 166, 156, 0.15)' }}>
                        <ShieldCheck size={22} color="var(--primary)" />
                        <span style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: '950', letterSpacing: '0.1rem' }}>VERIFIED MERCHANT NODE</span>
                    </div>
                </motion.div>
            </div>

            {/* Registry Details Matrix Architecture */}
            <div style={{ marginTop: '2rem', position: 'relative', zIndex: 1 }}>
                <ProfileField icon={User} label="Authorized Officer" value="Sarah Arinze" delay={0.1} />
                <ProfileField icon={Store} label="Registered Commercial Entity" value="Sarah's General Store" delay={0.2} />
                <ProfileField icon={Phone} label="Communication Uplink" value="+231 245 6789" delay={0.3} />
                <ProfileField icon={Mail} label="Administrative Email" value="Saraharinze@gmail.com" delay={0.4} />
                <ProfileField icon={MapPin} label="Core Logistics Terminal" value="Ikeja Industrial Hub, Lagos" delay={0.5} />
                <ProfileField icon={Building2} label="Tax Identification Node" value="RC-998274-B" delay={0.6} />
            </div>

            <div style={{ padding: '5rem 2rem' }}>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button onClick={() => navigate(-1)} style={{ height: '84px', borderRadius: '32px', fontSize: '1.35rem', fontWeight: '950', boxShadow: '0 30px 60px rgba(0, 77, 65, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                        Synchronize Global Registry
                        <Activity size={30} />
                    </Button>
                </motion.div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginTop: '3rem', opacity: 0.6 }}>
                    <Zap size={20} color="var(--primary)" fill="var(--primary)" />
                    <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#6A7A7A', fontWeight: '750', lineHeight: '1.6', maxWidth: '340px' }}>
                        Registry data is used for high-fidelity encrypted tax & invoice protocols.
                    </p>
                </div>
            </div>

            {/* Premium Infrastructure Branding */}
            <div style={{ textAlign: 'center', paddingBottom: '3rem', opacity: 0.4 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
                    <Globe size={20} color="#B0B0B0" />
                    <span style={{ fontSize: '1rem', color: '#B0B0B0', fontWeight: '950', letterSpacing: '0.2rem' }}>ROUTEPOLY INTELLECT V3.5</span>
                </div>
            </div>
        </div>
    );
}
