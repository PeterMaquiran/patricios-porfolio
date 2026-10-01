const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons = {
  network: (
    <>
      <circle {...stroke} cx="16" cy="7" r="2.4" />
      <circle {...stroke} cx="7" cy="24" r="2.4" />
      <circle {...stroke} cx="25" cy="24" r="2.4" />
      <path {...stroke} d="M14.1 8.6 8.8 21.7M17.9 8.6 23.2 21.7M9.6 24h12.8" />
    </>
  ),
  shield: (
    <>
      <path
        {...stroke}
        d="M16 4.5 26.5 8.4v8.4c0 6-4.1 9.6-10.5 11.7C9.6 26.4 5.5 22.8 5.5 16.8V8.4L16 4.5Z"
      />
      <path {...stroke} d="m12 16.2 2.5 2.5 5.6-5.8" />
    </>
  ),
  diagnostics: (
    <>
      <rect {...stroke} x="4.5" y="6" width="23" height="20" rx="3" />
      <path {...stroke} d="M8.5 16h3.2l2.1-4.2 3.2 8.2 2.1-4H23.5" />
    </>
  ),
  training: (
    <>
      <rect {...stroke} x="5" y="5.5" width="22" height="14.5" rx="2" />
      <path {...stroke} d="M12 26.5h8M16 20v6.5M10 12.5h4.5" />
      <circle {...stroke} cx="19" cy="11" r="1.3" />
      <circle {...stroke} cx="22.2" cy="14.2" r="1.3" />
      <path {...stroke} d="m20.1 11.7 1.2 1.6" />
    </>
  ),
  firewall: (
    <>
      <path {...stroke} d="M6 8h20M6 14h20M6 20h20M6 26h20" />
      <path {...stroke} d="M13 8v6M21 8v6M9 14v6M17 14v6M13 20v6M21 20v6" />
    </>
  ),
  routing: (
    <>
      <rect {...stroke} x="3" y="13" width="10" height="6" rx="1.5" />
      <rect {...stroke} x="19" y="13" width="10" height="6" rx="1.5" />
      <path {...stroke} d="M13 16h6" />
      <circle cx="6" cy="16" r="0.9" fill="currentColor" />
      <circle cx="26" cy="16" r="0.9" fill="currentColor" />
    </>
  ),
  vlan: (
    <>
      <path {...stroke} d="M6 8h8M18 8h8M6 16h8M18 16h8M6 24h8M18 24h8" />
      <path {...stroke} d="M16 5.5v21" />
    </>
  ),
  dns: (
    <>
      <circle {...stroke} cx="16" cy="16" r="10" />
      <path {...stroke} d="M6 16h20M16 6c2.8 2.7 4.2 6.2 4.2 10S18.8 23.3 16 26c-2.8-2.7-4.2-6.2-4.2-10S13.2 8.7 16 6Z" />
    </>
  ),
} as const;

export type SectionIconName = keyof typeof icons;

export function SectionIcon({ name }: { name: SectionIconName }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="size-10 text-foreground">
      {icons[name]}
    </svg>
  );
}
