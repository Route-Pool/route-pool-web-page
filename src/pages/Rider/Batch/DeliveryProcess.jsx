import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, CircleDot, Circle } from 'lucide-react';
import { Button } from '../../../components/UI';

export default function RiderDeliveryProcess() {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { title: 'Assigned', date: 'Wed 25, Nov', time: '10:00AM' },
        { title: 'In Transit', date: 'Wed 25, Nov', time: '12:30PM' },
        { title: 'Delivered', date: 'Wed 25, Nov', time: '02:00PM' },
    ];

    const getRadioIcon = (index) => {
        if (index <= activeStep) {
            return (
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--primary)', borderRadius: '50%' }} />
                </div>
            );
        }
        return <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #D1D9D9' }} />;
    };

    return (
        <div style={{ backgroundColor: '#F8FAFB', minHeight: '100vh', fontFamily: 'var(--font-family)', color: 'var(--text-main)', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', position: 'relative' }}>
                <Menu size={24} color="var(--primary)" style={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
                <h1 style={{ flex: 1, textAlign: 'center', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary)' }}>
                    Delivery Progress
                </h1>
                <div style={{ width: '24px' }} /> {/* Spacer */}
            </div>

            {/* Dark Green Banner */}
            <div style={{ backgroundColor: 'var(--primary)', borderRadius: '16px', padding: '1.5rem', color: 'white', marginBottom: '2rem', boxShadow: '0 8px 16px rgba(0,77,65,0.2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: '800' }}>Delivery Progress</h2>
                    <div style={{ backgroundColor: 'white', color: 'var(--primary)', padding: '4px 12px', borderRadius: '16px', fontSize: '0.75rem', fontWeight: '800', cursor: 'pointer' }}>
                        Cancel
                    </div>
                </div>

                {/* Progress Visual */}
                <div style={{ position: 'relative', marginTop: '1rem', marginBottom: '1rem' }}>
                    {/* Dotted Line */}
                    <div style={{ position: 'absolute', top: '50%', left: '10%', right: '10%', height: '2px', background: 'repeating-linear-gradient(to right, white 0, white 4px, transparent 4px, transparent 8px)', transform: 'translateY(-50%)', opacity: 0.5 }} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                        {steps.map((step, index) => (
                            <div key={index} style={{
                                width: '16px', height: '16px', borderRadius: '50%',
                                backgroundColor: index <= activeStep ? 'white' : 'var(--primary)',
                                border: index <= activeStep ? '4px solid var(--primary)' : '2px solid white',
                                boxShadow: index <= activeStep ? '0 0 0 2px white' : 'none'
                            }} />
                        ))}
                    </div>
                </div>

                {/* Info Text under active state */}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>
                        {activeStep === 0 && <p>{steps[0].date}<br />{steps[0].time}</p>}
                    </div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.8, textAlign: 'center' }}>
                        {activeStep === 1 && <p>{steps[1].date}<br />{steps[1].time}</p>}
                    </div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.8, textAlign: 'right' }}>
                        {activeStep === 2 && <p>{steps[2].date}<br />{steps[2].time}</p>}
                    </div>
                </div>
            </div>

            {/* Status Checklist */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {steps.map((step, i) => (
                    <div
                        key={i}
                        onClick={() => setActiveStep(i)}
                        style={{
                            backgroundColor: '#E0EFEC',
                            borderRadius: '12px',
                            padding: '1.25rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            cursor: 'pointer',
                            opacity: i > activeStep + 1 ? 0.6 : 1
                        }}
                    >
                        <span style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--black)' }}>{step.title}</span>
                        {getRadioIcon(i)}
                    </div>
                ))}
            </div>

            {/* Bottom Button */}
            <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                <Button
                    onClick={() => { if (activeStep === 2) navigate('/rider/verify'); }}
                    style={{
                        borderRadius: '8px',
                        padding: '1rem',
                        backgroundColor: activeStep === 2 ? 'var(--primary)' : '#B0C4C0',
                        color: activeStep === 2 ? 'white' : '#666',
                        cursor: activeStep === 2 ? 'pointer' : 'not-allowed'
                    }}
                >
                    Enter Code
                </Button>
            </div>
        </div>
    );
}
