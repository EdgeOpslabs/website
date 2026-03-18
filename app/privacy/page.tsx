"use client";

import { LegalLayout } from "@/components/legal/LegalLayout";

export default function PrivacyPolicyPage() {
    return (
        <LegalLayout title="Privacy Policy" lastUpdated="2026">
            <p>
                EdgeOps Labs is an open-source learning community focused on DevOps, Cloud, and modern infrastructure technologies. This Privacy Policy explains how limited information may be collected and used when interacting with our website or community platforms.
            </p>

            <h3>Information We Collect</h3>
            <p>
                EdgeOps Labs collects minimal information only when it is voluntarily provided by community members. This may include:
            </p>
            <ul>
                <li>Name</li>
                <li>Email address (when contacting the community or subscribing to updates)</li>
                <li>Professional profile links such as LinkedIn or GitHub</li>
                <li>Messages submitted through contact forms or community discussions</li>
            </ul>
            <p>
                Participation in the community does not require sharing personal or sensitive information.
            </p>

            <h3>How Information Is Used</h3>
            <p>
                The information collected may be used for the following purposes:
            </p>
            <ul>
                <li>Responding to inquiries or messages</li>
                <li>Sharing updates about workshops, learning sessions, or events</li>
                <li>Improving communication within the community</li>
                <li>Managing participation in community activities</li>
            </ul>
            <p>
                EdgeOps Labs does not use personal data for advertising or commercial marketing.
            </p>

            <h3>Cookies and Website Analytics</h3>
            <p>
                Our website may use basic cookies or analytics tools to understand general website usage. These tools help improve website performance and user experience but do not collect sensitive personal data.
            </p>
            <p>
                Users can disable cookies in their browser settings if preferred.
            </p>

            <h3>Data Security</h3>
            <p>
                We take reasonable measures to protect information shared with the community. However, as with any online platform, complete security cannot be guaranteed.
            </p>
            <p>
                Members should avoid sharing sensitive personal information on public community platforms.
            </p>

            <h3>Third-Party Platforms</h3>
            <p>
                EdgeOps Labs may use third-party platforms for communication, repositories, or event hosting. These platforms operate under their own privacy policies.
            </p>
            <p>
                Members are encouraged to review the privacy policies of those services when using them.
            </p>

            <h3>Contact</h3>
            <p>
                For any privacy-related questions, users can contact the EdgeOps Labs team through the official website.
            </p>
        </LegalLayout>
    );
}
