import Link from "next/link";
import Container from "@/app/ui/Container/Container";
import Heading from "@/app/ui/LegalComponents/Heading/Heading";
import Paragraph from "@/app/ui/LegalComponents/Paragraph/Paragraph";
import { BoldText, NormalText } from "@/app/ui/LegalComponents/Text/Text";

export default function CookiePolicy() {
  return (
    <Container className="px-4 laptop:px-[200px] text-justify text-lg">
      <Heading>Cookie Policy</Heading>
      <Paragraph>Last updated: April 1, 2024</Paragraph>
      <Paragraph className="pt-4">
        Dear Guest (hereinafter referred to as{" "}
        <BoldText>&quot;You&quot;</BoldText> or{" "}
        <BoldText>&quot;Consumer&quot;</BoldText>),
      </Paragraph>
      <Paragraph className="pt-4">
        Welcome to{" "}
        <BoldText className="underline">united4digital.com,</BoldText>
        an online platform operated by <BoldText>United4Digital Ltd.</BoldText>,
        headquartered in Street index, City, United Kingdom (hereinafter
        referred to as
        <BoldText>&quot;We&quot;</BoldText> or the{" "}
        <BoldText>&quot;Company&quot;</BoldText>).
      </Paragraph>
      <Paragraph className="pt-4">
        In our ongoing effort to enhance your browsing experience, we utilize
        cookies on our website for various functionalities. Allow us to
        elucidate the nature and utilization of these cookies on our platform.
      </Paragraph>
      <Paragraph className="pt-4">
        A Cookie Policy is detailing the methods by which a website or online
        service employs cookies and related technologies to gather and manage
        user data. It encompasses details regarding the types of cookies
        utilized, their respective purposes, guidance on managing or disabling
        cookies for users, and specifics concerning third-party cookies. These
        policies serve as crucial tools for ensuring transparency and adherence
        to data protection laws, such as the General Data Protection Regulation
        (GDPR) in the European Union. They play a pivotal role in informing
        users about their privacy rights and the handling of their personal data
        during their interactions with the website.
      </Paragraph>
      <Paragraph className="pt-4">
        Some cookies, known as proprium cookies or first-party cookies, are
        directly conveyed and managed by us. Via these cookies, the Company
        gathers and handles your personal data. We aim to clarify how we gather
        this data, the purposes for which it is used, and your associated
        rights, in accordance with Article 13 of the General Data Protection
        Regulation (EU) 2016/679 (the &quot;GDPR&quot;).
      </Paragraph>
      <Paragraph className="pt-4">
        Conversely, other cookies, referred to as third-party cookies, are
        conveyed and managed by third parties. This policy provides links to the
        respective policies published by these third parties. We highly
        recommend you to carefully review these policies.
      </Paragraph>
      <Paragraph className="pt-4">
        If you are unfamiliar with cookies, we kindly ask you to thoroughly read
        this policy alongside the general privacy policy of the Website. This
        will enable you to make informed choices regarding your preferences.
      </Paragraph>
      <Paragraph className="pt-4">
        The Controller prioritizes the utmost protection of the privacy and
        personal data of its Consumers. For any inquiries related to this Cookie
        Policy, Consumers are encouraged to contact the Controller at any time
        via email at <BoldText>contact@united4digital.com</BoldText>
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>A. Understanding Cookies and Their Purpose:</BoldText>
      </Paragraph>
      <Paragraph className="pt-4">
        Cookies are small text files that websites visited by a consumer send
        directly to their device (typically, to the browser), where they are
        stored for transmission back to the same websites during the
        consumer&apos;s subsequent visits (known as{" "}
        <BoldText>proprium or first-party cookies</BoldText>). While browsing a
        website, a consumer&apos;s device may also receive cookies from other
        websites or web servers (referred to as{" "}
        <BoldText>third-party cookies</BoldText>). This occurs because the
        visited website may contain elements, such as images, maps, sounds, or
        links to specific web pages from other domains, which are hosted on
        servers different from the one hosting the requested page. Simply put,
        these cookies originate from websites other than the one currently being
        visited.
      </Paragraph>
      <Paragraph className="pt-4">
        Cookies can have a duration limited to a single browsing session on the
        browser (known as <BoldText>session cookies</BoldText>), which
        automatically deactivate once the consumer closes the browser.
        Alternatively, cookies may have a predetermined duration (known as{" "}
        <BoldText>permanent cookies</BoldText>), remaining stored and active on
        the hard disk until their expiration date. This allows them to continue
        gathering information during multiple browsing sessions on the browser.
      </Paragraph>
      <Paragraph className="pt-4">
        Cookies serve various purposes. Some are essential for enabling you to
        navigate the Website and utilize its functionalities (referred to as
        technical cookies). Others are utilized to gather statistical
        information, either in aggregate or individually, about the number of
        consumers accessing the Website and how it is utilized (known as
        <BoldText>monitoring cookies or analytics</BoldText>). Additionally,
        certain cookies are employed to track your consumer profile and display
        advertisements that align with your preferences and consumer habits
        (known as <BoldText>profiling cookies</BoldText>).
      </Paragraph>
      <Paragraph className="pt-4">
        To gain a more comprehensive understanding of the various categories of
        cookies mentioned, please continue reading this policy. Explore how each
        type functions and the purposes they serve. You are encouraged to freely
        decide whether to consent to their use or opt out accordingly.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>B. Technical Cookies:</BoldText>
      </Paragraph>
      <Paragraph className="pt-4">
        Technical cookies are exclusively utilized on the Website to facilitate
        your navigation and enable you to utilize its functionalities. These
        cookies are considered first-party cookies as they are conveyed directly
        by us on the Website. Their primary function is to enhance your browsing
        experience and ensure the proper functioning of the Website&apos;s
        features.
      </Paragraph>
      <Paragraph className="pt-4">
        Technical cookies serve the purpose of memorizing your preferences, such
        as your selected country, to streamline your browsing experience. These
        are commonly referred to as functionalities cookies. Unlike session
        cookies, which expire once the browsing session ends, functionalities
        cookies are often lasting cookies. They remain stored on your computer
        even after closing the browser until their scheduled expiration date or
        until you choose to delete them.
      </Paragraph>
      <Paragraph className="pt-6">
        The technical cookies currently used on the Website are as follows:
      </Paragraph>
      <ul className="list-decimal list-inside pt-4">
        <li className="text-lg font-bold">
          <BoldText>Cookie&apos;s denomination: </BoldText>
          <NormalText>acceptCookies</NormalText>
          <ul className="list-disc list-inside pl-5">
            <li>
              <BoldText>Coolie&apos;s category: </BoldText>
              <NormalText>Technical first-party cookie.</NormalText>
            </li>
            <li>
              <BoldText>Coolie&apos;s function: </BoldText>
              <NormalText>Functionality lasting.</NormalText>
            </li>
            <li>
              <BoldText>Function: </BoldText>
              <NormalText>
                Keeps the information about your preference regarding the
                enabling of cookies on this site.
              </NormalText>
            </li>
          </ul>
        </li>
        <li className="text-lg font-bold">
          <BoldText>Cookie&apos;s denomination: </BoldText>
          <NormalText>XSRF-TOKEN</NormalText>
          <ul className="list-disc list-inside pl-5">
            <li>
              <BoldText>Cookie&apos;s category: </BoldText>
              <NormalText>Technical first-party cookie.</NormalText>
            </li>
            <li>
              <BoldText>Cookie&apos;s function: </BoldText>
              <NormalText>Functionality lasting.</NormalText>
            </li>
            <li>
              <BoldText>Function: </BoldText>
              <NormalText>
                Acts as a security token used to prevent CSRF attacks. It is
                removed when the browsing session expires.
              </NormalText>
            </li>
          </ul>
        </li>
        <li className="text-lg font-bold">
          <BoldText>Cookie&apos;s denomination: </BoldText>
          <NormalText>VisitTrackSession</NormalText>
          <ul className="list-disc list-inside pl-5">
            <li>
              <BoldText>Cookie&apos;s category: </BoldText>
              <NormalText>Technical first-party cookie.</NormalText>
            </li>
            <li>
              <BoldText>Cookie&apos;s function: </BoldText>
              <NormalText>Functionality lasting.</NormalText>
            </li>
            <li>
              <BoldText>Function: </BoldText>
              <NormalText>
                Allows collecting data in an aggregate and completely anonymous
                form on the actions carried out by the consumer on the site.
              </NormalText>
            </li>
          </ul>
        </li>
      </ul>
      <Paragraph className="pt-4">
        As per the privacy law currently in force, the installation of technical
        cookies does not necessitate your prior consent. You are free to block
        the installation of technical cookies by adjusting your browser settings
        (refer to paragraph E, No. 1, for instructions on how to do this).
        However, please note that blocking the installation of technical cookies
        or deleting them thereafter may compromise your ability to access the
        Website, utilize its features in whole or in part, enable or disable
        certain functions, or receive certain services.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>C. Monitoring Cookies of &quot;Analytics&quot;</BoldText>
      </Paragraph>
      <Paragraph className="pt-4">
        Analytics are employed on the Website to gather statistical information,
        whether aggregated or not, regarding the number of consumers accessing
        the Website and their browsing patterns.
      </Paragraph>
      <Paragraph className="pt-4">
        The analytics cookies on this Website are third-party cookies, as they
        are not directly conveyed or installed by the Company, but by
        third-party entities. These cookies are utilized to track how consumers
        navigate the Website.
      </Paragraph>
      <Paragraph className="pt-4">
        The following third-party analytics may be installed on the Website
        without your prior consent, as they are less invasive and anonymized.
        Third parties cannot access disaggregated data at the IP address level,
        meaning they cannot identify your specific identity using these cookies:
      </Paragraph>
      <ul className="list-decimal list-inside pt-4">
        <li className="text-lg font-bold">
          Cookie&apos;s denomination: Google Analytics
          <ul className="list-disc list-inside pl-5">
            <li>
              <BoldText>Cookie&apos;s category: </BoldText>
              <NormalText>Third-party cookie analytics.</NormalText>
            </li>
            <li>
              <BoldText>Link disclosure / Instructions on opt-out: </BoldText>
              <NormalText>
                <Link
                  aria-label="Google Analytics link"
                  href="https://support.google.com/analytics/answer/4597324?hl=en"
                  className="text-sky-500 underline"
                >
                  Google Analytics Opt-out
                </Link>
                ,{" "}
                <Link
                  aria-label="Google Analytics Partner sites link"
                  href="https://policies.google.com/technologies/partner-sites?hl=en"
                  className="text-sky-500 underline"
                >
                  Google Analytics Partner Sites
                </Link>
                .
              </NormalText>
            </li>
          </ul>
        </li>
        <li className="text-lg font-bold">
          Cookie&apos;s denomination: Facebook
          <ul className="list-disc list-inside pl-5">
            <li>
              <BoldText>Coolie&apos;s category: </BoldText>
              <NormalText>Third-party cookie analytics.</NormalText>
            </li>
            <li>
              <BoldText>
                Link to disclosure / Instructions on opt-out:{" "}
              </BoldText>
              <NormalText>
                <Link
                  aria-label="Facebook Privacy Explanation link"
                  href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                  className="text-sky-500 underline"
                >
                  Facebook Privacy Explanation
                </Link>
                .
              </NormalText>
            </li>
          </ul>
        </li>
      </ul>
      <Paragraph className="pt-4">
        For this reason, a specific banner is prominently displayed when you
        access the Website, informing you that:
      </Paragraph>
      <ul className="list-decimal list-inside pt-4 text-lg">
        <li>Third-party analytics cookies are used on the Website.</li>
        <li>
          By closing the banner, surfing on the home page, or clicking any
          element on the home page outside the banner, you are providing your
          consent to the use of cookies.
        </li>
      </ul>
      <Paragraph className="pt-4">
        If you provide your consent to the use of cookies in this manner, we
        will track your consent using a specific technical cookie. This ensures
        that the cookies banner will not be displayed during your subsequent
        visits to the Website. However, please be aware that if you delete this
        technical cookie from your browser (as explained in paragraph E, No. 1),
        your consent tracking will be lost. Consequently, the cookies banner
        will reappear during your next visit to the Website.
      </Paragraph>
      <Paragraph className="pt-4">
        You are entirely free to block the installation of analytics cookies at
        any time, and doing so will not affect your ability to visit the Website
        or access its contents in any way. Please carefully review the
        third-party cookies policies by following the links provided in the
        table above to learn how to block them.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>D. Profiling Cookies</BoldText>
      </Paragraph>
      <Paragraph className="pt-4">
        Profiling cookies are utilized to generate a consumer&apos;s profile,
        which is based on the preferences and interests displayed by you during
        your internet browsing. The purpose is to display advertisements that
        are tailored to your profile. This allows the advertisements shown on
        our Website to be more relevant and of interest to you.
      </Paragraph>
      <Paragraph className="pt-4">
        Your prior consent is required to install such cookies, as mandated by
        the current privacy law. Therefore, when you access the Website, a
        specific banner is displayed, informing you that:
      </Paragraph>
      <ul className="list-decimal list-inside pt-4 text-lg">
        <li>Third-party analytics cookies are used on the Website.</li>
        <li>
          By closing the banner, surfing on the home page, or clicking any
          element on the home page outside the banner, you are providing your
          consent to the use of cookies.
        </li>
      </ul>
      <Paragraph className="pt-4">
        If you provide your consent to the use of cookies in this manner, we
        will track your consent using a specific technical cookie. This will
        prevent the cookies banner from being displayed during your subsequent
        visits to the Website. However, please be aware that if you delete this
        technical cookie from your browser (as explained in paragraph E, No. 1),
        your consent tracking will be lost, and the cookies banner will reappear
        during your next visit to the Website.
      </Paragraph>
      <Paragraph className="pt-4">
        You are completely free to block the installation of profiling cookies
        at any time, and this will not in any way compromise your ability to
        visit the Website and access its contents. If you choose to deactivate
        behavioral advertising, this does not mean that you will stop receiving
        advertisements on the Website. However, the banners displayed on the
        Website may not be tailored to reflect your interests or preferences
        based on the browser you are currently using.
      </Paragraph>
      <Paragraph className="pt-4">
        Certain third-party cookies are installed by entities with which we do
        not have a direct contractual relationship. Therefore, we provide you
        with links to the intermediary websites between us and these third
        parties. These websites contain (i) lists of the third parties
        installing profiling cookies on the Website and (ii) links to the
        privacy policies of such third parties, where you can find all the
        necessary information about their profiling cookies and how to oppose
        their installation (opt-out):
      </Paragraph>
      <ul className="list-disc list-inside pt-4">
        <li>
          <BoldText>Cookie&apos;s denomination: </BoldText>
          <NormalText>Facebook</NormalText>
          <ul className="list-disc list-inside pl-5">
            <li>
              <BoldText>Cookie&apos;s category: </BoldText>
              <NormalText>Third-party profiling cookie lasting</NormalText>
            </li>
            <li>
              <BoldText>Link to the policy: </BoldText>
              <NormalText>
                <Link
                  aria-label="Facebook - your online choices link"
                  href="https://www.youronlinechoices.com/uk/"
                  className="text-sky-500 underline"
                >
                  Your Online Choices - Facebook
                </Link>
              </NormalText>
            </li>
          </ul>
        </li>
        <li>
          <BoldText>Cookie&apos;s denomination: </BoldText>
          <NormalText>Linkedin</NormalText>
        </li>
        <ul className="list-disc list-inside pl-5">
          <li>
            <BoldText>Informative links: </BoldText>
            <NormalText>
              <Link
                aria-label="LinkedIn cookie policy link"
                href="https://ru.linkedin.com/legal/cookie-policy?"
                className="text-sky-500 underline"
              >
                Linkedin Cookie Policy
              </Link>
            </NormalText>
          </li>
        </ul>
      </ul>
      <Paragraph className="pt-6">
        <BoldText>E. How to Manage Cookies and Opt-out of Their Use</BoldText>
      </Paragraph>
      <Paragraph className="pt-4">
        There are several options available to manage, disable, and remove
        cookies:
      </Paragraph>
      <ul className="list-decimal list-inside pt-4">
        <li>
          Modify your browser settings: Please follow the instructions provided
          by your browser&apos;s manufacturer to discover how to manage,
          disable, or remove all types of cookies (technical, analytics, and
          profiling):
        </li>
      </ul>
      <ul className="list-disc list-inside pl-5 pt-4">
        <li>
          <NormalText>
            Explorer:{" "}
            <Link
              aria-label="Manage cookies in microsoft edge link"
              href="https://support.microsoft.com/en-gb/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
              className="text-sky-500 underline"
            >
              Manage cookies in Microsoft Edge
            </Link>
          </NormalText>
        </li>
        <li>
          <NormalText>
            Chrome:{" "}
            <Link
              aria-label="Manage cookies in google chrome link"
              href="https://support.google.com/chrome/answer/95647?hl=en"
              className="text-sky-500 underline"
            >
              Manage cookies in Google Chrome
            </Link>
          </NormalText>
        </li>
        <li>
          <NormalText>
            Firefox:{" "}
            <Link
              aria-label="Manage cookies in mozilla firefox link"
              href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US"
              className="text-sky-500 underline"
            >
              Manage cookies in Mozilla Firefox
            </Link>
          </NormalText>
        </li>
        <li>
          <NormalText>
            Safari:{" "}
            <Link
              aria-label="Manage cookies in safari link"
              href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
              className="text-sky-500 underline"
            >
              Manage cookies in Safari
            </Link>
          </NormalText>
        </li>
        <li>
          <NormalText>
            Opera:{" "}
            <Link
              aria-label="Manage cookies in Opera link"
              href="https://help.opera.com/en/latest/web-preferences/"
              className="text-sky-500 underline"
            >
              Manage cookies in Opera
            </Link>
          </NormalText>
        </li>
        <li>
          <NormalText>
            Edge:{" "}
            <Link
              aria-label="Manage cookies in Microsoft Edge link"
              href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd"
              className="text-sky-500 underline"
            >
              Manage cookies in Microsoft Edge
            </Link>
          </NormalText>
        </li>
      </ul>
      <Paragraph className="pt-6">
        <BoldText>F. Processing Methods and Data Retention Timing</BoldText>
      </Paragraph>
      <Paragraph className="pt-4">
        As outlined in the preamble of this Cookie Policy, the Company collects
        and processes certain personal data through cookies directly conveyed on
        the Website (first-party cookies). The Company acts as the data
        controller of such data, in accordance with the provisions of the GDPR.
      </Paragraph>
      <Paragraph className="pt-4">
        Please note that we will process your data solely using electronic
        instruments, in a highly automated manner, without any human
        intermediation. Therefore, our employees and collaborators will never
        access the content of your personal data obtained through cookies. This
        means that they will never be able to view and/or access any Personally
        Identifiable Information (PII) directly.
      </Paragraph>
      <Paragraph className="pt-4">
        Certain employees and coworkers, designated by us as data controllers,
        may perform maintenance operations on IT systems hosting your data,
        without accessing their actual contents. Your personal data may be
        stored on servers managed by third parties (such as IT system providers)
        or may be handled by specialized online marketing entities acting as
        external data controllers based on specific written appointments by the
        Company.
      </Paragraph>
      <Paragraph className="pt-4">
        We hereby inform you that, in compliance with legal requirements and
        guarantees, your data may be transferred to countries outside the
        European Economic Union that may not provide a level of privacy and
        personal data protection equivalent to that guaranteed by Italian and
        European privacy laws. However, as the Controller, we prioritize
        security and will ensure that such transfers are conducted with all due
        care and guarantees.
      </Paragraph>
      <Paragraph className="pt-4">
        Your personal data will not be transferred to third-party data
        processors or disseminated to unauthorized parties.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>G. Your Rights</BoldText>
      </Paragraph>
      <Paragraph className="pt-4">
        To exercise your rights or to obtain any other information or
        clarification regarding this Cookie Policy, please contact the Company
        via email at contact@united4digital.com.
      </Paragraph>
      <Paragraph className="pt-4">
        In accordance with Privacy Laws, the Data Controller informs that
        Consumers have the right to obtain:
      </Paragraph>
      <ul className="list-decimal list-inside pt-6">
        <li>
          <NormalText>Indication of the origin of personal data.</NormalText>
        </li>
        <li>
          <NormalText>
            Information about the purposes and methods of processing.
          </NormalText>
        </li>
        <li>
          <NormalText>
            Explanation of the logic applied in electronic processing.
          </NormalText>
        </li>
        <li>
          <NormalText>
            Identification details of the Controllers and Processors.
          </NormalText>
        </li>
        <li>
          <NormalText>
            Information about the subjects or categories of subjects to whom the
            personal data may be communicated or who may come to know them as
            Processors.
          </NormalText>
        </li>
      </ul>
      <Paragraph className="pt-4">
        Furthermore, Consumers have the right to:
      </Paragraph>
      <ul className="list-decimal list-inside pt-4">
        <li>
          <NormalText>Access, update, rectify, or integrate data.</NormalText>
        </li>
        <li>
          <NormalText>
            Request the deletion, transformation into anonymous form, or
            blocking of unlawfully processed data, including data whose
            retention is unnecessary for the purposes for which the data were
            collected or subsequently processed.
          </NormalText>
        </li>
      </ul>
      <Paragraph className="pt-4">Furthermore, Consumers have:</Paragraph>
      <ul className="list-decimal list-inside pt-4">
        <li>
          <NormalText>
            The right to withdraw consent at any time, if the processing is
            based on their consent.
          </NormalText>
        </li>
        <li>
          <NormalText>
            (If applicable) The right to data portability (the right to receive
            all personal data concerning them in a structured format, commonly
            used, and readable by automatic device), the right to limit the
            processing of personal data, and the right to erasure (&quot;right
            to be forgotten&quot;).
          </NormalText>
        </li>
        <li>
          <NormalText>The right to object:</NormalText>
          <ul className="list-disc list-inside pl-5">
            <li>
              <NormalText>
                In whole or in part, for legitimate reasons, to the processing
                of personal data concerning them, even if pertinent to the
                purpose of the collection.
              </NormalText>
            </li>
            <li>
              <NormalText>
                In whole or in part, to the processing of personal data
                concerning them for the purpose of sending advertising or direct
                sales material or for carrying out market research or commercial
                communication.
              </NormalText>
            </li>
            <li>
              <NormalText>
                If personal data are processed for direct marketing purposes, at
                any time, to the processing of your data for this purpose,
                including profiling insofar as it is connected to such direct
                marketing.
              </NormalText>
            </li>
          </ul>
        </li>
        <li>
          <NormalText>
            If they believe that the processing that concerns them violates any
            Privacy Laws, the right to lodge a complaint with a Supervisory
            Authority (if a European citizen, in the Member State in which they
            usually reside, in the one in which they work, or in the one in
            which the alleged violation has occurred).
          </NormalText>
        </li>
      </ul>
      <Paragraph className="pt-4 pb-100">
        The Controller is not responsible for updating all links provided in
        this Cookie Policy. Therefore, if a link is not functional or updated,
        Consumers acknowledge and accept that they must always refer to the
        document and/or section of the websites referred to by such link.
      </Paragraph>
    </Container>
  );
}
