import React, { useState } from 'react';

// --- Internal CSS Styles (Refined for Centering and Layout Consistency) ---
const customStyles = `
    /* 0. Reset and Global Box Sizing */
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    /* Global Variables */
    :root {
        --primary-blue: #4c379a; /* Deep Purple */
        --accent-light: #9333ea; /* Vibrant Purple */
        --bg-light: #f9fafb; /* Off-White Background - Use this for sections */
        --text-dark: #1f2937; /* Dark Gray Text */
        --text-secondary: #6b7280; /* Muted Gray Text */
        --card-bg: #ffffff;
        --shadow-md: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05);
        --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.03);
        --rounded-xl: 0.75rem;
    }

    /* Base Reset and Typography */
    .app-container {
        font-family: 'Inter', sans-serif;
        color: var(--text-dark);
        background-color: var(--card-bg); /* White body background */
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
        line-height: 1.6; /* Slightly looser line height */
        width: 100%;
        margin: 0 auto; 
    }

    .section-bg-gray {
        background-color: var(--bg-light);
    }

    h1, h2, h3 {
        color: var(--primary-blue);
        line-height: 1.2;
    }

    h1 {
        font-size: 2.25rem;
        font-weight: 700;
        color: var(--primary-blue);
    }
    
    @media (min-width: 768px) {
        h1 {
            font-size: 3.5rem;
        }
    }

    h2 {
        font-size: 1.875rem;
        font-weight: 700;
    }
    
    @media (min-width: 768px) {
        h2 {
            font-size: 2.5rem;
        }
    }
    
    .section-title-tagline {
        font-size: 1rem;
        font-weight: 400;
        color: var(--text-secondary);
        margin-top: 0.5rem;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .max-w-7xl {
        margin-left: auto;
        margin-right: auto;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        width: 100%;
    }
    
    @media (min-width: 640px) {
        .max-w-7xl {
            padding-left: 3rem;
            padding-right: 3rem;
        }
    }

    .text-center { text-align: center; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .mb-12 { margin-bottom: 3rem; }
    .mt-4 { margin-top: 1rem; }
    .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
    .py-24 { padding-top: 6rem; padding-bottom: 6rem; }
    
    /* --- 1. Header & Navigation (CRITICAL FIXES HERE) --- */
    .header {
        background-color: var(--card-bg);
        box-shadow: none;
        position: sticky;
        top: 0;
        z-index: 50;
        border-bottom: 1px solid #e5e7eb;
    }
    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        /* Prevent logo and nav from wrapping, ensuring space-between separation */
        flex-wrap: nowrap; 
    }

    .logo {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--primary-blue);
        flex-shrink: 0; /* Ensures the logo never shrinks */
    }
    
    .desktop-nav {
        /* FIX: Ensure desktop navigation is HIDDEN on mobile by default */
        display: none; 
        gap: 2rem;
        font-size: 0.95rem;
        font-weight: 500;
        color: var(--text-dark);
        margin-left: 2rem; /* Add spacing between logo and nav on desktop */
    }
    
    .desktop-nav a:hover {
        color: var(--accent-light);
    }
    
    .mobile-menu-button {
        /* FIX: Ensure button is visible by default (mobile) and on the right */
        display: flex; 
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
    }

    @media (min-width: 768px) {
        .desktop-nav { display: flex; } /* Show desktop nav on larger screens */
        .mobile-menu-button { display: none; } /* Hide button on larger screens */
    }

    /* --- Mobile Menu Specific Styles --- */
    .mobile-menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(249, 250, 251, 0.95); /* Semi-transparent bg-light */
        z-index: 40;
        padding: 2rem 1.5rem;
    }
    .mobile-menu-content {
        background-color: var(--card-bg);
        padding: 1.5rem;
        border-radius: var(--rounded-xl);
        box-shadow: var(--shadow-xl);
        display: flex;
        flex-direction: column;
    }
    .close-button {
        background: none;
        border: none;
        align-self: flex-end;
        color: var(--text-dark);
        margin-bottom: 1rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 0.5rem;
    }
    .mobile-nav {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        font-size: 1.25rem;
        font-weight: 500;
    }
    .mobile-nav a {
        padding: 0.5rem;
        border-radius: 0.5rem;
        transition: background-color 0.2s;
    }
    .mobile-nav a:hover {
        background-color: var(--bg-light);
        color: var(--primary-blue);
    }
    
    /* ... (rest of CSS remains the same) ... */
    
    .hero-section {
        padding-top: 5rem;
        padding-bottom: 5rem;
        background-color: var(--card-bg);
    }
    
    .hero-grid {
        display: grid;
        gap: 3rem;
        align-items: center;
    }
    
    @media (min-width: 768px) {
        .hero-grid {
            grid-template-columns: 3fr 2fr;
        }
        .hero-content { order: 1; }
        .hero-image { order: 2; }
    }

    .hero-subtitle {
        font-size: 1.125rem;
        font-weight: 500;
        color: var(--accent-light);
        display: block;
        margin-bottom: 0.5rem;
    }

    .hero-title-role {
        font-size: 1.25rem;
        font-weight: 500;
        color: var(--text-secondary);
        margin-top: 0.5rem;
    }

    .hero-summary {
        color: var(--text-secondary);
        margin-top: 1.5rem;
        line-height: 1.75;
    }

    .hero-actions {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2.5rem;
    }
    
    @media (min-width: 640px) {
        .hero-actions {
            flex-direction: row;
        }
    }

    .button-primary, .button-secondary {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0.8rem 1.75rem;
        border-radius: var(--rounded-xl);
        font-size: 1rem;
        font-weight: 600;
        transition: all 0.3s;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .button-primary {
        background-color: var(--accent-light);
        color: white;
        border: 1px solid var(--accent-light);
    }

    .button-primary:hover {
        background-color: var(--primary-blue);
        border-color: var(--primary-blue);
        transform: translateY(-2px);
    }

    .button-secondary {
        background-color: var(--card-bg);
        color: var(--primary-blue);
        border: 1px solid var(--primary-blue);
    }

    .button-secondary:hover {
        background-color: var(--primary-blue);
        color: white;
        transform: translateY(-2px);
    }
    
    .hero-image {
        display: flex;
        justify-content: center;
    }

    .profile-graphic {
        position: relative;
        width: 100%;
        max-width: 250px; /* Max size for the avatar ring */
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        border: 4px solid var(--accent-light); /* Accent ring */
        background-color: #f0f0f0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    
    /* New styling for the Avatar silhouette to match the reference */
    .profile-graphic svg {
        width: 70%;
        height: 70%;
        color: var(--primary-blue);
    }

    /* --- 3. About Section --- */
    .about-section {
        background-color: var(--bg-light);
    }

    .stat-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1.5rem;
        margin-bottom: 4rem;
    }

    @media (min-width: 640px) {
        .stat-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    /* Stat Cards now look more like the screenshot's soft cards */
    .stat-card {
        background-color: var(--card-bg);
        padding: 2rem 1.5rem;
        border-radius: var(--rounded-xl);
        box-shadow: var(--shadow-md);
        text-align: center;
        border: 1px solid #e5e7eb;
        transition: transform 0.2s;
    }
    
    .stat-card:hover {
        transform: translateY(-3px);
    }

    .stat-number {
        font-size: 2.25rem;
        font-weight: 700;
        color: var(--primary-blue);
    }
    
    .stat-label {
        color: var(--text-secondary);
        margin-top: 0.5rem;
        font-weight: 500;
        font-size: 0.95rem;
    }

    .summary-box {
        background-color: var(--card-bg);
        padding: 2rem;
        border-radius: var(--rounded-xl);
        box-shadow: var(--shadow-md);
        border: 1px solid #e5e7eb;
    }

    .summary-text {
        font-size: 1rem;
        color: var(--text-dark);
        line-height: 1.7;
    }

    .summary-points {
        margin-top: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .point-item {
        display: flex;
        align-items: flex-start;
        font-size: 0.95rem;
        color: var(--text-secondary);
    }

    .point-icon {
        width: 1.1rem;
        height: 1.1rem;
        color: var(--accent-light);
        flex-shrink: 0;
        margin-top: 0.3rem; /* Align icon better with text */
    }

    .point-text {
        margin-left: 0.75rem;
    }

    /* --- 4. Projects/Domains Section --- */
    .domain-section {
        background-color: var(--card-bg);
        padding-top: 6rem;
        padding-bottom: 6rem;
    }
    
    .domain-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
    }
    
    @media (min-width: 768px) {
        .domain-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .project-card {
        background-color: var(--card-bg);
        padding: 1.5rem;
        border-radius: var(--rounded-xl);
        box-shadow: var(--shadow-md);
        border: 1px solid #e5e7eb;
        transition: all 0.3s;
    }
    
    .project-card:hover {
        box-shadow: var(--shadow-lg);
        transform: translateY(-5px);
    }
    
    .project-image-placeholder {
        width: 100%;
        height: 10rem;
        background-color: var(--bg-light);
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        padding: 2rem;
    }

    .project-image-placeholder svg {
        width: 100%;
        height: 100%;
    }

    .project-title {
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--text-dark);
    }

    .project-description {
        font-size: 0.9rem;
        color: var(--text-secondary);
        margin-top: 0.5rem;
    }

    .tag-container {
        margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .tag {
        font-size: 0.75rem;
        font-weight: 500;
        padding: 0.25rem 0.6rem;
        border-radius: 0.375rem;
    }

    .tag-blue { background-color: rgba(76, 55, 154, 0.1); color: var(--primary-blue); }
    .tag-accent { background-color: rgba(147, 51, 234, 0.1); color: var(--accent-light); }


    /* --- 5. Skills Section (Major visual overhaul) --- */
    .skills-section {
        background-color: var(--bg-light);
    }
    .skills-box {
        background-color: var(--card-bg);
        padding: 2.5rem;
        border-radius: var(--rounded-xl);
        box-shadow: var(--shadow-md);
        border: 1px solid #e5e7eb;
    }

    .skill-heading {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 2rem;
        padding-bottom: 0.5rem;
    }
    
    .skill-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem 1rem;
        text-align: center;
    }

    @media (min-width: 768px) {
        .skill-grid {
            grid-template-columns: repeat(6, 1fr);
            gap: 2.5rem 0.5rem;
        }
    }
    
    .skill-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.2s;
        padding: 0.5rem;
    }
    .skill-item:hover {
        transform: translateY(-3px);
    }

    /* Skills Icon Styling for better visual weight */
    .skill-icon-container {
        width: 4rem;
        height: 4rem; 
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.75rem;
        background-color: #f7f3ff; /* Very light purple */
    }

    .skill-icon-container svg {
        width: 2rem;
        height: 2rem;
    }

    .skill-name {
        font-size: 0.85rem;
        font-weight: 500;
        margin-top: 0.75rem;
        color: var(--text-secondary);
    }

    /* --- 6. Experience Timeline (Major visual overhaul) --- */
    .experience-section {
        background-color: var(--bg-light);
    }
    .timeline-container {
        position: relative;
        /* Using a max-width here internally to prevent timeline line from stretching too far */
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
        padding-top: 1rem;
    }

    .timeline-line {
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px; /* Thinner line */
        background-color: rgba(76, 55, 154, 0.1); /* Lighter line color */
        transform: translateX(-50%);
    }
    
    /* Ensure mobile view also uses the centered line/desktop layout for a clean look */
    @media (max-width: 767px) {
        .timeline-line {
            left: 50%;
            transform: translateX(-50%); 
        }
        .timeline-item {
            padding-left: 0;
            display: flex;
            justify-content: flex-end; /* All mobile content on the right of the dot */
            text-align: left;
        }
        .timeline-content {
            width: 48%; /* Adjust content width for better spacing */
            padding-left: 1.5rem;
            padding-right: 0.75rem;
            border-left: 0; /* Remove highlight border for clean look */
        }
    }
    
    /* Re-enabling the standard desktop timeline structure */
    @media (min-width: 768px) {
        .timeline-item {
            padding-left: 0;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }
        
        .timeline-content {
            background-color: var(--card-bg);
            border-radius: var(--rounded-xl);
            width: 45%;
            padding: 1.5rem;
            border: 1px solid #e5e7eb;
            box-shadow: var(--shadow-md);
        }
        
        /* Odd items (Left Side) */
        .timeline-item:nth-child(odd) {
            justify-content: flex-start;
            text-align: right; /* Content on the left side is right-aligned */
        }
        
        /* Even items (Right Side) */
        .timeline-item:nth-child(even) {
            justify-content: flex-end;
            text-align: left; /* Content on the right side is left-aligned */
        }

        .timeline-item:nth-child(odd) .timeline-achievements {
            margin-left: 0;
            margin-right: 1.25rem;
            list-style: none;
            text-align: right;
        }
        .timeline-item:nth-child(odd) .timeline-achievements:not(.text-only) li {
             /* Custom bullet point for right side */
            position: relative;
        }
        
        .timeline-item:nth-child(odd) .timeline-achievements:not(.text-only) li::before {
            content: "•";
            color: var(--accent-light);
            display: inline-block;
            width: 1em;
            margin-left: -1em;
        }
        
        .timeline-item:nth-child(even) .timeline-achievements {
            list-style: disc;
            list-style-position: outside;
            margin-left: 1.25rem;
            margin-right: 0;
        }
    }

    .timeline-item {
        margin-bottom: 2.5rem;
        position: relative;
    }

    .timeline-dot {
        z-index: 10;
        background-color: var(--primary-blue);
        width: 1rem; /* Smaller dot */
        height: 1rem;
        border-radius: 50%;
        position: absolute;
        top: 0.75rem;
        left: 50%; 
        transform: translateX(-50%); 
        border: 4px solid var(--bg-light); /* White ring to cover line */
    }
    
    .timeline-date {
        margin-bottom: 0.25rem;
        font-size: 0.85rem;
        color: var(--accent-light); /* Date uses accent color */
        font-weight: 600;
    }

    .timeline-role {
        font-weight: 600;
        font-size: 1.125rem;
        color: var(--text-dark);
    }
    
    .timeline-company {
        color: var(--primary-blue);
        font-weight: 500;
        font-size: 0.95rem;
        margin-top: 0.25rem;
    }

    .timeline-achievements {
        list-style: disc;
        margin-left: 1.25rem;
        padding-top: 0.5rem;
        font-size: 0.9rem;
        color: var(--text-secondary);
        margin-top: 0.5rem;
        line-height: 1.5;
    }
    
    .timeline-achievements.text-only {
        list-style: none;
        margin-left: 0;
        padding-top: 0.5rem;
    }
    
    .timeline-achievements li {
        margin-bottom: 0.25rem;
    }


    /* --- 7. Certifications Section (Softer cards) --- */
    .cert-section {
        background-color: var(--card-bg);
    }
    .cert-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1.5rem;
        /* Using a max-width internally on the grid for better presentation */
        max-width: 56rem;
        margin-left: auto;
        margin-right: auto;
    }
    
    @media (min-width: 768px) {
        .cert-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .cert-card {
        background-color: var(--card-bg);
        padding: 1.5rem;
        border-radius: var(--rounded-xl);
        box-shadow: var(--shadow-md);
        display: flex;
        align-items: center;
        border: 1px solid #e5e7eb;
        transition: box-shadow 0.3s, transform 0.3s;
    }

    .cert-icon-container {
        padding: 0.75rem;
        border-radius: 0.5rem;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .cert-icon-accent { background-color: rgba(147, 51, 234, 0.1); color: var(--accent-light); }
    .cert-icon-blue { background-color: rgba(76, 55, 154, 0.1); color: var(--primary-blue); }
    
    .cert-icon-container svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    .cert-details {
        margin-left: 1rem;
    }

    .cert-title {
        font-weight: 600;
        color: var(--text-dark);
        font-size: 1rem;
    }

    .cert-subtitle {
        font-size: 0.85rem;
        color: var(--text-secondary);
        margin-top: 0.1rem;
    }

    /* --- 8. Contact Section (Aesthetic fix for shadow/border) --- */
    .contact-section {
        background-color: var(--bg-light);
    }
    .contact-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1.5rem;
        /* Using a max-width internally on the grid for better presentation */
        max-width: 56rem;
        margin-left: auto;
        margin-right: auto;
    }
    
    @media (min-width: 768px) {
        .contact-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    
    .contact-card {
        background-color: var(--card-bg);
        padding: 1.5rem;
        border-radius: var(--rounded-xl);
        box-shadow: var(--shadow-md);
        text-align: center;
        border: 1px solid #e5e7eb;
        transition: transform 0.3s;
    }

    .contact-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
    }
    
    .contact-icon {
        width: 2rem;
        height: 2rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0.75rem;
        padding: 0.3rem;
        border-radius: 50%;
    }
    
    .contact-card.accent .contact-icon { color: var(--accent-light); background-color: rgba(147, 51, 234, 0.1); }
    .contact-card.blue .contact-icon { color: var(--primary-blue); background-color: rgba(76, 55, 154, 0.1); }

    .contact-title {
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--text-dark);
    }

    .contact-value {
        font-size: 0.95rem;
        color: var(--primary-blue);
        margin-top: 0.25rem;
        font-weight: 600;
    }

   .footer {
        background-color: var(--primary-blue);
        color: white;
        padding: 1.5rem 1rem; /* Mobile padding */
        text-align: center;
    }

    .footer-content {
        display: flex;
        flex-direction: column; /* Stacked on mobile */
        align-items: center;
        gap: 1rem;
    }

    .footer-links {
        display: flex;
        gap: 1.5rem;
    }

    .footer-links a {
        color: white;
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.3s;
    }

    .footer-links a:hover {
        opacity: 0.8;
    }

    /* Inter Font Import */
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");
`;

