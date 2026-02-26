import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Home,
    Clock,
    Settings,
    HelpCircle,
    LogOut,
    Menu,
    SwitchCamera
} from 'lucide-react';

export default function RiderLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { icon: Home, label: 'Home', path: '/rider/dashboard' },
        { icon: Clock, label: 'History', path: '/rider/history' },
        { icon: Settings, label: 'Settings', path: '/rider/settings' },
        { icon: HelpCircle, label: 'Help & support', path: '/rider/help' },
    ];

    return (
        <div className="app-container" style={{ minHeight: '100vh', position: 'relative', backgroundColor: 'var(--white)' }}>
            {/* Mobile Top Bar */}
            {!isOpen && (
                <header style={{
                    padding: '1rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 40
                }}>
                    <button
                        onClick={() => setIsOpen(true)}
                        style={{
                            width: '40px', height: '40px', backgroundColor: 'white',
                            borderRadius: '50%', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                        }}
                    >
                        <Menu size={20} color="var(--primary)" />
                    </button>
                </header>
            )}

            {/* Side Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        style={{
                            position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 100
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Side Nav Sidebar */}
            <motion.aside
                initial={{ x: '-100%' }}
                animate={{ x: isOpen ? 0 : '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                style={{
                    position: 'fixed', top: 0, left: 0, bottom: 0, width: '260px',
                    backgroundColor: 'white', zIndex: 101, display: 'flex', flexDirection: 'column'
                }}
            >
                {/* Profile Header */}
                <div style={{ padding: '3rem 1.5rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                        width: '40px', height: '40px', backgroundColor: '#E6F0EF', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', color: 'var(--primary)', fontSize: '0.875rem'
                    }}>
                        AM
                    </div>
                    <div>
                        <span style={{ fontWeight: '800', fontSize: '0.9rem', display: 'block' }}>Ake Musa</span>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>akemusa@gmail.com</span>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav style={{ flex: 1, paddingTop: '1rem' }}>
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <button
                                key={item.label}
                                onClick={() => { navigate(item.path); setIsOpen(false); }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '0.9rem 1.5rem',
                                    width: '100%',
                                    border: 'none',
                                    backgroundColor: isActive ? 'rgba(0, 77, 65, 0.05)' : 'transparent',
                                    color: isActive ? 'var(--primary)' : 'var(--black)',
                                    textAlign: 'left',
                                    cursor: 'pointer'
                                }}
                            >
                                <item.icon size={20} color={isActive ? 'var(--primary)' : 'var(--black)'} strokeWidth={isActive ? 3 : 2} />
                                <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>{item.label}</span>
                            </button>
                        );
                    })}
                </nav>

                {/* Footer Buttons */}
                <div style={{ padding: '0 0 1rem', display: 'flex', flexDirection: 'column' }}>
                    <button
                        onClick={() => navigate('/retailer/signin')}
                        style={{
                            width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
                            padding: '1rem 1.5rem', border: 'none', backgroundColor: 'var(--primary, #004D41)',
                            color: 'white', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.9rem',
                            borderTop: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        <SwitchCamera size={18} />
                        <span>Retailer Mode</span>
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        style={{
                            width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
                            padding: '1rem 1.5rem', border: 'none', backgroundColor: 'var(--primary, #004D41)',
                            color: 'white', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.9rem',
                            borderTop: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        <LogOut size={18} />
                        <span>Logout</span>
                    </button>
                </div>
            </motion.aside>

            {/* Content Area */}
            <main style={{ minHeight: '100vh', position: 'relative', zIndex: 10 }}>
                {children}
            </main>
        </div>
    );
}
