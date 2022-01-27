import { useState, useEffect } from 'react';
import Copy from './Copy';
import styles from './App.module.css';

function TagColor({ children }) {
    const [copied, setCopied] = useState(false);

    const copyColor = () => {
        navigator.clipboard.writeText(children);
        setCopied(!copied);
    };

    useEffect(() => {
        setTimeout(() => setCopied(false), 1000)
    }, [copied])

    return (
        <div className={styles.color} style={{ display: 'flex', width: '100px' }}>
            <button
                onClick={copyColor}
                className={styles.tag}
                style={{
                    background: `${children}`,
                }}
            >
                {children}
            </button>
            {!copied ? (
                <Copy Bcolor="grey">Copy</Copy>
            ) : (
                <Copy Bcolor="green">Copied</Copy>
            )}
        </div>
    );
}

export default TagColor;