// --- Utility: Icon Component (Replaces Lucide Icons using Inline SVG) ---
const Icon = ({ name, className, color = "currentColor", strokeWidth = "2" }) => {
    // Note: className here is purely for size/margin within the component, not Tailwind.
    const icons = {
        menu: (<><path d="M4 18l16 0" /><path d="M4 12l16 0" /><path d="M4 6l16 0" /></>),
        'arrow-right': (<><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>),
        'check-circle': (<><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></>),
        zap: (<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />),
        rocket: (<><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.75-1.12.9-2.06.5-2.5-.4-.4-.57-.22-2.5.5Z" /><path d="M12.13 10.74l10-10" /><path d="M14.49 1.1l-1.57 1.57" /><path d="M8.64 6.64l-1.57 1.57" /><path d="M15.46 6.13 18.13 3.46" /><path d="M3.86 10.21 7.53 13.88" /></>),
        shield: (<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />),
        'layout-dashboard': (<><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" /></>),
        layers: (<><path d="m12.83 2.72 1.35 1.35a3 3 0 0 0 2.11.88h1.22c.98 0 1.54.54 1.76 1.48l.38 1.62h-4.04l-.38 1.62" /><path d="m16 9.88h4.04l.38 1.62a2.3 2.3 0 0 1 0 1.13v3.7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-3.7a2.3 2.3 0 0 1 0-1.13l.38-1.62h4.04l.38-1.62a3 3 0 0 0 2.11-.88l1.35-1.35a3 3 0 0 0 .88-2.11v-1.22a3 3 0 0 0-.88-2.11L11.17 2.72Z" /><path d="M12.83 2.72 11.17 2.72a3 3 0 0 0-2.11.88l-1.35 1.35a3 3 0 0 0-.88 2.11v1.22a3 3 0 0 0 .88 2.11l1.35 1.35a3 3 0 0 0 2.11.88h1.22a3 3 0 0 0 2.11-.88l1.35-1.35a3 3 0 0 0 .88-2.11V6.9a3 3 0 0 0-.88-2.11L15.94 3.6a3 3 0 0 0-2.11-.88Z" /></>),
        'columns-2': (<><path d="M12 2v20" /><path d="M17 22V2" /><path d="M7 22V2" /></>),
        'git-branch': (<><line x1="6" x2="6" y1="3" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 0-9 9" /></>),
        target: (<><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>),
        briefcase: (<><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>),
        'list-checks': (<><path d="m3 12 2 2 4-4" /><path d="M19 8h2" /><path d="M19 12h2" /><path d="M19 16h2" /><path d="M14 16h-5" /><path d="M14 12h-5" /><path d="M14 8h-5" /></>),
        'file-text': (<><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></>),
        trello: (<><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M7 7h4v4H7z" /><path d="M13 7h4v4h-4z" /></>),
        cloud: (<path d="M17.5 19H17a6 6 0 0 0 0-12c-.15-1.74-1.28-3.3-3.07-4.14A7.26 7.26 0 0 0 12 4a7 7 0 0 0-7 7c0 2.21-.86 4.31-2.5 5.76C2 17 2 17.5 2 18a2 2 0 0 0 2 2h13.5" />),
        'drafting-compass': (<><circle cx="12" cy="12" r="10" /><path d="M22 22l-4.5-4.5" /><path d="M13.5 8.5 12 12l-1.5 3.5 2.5 2.5 2.5-2.5 2.5-1.5z" /></>),
        'bar-chart-3': (<><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></>),
        history: (<><path d="M12 8V4" /><path d="M1 21h20" /><path d="M3 5l2 2" /><path d="M19 5l2 2" /><path d="M15.5 18a8 8 0 1 0-2.92-5.7L12 12" /></>),
        award: (<><circle cx="12" cy="8" r="6" /><path d="M15.4 12.9 20 16l-3.51-2.34a7 7 0 0 0-1.09-1.66Z" /><path d="M8.6 12.9 4 16l3.51-2.34a7 7 0 0 1 1.09-1.66Z" /></>),
        'layers-3': (<><path d="M12 11.5 20 7l-8-4-8 4 8 4.5Z" /><path d="M12 16.5 20 12l-8 4-8-4 8 4.5Z" /><path d="M12 21.5 20 17l-8 4-8-4 8 4.5Z" /></>),
        'bar-chart-big': (<><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></>),
        'users-2': (<><path d="M14 19a6 6 0 0 0-12 0" /><circle cx="8" cy="10" r="4" /><path d="M22 19a6 6 0 0 0-12 0" /><circle cx="16" cy="10" r="4" /></>),
        mail: (<><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.8 1.8 0 0 1-2.06 0L2 7" /></>),
        phone: (<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.08-6.08A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />),
        'map-pin': (<><path d="M12 18.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" /><path d="M12 22s8-4 8-10A8 8 0 0 0 4 12c0 6 8 10 8 10Z" /></>),
        user: (<><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>),
        x: (<><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>),
    };
    const strokeColor = color === "currentColor" ? color : color;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className || "w-6 h-6"} style={{ width: className ? undefined : '1.5rem', height: className ? undefined : '1.5rem' }} >
            {icons[name] || <circle cx="12" cy="12" r="10" stroke="red" />}
        </svg>
    );
};

// --- Component: Project Card ---
const ProjectCard = ({ title, iconName, description, tags, borderColor }) => {
    // We use a different icon style now (SVG graphic)
    const iconColor = borderColor === 'primary-blue' ? 'var(--primary-blue)' : 'var(--accent-light)';
    const GraphicSVG = ({ color }) => {
        // Mock SVG graphics to match the style in the screenshot reference (geometric, light)
        switch (iconName) {
            case 'zap':
                return (
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="30" width="80" height="40" rx="10" fill={color} fillOpacity="0.1" />
                        <circle cx="25" cy="50" r="8" fill={color} fillOpacity="0.8" />
                        <circle cx="50" cy="50" r="8" fill={color} fillOpacity="0.8" />
                        <circle cx="75" cy="50" r="8" fill={color} fillOpacity="0.8" />
                        <path d="M10 30L90 70" stroke={color} strokeWidth="2" strokeLinecap="round" strokeDasharray="5 5" />
                    </svg>
                );
            case 'rocket':
                return (
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="20" y="20" width="60" height="60" rx="15" fill={color} fillOpacity="0.15" />
                        <path d="M50 85 C 65 85 80 80 80 65 V 35 C 80 20 65 15 50 15 C 35 15 20 20 20 35 V 65 C 20 80 35 85 50 85 Z" fill="white" stroke={color} strokeWidth="2" />
                        <rect x="40" y="40" width="20" height="20" rx="5" fill={color} fillOpacity="0.5" />
                        <path d="M50 35 L 70 25 M 50 35 L 30 25" stroke={color} strokeWidth="3" strokeLinecap="round" />
                    </svg>
                );
            case 'shield':
                return (
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 10 L 90 30 V 70 L 50 90 L 10 70 V 30 Z" fill={color} fillOpacity="0.15" />
                        <path d="M50 20 L 80 35 V 65 L 50 80 L 20 65 V 35 Z" fill="white" stroke={color} strokeWidth="2" />
                        <rect x="30" y="45" width="40" height="10" rx="3" fill={color} fillOpacity="0.7" />
                    </svg>
                );
            default:
                return <Icon name={iconName} className="w-12 h-12" color={iconColor} />;
        }
    };
    return (
        <div className="project-card">
            <div className="project-image-placeholder">
                <GraphicSVG color={iconColor} />
            </div>
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="tag-container">
                {tags.map((tag, index) => (
                    <span key={index} className={`tag ${borderColor === 'primary-blue' ? 'tag-blue' : 'tag-accent'}`}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

// --- Component: Timeline Item ---
const TimelineItem = ({ date, role, company, achievements, isTextOnly = false }) => {
    return (
        <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
                <p className="timeline-date">{date}</p>
                <h3 className="timeline-role">{role}</h3>
                <p className="timeline-company">{company}</p>
                <ul className={`timeline-achievements ${isTextOnly ? 'text-only' : ''}`}>
                    {achievements.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// --- Component: App ---
const App = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Helper component for injecting the CSS
    const CssInjector = () => (
        <style>{customStyles}</style>
    );

    // Helper function to handle smooth scrolling and menu closing
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setIsMobileMenuOpen(false); // Close menu after click
        const target = document.getElementById(targetId.substring(1));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="app-container">
            <CssInjector />

            {/* Header */}
            <header className="header">
                <div className="max-w-7xl header-content">
                    {/* Logo/Name - Always visible on the left */}
                    <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, '#hero')}>
                        Dhaval Parmar
                    </a>

                    {/* Desktop Navigation - Only visible on the right side on desktop (>=768px) */}
                    <nav className="desktop-nav">
                        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>Home</a>
                        <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
                        <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
                        <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a>
                        <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>Experience</a>
                        <a href="#certifications" onClick={(e) => handleNavClick(e, '#certifications')}>Certifications</a>
                        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
                    </nav>

                    {/* Mobile Menu Button - Only visible on the right side on mobile (<768px) */}
                    <button className="mobile-menu-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Open menu">
                        <Icon name="menu" className="w-8 h-8 text-primary-blue" />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay - Only visible when isMobileMenuOpen is true */}
            {isMobileMenuOpen && (
                <div className="mobile-menu-overlay">
                    <div className="mobile-menu-content">
                        <button className="close-button" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                            <Icon name="x" className="w-6 h-6" />
                        </button>
                        <nav className="mobile-nav">
                            {/* NOTE: These links are now handled by handleNavClick to close the menu */}
                            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>Home</a>
                            <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
                            <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
                            <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a>
                            <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>Experience</a>
                            <a href="#certifications" onClick={(e) => handleNavClick(e, '#certifications')}>Certifications</a>
                            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
                        </nav>
                    </div>
                </div>
            )}


            <main>
                {/* --- 1. Hero Section --- */}
                <section id="hero" className="hero-section">
                    <div className="max-w-7xl">
                        <div className="hero-grid">
                            <div className="hero-content">
                                <span className="hero-subtitle">Hello, I'm</span>
                                <h1>Dhaval Parmar</h1>
                                <p className="hero-title-role">Scrum Master & Software Engineer</p>
                                <p className="hero-summary">
                                    A dynamic and results-driven professional with 7+ years of experience, specializing in agile methodologies (Scrum, Kanban) and full-stack software development. Proven ability to lead cross-functional teams, remove impediments, and deliver complex projects on time and budget. My technical skills are anchored in modern web technologies, ensuring the seamless integration of development best practices with Agile principles.
                                </p>
                                <div className="hero-actions">
                                    <a href="#contact" className="button-primary" onClick={(e) => handleNavClick(e, '#contact')}>
                                        Contact Me
                                        <Icon name="arrow-right" className="ml-2 w-4 h-4" />
                                    </a>
                                    <a href="/Dhaval-Parmar-Resume.pdf" target="_blank" rel="noopener noreferrer" className="button-secondary">
                                        View Resume
                                    </a>
                                </div>
                            </div>
                            <div className="hero-image">
                                <div className="profile-graphic">
                                    <Icon name="user" /> {/* Simple user icon placeholder */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 2. About Section --- */}
                <section id="about" className="about-section py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2>About Me</h2>
                            <p className="section-title-tagline">My journey in Agile Leadership and Engineering.</p>
                        </div>

                        <div className="stat-grid">
                            <div className="stat-card">
                                <p className="stat-number">7+</p>
                                <p className="stat-label">Years of Experience</p>
                            </div>
                            <div className="stat-card">
                                <p className="stat-number">30+</p>
                                <p className="stat-label">Successful Projects</p>
                            </div>
                            <div className="stat-card">
                                <p className="stat-number">100%</p>
                                <p className="stat-label">Agile Adoption Rate</p>
                            </div>
                        </div>

                        <div className="summary-box">
                            <p className="summary-text">
                                My career is a blend of technical expertise and strategic Agile leadership. As a Certified Scrum Master, I excel at coaching teams, facilitating ceremonies, and fostering a culture of continuous improvement. On the engineering side, I provide hands-on support in the development of robust, scalable applications using technologies like React, Node.js, and AWS. I bridge the gap between product vision and technical implementation, ensuring every sprint delivers maximum value.
                            </p>
                            <div className="summary-points">
                                <div className="point-item">
                                    <Icon name="check-circle" className="point-icon" />
                                    <span className="point-text">Scrum/Kanban Mastery: Deep experience with various Agile frameworks.</span>
                                </div>
                                <div className="point-item">
                                    <Icon name="check-circle" className="point-icon" />
                                    <span className="point-text">Full-Stack Development: Proficiency in the MERN stack and cloud technologies.</span>
                                </div>
                                <div className="point-item">
                                    <Icon name="check-circle" className="point-icon" />
                                    <span className="point-text">Stakeholder Management: Excellent communication and alignment skills.</span>
                                </div>
                                <div className="point-item">
                                    <Icon name="check-circle" className="point-icon" />
                                    <span className="point-text">Continuous Improvement: Dedicated to optimizing team efficiency and output.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 3. Projects/Domains Section --- */}
                <section id="projects" className="domain-section">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2>Key Domains & Projects</h2>
                            <p className="section-title-tagline">Showcasing my work in scalable and dynamic web applications.</p>
                        </div>
                        <div className="domain-grid">
                            <ProjectCard
                                title="Project Management Tools"
                                iconName="zap"
                                description="Developed and customized collaborative tools for task tracking, resource allocation, and reporting for global teams."
                                tags={['React', 'Node.js', 'Jira', 'Trello']}
                                borderColor="primary-blue"
                            />
                            <ProjectCard
                                title="E-commerce Platforms"
                                iconName="rocket"
                                description="Engineered highly scalable, secure, and performant e-commerce backends and user-friendly frontends."
                                tags={['AWS', 'MongoDB', 'Stripe', 'Redux']}
                                borderColor="accent-light"
                            />
                            <ProjectCard
                                title="Security & Compliance Dashboards"
                                iconName="shield"
                                description="Built real-time dashboards for monitoring security logs and compliance metrics across multiple environments."
                                tags={['Python', 'Splunk', 'Grafana', 'Security']}
                                borderColor="primary-blue"
                            />
                        </div>
                    </div>
                </section>

                {/* --- 4. Skills Section --- */}
                <section id="skills" className="skills-section py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2>Technical & Agile Skills</h2>
                            <p className="section-title-tagline">My diverse skill set across leadership and technology.</p>
                        </div>
                        <div className="skills-box">
                            <h3 className="skill-heading">Agile & Leadership</h3>
                            <div className="skill-grid">
                                <div className="skill-item">
                                    <div className="skill-icon-container">
                                        <Icon name="briefcase" color="var(--primary-blue)" />
                                    </div>
                                    <p className="skill-name">Scrum Master</p>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon-container">
                                        <Icon name="list-checks" color="var(--primary-blue)" />
                                    </div>
                                    <p className="skill-name">Kanban</p>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon-container">
                                        <Icon name="users-2" color="var(--primary-blue)" />
                                    </div>
                                    <p className="skill-name">Team Coaching</p>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon-container">
                                        <Icon name="trello" color="var(--primary-blue)" />
                                    </div>
                                    <p className="skill-name">Jira/Confluence</p>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon-container">
                                        <Icon name="bar-chart-big" color="var(--primary-blue)" />
                                    </div>
                                    <p className="skill-name">Metrics</p>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon-container">
                                        <Icon name="layers-3" color="var(--primary-blue)" />
                                    </div>
                                    <p className="skill-name">Stakeholder Mgt</p>
                                </div>
                            </div>
                            <h3 className="skill-heading mt-4">Development & Cloud</h3>
                            <div className="skill-grid">
                                <div className="skill-item">
                                    <div className="skill-icon-container">
                                        <Icon name="zap" color="var(--accent-light)" />
                                    </div>
                                    <p className="skill-name">React/JS</p>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon-container">
                                        <Icon name="rocket" color="var(--accent-light)" />
                                    </div>
                                    <p className="skill-name">Node.js</p>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon-container">
                                        <Icon name="cloud" color="var(--accent-light)" />
                                    </div>
                                    <p className="skill-name">AWS</p>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon-container">
                                        <Icon name="drafting-compass" color="var(--accent-light)" />
                                    </div>
                                    <p className="skill-name">Microservices</p>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon-container">
                                        <Icon name="git-branch" color="var(--accent-light)" />
                                    </div>
                                    <p className="skill-name">Git/CI/CD</p>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon-container">
                                        <Icon name="target" color="var(--accent-light)" />
                                    </div>
                                    <p className="skill-name">Testing (TDD)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 5. Experience Timeline --- */}
                <section id="experience" className="experience-section py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2>Professional Experience</h2>
                            <p className="section-title-tagline">My journey across technology and leadership roles.</p>
                        </div>

                        <div className="timeline-container">
                            <div className="timeline-line"></div>

                            <TimelineItem
                                date="2020 - Present"
                                role="Senior Scrum Master & Full-Stack Engineer"
                                company="Innovatech Solutions, London"
                                achievements={[
                                    "Led 3 Scrum teams (20+ engineers) to deliver a critical cloud migration project 20% under budget.",
                                    "Improved sprint delivery predictability (Velocity) from 60% to 95% using advanced burndown analysis.",
                                    "Developed and deployed a proprietary internal deployment dashboard using React and AWS Lambda, saving 15 hours/week for the DevOps team.",
                                    "Successfully coached a new team from 'forming' to 'performing' status in less than 3 months."
                                ]}
                            />

                            <TimelineItem
                                date="2018 - 2020"
                                role="Software Engineer & Agile Lead"
                                company="Digital Media Group, Manchester"
                                achievements={[
                                    "Designed and implemented RESTful APIs for a high-traffic media distribution platform (500k+ daily users).",
                                    "Facilitated all Agile ceremonies for a feature-delivery team, acting as the primary liaison between Product and Development.",
                                    "Mentored junior developers on best practices in clean code and TDD."
                                ]}
                            />

                            <TimelineItem
                                date="2016 - 2018"
                                role="Junior Developer"
                                company="Tech-Start Systems, Birmingham"
                                achievements={[
                                    "Contributed to the development of the company’s flagship CRM application, focusing on front-end features.",
                                    "Assisted in deploying monthly releases, gaining valuable experience with production environments.",
                                    "Participated in daily stand-ups and sprint planning sessions, learning core Agile principles."
                                ]}
                            />
                        </div>
                    </div>
                </section>

                {/* --- 6. Certifications Section --- */}
                <section id="certifications" className="cert-section py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2>Certifications & Education</h2>
                            <p className="section-title-tagline">Formal training and academic background.</p>
                        </div>
                        <div className="cert-grid">
                            <div className="cert-card">
                                <div className="cert-icon-container cert-icon-accent">
                                    <Icon name="award" />
                                </div>
                                <div className="cert-details">
                                    <h3 className="cert-title">Certified Scrum Master (CSM)</h3>
                                    <p className="cert-subtitle">Scrum Alliance, 2021</p>
                                </div>
                            </div>
                            <div className="cert-card">
                                <div className="cert-icon-container cert-icon-blue">
                                    <Icon name="file-text" />
                                </div>
                                <div className="cert-details">
                                    <h3 className="cert-title">AWS Certified Developer - Associate</h3>
                                    <p className="cert-subtitle">Amazon Web Services, 2022</p>
                                </div>
                            </div>
                            <div className="cert-card">
                                <div className="cert-icon-container cert-icon-accent">
                                    <Icon name="award" />
                                </div>
                                <div className="cert-details">
                                    <h3 className="cert-title">Professional Scrum Product Owner (PSPO)</h3>
                                    <p className="cert-subtitle">Scrum.org, 2023</p>
                                </div>
                            </div>
                            <div className="cert-card">
                                <div className="cert-icon-container cert-icon-blue">
                                    <Icon name="file-text" />
                                </div>
                                <div className="cert-details">
                                    <h3 className="cert-title">M.Sc. Computer Science</h3>
                                    <p className="cert-subtitle">University of Manchester, 2016</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 7. Contact Section --- */}
                <section id="contact" className="contact-section py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2>Get In Touch</h2>
                            <p className="section-title-tagline">Let's build something great together. I am actively looking for new opportunities.</p>
                        </div>
                        <div className="contact-grid">
                            {/* Contact Card: Email */}
                            <div className="contact-card accent">
                                <div className="contact-icon">
                                    <Icon name="mail" />
                                </div>
                                <p className="contact-title">Email</p>
                                <p className="contact-value">scrummasterdhaval@gmail.com</p>
                            </div>

                            {/* Contact Card: Phone */}
                            <div className="contact-card blue">
                                <div className="contact-icon">
                                    <Icon name="phone" />
                                </div>
                                <p className="contact-title">Phone</p>
                                <p className="contact-value">+44 7767 950307</p>
                            </div>

                            {/* Contact Card: Location */}
                            <div className="contact-card accent">
                                <div className="contact-icon">
                                    <Icon name="map-pin" />
                                </div>
                                <p className="contact-title">Location</p>
                                <p className="contact-value">London, UK</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer - Now uses max-w-7xl for centering */}
            <footer className="footer">
                <div className="max-w-7xl footer-content">
                    <p>&copy; 2025 Dhaval Parmar. All Rights Reserved.</p>
                    <div className="footer-links">
                        <a href="https://linkedin.com/in/dhavalparmar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="mailto:scrummasterdhaval@gmail.com">Email</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
