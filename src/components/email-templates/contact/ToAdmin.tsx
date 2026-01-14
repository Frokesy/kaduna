import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Section,
  Text,
} from '@react-email/components';
import type { FC } from 'react';

interface ContactAdminTemplateProps {
  fname?: string;
  lname?: string;
  email: string;
  phone?: string;
  message: string;
  aoi?: string;
}

export const ContactAdminTemplate: FC<ContactAdminTemplateProps> = ({
  fname,
  lname,
  email,
  phone,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Preview>📩 New Contact Form Submission</Preview>
      <Body style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
        <Container
          style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}
        >
          <Heading style={{ textAlign: 'center', color: '#E30613' }}>
            New Contact Form Submission 🚀
          </Heading>

          <Section>
            <Text style={styles.text}>
              <b>Name:</b> {fname} {lname}
            </Text>
            <Text style={styles.text}>
              <b>Email:</b> {email}
            </Text>
            <Text style={styles.text}>
              <b>Phone:</b> {phone || 'N/A'}
            </Text>
            <Text style={styles.text}>
              <b>Message:</b>
            </Text>
            <Text style={styles.messageBox}>{message}</Text>
          </Section>

          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              © {new Date().getFullYear()} Kaduna. Internal use only.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const styles = {
  text: {
    fontSize: '15px',
    color: '#555555',
    lineHeight: '1.5',
    marginBottom: '8px',
  },
  messageBox: {
    fontSize: '15px',
    color: '#333',
    background: '#f8f8f8',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '5px',
  },
  footer: {
    borderTop: '1px solid #eaeaea',
    paddingTop: '10px',
    textAlign: 'center' as const,
    marginTop: '20px',
  },
  footerText: {
    fontSize: '12px',
    color: '#999999',
    marginBottom: '5px',
  },
};
