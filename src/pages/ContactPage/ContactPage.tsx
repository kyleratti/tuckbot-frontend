import * as React from "react";
import PageContainer from "../../components/PageContainer";

const ContactPage: React.FC = () => (
  <PageContainer>
    <div>
      <dl>
        <dt>General Inquiries</dt>
        <dd>
          <a href="mailto:inqury@placeholder">inqury@placeholder</a>
        </dd>
        <dt>Takedown Requests</dt>
        <dd>
          <a href="mailto:takedown@placeholder">takedown@placeholder</a>
        </dd>
      </dl>
    </div>
  </PageContainer>
);
export default ContactPage;
