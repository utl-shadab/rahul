import LegalLayout from "../components/LegalLayout";

function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Effective March 28, 2026"
      intro="Here is the official Peacechat Privacy Policy you provided. The PDF below is hosted as-is for legal accuracy, with quick download and new-tab options so it remains easy to read on any device. Text on this page uses responsive typography — text-sm on small screens and text-base on larger ones — to stay comfortable to scan."
      pdfPath="/privacy-policy.pdf"
      downloadName="PEACECHAT-Privacy-Policy"
    >
      <p>
        The PDF viewer on the right displays the official and signed version of
        the document exactly as provided. For enhanced readability, you may
        choose to open it in a new tab or download a copy for offline access.
      </p>

      <p className="font-semibold text-[#1B164C]">Instructions for Use</p>

      <ul className="space-y-3 list-disc list-inside text-sm md:text-base leading-relaxed text-[#201A4B]">
        <li>
          Review the document directly within the embedded viewer for quick
          access.
        </li>
        <li>
          Open the PDF in a new tab to utilize full-screen viewing, zoom, and
          search features.
        </li>
        <li>
          Download the file to retain a local copy for record-keeping or sharing
          purposes.
        </li>
        <li>
          Access this page anytime via the route{" "}
          <span className="font-semibold text-[#6B296D]">/privacy</span>.
        </li>
      </ul>

      <p>
        This document represents the most recent approved version. In case of
        any updates or revisions, a new PDF can be provided and will be
        seamlessly replaced while preserving the current layout and structure.
      </p>
    </LegalLayout>
  );
}

export default PrivacyPolicy;
