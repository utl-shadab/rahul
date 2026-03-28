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
        The embedded PDF is the exact file you provided. To zoom, print, or
        search the document, open it in a new tab or download it with the
        buttons to the right.
      </p>
      <p className="font-semibold text-[#1B164C]">
        Quick pointers
      </p>
      <ul className="space-y-3 list-disc list-inside text-sm md:text-base leading-relaxed text-[#201A4B]">
        <li>The PDF viewer adapts to screen size; rotate your phone for a wider view if needed.</li>
        <li>Share the public URL <span className="font-semibold text-[#6B296D]">/terms</span> whenever you reference these terms.</li>
        <li>If revisions are required later, replace the PDF and this route will keep the same structure.</li>
      </ul>
      <p>
        For any questions about these terms, use the contact link in the footer
        and we will help you route feedback to the right place.
      </p>
    </LegalLayout>
  );
}

export default Terms;
