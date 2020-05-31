import * as React from "react";
import PageContainer from "../../components/PageContainer";

const ContactPage: React.FunctionComponent = () => (
  <PageContainer>
    <div className="contactPage">
      <p>
        <b>Please note:</b> None of the content on this page is owned by the
        operators of this website.
      </p>

      <p>
        You are free to re-post or share links to any pages on this website.
      </p>

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
