"use client";

import { LegalLayout } from "@/components/legal/LegalLayout";

export default function CodeOfConductPage() {
    return (
        <LegalLayout title="Code of Conduct" lastUpdated="2026">
            <p>
                The Code of Conduct defines the expected standards of behavior for all participants in the EdgeOps Labs community. Our goal is to maintain a welcoming environment where people can learn, collaborate, and share knowledge.
            </p>

            <h3>Respectful Communication</h3>
            <p>
                Members should interact with each other respectfully and professionally. Differences in experience, opinions, and backgrounds should be handled with constructive discussion rather than conflict.
            </p>

            <h3>Positive Community Culture</h3>
            <p>
                Community members are encouraged to:
            </p>
            <ul>
                <li>Help newcomers and support learning</li>
                <li>Share useful technical knowledge</li>
                <li>Encourage collaboration and teamwork</li>
                <li>Maintain professionalism in discussions</li>
            </ul>

            <h3>Prohibited Behavior</h3>
            <p>
                The following behavior is not allowed in the community:
            </p>
            <ul>
                <li>Spam or repeated promotional messages</li>
                <li>Hate speech or discriminatory language</li>
                <li>Harassment, bullying, or personal attacks</li>
                <li>Threats or encouragement of violence</li>
                <li>Sharing false or misleading information intentionally</li>
            </ul>

            <h3>Moderation Actions</h3>
            <p>
                To maintain a healthy community environment, moderators may take appropriate actions when guidelines are violated. Possible actions include:
            </p>
            <ul>
                <li>Removing inappropriate content</li>
                <li>Temporarily restricting participation</li>
                <li>Permanently removing a member from the community</li>
            </ul>
            <p>
                Moderation decisions are made to protect the safety and integrity of the community.
            </p>

            <h3>Reporting Violations</h3>
            <p>
                If a member observes behavior that violates the Code of Conduct, it can be reported to the moderation team. Reports will be reviewed carefully, and appropriate action will be taken when necessary.
            </p>
        </LegalLayout>
    );
}
