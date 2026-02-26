import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '../../../components/UI';

export default function RiderOTP() {
    const navigate = useNavigate();
    const location = useLocation();
    const phone = location.state?.phone || '+234 813 567 ****';
    const [otp, setOtp] = useState(['', '', '', '', '']);
    const [timer, setTimer] = useState(30);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const inputRefs = useRef([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleChange = (index, value) => {
        if (!/^\d*$/.test(value)) return;
        if (value.length > 1) return;

        setError(false);
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 4) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        setLoading(true);
        setTimeout(() => {
            const code = otp.join('');
            if (code === '12345') {
                setLoading(false);
                navigate('/rider/reset-password');
            } else {
                setLoading(false);
                setError(true);
            }
        }, 1500);
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
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--black)', marginBottom: '1rem' }}>
                    Verify Account with OTP
                </h1>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.5', maxWidth: '300px', margin: '0 auto' }}>
                    We sent an OTP code to {phone}
                </p>
            </div>

            {/* OTP Inputs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '1rem' }}>
                {otp.map((digit, i) => (
                    <input
                        key={i}
                        ref={el => inputRefs.current[i] = el}
                        type="text"
                        inputMode="numeric"
                        value={digit}
                        maxLength={1}
                        onChange={(e) => handleChange(i, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(i, e)}
                        style={{
                            width: '44px',
                            height: '44px',
                            backgroundColor: '#E0EFEC',
                            border: error ? '1px solid var(--error)' : (digit ? '1px solid var(--primary)' : '1px solid transparent'),
                            borderRadius: '8px',
                            textAlign: 'center',
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: 'var(--black)',
                            outline: 'none',
                        }}
                    />
                ))}
            </div>

            {/* Status messages */}
            {error && (
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <p style={{ color: 'var(--error)', fontSize: '0.85rem' }}>Incorrect code</p>
                    <p style={{ color: 'var(--black)', fontSize: '0.85rem', cursor: 'pointer', marginTop: '0.5rem', textDecoration: 'underline' }}>Resend code</p>
                </div>
            )}

            {loading && !error && (
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <p style={{ fontSize: '0.85rem', color: '#666' }}>Verifying OTP...</p>
                </div>
            )}

            {!error && !loading && (
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.25rem' }}>Didn't get code?</p>
                    {timer > 0 ? (
                        <p style={{ fontSize: '0.85rem', color: '#666' }}>Request code in {timer}s</p>
                    ) : (
                        <p style={{ fontSize: '0.85rem', color: 'var(--primary)', cursor: 'pointer', fontWeight: '600' }}>Resend Code</p>
                    )}
                </div>
            )}

            <div style={{ marginTop: 'auto', marginBottom: '2rem' }}>
                <Button
                    disabled={otp.some(d => !d) || loading}
                    onClick={handleVerify}
                    style={{ borderRadius: '8px', opacity: (otp.some(d => !d) || loading) ? 0.6 : 1 }}
                >
                    Continue
                </Button>
            </div>
        </div>
    );
}
