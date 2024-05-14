


import Image from "next/image";
import Link from "next/link";
import InnerBanner from "@/components/InnerBanner";
import BannerImg from '@/assets/img/banner-privacy-policy.jpg'
export default function Page() {

    return (
        <>

            <InnerBanner img={BannerImg} title="Brewery Hours" des="TERMS OF SERVICE" />

            <div className="p-10">
                <div className="container">

                    <h2 className="text-uppercase">Terms of Service</h2>
                    <p className="tg-last-updated-date">Last updated: Oct 6, 2022 10:04 PM</p><p>Please read this Terms of Service ("Terms", "Terms of Service") carefully before using the Brewery Hours Application (the "Application") operated by Brewery Hours, a(n) Corporation formed in Georgia, United States  ("us","we","our") as this Terms of Service contains important information regarding limitations of our liability. Your access to and use of this Application is conditional upon your acceptance of and compliance with these Terms. These Terms apply to everyone, including but not limited to visitors, users and others, who wish to access and use the Application.</p>

                    <p>By accessing or using the Application, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you do not have our permission to access or use the Application.</p>

                    <h2 className="text-center text-uppercase">Accounts</h2>

                    <p>When you create an account on our Application, you guarantee that you are 18 years of age or older and that the information that you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Application.</p>

                    <p>You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Application or a third party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>

                    <p>We reserve the right to terminate your account anytime at our sole discretion. You can terminate your account by contacting us.</p> <h2 className="text-center text-uppercase">Comments and uploading content</h2><p>By submitting a comment or uploading content onto this Application, you grant Brewery Hours a worldwide, non-exclusive, perpetual, royalty-free license to reproduce, publish and distribute the comment or content. When you make a comment or upload any content onto this Application, you agree that such comment or content may be viewed by other parties and it is your responsibility to ensure that the comment or content does not contain any confidential or proprietary information. You are also responsible for ensuring that your content or comment does not violate any laws, rules or regulations. We reserve the right to remove any content or comment at any time in our sole discretion.</p>

                    <p>The following is a non-exhaustive list of types of content or comments that you are prohibited from posting on our Application:</p>
                    <ul>
                        <li>Content that harasses others;</li>
                        <li>Content that is discriminatory or offensive;</li>
                        <li>Swearing, name calling and otherwise abusive content;</li>
                        <li>Pornographic and sexually explicit content;</li>
                        <li>Content displaying, depicting or suggesting violence;</li>
                        <li>Content that exploits or abuses children;</li>
                        <li>Content encouraging or committing illegal acts;</li>
                        <li>Content sharing personal information without consent;</li>
                        <li>Content infringing on someone’s rights, including intellectual property rights;</li><li>Content advertising products or services without our permission;</li>
                        <li>Content whose purpose is spamming others.</li>
                    </ul>

                    <h2 className="text-center text-uppercase">Prohibited uses</h2>

                    <p>You agree that you will use this Application in accordance with all applicable laws, rules, regulations and these Terms at all times. The following is a non-exhaustive list of prohibited uses of this Application. You agree that you will not perform any of the following prohibited uses:</p>

                    <ol>
                        <li>Impersonating or attempting to impersonate Brewery Hours or its employees, representatives, subsidiaries or divisions;</li>
                        <li>Misrepresenting your identity or affiliation with any person or entity;</li>
                        <li>Sending or attempting to send any advertising or promotional material, including but not limited to spam, junk mail, chain mail or any similar material;</li>
                        <li>Engaging in any conduct that restricts or inhibits any person’s use or enjoyment of the Application, or which, as determined in our sole discretion, may harm us or the users of this Application or expose us or other users to liability;</li><li>Using the Application in any manner that could disable, overburden, damage or impair the Application or interfere with another party’s use of the Application;</li>
                        <li>Using any robot, spider or other similar automatic technology, process or means to access or use the Application for any purpose, including monitoring or copying any of the material on this Application;</li>
                        <li>Using any manual process or means to monitor or copy any of the material on this Application or for any other unauthorized purpose;</li>
                        <li>Using any device, software, means or routine that interferes with the proper working of the Application, including but not limited to viruses, trojan horses, worms, logic bombs or other such materials;</li>
                        <li>Attempting to gain unauthorized access to, interfering with, damaging or disrupting any parts of the Application, the server(s) on which the Application is stored, or any server, computer or database connected to the Application;</li>
                        <li>Attempting to attack or attacking the Application via a denial-of-service attack or a distributed denial-of-service attack;</li>
                        <li>Otherwise attempting to interfere with the proper working of the Application;</li>
                        <li>Using the Application in any way that violates any applicable federal, state or local laws, rules or regulations.</li>
                    </ol>

                    <h2 className="text-center text-uppercase"><span className="text-uppercase">No warranty on Application</span></h2>

                    <p className="text-uppercase">This Application is provided “as is,” No warranty, express or implied (including any implied warranty of merchantability, of satisfactory quality or fitness for a particular purpose or use) shall apply to this Application, whether arising by law, course of dealing, course of performance, usage of trade or otherwise.</p>

                    <h2 className="text-center text-uppercase">Availability, errors and inaccuracies</h2>

                    <p>We assume no liability for the availability, errors or inaccuracies of the information, products or services provided on this Application. We may experience delays in updating information on this Application and in our advertising on other websites. The information, products and services found on the Application may contain errors or inaccuracies or may not be complete or current. Products or services may be incorrectly priced or unavailable. We expressly reserve the right to correct any pricing errors on our Application. The inclusion or offering of any product or service on this Application does not constitute an endorsement or recommendation of such product or service by us. </p>

                    <h2 className="text-center text-uppercase"><span className="text-uppercase">Damages and limitation of liability</span></h2>

                    <p className="text-uppercase">In no event shall Brewery Hours be liable for any direct, indirect, punitive, incidental, special or consequential damages arising out of, relating to or in any way connected with your access to, display of or use of this Application or with the delay or inability to access, display or use this Application, including but not limited to your reliance upon opinions or information appearing on this Application; any computer viruses, information, software, linked websites operated by third parties, products or services obtained through this Application, whether based on a theory of negligence, contract, tort, strict liability, consumer protection statutes or otherwise, even if Brewery Hours has been advised of the possibility of such damages. </p><h2 className="text-center text-uppercase">Links to third party websites</h2>

                    <p>This Application may contain hyperlinks to websites operated by third parties and not by us. We provide such hyperlinks for your reference only. We do not control such websites and are not responsible for their contents or the privacy or other practices of such websites. Further, it is your responsibility to take precautions to ensure that whatever links you click on or software that you download, whether from this Application or other websites or applications, is free of such items as viruses, worms, trojan horses, defects and other items of a destructive nature. Our inclusion of hyperlinks to such websites does not imply any endorsement of the material on such websites or any association with their operators. </p>

                    <h2 className="text-center text-uppercase">Intellectual property and DMCA notice and procedure for intellectual property infringement claims</h2>

                    <p>All contents of this Application are ©2019 - 2024 Brewery Hours or third parties. All rights reserved. Unless specified otherwise, this Application and all content and other materials on this Application including but not limited to all logos, designs, text, graphics, pictures, information, data, software, sound files and arrangement thereof (collectively, “Content”) are the proprietary property of Brewery Hours and are either registered trademarks, trademarks or otherwise protected intellectual property of Brewery Hours or third parties in the United States and/or other countries.</p>

                    <p>If you are aware of a potential infringement of our intellectual property, please contact Jason Bass at info@breweryhours.com. </p>

                    <p>We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Application infringes on the copyright, trademark or other intellectual property rights of any person or entity.</p>

                    <p>If you believe in good faith that the Content infringes on your intellectual property rights, you or your agent may send us a written notice of such infringement titled “Infringement of Intellectual Property Rights - DMCA.” Your notice to us must include the following information:</p>

                    <ol>
                        <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the intellectual property right’s interest;</li>
                        <li>A description of the work that you claim has been infringed, including the URL (i.e., web page address) of the location where the work exists or a copy of the work;</li>
                        <li>Your name, email, address and telephone number; and</li>
                        <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the owner of the work, its agent or the law.</li>
                    </ol>

                    <p>Please note that we will not process your complaint if it is not properly filled out or is incomplete. You may be held accountable for damages, including but not limited to costs and attorneys’ fees for any misrepresentation or bad faith claims regarding the infringement of your intellectual property rights by the Content on this Application.</p>

                    <p>You may submit your claim to us by contacting us at:</p>
                    <p>Brewery Hours<br />Jason Bass<br />info@breweryhours.com<br />(302) 503-2337<br />73 Silverbell Ln, Sharpsburg, GA 30277<br />
                        <span className="text-uppercase">United States</span></p>

                    <h2 className="text-center text-uppercase">Governing law, severability, dispute resolution and venue</h2>

                    <p>These Terms shall be governed and construed in accordance with the laws of the state of Georgia, United States, without regard to its conflict of laws provisions. <span className="text-uppercase">These terms shall not be governed by the United Nations convention on contracts for the sale of international goods, the Uniform Commercial Code, nor Incoterms</span>.</p>

                    <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of that right or provision. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between you and us regarding our Application, and supersede and replace any prior agreements we might have had with you regarding the Application. </p>

                    <p>Any controversy or claim arising out of or relating to these Terms including but not limited to the interpretation or breach thereof shall be resolved in a court of competent jurisdiction in Coweta County, Georgia.</p>

                    <p className="text-uppercase">You and Brewery Hours agree that each may bring claims against the other only in your or its individual capacity and not as a plaintiff or class member in any class or representative action.</p>

                    <h2 className="text-center text-uppercase">Changes to Terms of Service</h2>

                    <p>We reserve the right to make changes to these Terms of Service at any time. We will not provide you with any notice when we make changes to this Terms of Service. </p>

                    <h2 className="text-center text-uppercase">Questions</h2><p>If you have any questions about our Terms of Service, please contact us at info@breweryhours.com.</p>



                </div>
            </div>
        </>
    );
}
