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

interface NewsletterAdminTemplateProps {
  name?: string;
  email: string;
}

export const NewsletterAdminTemplate: FC<NewsletterAdminTemplateProps> = ({
  name,
  email,
}) => {
  return (
    <Html>
      <Head />
      <Preview>New Newsletter Signup - Kaduna</Preview>
      <Body style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
        <Container
          style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}
        >
          <Heading style={{ textAlign: 'center', color: '#7d6c3a' }}>
            New Newsletter Signup 🚀
          </Heading>
          <Section>
            <Text style={styles.text}>
              A new user has just signed up for the Kaduna newsletter.
            </Text>

            <Section style={styles.section}>
              <Text style={styles.detail}>
                <b>Name:</b> {name || 'Not provided'}
              </Text>
              <Text style={styles.detail}>
                <b>Email:</b> {email}
              </Text>
            </Section>

            <Text style={styles.text}>
              You may want to add them to your CRM or contact list.
            </Text>
          </Section>

          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              © {new Date().getFullYear()} Kaduna. Internal Admin Notification
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const styles = {
  text: {
    fontSize: '16px',
    color: '#555555',
    lineHeight: '1.5',
  },
  section: {
    marginTop: '10px',
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '6px',
  },
  detail: {
    fontSize: '15px',
    marginBottom: '5px',
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
