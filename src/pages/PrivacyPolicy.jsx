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
        The PDF viewer on the right shows the exact document you supplied. If
        you need to zoom or search, open it in a new tab or download a copy.
      </p>
      <p className="font-semibold text-[#1B164C]">
        How to use this page
      </p>
      <ul className="space-y-3 list-disc list-inside text-sm md:text-base leading-relaxed text-[#201A4B]">
        <li>Read the embedded PDF directly or open it in a separate tab for full-screen viewing.</li>
        <li>Use the download button to keep a local copy for records or sharing.</li>
        <li>Link back to this route anytime via <span className="font-semibold text-[#6B296D]">/privacy</span>.</li>
      </ul>
      <p>
        If you ever need updates or a different version posted, share the new PDF
        and we will swap it in while preserving this layout.
      </p>
    </LegalLayout>
  );
}

export default PrivacyPolicy;
