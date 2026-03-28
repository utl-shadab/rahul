import LegalLayout from "../components/LegalLayout";

function Terms() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="Effective March 28, 2026"
      intro="This route hosts the Terms & Conditions you supplied. The authoritative PDF is embedded for quick reading, with download and new-tab options so visitors on both mobile and desktop can access it easily. Typography is tuned for readability — text-sm on small screens and text-base on larger screens."
      pdfPath="/terms.pdf"
      downloadName="PEACECHAT-Terms"
    >
      <p>
        The embedded PDF represents the exact document as provided. For enhanced
        functionality such as zooming, searching, or printing, you may open it
        in a new tab or download a copy using the available options.
      </p>

      <p className="font-semibold text-[#1B164C]">Usage Guidelines</p>

      <ul className="space-y-3 list-disc list-inside text-sm md:text-base leading-relaxed text-[#201A4B]">
        <li>
          The PDF viewer is responsive and adjusts to different screen sizes;
          for an improved viewing experience on mobile devices, consider
          rotating your screen.
        </li>
        <li>
          Use the public route{" "}
          <span className="font-semibold text-[#6B296D]">/terms</span> to
          reference or share this document when required.
        </li>
        <li>
          In case of future updates or revisions, the PDF can be replaced
          without affecting the current page structure or layout.
        </li>
      </ul>

      <p>
        For any inquiries regarding these terms, please use the contact link
        available in the footer. Our team will ensure your query is directed to
        the appropriate channel.
      </p>
    </LegalLayout>
  );
}

export default Terms;
