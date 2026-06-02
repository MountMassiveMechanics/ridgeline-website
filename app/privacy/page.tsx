import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Ridgeline Fleet Services",
  description:
    "Privacy Policy for Ridgeline Fleet Services (Mount Massive Mechanics LLC), including how we handle SMS communications and opt-out.",
};

export default function PrivacyPolicy() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px', fontFamily: 'sans-serif', color: '#111' }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Privacy Policy</h1>
      <p style={{ color: '#555', marginBottom: 32 }}>
        Ridgeline Fleet Services (Mount Massive Mechanics LLC) — Effective June 1, 2026
      </p>

      <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 32 }}>1. Information We Collect</h2>
      <p>We collect the following information from clients and prospective clients:</p>
      <ul>
        <li>Business contact information (name, company, phone number, and email) provided when signing up for fleet services</li>
        <li>Vehicle information (make, model, year, VIN, and mileage) for fleet maintenance purposes</li>
        <li>Service history and inspection records</li>
      </ul>

      <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 32 }}>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide fleet maintenance and inspection services</li>
        <li>Send service updates, appointment reminders, and work order notifications</li>
        <li>Communicate via SMS if you have opted in to text message notifications</li>
        <li>Improve our services</li>
      </ul>

      <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 32 }}>3. SMS Communications</h2>
      <p>
        By providing your phone number and opting in, you consent to receive SMS text message notifications from
        Ridgeline Fleet Services regarding your fleet service status, work order status updates, appointment
        confirmations, appointment reminders, and billing notifications.
      </p>
      <ul>
        <li>Message frequency varies based on your service activity.</li>
        <li>Message and data rates may apply.</li>
        <li>To opt out of SMS notifications at any time, reply STOP to any message you receive from us.</li>
        <li>For help, reply HELP or contact us at <a href="mailto:devinmedina@mountmassivemechanics.com">devinmedina@mountmassivemechanics.com</a>.</li>
        <li>Opting out of SMS will not affect your ability to receive service.</li>
      </ul>

      <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 32 }}>4. Information Sharing</h2>
      <ul>
        <li>We do not sell or rent your personal information to third parties.</li>
        <li>We may share information with service contractors solely to perform fleet maintenance on your behalf.</li>
        <li>We may disclose information if required by law.</li>
      </ul>

      <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 32 }}>5. Data Security</h2>
      <p>We use industry-standard security measures to protect your information.</p>

      <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 32 }}>6. Contact Us</h2>
      <p>
        Email: <a href="mailto:devinmedina@mountmassivemechanics.com">devinmedina@mountmassivemechanics.com</a>
        <br />
        Website: <a href="https://ridgelinefleetservices.com">ridgelinefleetservices.com</a>
      </p>
    </main>
  );
}
