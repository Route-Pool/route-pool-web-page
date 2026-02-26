import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Truck } from 'lucide-react';
import { Button, Input } from '../../../components/UI';

export default function RiderSignIn() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: '',
    });
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
            navigate('/rider/dashboard');
        }, 1000);
    };

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
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                    <div style={{ backgroundColor: 'var(--primary)', padding: '4px', borderRadius: '6px' }}>
                        <Truck size={16} color="white" />
                    </div>
                    <span style={{ fontWeight: '800', fontSize: '1.2rem', color: 'var(--primary)' }}>Route-Pool</span>
                </div>
            </div>

            {/* Title and Description */}
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem' }}>
                    Rider Sign In
                </h1>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.5', maxWidth: '300px', margin: '0 auto' }}>
                    Sign in to view your assigned deliveries and start earning.
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 }}>
                <Input
                    placeholder="Email Address/Phone number"
                    name="emailOrPhone"
                    value={formData.emailOrPhone}
                    onChange={handleChange}
                    required
                />

                <Input
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <div style={{ textAlign: 'right', marginTop: '0.25rem', marginBottom: '1.5rem' }}>
                    <span
                        onClick={() => navigate('/rider/forget-password')}
                        style={{ fontSize: '0.8rem', color: 'var(--primary)', cursor: 'pointer' }}
                    >
                        Forgot Password?
                    </span>
                </div>

                <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                    <Button type="submit" disabled={loading} style={{ borderRadius: '8px' }}>
                        {loading ? 'Processing...' : 'Sign In'}
                    </Button>
                </div>

                <div style={{ textAlign: 'center', marginTop: 'auto', paddingBottom: '2rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>Don't have an account? </span>
                    <span
                        onClick={() => navigate('/rider/signup')}
                        style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--black)', cursor: 'pointer' }}
                    >
                        Sign Up
                    </span>
                </div>
            </form>
        </div>
    );
}
