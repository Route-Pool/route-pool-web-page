import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, ChevronRight, Globe, Moon, ShieldCheck, HelpCircle, FileText, LogOut, CheckCircle2 } from 'lucide-react';

export default function RiderSettings() {
    const navigate = useNavigate();

    const SettingItem = ({ icon: Icon, label, onClick, hasToggle, isDanger }) => (
        <div
            onClick={onClick}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                borderBottom: '1px solid #E0EFEC',
                cursor: 'pointer'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Icon size={20} color="var(--black)" />
                <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--black)' }}>{label}</span>
            </div>
            {hasToggle ? (
                <div style={{ width: '40px', height: '24px', backgroundColor: '#E0EFEC', borderRadius: '12px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '2px', left: '2px', width: '20px', height: '20px', backgroundColor: 'var(--primary)', borderRadius: '50%' }} />
                </div>
            ) : (
                <ChevronRight size={18} color="#A0B0B0" />
            )}
        </div>
    );

    return (
        <div style={{ backgroundColor: '#F8FAFB', minHeight: '100vh', fontFamily: 'var(--font-family)', color: 'var(--text-main)', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2.5rem', position: 'relative' }}>
                <Menu size={24} color="var(--primary)" style={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
                <h1 style={{ flex: 1, textAlign: 'center', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary)' }}>
                    Settings
                </h1>
                <div style={{ width: '24px' }} /> {/* Spacer */}
            </div>

            {/* Profile Card */}
            <div
                onClick={() => navigate('/rider/profile')}
                style={{ backgroundColor: '#E0EFEC', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', cursor: 'pointer' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '50px', height: '50px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.2rem', color: 'var(--black)' }}>
                        AM
                    </div>
                    <div>
                        <p style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--black)' }}>Ake Musa</p>
                        <p style={{ fontSize: '0.75rem', color: '#666' }}>+234 813 564 7567</p>
                        <p style={{ fontSize: '0.75rem', color: '#666' }}>akemusa@gmail.com</p>
                    </div>
                </div>
                <ChevronRight size={20} color="var(--black)" />
            </div>

            {/* Preferences */}
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--black)', marginBottom: '1rem' }}>Preferences</h2>
                <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E0EFEC', overflow: 'hidden' }}>
                    <SettingItem icon={Globe} label="Language" onClick={() => { }} />
                    <SettingItem icon={Moon} label="Dark Mode" hasToggle />
                </div>
            </div>

            {/* Security */}
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--black)', marginBottom: '1rem' }}>Security</h2>
                <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E0EFEC', overflow: 'hidden' }}>
                    <SettingItem icon={ShieldCheck} label="Change Password" onClick={() => navigate('/rider/forget-password')} />
                </div>
            </div>

            {/* Support */}
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--black)', marginBottom: '1rem' }}>Support</h2>
                <div style={{ backgroundColor: '#E0EFEC', borderRadius: '12px', overflow: 'hidden' }}>
                    <SettingItem icon={HelpCircle} label="Help Center" onClick={() => { }} />
                    <SettingItem icon={FileText} label="Terms & Privacy" onClick={() => { }} />
                    <SettingItem icon={LogOut} label="Log Out" onClick={() => navigate('/')} />
                </div>
            </div>
        </div>
    );
}
