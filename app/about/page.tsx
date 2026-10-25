import { pageMetadata } from '../lib/site';

export const metadata = pageMetadata({
  title: '私たちについて',
  description:
    'Albus.（アルバス）は、大学祭実行委員会の出身者によるチームです。現場を知るメンバーが、それぞれの大学祭に合った仕組みで運営を支えます。私たちの想いとメンバーを紹介します。',
  path: '/about',
});

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
            大学祭の現場を、
            <br />
            すぐそばで支える。
          </h1>
          <p className="sectionText pageText">
            {'Albus. は、大学祭実行委員会で運営に携わってきたメンバーが集まったチームです。自分たちが過ごしてきた実行委員会の活動を、もっと動きやすくしたい。その思いから活動を始めました。'}
            <br /><br />
            {'大学祭の運営には、毎年の引き継ぎや委員どうしの情報共有、当日の問い合わせ対応など、人の手に頼ってきた仕事が数多くあります。一方で、規模も体制も大学祭ごとに異なり、同じ仕組みがどこでも通用するわけではありません。だからこそ私たちは、それぞれの大学祭の事情に耳を傾け、その現場に合ったサービスを一緒に考えます。'}
            <br /><br />
            {'albus（アルバス）は、ラテン語で「白」を意味します。デジタル化がまだ進んでいない真っ白な状態からでも寄り添い、現場の課題に向き合い続けること。そして、実行委員が本来やりたいことに時間を使える運営を、大学祭の新しいあたりまえにすること。それが私たちの目指す姿です。'}
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
