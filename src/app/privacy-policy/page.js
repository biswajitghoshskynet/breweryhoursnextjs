


import Image from "next/image";
import Link from "next/link";
import InnerBanner from "@/components/InnerBanner";
import BannerImg from '@/assets/img/banner-privacy-policy.jpg'
export default function Page() {

    return (
        <>

            <InnerBanner img={BannerImg} title="Brewery Hours" des="PRIVACY POLICY" />

            <div className="p-10">
                <div className="container">

                    
                        <h2 className="text-uppercase">Privacy Policy</h2>
                        <p>Last updated: Jul 6, 2023 10:15 AM</p>
                        <p>We value your privacy very highly. Please read this Privacy Policy carefully before using the Brewery Hours Application (the &quot;Application&quot;) operated by Brewery Hours, a(n) Corporation formed in Georgia, United States  (&quot;us&quot;, &quot;we&quot;, &quot;our&quot;) as this Privacy Policy contains important information regarding your privacy and how we may use the information we collect about you.</p>

                        <p>Your access to and use of the Application is conditional upon your acceptance of and compliance with this Privacy Policy. This Privacy Policy applies to everyone, including, but not limited to: visitors, users, and others, who wish to access or use the Application.</p>

                        <p>By accessing or using the Application, you agree to be bound by this Privacy Policy. If you disagree with any part of the Privacy Policy, then you do not have our permission to access or use the Application.</p>
                  

                 
                        <h2 className="text-uppercase text-center">What information we collect</h2>
                        <p>We collect any and all information that you enter on this Application. We collect the following information about you:</p>
                        <div className="table-responsive yellowTable mb-4">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Category of information</th><th>Specific piece of information</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr data-heading="Identifying information - Name"><td>Identifying information</td><td>Name</td></tr><tr data-heading="Identifying information - Email address"><td>Identifying information</td><td>Email address</td>
                                    </tr>
                                    <tr data-heading="Identifying information - Device identifier">
                                        <td>Identifying information</td>
                                        <td>Device identifier</td>
                                    </tr>
                                    <tr data-heading="Internet or other electronic activity - Browsing history">
                                        <td>Internet or other electronic activity</td>
                                        <td>Browsing history</td>
                                    </tr>
                                    <tr data-heading="Internet or other electronic activity - Search history">
                                        <td>Internet or other electronic activity</td>
                                        <td>Search history</td>
                                    </tr>
                                    <tr data-heading="Internet or other electronic activity - Information regarding your interaction with our website or application">
                                        <td>Internet or other electronic activity</td>
                                        <td>Information regarding your interaction with our website or application</td>
                                    </tr>
                                    <tr data-heading="Internet or other electronic activity - Information regarding your interactions with advertisements">
                                        <td>Internet or other electronic activity</td>
                                        <td>Information regarding your interactions with advertisements</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
               
                
                        <h2 className="text-center text-uppercase">How we may use your information</h2>
                        <p>We may use the information that you provide us for the following: </p>
                        <ul className="mb-4">
                            <li>Enforcing our Terms of Service;</li>
                            <li>Marketing and advertising;</li>
                            <li>Participation in surveys and contests;</li>
                            <li>Performing services;</li>
                            <li>Providing customer service;</li>
                            <li>Verifying customer information;</li>
                            <li>Analytics;</li>
                            <li>Counting ad impressions to unique visitors;</li>
                            <li>Protecting against malicious, deceptive, fraudulent or illegal activity, and prosecuting those responsible for such activities;</li>
                            <li>Verifying position and quality of ad impressions.</li>
                        </ul>
                  

                    <h2 className="text-center text-uppercase">With whom we share your personal information</h2>
                    <p>We share the following personal information with the following categories of third parties:</p>
                    <div className="table-responsive yellowTable mb-4">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Category of personal information shared</th>
                                    <th>Specific piece of personal information shared</th>
                                    <th>Categories of third parties with whom personal information is/was shared</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr data-heading="Identifying information - Name">
                                    <td>Identifying information</td>
                                    <td>Name</td>
                                    <td><ul><li>Content management systems;</li><li>Customer management systems;</li><li>Email marketing vendors;</li><li>Email service providers;</li><li>Hosting providers;</li><li>Parties that need to operate the website.</li></ul></td>
                                </tr>
                                <tr data-heading="Identifying information - Email address">
                                    <td>Identifying information</td><td>Email address</td>
                                    <td><ul><li>Content management systems;</li><li>Customer management systems;</li><li>Email marketing vendors;</li><li>Email service providers;</li><li>Hosting providers;</li><li>Parties that need to operate the website.</li></ul>
                                    </td>
                                </tr>
                                <tr data-heading="Identifying information - Device identifier">
                                    <td>Identifying information</td>
                                    <td>Device identifier</td><td><ul><li>Advertising networks;</li><li>Content management systems;</li><li>Customer management systems;</li><li>Data analytics providers;</li><li>Email marketing vendors;</li><li>Email service providers;</li><li>Fraud prevention services vendors;</li><li>Hosting providers;</li><li>Parties that need to operate the website;</li><li>Social networks.</li></ul>
                                    </td>
                                </tr>
                                <tr data-heading="Internet or other electronic activity - Information regarding your interaction with our website or application">
                                    <td>Internet or other electronic activity</td>
                                    <td>Information regarding your interaction with our website or application</td>
                                    <td><ul><li>Advertising networks;</li><li>Content management systems;</li><li>Customer management systems;</li><li>Data analytics providers;</li><li>Email marketing vendors;</li><li>Email service providers;</li><li>Fraud prevention services vendors;</li><li>Hosting providers;</li><li>Parties that need to operate the website;</li><li>Social networks.</li></ul></td></tr><tr data-heading="Internet or other electronic activity - Information regarding your interactions with advertisements"><td>Internet or other electronic activity</td>
                                    <td>Information regarding your interactions with advertisements</td><td><ul><li>Advertising networks;</li><li>Content management systems;</li><li>Customer management systems;</li><li>Data analytics providers;</li><li>Email marketing vendors;</li><li>Email service providers;</li><li>Fraud prevention services vendors;</li><li>Hosting providers;</li><li>Parties that need to operate the website;</li><li>Social networks.</li></ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table></div>

                   
                        <h2 className="text-center text-uppercase">Sale of your information</h2>
                        <p>We do not sell your personal information. </p>
                   

                    
                        <h2 className="text-center text-uppercase">Cookies</h2>
                        <p>A cookie is a small piece of data sent from a application and stored on your device by your browser. This Application collects cookies. Please visit our Cookie Policy to learn more about what cookies we collect, why we collect them, and how to change your cookie settings.</p>
                    

                        <h2 className="text-center text-uppercase">Children&apos;s privacy</h2>
                        <p>This Application is intended for use by a general audience and does not offer services to children. Should a child whom we know to be under 18 send personal information to us, we will use that information only to respond to that child to inform him or her that they cannot use this Application.</p>
               

              
                        <h2 className="text-center text-uppercase">Analytics programs</h2>
                        <p>This Application uses Google Analytics to collect information about you and your behaviors. If you would like to opt out of Google Analytics, please visit <Link className="text-primary" href="https://tools.google.com/dlpage/gaoptout/" target="_blank">https://tools.google.com/dlpage/gaoptout/</Link>. </p>
             

                 
                        <h2 className="text-center text-uppercase">Exercising your rights</h2>
                        <p>You may opt out of future sales of personal information by submitting a consumer request to info@breweryhours.com. You may request the deletion of any data we have collected on you by sending an email to info@breweryhours.com.</p>
              

                
                        <h2 className="text-center text-uppercase">Third-party websites</h2>
                        <p>This Application may contain hyperlinks to websites operated by parties other than us. We provide such hyperlinks for your reference only. We do not control such websites and are not responsible for their contents or the privacy or other practices of such websites. It is up to you to read and fully understand their Privacy Policies. Our inclusion of hyperlinks to such websites does not imply any endorsement of the material on such websites or any association with their operators. </p>
               

                  
                        <h2 className="text-center text-uppercase">Do Not Track</h2>
                        <p>Do Not Track is a preference you can set on your browser to inform websites that you do not want to be tracked. We do not support Do Not Track (&quot;DNT&quot;). You can either enable or disable Do Not Track by visiting the Preferences or Settings page of your browser.</p>
                

                  
                        <h2 className="text-center text-uppercase">Changes to Privacy Policy</h2>
                        <p>We reserve the right to amend this Privacy Policy at any time. We will notify you of any changes to this Privacy Policy by posting the updated Privacy Policy to this website or application. </p>
                 

                 
                        <h2 className="text-center text-uppercase">Questions</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at info@breweryhours.com.</p>
                    

                </div>
            </div>
        </>
    );
}
