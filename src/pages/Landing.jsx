import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Truck, Package } from 'lucide-react';
import { Button } from '../components/UI';

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div style={{ backgroundColor: 'white', minHeight: '100vh', fontFamily: 'var(--font-family)', color: 'var(--text-main)', overflowX: 'hidden' }}>
            {/* Top Section with Light Mint Background Arch */}
            <div style={{ position: 'relative', backgroundColor: 'white', paddingBottom: '3rem' }}>
                {/* Background Shape */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    backgroundColor: '#E0EFEC',
                    borderBottomLeftRadius: '50% 10%',
                    borderBottomRightRadius: '50% 10%',
                    zIndex: 0
                }} />

                <div style={{ position: 'relative', zIndex: 1, padding: '1.5rem 1.5rem' }}>
                    {/* Navbar */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                        <div style={{
                            backgroundColor: 'var(--primary)', padding: '0.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Truck color="white" size={24} />
                        </div>
                        <div>
                            <Menu size={32} color="var(--primary)" />
                        </div>
                    </div>

                    {/* Hero Content */}
                    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                        <p style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.75rem', color: '#333' }}>
                            Delivery Costs Are Biting Into Your Profit.
                        </p>
                        <h1 style={{ fontSize: '2.4rem', fontWeight: '800', lineHeight: '1.2', color: 'var(--black)', marginBottom: '1rem' }}>
                            Reduce Delivery Costs.<br />Deliver Smarter.
                        </h1>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#444', marginBottom: '2rem' }}>
                            Route-Pool helps urban retailers batch deliveries, share riders, and cut last-mile costs without complicated logistics.
                        </p>

                        <Button
                            onClick={() => navigate('/retailer/signup')}
                            style={{
                                backgroundColor: 'var(--primary)',
                                color: 'white',
                                padding: '1rem',
                                borderRadius: '8px',
                                fontWeight: '700',
                                fontSize: '1rem',
                                width: '100%'
                            }}
                        >
                            Get Started
                        </Button>
                    </div>

                    {/* Hero Image Area */}
                    <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                        <div style={{
                            width: '280px',
                            height: '280px',
                            backgroundColor: 'rgba(0,0,0,0.1)',
                            borderRadius: '50%',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'center'
                        }}>
                            {/* Placeholder for Rider Image */}
                            <img
                                src="https://images.unsplash.com/photo-1601506521937-010531592cd2?q=80&w=600&auto=format&fit=crop"
                                alt="Delivery Rider"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        {/* Floating Icons */}
                        {[
                            { top: '20%', left: '10%' },
                            { top: '50%', left: '5%' },
                            { top: '30%', right: '15%' },
                            { bottom: '20%', right: '10%' }
                        ].map((pos, i) => (
                            <div key={i} style={{
                                position: 'absolute',
                                ...pos,
                                backgroundColor: 'white',
                                padding: '6px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                            }}>
                                <Package size={16} color="var(--primary)" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 2: Value Proposition */}
            <div style={{ padding: '3rem 1.5rem', textAlign: 'center', maxWidth: '400px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '800', lineHeight: '1.3', marginBottom: '1rem', color: 'var(--black)' }}>
                    One Route. Multiple<br />Deliveries. Lower Costs.
                </h2>
                <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '2rem' }}>
                    Access smarter coordination, lower expenses and better margins.
                </p>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                    Route-Pool is a logistics coordination platform built to help urban micro-retailers reduce last-mile delivery costs. We make it easier to batch nearby deliveries, assign riders efficiently, and confirm every drop-off securely.
                </p>
            </div>

            {/* Section 3: How it works */}
            <div style={{ padding: '2rem 1.5rem', textAlign: 'center', backgroundColor: '#FAFAFA' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--black)' }}>
                    How it works
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '2.5rem' }}>
                    How Route-pool works for our users
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
                    {[
                        { num: '1', title: 'Create a\nDelivery' },
                        { num: '2', title: 'We Group\nNearby Orders' },
                        { num: '3', title: 'Rider Gets\nAssigned' },
                        { num: '4', title: 'Secure\nVerification' }
                    ].map((step, index) => (
                        <div key={index} style={{
                            backgroundColor: 'var(--primary)',
                            borderRadius: '16px',
                            padding: '1.5rem 1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            boxShadow: '0 8px 16px rgba(0,77,65,0.2)'
                        }}>
                            <div style={{
                                width: '36px', height: '40px', backgroundColor: 'white', borderRadius: '8px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem'
                            }}>
                                {step.num}
                            </div>
                            <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: '600', whiteSpace: 'pre-line', lineHeight: '1.4' }}>
                                {step.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 4: Rider Call to Action */}
            <div style={{ padding: '3rem 1.5rem', textAlign: 'center', maxWidth: '400px', margin: '0 auto' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--black)' }}>
                    Deliver Smarter, Earn Better
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#555', marginBottom: '1.5rem' }}>
                    Receive organized delivery batches, reduce idle time, and complete more deliveries per trip.
                </p>
                <div
                    onClick={() => navigate('/rider/signup')}
                    style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', textDecoration: 'underline' }}
                >
                    Join as a rider
                </div>
            </div>

            {/* Section 5: Newsletter */}
            <div style={{ padding: '1rem 1.5rem 4rem', textAlign: 'center', maxWidth: '400px', margin: '0 auto' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--black)' }}>
                    Subscribe to our<br />Newsletter
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#555', marginBottom: '2rem', lineHeight: '1.5' }}>
                    Get access to our daily update and enjoy free access to our latest news.
                </p>
                <div style={{ display: 'flex', border: '1px solid #E0E0E0', borderRadius: '8px', padding: '4px', backgroundColor: 'white' }}>
                    <input
                        type="text"
                        placeholder="Email address"
                        style={{ border: 'none', outline: 'none', padding: '0.75rem 1rem', flex: 1, fontSize: '0.9rem' }}
                    />
                    <button style={{ backgroundColor: 'var(--primary)', color: 'white', border: 'none', borderRadius: '6px', padding: '0.5rem 1.5rem', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer' }}>
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Footer */}
            <div style={{ backgroundColor: 'var(--primary)', padding: '3rem 2rem', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <p style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '0.5rem' }}>Route-Pool</p>
                    <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>Route-Pool</p>
                    <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>Route-Pool</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About Route-Pool</a>
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>How it Works</a>
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Become a Rider</a>
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a>
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Terms of Service</a>
                </div>
            </div>
        </div>
    );
}
