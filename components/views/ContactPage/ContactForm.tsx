"use client";

import { useState } from 'react';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    service: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading'>('idle');

  const validate = () => {
    let isValid = true;
    const newErrors = { fullName: '', email: '', phone: '', message: '' };

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
      isValid = false;
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (formData.phone && formData.phone.replace(/[^0-9]/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    
    if (!isValid) {
      toast.error('Please fix the errors in the form.');
    }
    
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setStatus('loading');
    const loadingToast = toast.loading('Submitting your message...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      console.log(res)

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || 'Thank you! Your message has been sent successfully.', { id: loadingToast });
        setFormData({ fullName: '', service: '', phone: '', email: '', message: '' }); // Reset form
      } else {
        toast.error(data.error || 'Failed to submit form. Please try again.', { id: loadingToast });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An unexpected error occurred. Please try again later.', { id: loadingToast });
    } finally {
      setStatus('idle');
    }
  };

  return (
    <section className={`${styles.formSection} mt_80`}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container-1600">
        <div className={`${styles.contact}`}>
          <div className={styles.leftColumn}>
            <h2 className="title_60">Connect with Our<br />Global Team.</h2>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/Systemic-Ownership.webp"
                alt="Handshake"
                width={400}
                height={300}
                className={styles.handshakeImage}
              />
            </div>
          </div>

          <div className={styles.rightColumn}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g., John Doe" 
                    style={{ borderColor: errors.fullName ? 'red' : undefined }}
                  />
                  {errors.fullName && <span style={{color: 'red', fontSize: '12px', marginTop: '4px', display: 'block'}}>{errors.fullName}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label>Service Interested In</label>
                  <div className={styles.selectWrapper}>
                    <select name="service" value={formData.service} onChange={handleChange}>
                      <option value="">Select a division</option>
                      <option value="Enterprise Products & Platforms">Enterprise Products & Platforms</option>
                      <option value="Brand, Digital & Creative">Brand, Digital & Creative</option>
                      <option value="Financial Advisory">Financial Advisory</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g., +1 (555) 000-0000" 
                    style={{ borderColor: errors.phone ? 'red' : undefined }}
                  />
                  {errors.phone && <span style={{color: 'red', fontSize: '12px', marginTop: '4px', display: 'block'}}>{errors.phone}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label>Email ID *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g., name@yourcompany.com" 
                    style={{ borderColor: errors.email ? 'red' : undefined }}
                  />
                  {errors.email && <span style={{color: 'red', fontSize: '12px', marginTop: '4px', display: 'block'}}>{errors.email}</span>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Message *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your project or requirements..." 
                  rows={4}
                  style={{ borderColor: errors.message ? 'red' : undefined }}
                ></textarea>
                {errors.message && <span style={{color: 'red', fontSize: '12px', marginTop: '4px', display: 'block'}}>{errors.message}</span>}
              </div>

              <div>
                <button type="submit" className="btn-outline btn-outline-red" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Submitting...' : 'Submit'}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
