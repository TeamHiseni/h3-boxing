/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `first_name` (text) - First name of the person submitting
      - `last_name` (text) - Last name of the person submitting
      - `email` (text) - Email address of the submitter
      - `subject` (text) - Subject of the message
      - `message` (text) - The message content
      - `created_at` (timestamptz) - Timestamp when submission was created
      - `email_sent` (boolean) - Whether the email was successfully sent
      
  2. Security
    - Enable RLS on `contact_submissions` table
    - No public access policies (admin only via service role)
    
  3. Important Notes
    - This table stores contact form submissions for record keeping
    - Email sending is handled by the edge function
    - Only service role can access this data for privacy
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  email_sent boolean DEFAULT false
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- No public policies - only accessible via service role for admin purposes