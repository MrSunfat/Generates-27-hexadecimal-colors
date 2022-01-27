import styles from './App.module.css';

function Copy({children, Bcolor}) {
    return (
        <div
            className={styles.copy}
            style={{
                background: `${Bcolor}`
            }}
        >
            {children}            
        </div>
    )
}

export default Copy
