import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Learn from Docx">
      <main
        style={{
          display: 'flex',
          height: '85vh',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg,rgb(23, 19, 77),rgb(30, 42, 62))',
          color: '#fff',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          “Learn from Docx”
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Explore technology and projects through powerful documentation.
        </p>
        <Link
          className="button button--secondary button--lg"
          to="/docs/technologies/java"
          style={{ textDecoration: 'none', color: '#fff', background: '#282c34' }}
        >
          🚀 Explore Docs
        </Link>
      </main>
    </Layout>
  );
}
