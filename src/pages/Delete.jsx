import React, { useState } from "react";
import SmoothScroll from "../components/SmoothScroll";

function Delete() {
  const [number, setNumber] = useState("");

  const handleDelete = () => {
    if (!number) {
      alert("Please enter a number");
      return;
    }
    alert(`Entry with number ${number} deleted (simulated)`);
    setNumber("");
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden bg-[#F9F7FF]">
        {/* Grid System Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#4B164C 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />

        {/* Decorative elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#BD96FF]/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#F9629A]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 w-full max-w-3xl flex flex-col gap-10">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#4B164C]/5 border border-[#4B164C]/10 text-[#4B164C] text-xs font-bold uppercase tracking-widest mb-2">
              Privacy Control Center
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#4B164C] tracking-tight leading-none">
              Data & Account <span className="text-[#F9629A]">Deletion</span>
            </h1>
            <p className="text-[#3D2C7D]/60 text-lg md:text-xl max-w-xl mx-auto font-medium">
              We respect your right to privacy. Use the form below to permanently remove your data from Peacechat.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Form Section */}
            <div className="lg:col-span-3 bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[3rem] shadow-[0_30px_70px_rgba(75,22,76,0.08)] border border-white/60">
              <div className="space-y-8">
                <div className="space-y-3">
                  <label
                    htmlFor="number-input"
                    className="block text-sm font-bold text-[#4B164C]/80 ml-2"
                  >
                    Enter User ID or Phone Number
                  </label>
                  <div className="relative group">
                    <input
                      id="number-input"
                      type="number"
                      placeholder="e.g. 9876543210"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      className="w-full px-8 py-6 rounded-3xl bg-[#F0E9FF]/40 border-2 border-transparent focus:border-[#4B164C]/20 focus:bg-white text-[#4B164C] text-base font-bold outline-none transition-all duration-500 placeholder:text-[#4B164C]/20 shadow-[inset_0_2px_10px_rgba(75,22,76,0.03)]"
                    />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[#4B164C]/30 opacity-0 group-focus-within:opacity-100 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={handleDelete}
                    className="w-full py-3 cursor-pointer px-10 bg-[#4B164C] text-white font-black text-base rounded-3xl shadow-[0_20px_40px_rgba(75,22,76,0.25)] hover:shadow-[0_25px_50px_rgba(75,22,76,0.35)] hover:-translate-y-1 active:translate-y-0 transition-all duration-500 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Process Deletion
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    </span>
                    <div className="absolute inset-0 bg-[#3A0F3B] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <p className="text-center text-xs text-[#3D2C7D]/40 font-bold uppercase tracking-tighter">
                    Action requires verification via registered email
                  </p>
                </div>
              </div>
            </div>

            {/* Side Info Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#1B164C] p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#F9629A]/20 rounded-full blur-2xl -mr-12 -mt-12 transition-transform duration-1000 group-hover:scale-150" />
                <h3 className="text-lg font-black mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F9629A]" />
                  Deletion Policy
                </h3>
                <div className="space-y-4 text-sm text-white/70 leading-relaxed">
                  <p>
                    <strong className="text-white">Timeframe:</strong> Data is deactivated immediately and fully purged within 30 days.
                  </p>
                  <p>
                    <strong className="text-white">Data Scope:</strong> Includes ID, messages, contacts, and media.
                  </p>
                </div>
              </div>

              <div className="bg-white/40 border border-[#4B164C]/5 p-8 rounded-[2.5rem] relative overflow-hidden">
                <h3 className="text-[#4B164C] text-lg font-black mb-4">Need help?</h3>
                <p className="text-[#3D2C7D]/60 text-sm leading-relaxed mb-6">
                  If you lost access to your ID, please contact our support team.
                </p>
                <a href="mailto:support@peacechat.app" className="inline-flex items-center gap-2 text-[#4B164C] font-bold text-sm hover:underline">
                  support@peacechat.app
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Policy Link */}
          <div className="text-center">
            <p className="text-[#3D2C7D]/30 text-xs font-medium">
              Peacechat complies with Apple App Store User Data Deletion requirements.
              <br className="md:hidden" /> By submitting, you agree to our <a href="/terms" className="underline hover:text-[#4B164C]">Terms of Service</a>.
            </p>
          </div>
        </div>
      </div>
    </SmoothScroll>
  );
}

export default Delete;
