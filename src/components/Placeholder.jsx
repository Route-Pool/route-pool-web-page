export default function Placeholder({ name }) {
    return (
        <div className="app-container" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{name}</h1>
            <p style={{ color: 'var(--grey-600)' }}>This page is under construction.</p>
        </div>
    );
}
