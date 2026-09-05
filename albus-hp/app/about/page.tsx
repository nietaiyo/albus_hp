export default function About() {
  const members = [
    {
      name: "スミス",
      // role: 'Backend & Infrastructure Engineer',
      bio: "白鷺祭情報部装飾担当",
      // skills: ['Figma', 'UI Design', 'Next.js'],
    },
    {
      name: "つっきー",
      // role: 'Frontend Engineer',
      bio: "白鷺祭副委員長/企画部部長",
      // skills: ['TypeScript', 'Next.js', 'React', 'CSS/SCSS'],
    },
    {
      name: "テナジー",
      // role: 'Project Manager & UI/UX Designer',
      bio: "白鷺祭技術部副部長",
      // skills: ['Firebase', 'Node.js', 'GCP', 'NoSQL'],
    },
    {
      name: "なづき",
      // role: 'Backend & Infrastructure Engineer',
      bio: "白鷺祭企画部ステージ担当",
      // skills: ['Firebase', 'Node.js', 'GCP', 'NoSQL'],
    },
    {
      name: "Jin",
      // role: 'Backend & Infrastructure Engineer',
      bio: "白鷺祭企画部部長",
      // skills: ['Firebase', 'Node.js', 'GCP', 'NoSQL'],
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

  // Todo: 仲間募集フォームを作る

  return (
    <div className="site">
      <div style={{ maxWidth: "800px", margin: "48px auto" }}>
        {/* ビジョン */}
        <section style={{ marginBottom: "64px" }}>
          <p className="label">Vision</p>
          <h1
            style={{
              fontSize: "36px",
              marginBottom: "24px",
              lineHeight: "1.3",
            }}
          >
            テクノロジーで、
            <br />
            大学祭をさらなる高みへ。
          </h1>
          <p
            className="sectionText"
            style={{ fontSize: "16px", lineHeight: "1.8", color: "#4b5563" }}
          >
            Albus. は、共に大学祭を作り上げてきたメンバーによって結成された、学祭実行委員会OBによるクリエイティブチームです。<br/>
            自分たちが所属していた大学祭実行委員会をテクノロジーの力でサポートしたい。そんな強い重いから私たちの活動は始まりました。<br/><br/>
            グループ名である albus（アルバス）は、ラテン語で「白」を意味します。
            まだデジタル化の基盤が整っていない真っ白な状態から寄り添い、現場の課題にどこまでも向き合うこと。
            そして、大学祭実行委員会の可能性をともに広げていくパートナーであり続けること。それが私たちの目標です。
          </p>
        </section>

        {/* メンバー紹介 */}
        <section
          style={{
            marginBottom: "64px",
            borderTop: "1px solid #e2e8f0",
            paddingTop: "48px",
          }}
        >
          <p className="label">Team Members</p>
          <h2 style={{ fontSize: "28px", marginBottom: "32px" }}>
            メンバー
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {members.map((member, idx) => (
              <div
                key={idx}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: "20px", color: "#0f172a" }}>
                    {member.name}
                  </h3>
                  {/* <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#2563eb', background: '#eff6ff', padding: '4px 10px', borderRadius: '999px' }}>
                    {member.role}
                  </span> */}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    color: "#4b5563",
                    lineHeight: "1.6",
                  }}
                >
                  {member.bio}
                </p>
                {/* <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '4px' }}>
                  {member.skills.map((skill, sIdx) => (
                    <span key={sIdx} style={{ fontSize: '12px', color: '#64748b', background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px' }}>
                      {skill}
                    </span>
                  ))}
                </div> */}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
