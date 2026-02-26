import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Info, CheckCircle2 } from 'lucide-react';
import { Button } from '../../../components/UI';

export default function RiderUploadProof() {
    const navigate = useNavigate();
    const [selectedType, setSelectedType] = useState("Driver's license");
    const [hasPhoto, setHasPhoto] = useState(false);

    const types = ["Voter's Card", "Passport", "Driver's license"];

    if (hasPhoto) {
        return (
            <div style={{ backgroundColor: '#F8FAFB', minHeight: '100vh', fontFamily: 'var(--font-family)', color: 'var(--text-main)', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem', position: 'relative' }}>
                    <ChevronLeft size={24} color="var(--primary)" style={{ cursor: 'pointer' }} onClick={() => setHasPhoto(false)} />
                    <h1 style={{ flex: 1, textAlign: 'center', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary)' }}>
                        Upload Proof
                    </h1>
                    <div style={{ width: '24px' }} /> {/* Spacer */}
                </div>

                {/* Document Display */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', position: 'relative' }}>
                    <div style={{ width: '100%', maxWidth: '350px', height: '220px', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                        <img
                            src="https://images.unsplash.com/photo-1634865181180-87efd75e0c50?q=80&w=800&auto=format&fit=crop"
                            alt="Document"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div style={{ position: 'absolute', bottom: '-15px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', borderRadius: '50%', padding: '2px' }}>
                            <CheckCircle2 size={40} color="var(--primary)" fill="white" />
                        </div>
                    </div>
                </div>

                {/* Bottom Buttons */}
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <span
                        onClick={() => setHasPhoto(false)}
                        style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '800', textDecoration: 'underline', cursor: 'pointer' }}
                    >
                        Retake picture
                    </span>
                    <Button
                        onClick={() => navigate('/rider/verification')}
                        style={{ width: '100%', borderRadius: '8px', padding: '1rem' }}
                    >
                        Upload photo
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: '#F8FAFB', minHeight: '100vh', fontFamily: 'var(--font-family)', color: 'var(--text-main)', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem', position: 'relative' }}>
                <ChevronLeft size={24} color="var(--primary)" style={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
                <h1 style={{ flex: 1, textAlign: 'center', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary)' }}>
                    Upload Proof
                </h1>
                <div style={{ width: '24px' }} /> {/* Spacer */}
            </div>

            <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1.5rem' }}>
                Please select the type of document you are uploading.
            </p>

            {/* Document Types */}
            <div style={{ backgroundColor: '#E0EFEC', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {types.map((type) => (
                    <div
                        key={type}
                        onClick={() => setSelectedType(type)}
                        style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
                    >
                        <div style={{
                            width: '20px', height: '20px', borderRadius: '50%',
                            border: `2px solid var(--primary)`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            backgroundColor: 'white'
                        }}>
                            {selectedType === type && (
                                <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--primary)', borderRadius: '50%' }} />
                            )}
                        </div>
                        <span style={{ fontSize: '0.9rem', color: 'var(--black)', fontWeight: '600' }}>{type}</span>
                    </div>
                ))}
            </div>

            {/* Instruction */}
            <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                    <Info size={16} color="var(--black)" />
                    <h3 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--black)' }}>Instruction</h3>
                </div>

                <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', margin: 0, color: '#666', fontSize: '0.8rem', lineHeight: '1.8' }}>
                    <li>Must be government issued.</li>
                    <li>The name on your app account must be the same as the name on the ID.</li>
                    <li>Must have picture.</li>
                </ul>
            </div>

            {/* Bottom Buttons */}
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <span
                    onClick={() => { }}
                    style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '800', cursor: 'pointer' }}
                >
                    Upload file
                </span>
                <Button
                    onClick={() => setHasPhoto(true)}
                    style={{ width: '100%', borderRadius: '8px', padding: '1rem' }}
                >
                    Open Camera
                </Button>
            </div>
        </div>
    );
}
