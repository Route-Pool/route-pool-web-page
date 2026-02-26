import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Edit2, ChevronRight } from 'lucide-react';
import { Button, Input } from '../../../components/UI';

export default function RiderProfile() {
    const navigate = useNavigate();

    return (
        <div style={{ backgroundColor: '#F8FAFB', minHeight: '100vh', fontFamily: 'var(--font-family)', color: 'var(--text-main)', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem', position: 'relative' }}>
                <Menu size={24} color="var(--primary)" style={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
                <h1 style={{ flex: 1, textAlign: 'center', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary)' }}>
                    Profile
                </h1>
                <div style={{ width: '24px' }} /> {/* Spacer */}
            </div>

            {/* Avatar */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
                <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                    <div style={{
                        width: '100%', height: '100%', backgroundColor: '#E0EFEC', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)'
                    }}>
                        AM
                    </div>
                    <div style={{
                        position: 'absolute', bottom: 0, right: 0,
                        width: '28px', height: '28px', backgroundColor: 'var(--primary)',
                        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        border: '2px solid white'
                    }}>
                        <Edit2 size={14} color="white" />
                    </div>
                </div>
            </div>

            {/* Form */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                    defaultValue="Ake Musa"
                    style={{ padding: '1rem', border: '1px solid #D1D9D9', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--black)', outline: 'none' }}
                />
                <input
                    defaultValue="akemusa@gmail.com"
                    style={{ padding: '1rem', border: '1px solid #D1D9D9', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--black)', outline: 'none' }}
                />
                <input
                    defaultValue="Ayobo, Lagos"
                    style={{ padding: '1rem', border: '1px solid #D1D9D9', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--black)', outline: 'none' }}
                />

                <div style={{ position: 'relative' }}>
                    <input
                        defaultValue="Ride Specification"
                        readOnly
                        style={{ width: '100%', padding: '1rem', border: '1px solid #D1D9D9', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--black)', outline: 'none', backgroundColor: 'white', cursor: 'pointer' }}
                    />
                    <ChevronRight size={18} color="var(--primary)" style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                </div>

                <input
                    defaultValue="2345 65804 56756"
                    style={{ padding: '1rem', border: '1px solid #D1D9D9', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--black)', outline: 'none' }}
                />
                <input
                    defaultValue="bbfd"
                    style={{ padding: '1rem', border: '1px solid #D1D9D9', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--black)', outline: 'none' }}
                />
            </div>

            {/* Bottom Button */}
            <div style={{ marginTop: '2rem' }}>
                <Button
                    onClick={() => navigate('/rider/settings')}
                    style={{ borderRadius: '8px', padding: '1rem' }}
                >
                    Save
                </Button>
            </div>
        </div>
    );
}
