import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Info, CheckCircle2, ChevronRight } from 'lucide-react';

export default function RiderVerification() {
    const navigate = useNavigate();

    return (
        <div style={{ backgroundColor: '#F8FAFB', minHeight: '100vh', fontFamily: 'var(--font-family)', color: 'var(--text-main)', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem', position: 'relative' }}>
                <ChevronLeft size={24} color="var(--primary)" style={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
                <h1 style={{ flex: 1, textAlign: 'center', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary)' }}>
                    Verification
                </h1>
                <div style={{ width: '24px' }} /> {/* Spacer */}
            </div>

            {/* Title */}
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--black)', marginBottom: '0.25rem' }}>Document Validation</h2>
                <p style={{ fontSize: '0.8rem', color: '#666', lineHeight: '1.5' }}>
                    Upload a verified government issued ID Card and a selfie for validation
                </p>
            </div>

            {/* List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                <div
                    onClick={() => { }}
                    style={{ border: '1px solid #D1D9D9', borderRadius: '8px', padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                >
                    <span style={{ fontSize: '0.9rem', color: '#B0C4C0', fontWeight: '600' }}>Profile ID</span>
                    <CheckCircle2 size={20} color="var(--primary)" fill="white" />
                </div>

                <div
                    onClick={() => navigate('/rider/upload-proof')}
                    style={{ border: '1px solid #D1D9D9', borderRadius: '8px', padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                >
                    <span style={{ fontSize: '0.9rem', color: '#B0C4C0', fontWeight: '600' }}>Address Proof</span>
                    <ChevronRight size={20} color="var(--primary)" />
                </div>
            </div>

            {/* Instruction */}
            <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                    <Info size={16} color="var(--black)" />
                    <h3 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--black)' }}>Instruction</h3>
                </div>

                <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', margin: 0, color: '#666', fontSize: '0.8rem', lineHeight: '1.8' }}>
                    <li>The file must be in JPEG, JPG, or PNG and ensure that it is not more than 2MB in size.</li>
                    <li>Take the picture of the required document.</li>
                    <li>Select the type of document that you'll be submitting.</li>
                    <li>Submission of fake ID will automatically lead to the disabling of your account.</li>
                </ul>
            </div>
        </div>
    );
}
