import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../../../components/UI';

export default function RiderCodeVerification() {
    const navigate = useNavigate();
    const [code, setCode] = useState(['', '', '', '']);
    const [status, setStatus] = useState('idle'); // idle, verifying, success, error
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        if (!/^\d*$/.test(value)) return;
        if (value.length > 1) return;

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        setStatus('verifying');
        setTimeout(() => {
            const entered = code.join('');
            if (entered === '1111') {
                setStatus('success');
            } else {
                setStatus('error');
            }
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div style={{ backgroundColor: '#FBFCFC', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-family)', padding: '2rem' }}>
                <div style={{ width: '100px', height: '100px', backgroundColor: '#E0EFEC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                    <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircle size={32} color="white" />
                    </div>
                </div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--black)', marginBottom: '1rem', textAlign: 'center' }}>Verification Successful</h2>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4', textAlign: 'center', maxWidth: '280px', marginBottom: '3rem' }}>
                    You have successfully verified the receipt, you can go ahead to confirm the payment.
                </p>
                <div style={{ marginTop: 'auto', width: '100%' }}>
                    <Button onClick={() => navigate('/rider/dashboard')} style={{ width: '100%' }}>
                        View Payment
                    </Button>
                </div>
            </div>
        );
    }

    if (status === 'error') {
        return (
            <div style={{ backgroundColor: '#FBFCFC', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-family)', padding: '2rem' }}>
                <div style={{ width: '100px', height: '100px', backgroundColor: 'rgba(208, 2, 27, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                    <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--error)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <XCircle size={32} color="white" />
                    </div>
                </div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--black)', marginBottom: '1rem', textAlign: 'center' }}>Verification Error</h2>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4', textAlign: 'center', maxWidth: '280px', marginBottom: '3rem' }}>
                    Check the code with the receiver and input the correct code.
                </p>
                <div style={{ marginTop: 'auto', width: '100%' }}>
                    <Button
                        onClick={() => setStatus('idle')}
                        style={{ width: '100%', backgroundColor: '#B0C4C0', color: '#333' }}
                    >
                        View Payment
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: '#F8FAFB', minHeight: '100vh', fontFamily: 'var(--font-family)', color: 'var(--text-main)', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem', position: 'relative' }}>
                <Menu size={24} color="var(--primary)" style={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
                <h1 style={{ flex: 1, textAlign: 'center', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary)' }}>
                    Enter Code
                </h1>
                <div style={{ width: '24px' }} /> {/* Spacer */}
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--black)', marginBottom: '2rem', fontWeight: '600' }}>
                    Please input your verification code here
                </p>

                {/* OTP Inputs */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '3rem' }}>
                    {code.map((digit, i) => (
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
                                width: '48px',
                                height: '48px',
                                backgroundColor: '#E0EFEC',
                                border: '1px solid transparent',
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

                {status === 'verifying' && (
                    <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', textAlign: 'center', width: '200px' }}>
                        <p style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--black)', marginBottom: '1.5rem' }}>Verifying Code</p>
                        <div style={{ position: 'relative', width: '60px', height: '60px', margin: '0 auto' }}>
                            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '4px solid #E0EFEC', borderTopColor: 'var(--primary)', animation: 'spin 1s linear infinite' }} />
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Button */}
            <div style={{ marginTop: 'auto' }}>
                <Button
                    disabled={code.some(d => !d) || status === 'verifying'}
                    onClick={handleVerify}
                    style={{ borderRadius: '8px', padding: '1rem', width: '100%' }}
                >
                    Verify code
                </Button>
            </div>
        </div>
    );
}
