import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft,
    Search,
    Check,
    Globe,
    Languages,
    Star,
    ArrowRight,
    Map,
    Activity,
    Target,
    Layers,
    Radar
} from 'lucide-react';
import { Card, Input } from '../../../components/UI';

const languages = [
    { name: 'English (UK/US)', code: 'en-US', active: true, region: 'International Standard' },
    { name: 'Yoruba (Nigeria)', code: 'yo', active: false, region: 'Regional Dialect' },
    { name: 'Igbo (Nigeria)', code: 'ig', active: false, region: 'Regional Dialect' },
    { name: 'Hausa (Nigeria)', code: 'ha', active: false, region: 'Regional Dialect' },
    { name: 'Français (Global)', code: 'fr', active: false, region: 'European Union' },
    { name: 'Español (Global)', code: 'es', active: false, region: 'Iberian Peninsula' }
];

export default function RiderLanguage() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState('en-US');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredLanguages = languages.filter(lang =>
        lang.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                    <h1 style={{ fontSize: '1.1rem', fontWeight: '950', color: 'var(--primary)', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>Terminal Linguistics</h1>
                </div>
                <div style={{ width: '52px', height: '52px', backgroundColor: '#F3F7F7', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Globe size={24} color="var(--primary)" />
                </div>
            </header>

            <div style={{ padding: '3.5rem 2rem' }}>
                <div style={{ marginBottom: '4rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            width: '110px', height: '110px', borderRadius: '40px',
                            backgroundColor: 'rgba(0, 166, 156, 0.05)', display: 'flex',
                            alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem',
                            border: '3px solid white', boxShadow: '0 25px 55px rgba(0, 166, 156, 0.12)',
                            position: 'relative'
                        }}
                    >
                        <Languages size={54} color="var(--primary)" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                            style={{ position: 'absolute', inset: -15, borderRadius: '52px', border: '2.5px dashed var(--primary)', opacity: 0.2 }}
                        />
                    </motion.div>
                    <h2 style={{ fontSize: '2.8rem', fontWeight: '950', color: 'var(--black)', marginBottom: '1.25rem', letterSpacing: '-0.07em', lineHeight: '1.1' }}>Interface <br /><span style={{ color: 'var(--primary)' }}>Dialect.</span></h2>
                    <p style={{ fontSize: '1.2rem', color: '#6A7A7A', lineHeight: '1.7', fontWeight: '750', maxWidth: '340px', margin: '0 auto' }}>
                        Configure the linguistic synchronization for your logistics dashboard and terminal alerts.
                    </p>
                </div>

                {/* Advanced Search Architecture */}
                <div style={{ position: 'relative', marginBottom: '4rem', zIndex: 1 }}>
                    <div style={{ position: 'absolute', left: '1.75rem', top: '50%', transform: 'translateY(-50%)', zIndex: 1, color: 'var(--primary)' }}>
                        <Search size={28} />
                    </div>
                    <Input
                        placeholder="Search regions or dialects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            paddingLeft: '4.5rem', height: '80px', borderRadius: '32px',
                            border: '3.5px solid #F3F7F7', backgroundColor: 'white',
                            fontSize: '1.1rem', fontWeight: '800', boxShadow: '0 15px 35px rgba(0,0,0,0.02)'
                        }}
                    />
                </div>

                {/* Language Registry Architecture */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
                    {filteredLanguages.map((lang, idx) => (
                        <motion.button
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ x: 12, borderColor: selected === lang.code ? 'var(--primary)' : '#B0B0B0', backgroundColor: selected === lang.code ? 'rgba(0,166,156,0.01)' : 'white' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelected(lang.code)}
                            style={{
                                width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                padding: '1.75rem', border: `3px solid ${selected === lang.code ? 'var(--primary)' : '#F3F7F7'}`,
                                backgroundColor: selected === lang.code ? 'rgba(0, 166, 156, 0.03)' : 'white',
                                borderRadius: '40px', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: selected === lang.code ? '0 20px 45px rgba(0, 166, 156, 0.1)' : '0 10px 20px rgba(0,0,0,0.01)',
                                position: 'relative', overflow: 'hidden'
                            }}
                        >
                            <div style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '1.75rem', zIndex: 1 }}>
                                <div style={{
                                    width: '68px', height: '68px', borderRadius: '22px',
                                    backgroundColor: selected === lang.code ? 'var(--primary)' : '#F9FBFA',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    transition: 'all 0.4s ease',
                                    boxShadow: selected === lang.code ? '0 10px 20px rgba(0, 166, 156, 0.25)' : 'none'
                                }}>
                                    <Map size={30} color={selected === lang.code ? 'white' : '#B0B0B0'} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontWeight: '950', fontSize: '1.25rem', color: selected === lang.code ? 'var(--black)' : '#333', letterSpacing: '-0.02em', marginBottom: '4px' }}>{lang.name}</p>
                                    <p style={{ fontSize: '0.9rem', color: '#B0B0B0', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1rem' }}>{lang.region}</p>
                                </div>
                            </div>
                            <div style={{
                                width: '32px', height: '32px', borderRadius: '50%',
                                border: `3px solid ${selected === lang.code ? 'var(--primary)' : '#EEE'}`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1
                            }}>
                                {selected === lang.code && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }}
                                    />
                                )}
                            </div>
                        </motion.button>
                    ))}
                </div>

                {filteredLanguages.length === 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '6rem 0' }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '32px', backgroundColor: '#F3F7F7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                            <Search size={36} color="#B0B0B0" />
                        </div>
                        <p style={{ fontSize: '1.2rem', color: '#6A7A7A', fontWeight: '750' }}>No localized nodes found for "{searchTerm}"</p>
                    </motion.div>
                )}

                {/* Premium Infrastructure Branding */}
                <div style={{ textAlign: 'center', marginTop: '6rem', paddingBottom: '3rem' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', opacity: 0.4 }}>
                        <Star size={20} color="#B0B0B0" />
                        <p style={{ fontSize: '1rem', color: '#B0B0B0', fontWeight: '950', letterSpacing: '0.2rem' }}>
                            ROUTE-POLY LINGUISTICS ENGINE V4.4
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
