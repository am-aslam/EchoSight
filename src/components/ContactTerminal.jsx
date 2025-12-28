import React, { useState } from 'react';
import { Send, Terminal, Loader, CheckCircle, Wifi } from 'lucide-react';

const ContactTerminal = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, success
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [logs, setLogs] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !message) return;

        setStatus('sending');
        setLogs(["Initializing secure uplink...", "Encrypting data packets..."]);

        try {
            const response = await fetch("https://formsubmit.co/ajax/aslamsadiquev.work@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    message: message,
                    _subject: "New Contact from EchoSight Website"
                })
            });

            if (response.ok) {
                setLogs(prev => [...prev, "Routing through neural proxy...", "Packet delivered: 100%"]);
                setTimeout(() => {
                    setStatus('success');
                    setLogs([]);
                }, 1000);
            } else {
                throw new Error("Transmission failed");
            }
        } catch (error) {
            setLogs(prev => [...prev, "ERROR: Uplink interrupted", "Retrying connection..."]);
            setTimeout(() => setStatus('idle'), 2000);
        }
    };

    if (status === 'success') {
        return (
            <div className="terminal-success fade-in visible">
                <div style={{ display: 'inline-flex', padding: '1.5rem', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', marginBottom: '1.5rem' }}>
                    <CheckCircle size={64} color="#10b981" />
                </div>
                <h3 className="section-subtitle" style={{ color: '#10b981', marginBottom: '0.5rem' }}>Transmission Received</h3>
                <p style={{ maxWidth: '400px', margin: '0 auto', color: '#94a3b8' }}>
                    Our neural link has successfully parsed your inquiry. A specialized agent will establish a return connection shortly.
                </p>
                <button onClick={() => { setStatus('idle'); setEmail(''); setMessage(''); }} className="btn-text" style={{ marginTop: '2rem', color: 'var(--color-primary)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-tech)', letterSpacing: '1px' }}>
                    [ INITIALIZE NEW UPLINK ]
                </button>
            </div>
        );
    }

    return (
        <div className="contact-terminal">
            <div className="terminal-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Terminal size={14} />
                    <span>SECURE_UPLINK_V4.0</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Wifi size={14} className={status === 'sending' ? 'pulse' : ''} />
                    <span>{status === 'sending' ? 'TRANSMITTING...' : 'CONNECTED'}</span>
                </div>
            </div>

            {status === 'sending' ? (
                <div className="terminal-logs">
                    {logs.map((log, idx) => (
                        <div key={idx} className="log-entry">
                            <span className="log-prefix">{`>`}</span> {log}
                        </div>
                    ))}
                    <div className="log-cursor">_</div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="terminal-body">
                    <div className="input-row">
                        <div className="input-group" style={{ flex: 1 }}>
                            <label>IDENTITY_KEY (EMAIL)</label>
                            <input
                                type="email"
                                placeholder="enter_coordinates@domain.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>DATA_PACKET (MESSAGE)</label>
                        <textarea
                            placeholder="Initialize partnership request or research inquiry..."
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-terminal">
                        <Send size={18} /> INITIATE TRANSMISSION
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactTerminal;
