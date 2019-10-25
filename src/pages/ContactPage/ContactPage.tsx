import * as React from "react";
import PageContainer from "../../components/PageContainer";

const ContactPage: React.FunctionComponent = () => (
  <PageContainer>
    <div>
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
