import type { DocumentFileRef } from "../store/types";

export function exportFileName(fileRef: DocumentFileRef | null, extension: "png" | "svg" | "pdf" | "tex"): string {
  const name = fileRef?.name.trim() ?? "";
  const stem = name.replace(/\.[^/.]+$/, "");
  return `${stem || "tikz-export"}.${extension}`;
}
