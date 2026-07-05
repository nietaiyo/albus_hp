export default function About() {
  const members = [
    {
      name: 'サクラ (Sakura)',
      role: 'Project Manager & UI/UX Designer',
      bio: 'デザインとユーザー体験の設計を担当。使う人が「直感的に便利！」と思える画面作りを心がけています。趣味はカフェ巡りとカメラ。',
      skills: ['Figma', 'UI Design', 'Next.js'],
    },
    {
      name: 'タロウ (Taro)',
      role: 'Frontend Engineer',
      bio: 'サクサク動いて気持ちいいフロントエンドの実装が得意です。白鷺祭用語集の検索ロジックやアニメーションを担当しています。',
      skills: ['TypeScript', 'Next.js', 'React', 'CSS/SCSS'],
    },
    {
      name: 'ジロウ (Jiro)',
      role: 'Backend & Infrastructure Engineer',
      bio: 'データベース設計とインフラ周りを担当。大学祭当日の大量アクセスでも落ちない、堅牢でリアルタイムな裏側を支えています。',
      skills: ['Firebase', 'Node.js', 'GCP', 'NoSQL'],
    },
  ];

  const techStack = [
    {
      name: 'Next.js / React',
      category: 'Frontend',
      reason: '大学祭の現場でサクサクと瞬時に動くスピード感と、SEO・パフォーマンスの最大化を実現するために採用しています。',
    },
    {
      name: 'Firebase',
      category: 'Backend & Hosting',
      reason: 'ユーザー投票や用語追加など、リアルタイムなデータの同期を最もスピーディーに、かつ安全に実現するために選定しました。',
    },
    {
      name: 'Vanilla CSS',
      category: 'Styling',
      reason: 'フレームワークの流行に左右されず、Albus独自の繊細なアニメーションと軽量なコーディングを実現するために、細部まで手書きで設計しています。',
    },
  ];

  return (
    <div className="site">
      <div style={{ maxWidth: '800px', margin: '48px auto' }}>
        {/* ミッション / ビジョン */}
        <section style={{ marginBottom: '64px' }}>
          <p className="label">Mission / Vision</p>
          <h1 style={{ fontSize: '36px', marginBottom: '24px', lineHeight: '1.3' }}>
            テクノロジーで、<br />大学祭をさらなる高みへ。
          </h1>
          <p className="sectionText" style={{ fontSize: '16px', lineHeight: '1.8', color: '#4b5563' }}>
            私たちは、自身たちが所属していた大学祭実行委員会の大学祭をテクノロジーの力でサポートしたいという強い想いから結成されました。
            この超デジタル化社会の中で、まだまだアナログな部分が多いといった課題を、
            元実行委員ならではの視点と、確かな技術力で解決します。
            ただ便利なだけでなく、触っていてどこかワクワクするような、温かみのあるサービスを目指しています。
          </p>
        </section>

        {/* メンバー紹介 */}
        <section style={{ marginBottom: '64px', borderTop: '1px solid #e2e8f0', paddingTop: '48px' }}>
          <p className="label">Team Members</p>
          <h2 style={{ fontSize: '28px', marginBottom: '32px' }}>創るメンバーたち</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {members.map((member, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px', color: '#0f172a' }}>{member.name}</h3>
                  <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#2563eb', background: '#eff6ff', padding: '4px 10px', borderRadius: '999px' }}>
                    {member.role}
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: '15px', color: '#4b5563', lineHeight: '1.6' }}>{member.bio}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '4px' }}>
                  {member.skills.map((skill, sIdx) => (
                    <span key={sIdx} style={{ fontSize: '12px', color: '#64748b', background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 技術スタック */}
        <section style={{ borderTop: '1px solid #e2e8f0', paddingTop: '48px' }}>
          <p className="label">Tech Stack</p>
          <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>採用している技術</h2>
          <p className="sectionText" style={{ color: '#4b5563', marginBottom: '32px' }}>
            ただ新しい技術を使うのではなく、「安定性」「表示速度」「開発のしやすさ」のバランスを考え、本当に自分たちとユーザーに最適なスタックを選定しています。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 2fr',
                  gap: '24px',
                  alignItems: 'start',
                  borderBottom: idx !== techStack.length - 1 ? '1px solid #f1f5f9' : 'none',
                  paddingBottom: '20px',
                }}
              >
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>
                    {tech.category}
                  </span>
                  <h4 style={{ margin: '4px 0 0 0', fontSize: '18px', color: '#0f172a' }}>{tech.name}</h4>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: '#4b5563', lineHeight: '1.6' }}>
                  {tech.reason}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
