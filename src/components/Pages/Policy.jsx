import { useParams } from "react-router-dom";
import styles from "./Policy.module.css";
import Footer from "../Main/Footer";

const Policy = () => {
  const { type } = useParams();

  const getTitle = () => {
    if (type === "terms-of-purchase") return "TERMS OF PURCHASE";
    if (type === "terms-of-use") return "TERMS OF USE";
    return "PRIVACY POLICY";
  };

  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.pageTitle}>{getTitle()}</h1>

          <div className={styles.policyText}>
            <p className={styles.title}>This website is operated by:</p>
            <p className={styles.text}>
              LAJ Lifestyle Private Limited <br />
              22, South Drive, <br />
              DLF Chattarpur Farms, <br />
              New Delhi, <br />
              India- 110074
            </p>
            <h3>
              THE USE OF THIS WEBSITE IS SUBJECT TO THE FOLLOWING TERMS OF USE:
            </h3>
            <p>
              The content of the pages of this website is for your general
              information and use only. In order to fully understand your
              rights, we encourage you to read this Privacy Policy, which is
              effective from 25th May 2018. This Privacy Policy applies to all
              personal information we collect from and about you, including on
              our website located at www.six5six.in , www.six5sixstreet.com ,
              www.six5sixsport.com ; through event registrations and sign-ups;
              at promotional events; by phone. email, or text; through social
              media; or when you enquire about our services.
            </p>
            <p>
              Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable. It
              shall be your own responsibility to ensure that any products,
              services or information available through this website meet your
              specific requirements. This website contains material which is
              owned by or licensed to us. Your use of this website and any
              dispute arising out of such use of the website is subject to the
              laws of India or other regulatory authority.
            </p>
            <h3>
              THROUGH OUR PRIVACY POLICY, YOU WILL BE ABLE TO SEEK ANSWERS TO
              THE FOLLOWING QUESTIONS -
            </h3>
            <ul>
              <li>The role of your consent in our privacy policy</li>
              <li>Information we collect</li>
              <li>What we use the information for</li>
              <li>How we use cookies</li>
              <li>Links to other websites and third parties</li>
              <li>Controlling your personal information</li>
            </ul>
            <p>
              We reserve the right to change these terms at any time and any
              such change will be effective to all new orders once included in
              the text of these terms and published on the website.
            </p>
            <p>
              We make every effort to protect the privacy of our users and
              customers. As such, this privacy policy sets out how LAJ Lifestyle
              Private Limited (hereafter referred to as 'us' or 'we') uses and
              protects any information that you give us when you use this
              website. We are committed to ensuring that your privacy is
              protected. Should we ask you to provide certain information by
              which you can be identified when using this website, then you can
              be assured that it will only be used in accordance with this
              privacy statement. We may change this policy occasionally by
              updating this page. You should check this page from time to time
              to ensure that you are aware of any changes. This policy is
              effective from 1st September, 2019
            </p>
            <p>
              By accessing any part of the Website or using any of our services,
              you consent to and agree with this Privacy Policy. This Privacy
              Policy is part of the Terms and Conditions of Use governing your
              use of the Website and the Services. Please read the Terms and
              Conditions of Use. If you do not agree with any part of this
              Privacy Policy, please do not use the Website or the Services.
            </p>
            <h3>INFORMATION WE MAY COLLECT</h3>
            <p>
              We collect information from you when you create an account on our
              website; fill out a form and submit it to us in any manner;
              contact us, through our website or through social media; or
              otherwise provide information to us.
            </p>
            <p>
              When using our website, you may be asked to provide your name and
              contact information including email address, postcode, preferences
              and interests, or other information relevant to customer surveys
              and/or offers. The personal information that you provide must be
              true and accurate. We require this information to understand your
              needs and provide you with a better service. We may periodically
              send promotional emails about new products, special offers or
              other information, which we think you may find interesting via the
              email address that you have provided. Occasionally, we may also
              use your information to contact you for market research purposes.
              We may contact you by email, phone or mail. We may use the
              information to customize the website according to your interests.
              We are committed to ensuring that your information is secure.
            </p>
            <p>
              Please note that when you delete your account information on the
              Website, or terminate your use of the Services, we may retain your
              information for a reasonable period afterward for the purpose of
              recordkeeping, account management and fraud prevention activities.
            </p>
            <p>
              We may also collect information about your browsing behavior, such
              as the date/time you visit the website, the website pages that you
              visit, the time you spend viewing a page, and the number of times
              you return to the Website. The information is used for internal
              purposes by us to provide better technical support as well as for
              marketing research and purposes.
            </p>
            <p>
              In order to prevent unauthorized access or disclosure we have put
              in place suitable physical, electronic and managerial procedures
              to safeguard and secure the information we collect online.
            </p>
            <h3>WHAT WE USE THE INFORMATION FOR</h3>
            <p>
              Any of the information that we collect from you may be used in one
              (or more) of the following ways:
            </p>
            <ul>
              <li>
                To complete the orders placed through our website and ship them
                to you
              </li>
              <li>To personalise and improve your experience of our website</li>
              <li>To keep you updated about the status of your order</li>
              <li>To improve customer services</li>
              <li>To process transactions</li>
              <li>
                To keep you updated with our latest offers, sales and
                collections
              </li>
              <li>To send periodic newsletters</li>
              <li>To understand your needs better</li>
              <li>To complete our market research</li>
            </ul>
            <p>
              If you no longer want to receive our e-mails, offers, updates on
              services, newsletters, or other communications, please send an
              email to unsubscribe or follow the “unsubscribe” instructions at
              the bottom of each email or communication.
            </p>
            <h3>HOW WE USE COOKIES:</h3>
            <p>
              A cookie is a small file that asks permission to be placed on your
              computer's hard drive. Once you agree, the file is added and the
              cookie helps analyze web traffic or lets you know when you visit a
              particular site. Cookies allow web applications to respond to you
              as an individual. The web application can tailor its operations to
              your needs, likes and dislikes by gathering and remembering
              information about your preferences. We use traffic log cookies to
              identify which pages are being used. This helps us analyze data
              about webpage traffic and improve our website in order to tailor
              it to customer needs. We only use this information for statistical
              analysis purposes and then the data is removed from the system.
              Overall, cookies help us provide you with a better website, by
              enabling us to monitor which pages you find useful and which you
              do not. A cookie in no way gives us access to your computer or any
              information about you, other than the data you choose to share
              with us. You can choose to accept or decline cookies. Most web
              browsers automatically accept cookies, but you can usually modify
              your browser setting to decline cookies if you prefer. This may
              prevent you from taking full advantage of the website.
            </p>
            <h3>LINKS TO OTHER WEBSITES AND THIRD PARTIES</h3>
            <p>
              Our website may contain links to other websites of interest.
              However, once you have used these links to leave our site, you
              should note that we do not have any control over that other
              website. Therefore, we cannot be responsible for the protection
              and privacy of any information which you provide whilst visiting
              such sites and such sites are not governed by this privacy
              statement. You should exercise caution and look at the privacy
              statement applicable to the website in question.
            </p>
            <p>
              We may share your personally identifiable information with trusted
              third parties who assist us in operating our website, and
              fulfilling our services to you. Examples include fulfilling
              requests for orders, delivering packages, sharing your information
              with a shipping agent, processing credit card payments, and
              establishing new collaborations. These parties agree to keep this
              information confidential.
            </p>
            <h3>CONTROLLING YOUR PERSONAL INFORMATION</h3>
            <p>
              We will not sell, distribute or lease your personal information to
              third parties unless we have your permission or are required by
              law to do so. We may use your personal information to send you
              promotional information about third parties, which we think you
              may find interesting. If you believe that any information we are
              holding on you is incorrect or incomplete, please write or email
              us as soon as possible, using the address below. We will promptly
              correct any information found to be incorrect.
            </p>
            <h3>CONTACTING US</h3>
            <p>
              If there are any questions regarding this privacy policy you may
              contact us at:
              <br />
              LAJ Lifestyle Private Limited
              <br />
              22, South Drive,
              <br />
              DLF Chattarpur Farms,
              <br />
              New Delhi,
              <br />
              India- 110074
              <br />
              <a href="mailto:contact@six5six.in">contact@six5six.in</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Policy;
