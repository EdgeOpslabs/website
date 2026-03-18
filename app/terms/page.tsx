"use client";

import { LegalLayout } from "@/components/legal/LegalLayout";

export default function TermsOfServicePage() {
    return (
        <LegalLayout title="Terms of Service" lastUpdated="2026">
            <p>
                These Terms of Service define the basic rules for participating in EdgeOps Labs community platforms and activities. By accessing the website or participating in community discussions, users agree to follow these terms.
            </p>

            <h3>Community Purpose</h3>
            <p>
                EdgeOps Labs exists to support learning and collaboration around DevOps, cloud infrastructure, and open technologies. The community encourages sharing knowledge, building projects, and helping others grow in the field.
            </p>

            <h3>Participation Guidelines</h3>
            <p>
                Members are expected to:
            </p>
            <ul>
                <li>Participate respectfully in discussions</li>
                <li>Share helpful and relevant knowledge</li>
                <li>Respect the time and contributions of other members</li>
                <li>Follow community guidelines and moderation decisions</li>
            </ul>
            <p>
                Healthy discussions and constructive feedback are encouraged.
            </p>

            <h3>Content Shared by Members</h3>
            <p>
                Members may share tutorials, articles, repositories, or learning resources within the community. By sharing content, members confirm that:
            </p>
            <ul>
                <li>They have the right to share the material</li>
                <li>The content does not violate copyright or intellectual property rights</li>
                <li>The content does not contain harmful or misleading information</li>
            </ul>

            <h3>Platform Availability</h3>
            <p>
                EdgeOps Labs may update, modify, or improve community platforms or website features at any time. While we aim to keep services available, uninterrupted access to community platforms cannot always be guaranteed.
            </p>

            <h3>Updates to These Terms</h3>
            <p>
                These terms may be updated as the community evolves. When changes occur, the updated version will be published on the website.
            </p>
        </LegalLayout>
    );
}
