import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MapPin } from 'lucide-react';
import { Button } from '../../../components/UI';

export default function RiderBatchDetails() {
    const navigate = useNavigate();

    return (
        <div style={{ backgroundColor: '#F8FAFB', minHeight: '100vh', fontFamily: 'var(--font-family)', color: 'var(--text-main)', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', position: 'relative' }}>
                <Menu size={24} color="var(--primary)" style={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
                <h1 style={{ flex: 1, textAlign: 'center', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary)' }}>
                    Batch Details
                </h1>
                <div style={{ width: '24px' }} /> {/* Spacer */}
            </div>

            <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '2rem' }}>
                {/* Description */}
                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                        <h2 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--black)' }}>Description</h2>
                        <div style={{ backgroundColor: 'var(--accent)', padding: '4px 12px', borderRadius: '12px' }}>
                            <span style={{ fontSize: '0.75rem', color: 'white', fontWeight: '700' }}>7 Deliveries</span>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.5' }}>
                        Packed customer order ready for delivery, handle with care and confirm drop-off using the verification code.
                    </p>
                </div>

                {/* Where to pick and drop */}
                <div style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--black)', marginBottom: '0.75rem' }}>Where to pick and drop</h2>

                    <div style={{ backgroundColor: '#E0EFEC', borderRadius: '12px', padding: '1.25rem' }}>
                        {/* Start Point */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '1.5rem', position: 'relative' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4px' }}>
                                <MapPin size={16} fill="var(--black)" color="white" />
                                <div style={{ width: '2px', height: '40px', borderLeft: '2px dashed #B0C4C0', margin: '4px 0' }} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--black)', marginBottom: '4px' }}>PER-TO-PORT</h3>
                                <p style={{ fontSize: '0.8rem', color: '#666' }}>12, Akinadubi Estate, Ikeja Lagos</p>
                            </div>
                        </div>

                        {/* Drop off Points */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <div style={{ marginTop: '4px' }}>
                                <MapPin size={16} fill="var(--black)" color="white" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--black)', marginBottom: '8px' }}>Drop off Point</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    {[
                                        'Road 15, Gowon Estate, Ayobo Lagos',
                                        'Road 16, Gowon Estate, Ayobo Lagos',
                                        'Road 19, Gowon Estate, Ayobo Lagos',
                                        'Road 21, Gowon Estate, Ayobo Lagos'
                                    ].map((addr, i) => (
                                        <p key={i} style={{ fontSize: '0.8rem', color: '#555', lineHeight: '1.4' }}>{addr}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Estimated time delivery */}
                <div style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--black)', marginBottom: '0.75rem' }}>Estimated time delivery</h2>
                    <div style={{ backgroundColor: '#E0EFEC', borderRadius: '12px', padding: '1rem' }}>
                        <p style={{ fontSize: '0.85rem', color: '#555', fontWeight: '500' }}>Thursday 19th, 2025 - Monday 25th 2025</p>
                    </div>
                </div>

                {/* Order Preference */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h2 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--black)' }}>Order Preference</h2>
                    <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: '600' }}>#RP850383424</span>
                </div>
            </div>

            {/* Bottom Button */}
            <div style={{ marginTop: 'auto' }}>
                <Button
                    onClick={() => navigate('/rider/process')}
                    style={{ borderRadius: '8px', padding: '1rem' }}
                >
                    Start Delivery
                </Button>
            </div>
        </div>
    );
}
