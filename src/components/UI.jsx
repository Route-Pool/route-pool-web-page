import { motion } from 'framer-motion';

export const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button', disabled = false }) => {
    const variants = {
        primary: {
            backgroundColor: 'var(--primary)',
            color: 'var(--white)',
        },
        secondary: {
            backgroundColor: 'var(--secondary)',
            color: 'var(--white)',
        },
        outline: {
            backgroundColor: 'transparent',
            color: 'var(--primary)',
            border: '2px solid var(--primary)',
        },
        ghost: {
            backgroundColor: 'transparent',
            color: 'var(--grey-600)',
        }
    };

    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled}
            whileHover={disabled ? {} : { scale: 1.01 }}
            whileTap={disabled ? {} : { scale: 0.99 }}
            className={`button ${variant} ${className}`}
            style={{
                padding: '1rem 1.5rem',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '700',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: 'none',
                opacity: disabled ? 0.6 : 1,
                cursor: disabled ? 'not-allowed' : 'pointer',
                ...variants[variant]
            }}
        >
            {children}
        </motion.button>
    );
};

export const Card = ({ children, className = '', padding = '1.5rem' }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`card ${className}`}
        style={{
            backgroundColor: 'var(--white)',
            borderRadius: 'var(--radius-lg)',
            padding: padding,
            boxShadow: 'var(--shadow-md)',
            width: '100%'
        }}
    >
        {children}
    </motion.div>
);

export const Input = ({ label, placeholder, type = 'text', value, onChange, icon: Icon, error, name, required }) => (
    <div style={{ width: '100%', marginBottom: '1rem' }}>
        {label && <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{label}</label>}
        <div style={{ position: 'relative' }}>
            {Icon && <Icon size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />}
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                style={{
                    width: '100%',
                    padding: `1rem ${Icon ? '3rem' : '1rem'}`,
                    borderRadius: '8px',
                    border: `1px solid ${error ? 'var(--error)' : 'var(--border-light)'}`,
                    outline: 'none',
                    fontSize: '0.875rem',
                    color: 'var(--text-main)',
                    transition: 'all 0.2s ease',
                    backgroundColor: error ? 'rgba(208, 2, 27, 0.05)' : 'white'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = error ? 'var(--error)' : 'var(--border-light)'}
            />
        </div>
        {error && <span style={{ fontSize: '0.75rem', color: 'var(--error)', marginTop: '0.4rem', display: 'block' }}>{error}</span>}
    </div>
);

export const Select = ({ label, value, options, onChange, name, placeholder }) => (
    <div style={{ width: '100%', marginBottom: '1rem' }}>
        {label && <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{label}</label>}
        <div style={{ position: 'relative' }}>
            <select
                name={name}
                value={value}
                onChange={onChange}
                style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-light)',
                    outline: 'none',
                    fontSize: '0.875rem',
                    color: value ? 'var(--text-main)' : 'var(--text-muted)',
                    backgroundColor: 'white',
                    appearance: 'none'
                }}
            >
                <option value="" disabled>{placeholder}</option>
                {options.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
            <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '5px solid var(--text-muted)' }} />
        </div>
    </div>
);
