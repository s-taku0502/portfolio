// import React from 'react';
import "../../styles/globals.css";
import CustomH2 from "@/components/CustomH2";
import Privacy_div from "@/components/Privacy";

const PrivacyPolicy = () => {
    return (
        <>
            <div className="">
                <Privacy_div className="text-center">
                    <CustomH2>プライバシーポリシー</CustomH2>
                    <p>　当サイトでは、お問い合わせフォームを通じて収集する情報は、以下の通りです。</p>
                </Privacy_div>

                <Privacy_div>
                    <CustomH2>収集する情報</CustomH2>
                    <p>　お問い合わせフォームにご記入いただく情報は、名前とメールアドレスのみです。</p>
                </Privacy_div>

                <Privacy_div>
                    <CustomH2>利用目的</CustomH2>
                    <p>　収集した情報は、お問い合わせに対する返信やご連絡を行うためにのみ使用いたします。</p>
                </Privacy_div>

                <Privacy_div>
                    <CustomH2>情報の保管</CustomH2>
                    <p>　収集した情報は、お問い合わせへの返信後、特に保存の必要がない場合は速やかに削除いたします。</p>
                </Privacy_div>

                <Privacy_div>
                    <CustomH2>第三者への提供</CustomH2>
                    <p>　収集した情報は、第三者に提供することはありません。ただし、法律に基づき開示を求められた場合を除きます。</p>
                </Privacy_div>

                <Privacy_div>
                    <CustomH2>ユーザーの権利</CustomH2>
                    <p>　ご自身の情報に関する確認、訂正、削除をご希望の場合は、お問い合わせフォームまたは以下の連絡先までご連絡ください。</p>
                </Privacy_div>

                <Privacy_div>
                    <CustomH2>セキュリティ対策</CustomH2>
                    <p>　収集した情報は、適切な方法で管理し、不正アクセスや漏洩を防止するための対策を講じています。</p>
                </Privacy_div>

            </div>
        </>
    );
};

export default PrivacyPolicy;

