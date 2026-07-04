export default function Privacy() {
  return (
    <div className="site">
      <div style={{ maxWidth: '800px', margin: '48px auto', lineHeight: '1.8', color: '#4b5563' }}>
        <p className="label">Legal</p>
        <h1 style={{ fontSize: '32px', color: '#0f172a', marginBottom: '24px' }}>プライバシーポリシー</h1>
        <p style={{ marginBottom: '32px' }}>
          有志学生チームAlbus（以下、「当チーム」といいます）は、当チームが開発・運営する各種サービスおよび本ウェブサイト（以下、「本サービス」といいます）における、ユーザーの個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
        </p>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', marginBottom: '16px' }}>
            1. 個人情報の取得
          </h2>
          <p>
            当チームは、本サービスにおいて以下のような個人情報を取得することがあります。
          </p>
          <ul>
            <li>お問い合わせフォームに入力された情報（氏名、メールアドレス、お問い合わせ内容）</li>
            <li>ご意見・ご要望フォームに入力された情報</li>
          </ul>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', marginBottom: '16px' }}>
            2. 個人情報の利用目的
          </h2>
          <p>
            取得した個人情報は、以下の目的のためにのみ利用し、目的外の利用は行いません。
          </p>
          <ul>
            <li>ユーザーからのお問い合わせに対応するため</li>
            <li>本サービスの機能改善や用語追加のご要望にお応えするため</li>
            <li>本サービスに関する重要なお知らせ等のご連絡のため</li>
          </ul>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', marginBottom: '16px' }}>
            3. 個人情報の第三者提供
          </h2>
          <p>
            当チームは、法令に基づく場合や本人の同意がある場合を除き、個人情報を第三者に提供することはありません。
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', marginBottom: '16px' }}>
            4. 免責事項
          </h2>
          <p>
            当チームは、本サービス上の情報の正確性について万全を期していますが、ユーザーが本サービスの情報を用いて行う一切の行為について何ら責任を負うものではありません。
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', marginBottom: '16px' }}>
            5. お問い合わせ
          </h2>
          <p>
            個人情報の取り扱いに関するご質問がございましたら、本ウェブサイトの「お問い合わせ」よりご連絡ください。
          </p>
        </section>
      </div>
    </div>
  );
}
