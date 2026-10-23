import { describe, expect, it } from "vitest";
import { exportFileName } from "../../packages/app/src/ui/export-file-name";

describe("exportFileName", () => {
  it("replaces the source extension for each export format", () => {
    const fileRef = { kind: "file" as const, name: "w5-1-amdv.tex" };
    expect(exportFileName(fileRef, "png")).toBe("w5-1-amdv.png");
    expect(exportFileName(fileRef, "svg")).toBe("w5-1-amdv.svg");
    expect(exportFileName(fileRef, "pdf")).toBe("w5-1-amdv.pdf");
    expect(exportFileName(fileRef, "tex")).toBe("w5-1-amdv.tex");
  });

  it("preserves dots in the stem and falls back for unnamed documents", () => {
    expect(exportFileName({ kind: "virtual", name: "draft.v2.tex" }, "png")).toBe("draft.v2.png");
    expect(exportFileName(null, "png")).toBe("tikz-export.png");
    expect(exportFileName({ kind: "virtual", name: "  " }, "svg")).toBe("tikz-export.svg");
  });
});
