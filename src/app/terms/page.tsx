export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">利用規約</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. はじめに</h2>
          <p className="text-gray-700">本利用規約は、MIN CAN DOKUサービス（以下「本サービス」）の利用条件を定めるものです。 ユーザーの皆様は、本規約に同意の上で本サービスをご利用ください。</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. 投稿について</h2>
          <p className="text-gray-700">本サービスは、日本語と中国語の共通表現を見つけることを目的としています。 投稿内容は以下の条件を満たす必要があります：</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>漢字、英字、記号のみを使用すること</li>
            <li>140文字以内であること</li>
            <li>他者の権利を侵害しない内容であること</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. 禁止事項</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>違法な内容の投稿</li>
            <li>他者への誹謗中傷</li>
            <li>スパムやマルウェアの配布</li>
            <li>サービスの運営を妨げる行為</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. 免責事項</h2>
          <p className="text-gray-700">本サービスは、投稿内容の正確性や信頼性について保証するものではありません。 また、本サービスの利用により生じた損害について、運営者は責任を負いません。</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. 規約の変更</h2>
          <p className="text-gray-700">運営者は、必要に応じて本規約を変更することができます。 変更後の規約は、本サービス上で告知した時点で効力を生じるものとします。</p>
        </section>
      </div>
    </div>
  );
}
