import React, { useState } from 'react';
import { Send, Terminal, Loader, CheckCircle, Wifi } from 'lucide-react';
import CalendarPicker from './CalendarPicker';

const ContactTerminal = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, success
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [spec, setSpec] = useState('both'); // eye, hearing, both
    const [date, setDate] = useState('');
    const [meetingType, setMeetingType] = useState('google-meet'); // call, google-meet, office
    const [message, setMessage] = useState('');
    const [logs, setLogs] = useState([]);

    const handleDateTimeSelect = (dateTime) => {
        setDate(dateTime);
    };

    const formatDateForEmail = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const formatSpecification = (spec) => {
        const specMap = {
            'eye': 'Computer Vision Eye',
            'hearing': 'Hearing Aid Assistant',
            'both': 'Integrated Hybrid Solution'
        };
        return specMap[spec] || spec;
    };

    const formatMeetingType = (type) => {
        const typeMap = {
            'google-meet': 'Google Meet',
            'call': 'Phone Call',
            'office': 'Office Visit'
        };
        return typeMap[type] || type;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !message || !fullName || !date || !phone) return;

        setStatus('sending');
        setLogs(["Initializing secure uplink...", "Encrypting data packets..."]);

        // Create professional HTML email template
        const htmlMessage = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e0e0e0;">
                <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%); padding: 30px; text-align: center;">
                    <h1 style="color: #eefc54; margin: 0; font-size: 28px; letter-spacing: 2px;">ECHOSIGHT</h1>
                    <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 14px;">New Meeting Request</p>
                </div>
                
                <div style="padding: 30px; background: #f9f9f9;">
                    <h2 style="color: #1a1a1a; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #eefc54; padding-bottom: 10px;">Contact Information</h2>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr>
                            <td style="padding: 12px; background: #ffffff; border: 1px solid #e0e0e0; font-weight: bold; width: 40%;">Full Name</td>
                            <td style="padding: 12px; background: #ffffff; border: 1px solid #e0e0e0;">${fullName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; background: #ffffff; border: 1px solid #e0e0e0; font-weight: bold;">Email Address</td>
                            <td style="padding: 12px; background: #ffffff; border: 1px solid #e0e0e0;"><a href="mailto:${email}" style="color: #0066cc;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; background: #ffffff; border: 1px solid #e0e0e0; font-weight: bold;">Phone Number</td>
                            <td style="padding: 12px; background: #ffffff; border: 1px solid #e0e0e0;"><a href="tel:${phone}" style="color: #0066cc;">${phone}</a></td>
                        </tr>
                    </table>

                    <h2 style="color: #1a1a1a; margin: 20px 0; font-size: 20px; border-bottom: 2px solid #eefc54; padding-bottom: 10px;">Meeting Details</h2>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr>
                            <td style="padding: 12px; background: #ffffff; border: 1px solid #e0e0e0; font-weight: bold; width: 40%;">Product Interest</td>
                            <td style="padding: 12px; background: #ffffff; border: 1px solid #e0e0e0;">${formatSpecification(spec)}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; background: #ffffff; border: 1px solid #e0e0e0; font-weight: bold;">Preferred Date & Time</td>
                            <td style="padding: 12px; background: #ffffff; border: 1px solid #e0e0e0;">${formatDateForEmail(date)}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; background: #ffffff; border: 1px solid #e0e0e0; font-weight: bold;">Meeting Format</td>
                            <td style="padding: 12px; background: #ffffff; border: 1px solid #e0e0e0;">${formatMeetingType(meetingType)}</td>
                        </tr>
                    </table>

                    <h2 style="color: #1a1a1a; margin: 20px 0; font-size: 20px; border-bottom: 2px solid #eefc54; padding-bottom: 10px;">Additional Information</h2>
                    
                    <div style="padding: 15px; background: #ffffff; border: 1px solid #e0e0e0; border-left: 4px solid #eefc54; white-space: pre-wrap; line-height: 1.6;">
                        ${message}
                    </div>
                </div>
                
                <div style="background: #1a1a1a; padding: 20px; text-align: center;">
                    <p style="color: #9ca3af; margin: 0; font-size: 12px;">This message was sent via the EchoSight Contact Terminal</p>
                    <p style="color: #eefc54; margin: 10px 0 0 0; font-size: 12px;">© 2025 EchoSight Technologies</p>
                </div>
            </div>
        `;

        try {
            const response = await fetch("https://formsubmit.co/ajax/aslamsadiquev.work@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: fullName,
                    email: email,
                    phone: phone,
                    specification: formatSpecification(spec),
                    scheduled_date: formatDateForEmail(date),
                    meeting_preference: formatMeetingType(meetingType),
                    message: message,
                    _subject: `🚀 New Meeting Request: ${fullName} - ${formatMeetingType(meetingType)}`,
                    _template: "table",
                    _html: htmlMessage
                })
            });

            if (response.ok) {
                setLogs(prev => [...prev, "Syncing calendar protocols...", "Routing through neural proxy...", "Transmission delivered: 100%"]);
                setTimeout(() => {
                    setStatus('success');
                    setLogs([]);
                }, 1000);
            } else {
                throw new Error("Transmission failed");
            }
        } catch (error) {
            setLogs(prev => [...prev, "ERROR: Uplink interrupted", "Emergency reconnect initiated..."]);
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
                    Your partnership data has been parsed and scheduled. Our neural network is generating a response packet. Check your inbox for coordinates.
                </p>
                <button onClick={() => { setStatus('idle'); setFullName(''); setEmail(''); setMessage(''); setDate(''); }} className="btn-text" style={{ marginTop: '2rem', color: 'var(--color-primary)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-tech)', letterSpacing: '1px' }}>
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
                <form onSubmit={handleSubmit} className="terminal-body" style={{ textAlign: 'left' }}>
                    <div className="input-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div className="input-group">
                            <label>OPERATOR_NAME</label>
                            <input
                                type="text"
                                placeholder="enter_full_name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>IDENTITY_KEY (EMAIL)</label>
                            <input
                                type="email"
                                placeholder="coordinates@domain.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div className="input-group">
                            <label>CONTACT_CHANNEL (PHONE)</label>
                            <input
                                type="tel"
                                placeholder="+1 (555) 000-0000"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>HARDWARE_SPEC</label>
                            <select value={spec} onChange={(e) => setSpec(e.target.value)} className="terminal-select">
                                <option value="eye">Computer Vision Eye</option>
                                <option value="hearing">Hearing Aid Assistant</option>
                                <option value="both">Integrated Hybrid Solution</option>
                            </select>
                        </div>
                    </div>

                    <div className="input-row" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div className="input-group">
                            <label>TRANSMISSION_PROTOCOL</label>
                            <select value={meetingType} onChange={(e) => setMeetingType(e.target.value)} className="terminal-select">
                                <option value="google-meet">Google Meet</option>
                                <option value="call">Phone Call</option>
                                <option value="office">Office Visit</option>
                            </select>
                        </div>
                    </div>

                    <div className="input-group" style={{ marginBottom: '1.5rem' }}>
                        <label>SCHEDULE_UPLINK</label>
                        <CalendarPicker selectedDate={date} onDateTimeSelect={handleDateTimeSelect} />
                    </div>

                    <div className="input-group">
                        <label>DATA_PACKET (DETAILS)</label>
                        <textarea
                            placeholder="Initialize mission parameters or partnership inquiry..."
                            rows={3}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-terminal" style={{ marginTop: '1.5rem' }}>
                        <Send size={18} /> INITIATE TRANSMISSION
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactTerminal;
