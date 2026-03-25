import React from "react";
import appleIcon from "../assets/images/app.svg";
import androidIcon from "../assets/images/android.svg";


// ─── Icons 

const AppleIcon = ({ className = "" }) => (
  <img src={appleIcon} alt="App Store" className={className} />
);

const PlayStoreIcon = ({ className = "" }) => (
  <img src={androidIcon} alt="Google Play" className={className} />
);




// ─── Store defaults 

const STORE_CONFIG = {
  appstore: {
    subtitle: "Download it on",
    title: "App Store",
    Icon: AppleIcon,
  },
  playstore: {
    subtitle: "Download it on",
    title: "Google Play",
    Icon: PlayStoreIcon,
  },
};

// ─── Component ───────────

const StoreButton = ({
  store = "appstore",
  href = "#",
  subtitle,
  title,
  className = "",
  onClick,
}) => {
  const { subtitle: defaultSub, title: defaultTitle, Icon } = STORE_CONFIG[store];

  const sublabel = subtitle ?? defaultSub;
  const label = title ?? defaultTitle;

  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={`${sublabel} ${label}`}
      className={`
        inline-flex items-center
        gap-3 sm:gap-3
        px-5 sm:px-8
        py-2 sm:py-2
        rounded-full
        bg-[#4a1342]
        no-underline select-none cursor-pointer w-full
        min-w-[180px] max-w-[180px] md:min-w-[200px] md:max-w-[200px] lg:min-w-[200px] lg:max-w-[200px]
        shadow-[0_5px_0px_#2d0a28,0_8px_20px_rgba(74,19,66,0.45),inset_0_1px_0_rgba(255,255,255,0.08)]
        transition-all duration-150 ease-out
        hover:bg-[#5a1a50]
        hover:-translate-y-0.5
        hover:shadow-[0_7px_0px_#2d0a28,0_12px_28px_rgba(74,19,66,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]
        active:translate-y-[3px]
        active:shadow-[0_2px_0px_#2d0a28,0_3px_8px_rgba(74,19,66,0.35)]
        ${className}
      `}
    >
      {/* Icon */}
      <Icon className="h-6 flex-shrink-0" />

      {/* Text stack */}
      <div className="flex flex-col leading-none gap-[3px]">
        <span className="text-[8px] sm:text-[9px] font-normal tracking-[0.12em] uppercase text-white/90">
          {sublabel}
        </span>
        <span className="text-base font-semibold tracking-[-0.01em] text-white leading-[1.1]">
          {label}
        </span>
      </div>
    </a>
  );
};

export default StoreButton;

// ─── Usage ───────────────
//
//  <StoreButton store="appstore"  href="https://apps.apple.com/..."    />
//  <StoreButton store="playstore" href="https://play.google.com/..."   />
//
//  Override copy:
//  <StoreButton store="appstore" subtitle="Available on" title="App Store" />
//
//  Extend styles:
//  <StoreButton store="appstore" className="opacity-80 scale-90" />