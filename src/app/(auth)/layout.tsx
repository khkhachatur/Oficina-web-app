import React from 'react';
import Header from '@/src/components/Header';
import "../globals.css";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <Header variant='auth'/>
                {children}
            </body>
        </html>
    );
}