import { pageMetadata } from '../lib/site';
// 臨時対応(yuiki.dev誘導)：お問い合わせフォームが直ったら、連絡先を /contact に戻す
import { TEMPORARY_CONTACT_URL } from '../components/TemporaryContactNotice';

export const metadata = pageMetadata({
  title: 'メンバー募集',
  description:
    'Albus. では、大学祭の運営をもっと良くしたいと考える仲間を募集しています。企画や開発、実行委員会と一緒に進めるサービスづくりに興味がある方は、お気軽にご連絡ください。',
  path: '/recruit',
});

// メンバーとして関われること（実際の活動内容に基づいて書く）
const activities = [
  {
    title: '現場の課題を形にする',
    text: '大学祭実行委員会の声をもとに、どんなサービスが必要かを考え、企画・設計します。',
  },
  {
    title: 'Webサービスをつくる',
    text: 'Next.js や TypeScript、Cloudflare などを使い、実際の大学祭で使われるサービスを開発します。',
  },
  {
    title: '実行委員会と一緒に進める',
    text: '大学祭用語集のように、実行委員会のメンバーと共同でサービスをつくり、改善を重ねます。',
  },
];

const wanted = [
  '大学祭の運営に関わった経験を活かしたい方',
  'Webサービスの企画・開発・デザインに興味がある方',
  '大学祭に関わる人たちが、もっと動きやすくなる仕組みをつくりたい方',
];

export default function Recruit() {
  return (
    <div className="site">
      <div className="pageContainer">
        <section className="recruitSection">
          <p className="label reveal">Join us</p>
          <h1 className="pageTitle reveal">メンバー募集</h1>
          <p className="sectionText pageText reveal">
            {'Albus. では、大学祭の運営をもっと良くしたいと考える仲間を募集しています。現場で感じてきた不便や手間を、一緒にサービスで解消していきませんか。'}
          </p>
        </section>

        <section className="recruitSection pageSectionDivided">
          <p className="label reveal">What you can do</p>
          <h2 className="pageHeading reveal">Albus. で関われること</h2>
          <div className="recruitGrid">
            {activities.map((activity) => (
              <div key={activity.title} className="panel recruitCard reveal">
                <h3 className="recruitCardTitle">{activity.title}</h3>
                <p className="recruitCardText">{activity.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="recruitSection pageSectionDivided">
          <p className="label reveal">Who we&apos;re looking for</p>
          <h2 className="pageHeading reveal">こんな方と活動したいです</h2>
          <ul className="projectFeatures recruitList reveal">
            {wanted.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="recruitCta reveal">
          <p className="label">Contact</p>
          <h2 className="recruitCtaTitle">
            <span className="phrase">まずは、</span>
            <span className="phrase">気軽にお話ししましょう。</span>
          </h2>
          <p className="recruitCtaText">
            {'募集フォームは設けていません。興味をお持ちの方は、メンバーのサイト（yuiki.dev）右上の「Contact」ボタンからご連絡ください。「話を聞いてみたい」という段階でも大丈夫です。'}
          </p>
          {/* 臨時対応(yuiki.dev誘導)：お問い合わせフォームが直ったら、/contact への Link に置き換える */}
          <a
            href={TEMPORARY_CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="primaryButton"
          >
            yuiki.dev から連絡する
          </a>
        </section>
      </div>
    </div>
  );
}
