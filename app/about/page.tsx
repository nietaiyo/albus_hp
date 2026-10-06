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
      name: "JIN",
      // role: 'Backend & Infrastructure Engineer',
      bio: "白鷺祭企画部部長",
      // skills: ['Firebase', 'Node.js', 'GCP', 'NoSQL'],
    },
  ];

  // Todo: 仲間募集フォームを作る

  return (
    <div className="site">
      <div className="pageContainer">
        {/* ビジョン */}
        <section className="aboutSection">
          <p className="label">Vision</p>
          <h1 className="pageTitle aboutTitle">
            テクノロジーで、
            <br />
            大学祭をさらなる高みへ。
          </h1>
          <p className="sectionText pageText">
            Albus. は、共に大学祭を作り上げてきたメンバーによって結成された、学祭実行委員会OBによるクリエイティブチームです。<br />
            自分たちが所属していた大学祭実行委員会をテクノロジーの力でサポートしたい。そんな強い重いから私たちの活動は始まりました。<br /><br />
            グループ名である albus（アルバス）は、ラテン語で「白」を意味します。
            まだデジタル化の基盤が整っていない真っ白な状態から寄り添い、現場の課題にどこまでも向き合うこと。
            そして、大学祭実行委員会の可能性をともに広げていくパートナーであり続けること。それが私たちの目標です。
          </p>
        </section>

        {/* メンバー紹介 */}
        <section className="aboutSection pageSectionDivided">
          <p className="label">Team Members</p>
          <h2 className="pageHeading aboutMembersHeading">メンバー</h2>
          <div className="cardList">
            {members.map((member, idx) => (
              <div key={idx} className="panel memberCard">
                <div className="memberCardHeader">
                  <h3 className="memberName">{member.name}</h3>
                  {/* <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#2563eb', background: '#eff6ff', padding: '4px 10px', borderRadius: '999px' }}>
                    {member.role}
                  </span> */}
                </div>
                <p className="memberBio">{member.bio}</p>
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
