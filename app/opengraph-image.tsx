import { ImageResponse } from 'next/og';

// SNS・検索結果で共有されるときのサムネイル（全ページ共通）
export const alt = 'Albus. — University Festival by Technology';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f8fbff',
          backgroundImage:
            'linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          color: '#0f172a',
        }}
      >
        <div style={{ display: 'flex', fontSize: 180, fontWeight: 800, letterSpacing: -4 }}>
          Albus<span style={{ color: '#2563eb' }}>.</span>
        </div>
        <div style={{ fontSize: 36, color: '#475569', marginTop: 8 }}>
          University Festival by Technology
        </div>
      </div>
    ),
    size
  );
}
