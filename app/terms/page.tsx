export default function Terms() {
  return (
    <div className="site">
      <div style={{ maxWidth: '800px', margin: '48px auto', lineHeight: '1.8', color: '#4b5563' }}>
        <p className="label">Legal</p>
        <h1 style={{ fontSize: '32px', color: '#0f172a', marginBottom: '24px' }}>利用規約</h1>
        <p style={{ marginBottom: '32px' }}>
          この利用規約（以下、「本規約」といいます）は、有志学生チームAlbus（以下、「当チーム」といいます）が本ウェブサイトおよび提供する各種アプリ（以下、「本サービス」といいます）の利用条件を定めるものです。ユーザーの皆様には、本規約に従って本サービスをご利用いただきます。
        </p>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', marginBottom: '16px' }}>
            第1条（適用）
          </h2>
          <p>
            本規約は、ユーザーと当チームとの間の本サービスの利用に関わる一切の関係に適用されるものとします。
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', marginBottom: '16px' }}>
            第2条（禁止事項）
          </h2>
          <p>
            ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
          </p>
          <ul>
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>本サービスの内容やプログラム等を書き換える、あるいはサーバーに過度な負荷をかける行為</li>
            <li>当チームのサービスの運営を妨害するおそれのある行為</li>
            <li>その他、当チームが不適切と判断した行為</li>
          </ul>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', marginBottom: '16px' }}>
            第3条（サービスの提供の停止等）
          </h2>
          <p>
            当チームは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
          </p>
          <ul>
            <li>本サービスに係るシステムの保守点検または更新を行う場合</li>
            <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
            <li>その他、当チームが本サービスの提供が困難と判断した場合</li>
          </ul>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', marginBottom: '16px' }}>
            第4条（免責事項）
          </h2>
          <p>
            当チームは、本サービスについて事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます）がないことを明示的にも黙示的にも保証しておりません。当チームは、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', marginBottom: '16px' }}>
            第5条（規約の変更）
          </h2>
          <p>
            当チームは、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
          </p>
        </section>
      </div>
    </div>
  );
}
