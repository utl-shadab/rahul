import { Link } from "react-router-dom";

function LegalLayout({ title, subtitle, pdfPath, downloadName, intro, children }) {
  return (
    <div className="bg-[#F8F6FF] text-[#1B164C]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24 space-y-8">
        <div className="flex items-center gap-3 text-sm md:text-base text-[#3D2C7D]">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm md:text-base font-semibold hover:text-[#6B296D] transition-colors duration-200"
          >
            <span aria-hidden="true">←</span> Back to home
          </Link>
        </div>

        <header className="space-y-4">
          <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-[#6B296D]/80 font-semibold">
            Peacechat Legal
          </p>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-[#1B164C] drop-shadow-sm">
            {title}
          </h1>
          <p className="text-sm md:text-base text-[#2B2851]/80 max-w-3xl leading-relaxed">
            {intro}
          </p>
          {subtitle && (
            <p className="text-xs md:text-sm text-[#3D2C7D] font-semibold tracking-wide">
              {subtitle}
            </p>
          )}
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <section className="bg-white/90 border border-[#E5E1FF] rounded-2xl shadow-sm p-6 md:p-8 space-y-6">
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-[#201A4B]">
              {children}
            </div>
          </section>

          <aside className="bg-white/80 border border-[#E5E1FF] rounded-2xl shadow-sm p-5 md:p-6 flex flex-col gap-4">
            <div>
              <p className="text-base md:text-lg font-bold text-[#1B164C] leading-tight">
                Full document
              </p>
              <p className="text-sm md:text-base text-[#2B2851]/80 leading-relaxed">
                View or download the signed PDF exactly as provided.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#E5E1FF] shadow-inner bg-[#0F0A2F]/3">
              <object
                data={pdfPath}
                type="application/pdf"
                className="w-full h-[420px] md:h-[650px]"
              >
                <div className="p-6 text-center text-sm md:text-base text-[#2B2851]/80 space-y-2">
                  <p>Your browser cannot display PDFs inline.</p>
                  <a
                    href={pdfPath}
                    className="text-[#6B296D] font-semibold underline underline-offset-4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open the {downloadName} PDF
                  </a>
                </div>
              </object>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={pdfPath}
                download={downloadName}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#6B296D] text-white text-sm md:text-base font-semibold shadow-lg shadow-[#6B296D]/25 hover:scale-[1.01] transition-transform duration-150"
              >
                Download PDF
              </a>
              <a
                href={pdfPath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[#6B296D]/40 text-[#6B296D] text-sm md:text-base font-semibold hover:bg-[#6B296D]/10 transition-colors duration-150"
              >
                Open in new tab
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default LegalLayout;
