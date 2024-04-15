import Link from "next/link";
import Container from "@/app/ui/Container/Container";
import Heading from "@/app/ui/LegalComponents/Heading/Heading";
import Paragraph from "@/app/ui/LegalComponents/Paragraph/Paragraph";
import { BoldText, NormalText } from "@/app/ui/LegalComponents/Text/Text";

export default function PrivacyPolicy() {
  return (
    <Container className="px-4 laptop:px-[200px] text-justify text-lg">
      <Heading>Privacy Policy</Heading>
      <Paragraph>Last updated: April 1, 2024</Paragraph>
      <Paragraph className="pt-4">
        At United4Digital Ltd., we prioritize your privacy with the utmost
        seriousness. We are committed to safeguarding your data across our
        websites, applications, services, and interactions with you, adhering
        strictly to this Privacy Policy. We encourage you to carefully review
        this policy as it contains crucial details about the collection,
        storage, usage, sharing, and other processing activities of your
        Personal Information (as defined below). Furthermore, it delineates your
        rights regarding your Personal Information and offers guidance on how to
        contact us with any inquiries or concerns you may have.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>Key terms</BoldText>
      </Paragraph>
      <Paragraph className="pt-4">
        In this Privacy Policy, we define the following key terms:
      </Paragraph>
      <ul className="list-disc list-inside pt-4 pl-6">
        <li>
          United4Digital Ltd., we, us, our: These terms refer to United4Digital
          Ltd., also known as &quot;United4Digital Ltd.,&quot; &quot;we,&quot;
          &quot;us,&quot; or &quot;our.&quot;
        </li>
        <li>
          United4Digital Ltd.: Refers to United4Digital Ltd., including any
          subsidiary companies owned and controlled by United4Digital Ltd.
        </li>
        <li>
          Personal Information: Refers to any information relating to an
          individual or household (as applicable), from which that individual
          can be identified, whether directly or indirectly.
        </li>
        <li>
          You or Your: Refers to the individual to whom the Personal Information
          relates.
        </li>
        <li>
          Services: This Privacy Policy applies to the United4Digital Ltd. sites
          directly linking to this Privacy Policy (including associated
          sub-domains) and related services offered therein. It does not apply
          to sites and services lacking this Privacy Policy or having their own
          privacy policies.
        </li>
      </ul>
      <Paragraph className="pt-4">
        Throughout this Privacy Policy, we employ these key terms as defined
        above.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>The personal data we gather about you</BoldText>
      </Paragraph>
      <Paragraph className="pt-4">
        The Personal Information we process about you varies depending on how
        you engage with our Services. For instance:
      </Paragraph>
      <ul className="list-disc list-inside pt-4 pl-8">
        <li>
          Information you provide directly to us:
          <ul className="list-disc list-inside pl-10">
            <li>
              Any details you submit when filling out forms or query fields on
              our Services, registering for or subscribing to them (such as your
              name, email address, or relevant demographic data like age).
            </li>
            <li>
              Details included in messages, emails, or other communications
              exchanged with us when you reach out to us (including your contact
              information and the content of such communications).
            </li>
            <li>
              Information contained within and linked to any content you post on
              our Services.
            </li>
          </ul>
        </li>
        <li>
          Information we gather through automated data collection or tracking
          technologies.
        </li>
      </ul>
      <Paragraph className="pt-4">
        As you utilize our Services, we may employ automated data collection or
        tracking technologies to gather specific information about your device,
        browsing behaviour, and usage tendencies, which include:
      </Paragraph>
      <ul className="list-disc list-inside pt-4 pl-8">
        <li>
          Details regarding your utilization of our Services, encompassing
          traffic data, referral data, location data, logs, communication data,
          and the resources accessed or retrieved on our websites and
          applications, along with any advertisements or links to third-party
          websites accessed, acquired, or considered, along with related
          metrics.
        </li>
        <li>
          Information concerning your computer or other device and internet
          connection utilized to access or engage with our Services, such as
          your IP address, operating system, device type, device ID, and browser
          type.
        </li>
        <li>
          Additional data related to electronic network activities, like
          browsing history, viewing history, search history, and details of
          interactions with our websites or Services (where applicable).
        </li>
      </ul>
      <Paragraph className="pt-4">
        If applicable, we may also utilize these technologies to gather
        information about your online activities across various third-party
        websites or other online services you may utilize (e.g., behavioural
        tracking).
      </Paragraph>
      <Paragraph className="pt-4">
        The information collected automatically is typically in the form of
        statistical data. However, we may retain or link it with Personal
        Information collected through other means or received from third parties
        we collaborate with. This information aids us in enhancing our products
        and services, including our Services, and in delivering superior, more
        efficient, and more personalized services to our users over time.
      </Paragraph>
      <Paragraph className="pt-6">
        The tracking technologies utilized for this automated data collection
        may include:
      </Paragraph>
      <ul className="list-disc list-inside pt-4 pl-8">
        <li>
          Cookies (or browser cookies): These are small files stored on your
          computer&apos;s hard drive.
        </li>
        <li>
          Flash Cookies: Certain features of our Services may use local stored
          objects (or &quot;flash cookies&quot;) to collect and retain
          information about your preferences and navigation to, from, and within
          our Services.
        </li>
        <li>
          Web Beacons: Certain parts of our Services may contain small
          electronic files known as web beacons (also referred to as clear gifs,
          pixel tags, and single-pixel gifs). These enable us to, for instance,
          count users who have visited pages, track referring sources, monitor
          and report conversions, and generate other relevant website statistics
          (such as recording the popularity of specific website content and
          ensuring system and server integrity).
        </li>
        <li>
          Depending on your location when accessing our Services, you have the
          option to decline the use of these technologies by adjusting the
          settings on your browser or, if applicable, by withholding consent for
          their use when accessing our Services. However, if you choose not to
          consent to the use of such technologies, please be aware that certain
          parts of our Services may become unavailable or may not operate as
          intended.
        </li>
      </ul>
      <Paragraph className="pt-6">
        <BoldText>
          The methods and purposes for which we employ your Personal Information
        </BoldText>
      </Paragraph>
      <Paragraph className="pt-4">
        We utilize your Personal Information solely for the purposes outlined in
        this Privacy Policy, or for purposes that are compatible with those
        described herein. If you choose not to provide your Personal Information
        to us, or if circumstances prevent us from processing your Personal
        Information, it may result in delays or prevent us from offering certain
        aspects of our Services to you.
      </Paragraph>
      <Paragraph className="pt-4">
        In certain regions, particularly the EEA and the UK, we are legally
        obliged to establish a lawful basis for the collection and processing of
        your Personal Information. The following description outlines the
        purposes for which we utilize your Personal Information and the lawful
        bases upon which we rely. When depending on our (or a third
        party&apos;s) legitimate interests, we have carefully evaluated that
        such interests do not supersede your own rights and interests in your
        Personal Information.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>1. Providing our Services to you:</BoldText>
      </Paragraph>
      <Paragraph>
        This includes delivering content, advertisements, and personalized
        recommendations, as well as detecting errors or outages.
      </Paragraph>
      <Paragraph className="pt-4">
        <span className="italic">Legal Basis</span>: We rely on either your
        consent (where required by law) or our legitimate interests, such as
        ensuring user satisfaction and positive return rates.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>2. Maintaining records and providing updates:</BoldText>
      </Paragraph>
      <Paragraph>
        We keep records of our interactions with you and provide updates or
        notices about your queries, accounts, or requests.
      </Paragraph>
      <Paragraph className="pt-4">
        <span className="italic">Legal Basis</span>: Depending on the
        circumstances, we may rely on fulfilling legal and regulatory
        obligations or our legitimate interests, such as maintaining and
        strengthening our relationship with you.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>3. Notifying you of changes and providing support:</BoldText>
      </Paragraph>
      <Paragraph>
        We inform you of any changes to our Services and offer customer support
        and responses to inquiries.
      </Paragraph>
      <Paragraph className="pt-4">
        <span className="italic">Legal Basis</span>: For our legitimate
        interests, ensuring you are informed about significant changes to our
        Services and supporting your access to and the quality of our Services
        provided to you.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>4. Serving advertisements:</BoldText>
      </Paragraph>
      <Paragraph>We may serve advertisements to you on our Services</Paragraph>
      <Paragraph className="pt-4">
        <span className="italic">Legal Basis</span>: We rely on consent (where
        required by law) or our legitimate interests, such as supporting the
        provision of free online content.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>5. Enforcing legal rights and compliance:</BoldText>
      </Paragraph>
      <Paragraph>
        This involves enforcing legal rights, complying with laws, fraud
        prevention, and defending legal proceedings.
      </Paragraph>
      <Paragraph className="pt-4">
        <span className="italic">Legal Basis</span>: Depending on the
        circumstances, we may rely on legal and regulatory obligations or our
        legitimate interests, such as protecting our business, interests, and
        rights.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>6. Formulating business strategy:</BoldText>
      </Paragraph>
      <Paragraph>
        We analyze usage statistics to inform business planning and product
        development.
      </Paragraph>
      <Paragraph className="pt-4">
        <span className="italic">Legal Basis</span>: We rely on our legitimate
        interests, such as improving our Services and the effectiveness of our
        business strategy.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>7. Marketing our Services:</BoldText>
      </Paragraph>
      <Paragraph>We may market our Services to you.</Paragraph>
      <Paragraph className="pt-4">
        <span className="italic">Legal Basis</span>: We obtain consent from
        recipients before sending marketing communications, as required by law.
        Alternatively, we may rely on our legitimate interests, such as
        promoting our business.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>8. Enabling interactive features:</BoldText>
      </Paragraph>
      <Paragraph>
        We enable participation in interactive features on our Services.
      </Paragraph>
      <Paragraph className="pt-4">
        <span className="italic">Legal Basis</span>: For our legitimate
        interests, providing useful and valuable features to our users ensuring
        user satisfaction and positive return rates.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>9. Processing payments:</BoldText>
      </Paragraph>
      <Paragraph>We process payments where applicable.</Paragraph>
      <Paragraph className="pt-4">
        <span className="italic">Legal Basis</span>: For our legitimate
        interests, ensuring remuneration for Services subject to fees.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>10. Other communicated purposes:</BoldText>
      </Paragraph>
      <Paragraph>
        We may use your Personal Information for any other purposes communicated
        to you.
      </Paragraph>
      <Paragraph className="pt-4">
        <span className="italic">Legal Basis</span>: With your consent.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>Recipients of Your Personal Information:</BoldText>
      </Paragraph>
      <Paragraph className="pt-4">
        Our disclosure of your Personal Information entails engagement with
        multiple entities, as delineated herein. As mandated by the purposes
        elucidated above, we may disclose your Personal information to:
      </Paragraph>
      <ul className="list-disc list-inside pt-4">
        <li>Members of the United4Digital Ltd.;</li>
        <li>
          Third-party IT vendors (such as hosting, cloud services, networking,
          cybersecurity platforms, telecom providers, managed services
          providers, customer service platforms, technical support service
          providers, and payment processors);
        </li>
        <li>
          Third-party media, advertising, and marketing vendors, along with
          monetization partners;
        </li>
        <li>
          Data analytics providers, social media networks, native advertising
          networks, programmatic advertising platforms, search engines,
          monetization partners, syndication and distribution partners, customer
          engagement services, and push notification providers (to offer
          services including, but not limited to, product recommendations,
          delivering marketing messages, including advertisements, and sending
          relevant offers);
        </li>
        <li>
          Partners collaborating with us to enhance our Services and/or business
          processes;
        </li>
        <li>
          Third parties with whom we have obtained your explicit consent to
          share your Personal Information;
        </li>
        <li>
          Our external auditors, professional advisors, law enforcement
          agencies, courts, tribunals, and regulatory bodies to comply with our
          legal and regulatory obligations;
        </li>
        <li>
          Other entities that have or may gain control or ownership of some or
          all of our business (along with their professional advisers) in
          connection with significant corporate transactions or restructuring,
          such as mergers, acquisitions, asset sales, initial public offerings,
          or in the event of our insolvency—typically, information will be
          anonymized, although this may not always be feasible. Any recipient of
          your information will be bound by confidentiality obligations.
        </li>
      </ul>
      <Paragraph className="pt-4">
        Additionally, we may disclose aggregated and deidentified information
        that does not identify any individual.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>
          Hyperlinks to external websites and content provided by third parties
        </BoldText>
      </Paragraph>
      <Paragraph className="pt-4">
        Our Services may contain links to external websites or content operated
        by third parties. We do not have control over these third-party sites,
        services, or content, and we do not assume responsibility for their
        privacy practices. When you navigate away from our Services by clicking
        on a link or advertisement, it&apos;s essential to review the privacy
        policy of the respective third-party site or service. Please note that
        our linking to a website or displaying an advertisement does not imply
        endorsement, authorization, or affiliation with that third party.
        Additionally, it does not signify an endorsement of their privacy or
        information security policies and practices.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>
          Duration your Personal Information will be stored for
        </BoldText>
      </Paragraph>
      <Paragraph className="pt-6">
        We maintain your Personal Information for a duration deemed reasonably
        necessary to fulfil the purposes for which it was collected. This
        includes providing requested Services and supporting our business
        objectives, as outlined in the section and table titled &quot;What We
        Use Your Personal Information For,&quot; as well as described in the
        subsequent section titled &quot;Business or Commercial Purposes for the
        Collection and Processing of Personal Information.&quot; Consequently,
        various retention periods apply to different types of data. Upon the
        conclusion of the relevant retention period, we will either delete or
        anonymize your Personal Information. However, Personal Information may
        be retained for extended periods if required to adhere to legal or
        regulatory obligations, or in connection with legal disputes or claims.
        Even if a deletion is requested, we may need to retain your information
        as necessary to comply with legal or regulatory requirements (such as
        maintaining transaction records), to establish or defend legal claims,
        and/or to safeguard against fraudulent or abusive activity on our
        Services.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>The Personal Information we have gathered.</BoldText>
      </Paragraph>
      <Paragraph className="pt-4">
        In the past 12 months, we may have gathered or handled the following
        categories of Personal Information:
      </Paragraph>
      <ul className="list-disc list-inside pl-8 pt-4">
        <li>
          Identifiers: This includes details like name, email address, device
          specifications (such as device type, web browser, operating system),
          or similar identifying information.
        </li>
        <li>
          Unique online identifiers: Examples include IP addresses, device IDs
          derived from device type, or other comparable identifiers.
        </li>
        <li>
          Specific commercial information: This involves details regarding
          accessed, acquired, or considered Services, advertisement offerings,
          links to third-party websites, and related metrics.
        </li>
        <li>
          Other electronic network activity information: This encompasses
          browsing history, search history, and information about interactions
          with our websites or Services.
        </li>
        <li>
          Location information: This covers geo-location data about where you
          access our Services. For instance, if you access our Services on a
          mobile or tablet device, we may collect information about your
          device&apos;s precise location, to the extent feasible.
        </li>
        <li>
          Online viewing activities and habits: This includes details such as
          videos viewed and pages visited.
        </li>
        <li>Consumer&apos;s precise geolocation (if applicable).</li>
        <li>
          Certain demographic data: For instance, gender, age, etc., where
          applicable.
        </li>
      </ul>
      <Paragraph className="pt-4">
        We may have gathered these categories of Personal Information for the
        following purposes (as well as any other purposes outlined in this
        Privacy Policy):
      </Paragraph>
      <ul className="list-disc list-inside pt-4 pl-8">
        <li>
          Operating, managing, and maintaining our businesses and
          infrastructure.
        </li>
        <li>
          Providing, developing, improving, repairing, and maintaining our
          products and Services.
        </li>
        <li>
          Conducting services on behalf of our various businesses, such as user
          retention, providing content recommendations, and processing
          information.
        </li>
        <li>Preventing fraud and crime.</li>
        <li>Debugging errors in systems.</li>
        <li>Marketing and advertising.</li>
        <li>
          Performing accounting, audit, and other internal functions, such as
          internal investigations.
        </li>
        <li>
          Ensuring compliance with laws, legal processes, and internal policies.
        </li>
        <li>
          Conducting internal research, analytics, and development, such as
          user-preference analytics.
        </li>
        <li>
          Developing, maintaining, provisioning, or upgrading networks,
          products, services, or devices.
        </li>
        <li>
          Processing payments and verifying transactions where applicable.
        </li>
        <li>Providing customer support and handling inquiries.</li>
      </ul>
      <Paragraph className="pt-4">
        We do not collect or process sensitive Personal Information for the
        purpose of inferring characteristics about individuals.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>Sources of Personal Information:</BoldText>
      </Paragraph>
      <ul className="list-disc list-inside pt-6 pl-8">
        <li>
          Directly from you, including technical and usage information when you
          use our Services.
        </li>
        <li>
          From linked sites, such as social media sites, and other third-party
          platforms.
        </li>
        <li>From our various affiliated entities.</li>
        <li>From our joint-ventures and promotional and strategic partners.</li>
        <li>From information suppliers.</li>
        <li>From distributors, service providers, and other vendors.</li>
        <li>From marketing mailing lists.</li>
      </ul>
      <Paragraph className="pt-4">
        Retention of Personal Information: Our retention practices are outlined
        above in the section titled{" "}
        <BoldText>
          &quot;Duration your Personal Information will be stored for&quot;
        </BoldText>
        .
      </Paragraph>
      <Paragraph>
        Categories of Personal Information we disclose: As detailed in the
        section titled{" "}
        <BoldText>&quot;Recipients of Your Personal Information&quot;</BoldText>
        , we share your Personal Information with companies such as third-party
        media and marketing vendors, data analytics providers, social media
        networks, native advertising networks, programmatic advertising
        platforms, customer engagement services, push notification providers,
        and others. This sharing of Personal Information may be considered a
        &quot;sale&quot; or &quot;sharing&quot; of information under applicable
        state law. For instance, under California law, a &quot;sale&quot; refers
        to the disclosure of Personal Information to a third party for monetary
        consideration or anything of value, and a &quot;share&quot; refers to
        the disclosure of Personal Information to a third party for
        cross-context behavioral advertising, regardless of whether monetary or
        other valuable consideration is involved.
      </Paragraph>
      <Paragraph className="pt-4">
        The categories of Personal Information we disclose in this manner
        include:
      </Paragraph>
      <ul className="list-disc list-inside pt-4 pl-8">
        <li>
          Identifiers, such as email address, device type, web browser,
          operating system, or similar identifiers.
        </li>
        <li>
          Unique and online identifiers, such as IP address, device IDs derived
          from device type, or similar identifiers.
        </li>
        <li>
          Certain commercial information, such as Services accessed, acquired,
          or considered.
        </li>
        <li>
          Internet or other electronic network activity information, such as
          browsing history, search history, and information regarding
          interactions with our websites or Services.
        </li>
        <li>
          Location information, such as geo-location information about where you
          access our Services.
        </li>
        <li>
          Online viewing activities and habits, such as videos viewed and pages
          viewed.
        </li>
        <li>Consumer&apos;s precise geolocation, where applicable.</li>
      </ul>
      <Paragraph className="pt-4">
        Some of our processing activities may constitute &quot;targeted
        advertising&quot; as defined in applicable law.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>
          Transfers of data between countries or across international borders.
        </BoldText>
      </Paragraph>
      <Paragraph className="pt-4">
        When we transfer your Personal Information, we ensure it is protected in
        accordance with relevant data protection laws. For Personal Information
        originating in the UK or the EEA, these safeguards may include
        implementing Standard Contractual Clauses and, where applicable, the UK
        International Data Transfer Addendum with the recipient. United4Digital
        Ltd. is obligated to protect Personal Information processed from the UK
        or the EEA as per applicable European data protection laws. For more
        details on our international data transfers and the safeguards in place,
        please reach out to us using the contact information provided in the
        &quot;How to contact us&quot; section of this Privacy Policy.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>
          Information tailored for individuals located in the European Economic
          Area (EEA) and the United Kingdom (UK).
        </BoldText>
      </Paragraph>
      <Paragraph className="pt-4">
        If you are located in the European Economic Area (EEA) or the United
        Kingdom (UK), you may have the following rights regarding the Personal
        Information we process about you. Please note that these rights are not
        necessarily absolute, and certain qualifications may apply. If you have
        questions concerning these rights and how they apply to you, please feel
        free to contact us.
      </Paragraph>
      <ul className="list-decimal list-inside pt-4 font-bold">
        <li>
          Access:{" "}
          <NormalText>
            You have the right to receive information about the Personal
            Information we process concerning you and to obtain a copy of your
            Personal Information.
          </NormalText>
        </li>
        <li>
          Rectification:{" "}
          <NormalText>
            You have the right to request the correction of any inaccuracies in
            your Personal Information, where applicable.
          </NormalText>
        </li>
        <li>
          Erasure (Right to be Forgotten):{" "}
          <NormalText>
            You have the right to request the deletion of your Personal
            Information in certain situations, such as when we processed the
            information based on your consent, and you have withdrawn that
            consent.
          </NormalText>
        </li>
        <li>
          Restriction of Processing:{" "}
          <NormalText>
            You have the right to request the limitation of processing your
            Personal Information in certain circumstances, such as when you
            contest the accuracy of the data.
          </NormalText>
        </li>
        <li>
          Data Portability:{" "}
          <NormalText>
            You have the right to receive the Personal Information you provided
            to us in a structured, commonly used, and machine-readable format,
            and to have that information transmitted to a third party in certain
            circumstances, where technically feasible.
          </NormalText>
        </li>
        <li>
          Right to Object:{" "}
          <NormalText>
            You have the right to object to the processing of your Personal
            Information for direct marketing purposes or in certain other
            situations, unless there are compelling legitimate grounds for the
            processing to continue.
          </NormalText>
        </li>
        <li>
          Right Not to be Subject to Automated Individual Decision Making:{" "}
          <NormalText>
            You have the right not to be subject to decisions based solely on
            automated processing, including profiling, which produces legal
            effects concerning you or similarly significantly affects you.
          </NormalText>
        </li>
        <li>
          Right to Withdraw Consent:{" "}
          <NormalText>
            If we rely on your consent as the basis for processing your Personal
            Information, you have the right to withdraw that consent at any
            time.
          </NormalText>
        </li>
        <li>
          Right to Complain:{" "}
          <NormalText>
            You have the right to submit a complaint about our processing of
            your Personal Information to us at any time. You also have the right
            to lodge a complaint with a data protection supervisory authority.
          </NormalText>
        </li>
      </ul>
      <Paragraph className="pt-4">
        If you would like to exercise any of the rights mentioned above, please:
      </Paragraph>
      <ul className="list-disc list-inside pt-4 font-bold">
        <li>
          Email us:{" "}
          <NormalText>
            See below under &quot;How to contact us.&quot;
          </NormalText>
        </li>
        <li>
          Provide enough information:{" "}
          <NormalText>
            to allow us to verify your identity, which may include your name or,
            where applicable, a customer account number, and any additional
            identity information we may reasonably request from you.
          </NormalText>
        </li>
        <li>
          Specify the right you want to exercise and the Personal Information:{" "}
          <NormalText>to which your request relates.</NormalText>
        </li>
      </ul>
      <Paragraph className="pt-6">
        <BoldText>
          Privacy rights and disclosures specific to individual U.S. states.
        </BoldText>
      </Paragraph>
      <Paragraph className="pt-4">
        This section pertains solely to Personal Information collected about
        consumers residing in the United States. Depending on your state of
        residence and how you interact with us and our Services, you may have
        additional disclosures regarding the Personal Information we collect
        about you, as well as certain rights concerning that Personal
        Information.
      </Paragraph>
      <Paragraph className="pt-4">
        Your U.S. state privacy rights may include (if applicable):
      </Paragraph>
      <ul className="list-disc list-inside pt-4">
        <li>
          The right to know what Personal Information we have collected about
          you, including categories, sources, purposes for collection, sharing,
          or selling, third-party recipients, and specific pieces of information
          collected.
        </li>
        <li>
          The right to confirm whether we are processing your Personal
          Information.
        </li>
        <li>
          The right to receive a copy of your previously provided Personal
          Information in a portable and usable format.
        </li>
        <li>
          The right to request deletion of Personal Information collected from
          or about you, subject to exceptions.
        </li>
        <li>
          The right to correct inaccurate Personal Information, subject to
          exceptions.
        </li>
        <li>
          The right to opt out of the sale or sharing of your Personal
          Information, targeted advertising, and profiling that produces
          significant effects concerning you.
        </li>
        <li>
          The right to limit the use or disclosure of sensitive Personal
          Information.
        </li>
        <li>
          The right to withdraw consent for processing sensitive Personal
          Information, if required.
        </li>
        <li>
          The right not to face discriminatory treatment for exercising your
          privacy rights.
        </li>
      </ul>
      <Paragraph className="pt-4">
        You can contact us with your request through the contact methods
        described in the &quot;How to contact us&quot; section. We may ask for
        information to verify your identity to fulfill your privacy rights
        request. Some states allow consumers to authorize an agent to make
        requests on their behalf.
      </Paragraph>
      <Paragraph className="pt-4">
        You may also have the right to appeal our decisions regarding your
        request, which can be done through the contact methods provided.
      </Paragraph>
      <Paragraph className="pt-4">
        Furthermore, you can request information about our practices related to
        disclosing your Personal Information to certain third parties for their
        direct marketing purposes. You may be able to opt out of our sharing of
        your Personal Information with unaffiliated third parties for their
        direct marketing purposes under certain circumstances.
      </Paragraph>
      <Paragraph className="pt-4">
        Your right to opt out of the sale or sharing of Personal Information can
        be exercised by contacting us through the methods provided or by
        clicking on the &quot;Do Not Sell or Share My Personal Information&quot;
        link at the bottom of the page.
      </Paragraph>
      <Paragraph className="pt-4">
        However, please note that while you may opt out of the sale or sharing
        of your Personal Information, your use of our website may still be
        tracked by us and our vendors or partners for necessary business
        functions, such as website hosting and fraud prevention. These entities
        are obligated to keep this information confidential and to use it solely
        for providing services to our businesses.
      </Paragraph>
      <Paragraph className="pt-6">
        Ensuring the security of your Personal Information remains a top
        priority.
      </Paragraph>
      <Paragraph className="pt-4">
        We employ suitable security protocols to prevent unauthorized access to
        Personal Information. Access to your Personal Information is restricted
        to individuals with a legitimate business requirement and who are bound
        by confidentiality obligations. Depending on the risk level associated
        with processing your personal data, we implement the following security
        measures:
      </Paragraph>
      <ul className="list-disc list-inside pt-4">
        <li>
          Organizational measures, including staff training and policy
          development.
        </li>
        <li>
          Technical measures, such as physical data protection,
          pseudonymization, and encryption.
        </li>
        <li>
          Ensuring ongoing availability, integrity, and accessibility, including
          appropriate data backups.
        </li>
      </ul>
      <Paragraph className="pt-4">
        Additionally, we have established procedures to address suspected or
        confirmed data security breaches. We will notify you and relevant
        regulatory authorities of any data security breaches in accordance with
        legal requirements.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>Individuals under the age of 16</BoldText>
      </Paragraph>
      <Paragraph className="pt-4">
        The utilization of our Services is not intended for, nor directed at,
        individuals under the age of 16. We do not knowingly collect, sell, or
        share Personal Information from children under 16, nor do we knowingly
        target our Services to individuals under the age of 16. Individuals
        under 16 years of age are prohibited from using or providing any
        Personal Information through our Services. If we become aware that we
        have collected or received Personal Information from a child under the
        age of 16, we will promptly delete that information in accordance with
        applicable law. If you believe we may have collected information from or
        about a child under the age of 16, please contact us.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>Modifications to this Privacy Policy</BoldText>
      </Paragraph>
      <Paragraph className="pt-4">
        Our Privacy Policy was last revised on April 1, 2024. We commit to
        updating any modifications to our Privacy Policy on this page. It is
        your responsibility to check this Privacy Policy periodically for any
        changes. Should we make significant alterations to how we handle our
        users Personal Information, we will notify you through a notice
        accessible during your use of our Services following the implementation
        of such changes. Ensuring we possess an up-to-date, active, and
        deliverable email address for you, where relevant, is your
        responsibility.
      </Paragraph>
      <Paragraph className="pt-6">
        <BoldText>How to contact us</BoldText>
      </Paragraph>
      <Paragraph className="pt-4 pb-100">
        If you have any inquiries regarding this Privacy Policy or the
        information we may have on record about you, wish to exercise your
        rights under applicable data protection laws, file a complaint, or seek
        further information, please do not hesitate to contact us.
      </Paragraph>
    </Container>
  );
}
