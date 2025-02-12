// import React from 'react';
import CustomH1 from "@/components/CustomH1";

const PrivacyPolicy = () => {
    return (
        <div>
            <div className="font-playfair">
                <CustomH1>プライバシーポリシー</CustomH1>
                <p>当サイトでは、お問い合わせフォームを通じて収集する情報は、以下の通りです。</p>
            </div>

            <div className="font-playfair">
                <CustomH1>収集する情報</CustomH1>
                <p>お問い合わせフォームにご記入いただく情報は、名前とメールアドレスのみです。</p>
            </div>

            <div className="font-playfair">
                <CustomH1>利用目的</CustomH1>
                <p>収集した情報は、お問い合わせに対する返信やご連絡を行うためにのみ使用いたします。</p>
            </div>

            <div className="font-playfair">
                <CustomH1>情報の保管</CustomH1>
                <p>収集した情報は、お問い合わせへの返信後、特に保存の必要がない場合は速やかに削除いたします。</p>
            </div>

            <div className="font-playfair">
                <CustomH1>第三者への提供</CustomH1>
                <p>収集した情報は、第三者に提供することはありません。ただし、法律に基づき開示を求められた場合を除きます。</p>
            </div>

            <div className="font-playfair">
                <CustomH1>ユーザーの権利</CustomH1>
                <p>ご自身の情報に関する確認、訂正、削除をご希望の場合は、お問い合わせフォームまたは以下の連絡先までご連絡ください。</p>
            </div>

            <div className="font-playfair">
                <CustomH1>セキュリティ対策</CustomH1>
                <p>収集した情報は、適切な方法で管理し、不正アクセスや漏洩を防止するための対策を講じています。</p>
            </div>

        </div>
    );
};

export default PrivacyPolicy;