export function SiteFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="text-[13px]">
          Patrício Luís
          <span className="text-muted"> · Engenheiro de redes</span>
        </p>
        <p className="text-[13px] text-muted">
          Networking hoje. Um futuro mais conectado amanhã.
        </p>
      </div>
    </footer>
  );
}
