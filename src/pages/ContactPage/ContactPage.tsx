import * as React from "react";
import PageContainer from "../../components/PageContainer";

const ContactPage: React.FC = () => (
  <PageContainer>
    <div className="contactPage">
      <p>
        <b>Please note:</b> None of the content on any pages of this site is
        owned by the operators of this website. All content is provided as an
        alternative courtesy service to submissions on Reddit.
      </p>

      <p>
        You are free to re-post or share links to any pages on this website.
      </p>

      <p>Please note we are unable to locate any videos for you.</p>

      <dl className="inline-list">
        <dt>General Inquiries</dt>
        <dd>
          <a href="mailto:inquire@tuckbot.tv">inquire@tuckbot.tv</a>
        </dd>
        <dt>Takedown Requests</dt>
        <dd>
          <a href="mailto:takedown@tuckbot.tv">takedown@tuckbot.tv</a>
        </dd>
      </dl>
    </div>
  </PageContainer>
);
export default ContactPage;
