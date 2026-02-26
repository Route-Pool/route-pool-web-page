import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import { Button, Input } from '../../../components/UI';

export default function RiderResetPassword() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
    const [showSuccess, setShowSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowSuccess(true);
            setTimeout(() => {
                navigate('/rider/signin');
            }, 2000);
        }, 1500);
    };

    if (showSuccess) {
        return (
            <div style={{ backgroundColor: '#FBFCFC', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-family)' }}>
                <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '2.5rem', textAlign: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.05)', maxWidth: '300px', width: '90%' }}>
                    <div style={{ width: '64px', height: '64px', backgroundColor: '#E0EFEC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                        <CheckCircle2 size={32} color="var(--primary)" />
                    </div>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--black)', marginBottom: '0.5rem' }}>Success</h2>
                    <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4' }}>You have successfully reset your password</p>
                </div>
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: 'white', minHeight: '100vh', fontFamily: 'var(--font-family)', color: 'var(--text-main)', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem', position: 'relative' }}>
                <div
                    onClick={() => navigate(-1)}
                    style={{
                        width: '32px', height: '32px', backgroundColor: '#E0EFEC', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                        position: 'absolute', left: 0
                    }}
                >
                    <ChevronLeft size={20} color="var(--primary)" />
                </div>
            </div>

            {/* Title and Description */}
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem' }}>
                    Reset Password
                </h1>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.5', maxWidth: '300px', margin: '0 auto' }}>
                    Enter the new password you want to use. Ensure it is strong enough.
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 }}>
                <Input
                    placeholder="New Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <Input
                    placeholder="Confirm New Password"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />

                <div style={{ marginTop: '1.5rem' }}>
                    <Button type="submit" disabled={loading || !formData.password || formData.password !== formData.confirmPassword} style={{ borderRadius: '8px' }}>
                        {loading ? 'Processing...' : 'Confirm'}
                    </Button>
                </div>
            </form>
        </div>
    );
}
