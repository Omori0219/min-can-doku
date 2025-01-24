"use client";

import { useState } from "react";

export function TermsContent() {
  const [language, setLanguage] = useState<"ja" | "zh">("ja");

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{language === "ja" ? "利用規約" : "使用条款"}</h1>
        <button onClick={() => setLanguage(language === "ja" ? "zh" : "ja")} className="px-3 py-1 rounded border hover:bg-gray-100">
          {language === "ja" ? "中文" : "日本語"}
        </button>
      </div>

      <div className="space-y-6">
        {language === "ja" ? (
          // 日本語の利用規約
          <>
            <section>
              <h2 className="text-xl font-semibold mb-3">1. はじめに</h2>
              <p className="text-gray-700">本利用規約は、「皆can読」の利用条件を定めるものです。 ユーザーの皆様は、本規約に同意の上で本サービスをご利用ください。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. 投稿について</h2>
              <p className="text-gray-700">本サービスは、日本語と中国語の共通表現を見つけることを目的としています。 投稿内容は以下の条件を満たす必要があります：</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
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
          </>
        ) : (
          // 中国語の利用規約
          <>
            <section>
              <h2 className="text-xl font-semibold mb-3">1. 序言</h2>
              <p className="text-gray-700">本使用条款规定了&quot;皆can读&quot;的使用条件。 用户在使用本服务时，请确认同意本条款。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. 关于发帖</h2>
              <p className="text-gray-700">本服务旨在发现日语和中文的共同表达。 发帖内容需要满足以下条件：</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>不得侵犯他人权利</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. 禁止事项</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>发布违法内容</li>
                <li>诽谤他人</li>
                <li>传播垃圾信息或恶意软件</li>
                <li>妨碍服务运营的行为</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. 免责声明</h2>
              <p className="text-gray-700">本服务不保证发帖内容的准确性和可靠性。 对于使用本服务而产生的损失，运营方不承担责任。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. 条款变更</h2>
              <p className="text-gray-700">运营方可以根据需要修改本条款。 修改后的条款将在本服务上公告后生效。</p>
            </section>
          </>
        )}
      </div>
    </>
  );
}
