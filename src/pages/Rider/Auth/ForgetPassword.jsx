import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button, Input } from '../../../components/UI';

export default function RiderForgetPassword() {
    const navigate = useNavigate();
    const [identifier, setIdentifier] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/rider/verify-code', { state: { phone: identifier } });
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
            </div>

            {/* Title and Description */}
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem' }}>
                    Forget Password
                </h1>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.5', maxWidth: '300px', margin: '0 auto' }}>
                    Update your password to keep your account secure.
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 }}>
                <Input
                    placeholder="Email Address/Phone number"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    required
                />

                <div style={{ marginTop: '1.5rem' }}>
                    <Button type="submit" disabled={loading} style={{ borderRadius: '8px' }}>
                        {loading ? 'Processing...' : 'Next'}
                    </Button>
                </div>
            </form>
        </div>
    );
}
