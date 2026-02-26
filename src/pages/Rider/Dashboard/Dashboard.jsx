import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MapPin, Box } from 'lucide-react';
import { Button } from '../../../components/UI';

export default function RiderDashboard() {
    const navigate = useNavigate();

    return (
        <div style={{ backgroundColor: '#F8FAFB', minHeight: '100vh', fontFamily: 'var(--font-family)', color: 'var(--text-main)', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <Menu size={28} color="var(--primary)" />
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '16px', height: '16px', backgroundColor: 'var(--primary)', borderRadius: '50%', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%' }} />
                    </div>
                </div>
            </div>

            {/* Available Delivery */}
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--black)', marginBottom: '1rem' }}>
                    Available Delivery
                </h2>

                <div style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', position: 'relative' }}>
                    <div style={{ height: '120px', backgroundColor: '#E0EFEC', width: '100%', position: 'relative' }}>
                        <img
                            src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop"
                            alt="Packages"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    <div style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', maxWidth: '60%' }}>
                            <MapPin size={20} color="var(--black)" style={{ marginTop: '2px', flexShrink: 0 }} />
                            <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: '1.4' }}>
                                Mokola Estate,<br />Ikeja Lagos.
                            </p>
                        </div>
                        <Button
                            onClick={() => navigate('/rider/batch')}
                            style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem', height: 'auto', borderRadius: '8px' }}
                        >
                            View Details
                        </Button>
                    </div>
                </div>

                {/* Dots */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '1rem' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)' }} />
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D1D9D9' }} />
                </div>
            </div>

            {/* Assigned Delivery */}
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--black)', marginBottom: '1rem' }}>
                    Assigned Delivery
                </h2>

                <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #F0F5F5' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', maxWidth: '60%' }}>
                        <MapPin size={20} color="var(--black)" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: '1.4' }}>
                            Mokola Estate,<br />Ikeja Lagos.
                        </p>
                    </div>
                    <Button
                        onClick={() => navigate('/rider/process')}
                        style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem', height: 'auto', borderRadius: '8px' }}
                    >
                        View Details
                    </Button>
                </div>
            </div>

            {/* Recent Activity */}
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h2 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--black)' }}>
                        Recent Activity
                    </h2>
                    <span style={{ fontSize: '0.8rem', color: '#888' }}>See All</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid #F0F5F5' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '8px', border: '1px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px', flexShrink: 0 }}>
                                <Box size={20} color="var(--primary)" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <p style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--black)', marginBottom: '4px' }}>Traveling Bag</p>
                                <p style={{ fontSize: '0.75rem', color: '#888' }}>ID Code: CDJ4543SDADS</p>
                            </div>
                            <div style={{ backgroundColor: 'var(--accent)', padding: '4px 12px', borderRadius: '16px' }}>
                                <span style={{ fontSize: '0.75rem', color: 'white', fontWeight: '600' }}>Delivered</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
