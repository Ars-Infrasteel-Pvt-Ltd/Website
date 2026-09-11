"use client";

import { useEffect, useState } from "react";

type CertificationCardProps = {
  tag: string;
  title: string;
  body: string;
  fileUrl: string; // path under /public, e.g. "/certificates/ISO9001.jpg"
  fileType: "image" | "pdf";
};

export default function CertificationCard({
  tag,
  title,
  body,
  fileUrl,
  fileType,
}: CertificationCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    // Block Ctrl/Cmd+S and Ctrl/Cmd+P while the viewer is open, since
    // some in-browser PDF viewers expose save/print via keyboard even
    // with the toolbar hidden.
    const blockSaveShortcuts = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if ((event.ctrlKey || event.metaKey) && (key === "s" || key === "p")) {
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", blockSaveShortcuts);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("keydown", blockSaveShortcuts);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // #toolbar=0&navpanes=0&scrollbar=0 hides the built-in PDF viewer's
  // toolbar (and its download/print buttons) in Chrome/Edge/Firefox.
  const pdfSrc = `${fileUrl}#toolbar=0&navpanes=0&scrollbar=0`;

  return (
    <div className="relative flex h-full flex-col p-6 sm:p-7">
      <div className="mb-5 flex h-11 w-11 items-center rounded justify-center bg-ink text-[11px] font-bold text-white">
        {tag}
      </div>
      <h3 className="mb-2 min-h-[3.5rem] font-display text-lg font-bold leading-snug tracking-tight sm:min-h-[3rem]">
        {title}
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-steel">{body}</p>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative mt-auto inline-flex w-fit items-center cursor-pointer overflow-hidden rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick"
      >
        <span className="absolute inset-0 z-0 origin-left scale-x-100 rounded-full bg-brick md:scale-x-0 md:transition-transform md:duration-300 md:ease-out md:group-hover:scale-x-100" />
        <span className="relative z-10">View certificate</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`cert-title-${tag}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
          onContextMenu={(event) => event.preventDefault()}
        >
          <div className="relative flex h-[calc(100dvh-2rem)] w-full max-w-5xl flex-col overflow-hidden bg-white shadow-2xl sm:h-[calc(100dvh-3rem)]">
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-line px-4 py-3 sm:px-6 sm:py-4">
              <h2
                id={`cert-title-${tag}`}
                className="font-display text-base font-bold sm:text-lg"
              >
                {title} Certificate
              </h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close certificate"
                className="flex h-10 w-10 shrink-0 items-center cursor-pointer justify-center text-2xl leading-none text-steel transition-colors hover:text-brick focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-auto bg-canvas p-2 sm:p-5">
              {fileType === "image" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={fileUrl}
                  alt={`${title} certificate`}
                  className="mx-auto h-auto w-full max-w-4xl object-contain"
                  onContextMenu={(event) => event.preventDefault()}
                  draggable={false}
                />
              ) : (
                // Rendered only once the modal is opened — this is what
                // keeps the 8 PDFs from being fetched/parsed on initial
                // page load.
                <iframe
                  src={pdfSrc}
                  title={`${title} certificate`}
                  className="h-full min-h-[70vh] w-full border-0"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}