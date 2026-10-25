"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink, Mail, Send } from "lucide-react";
import { site } from "@/config/site";

const inquiryTypes = [
  { id: "hiring", label: "Job Opportunity / Recruitment", defaultSubject: "Software Developer Role Inquiry" },
  { id: "project", label: "Web App / Client Project", defaultSubject: "Web Development Project Inquiry" },
  { id: "api", label: "API Integration / Maintenance", defaultSubject: "API / Maintenance Inquiry" },
  { id: "general", label: "General Technical Question", defaultSubject: "General Inquiry via Tamal's Lab" },
];

const defaultInquiryType = inquiryTypes[0]!;

export function InquiryComposer() {
  const [selectedType, setSelectedType] = useState(defaultInquiryType.id);
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [details, setDetails] = useState("");
  const [copied, setCopied] = useState(false);

  const currentType = inquiryTypes.find((t) => t.id === selectedType) || defaultInquiryType;

  const emailSubject = `${currentType.defaultSubject}${name ? ` - ${name}` : ""}`;
  
  const emailBody = `Hi Tamal,

My name: ${name || "[Your Name]"}
Company / Organization: ${organization || "[Organization / Personal]"}
Inquiry Type: ${currentType.label}

Project / Role Details:
${details || "[Brief description of your requirements, timeline, or opportunity]"}

Looking forward to hearing from you.
Best regards,
${name || "[Your Name]"}`;

  const mailtoUrl = `mailto:${site.links.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailBody);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard fails
    }
  };

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-xs">
      <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-2">
        <Mail className="size-3.5" />
        <span>Structured Inquiry Assistant</span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-fg">Draft Your Message</h3>
      <p className="mt-1 text-xs sm:text-sm text-muted">
        Fill out this brief outline to launch your preferred mail app with a pre-formatted message to{" "}
        <span className="font-mono font-medium text-fg">{site.links.email}</span>. No fake submissions or hidden forms.
      </p>

      <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
        {/* Inquiry Type Radio selection */}
        <div>
          <label className="block text-xs font-mono font-medium text-faint uppercase tracking-wider mb-2">
            Inquiry Purpose
          </label>
          <div className="grid gap-2 sm:grid-cols-2">
            {inquiryTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setSelectedType(type.id)}
                className={`flex items-center justify-between rounded-lg border px-3.5 py-2.5 text-xs text-left font-medium transition-all cursor-pointer ${
                  selectedType === type.id
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-border bg-bg-subtle text-muted hover:border-border-strong hover:text-fg"
                }`}
              >
                <span>{type.label}</span>
                {selectedType === type.id ? <Check className="size-3.5 text-accent" /> : null}
              </button>
            ))}
          </div>
        </div>

        {/* Name & Organization */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="inquiry-name" className="block text-xs font-mono text-faint uppercase mb-1.5">
              Your Name
            </label>
            <input
              id="inquiry-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex Smith"
              className="w-full rounded-lg border border-border bg-bg-subtle px-3.5 py-2 text-sm text-fg placeholder:text-faint/60 focus:border-accent focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="inquiry-org" className="block text-xs font-mono text-faint uppercase mb-1.5">
              Company / Organization
            </label>
            <input
              id="inquiry-org"
              type="text"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              placeholder="e.g. Acme Studio"
              className="w-full rounded-lg border border-border bg-bg-subtle px-3.5 py-2 text-sm text-fg placeholder:text-faint/60 focus:border-accent focus:outline-none"
            />
          </div>
        </div>

        {/* Message / Details */}
        <div>
          <label htmlFor="inquiry-details" className="block text-xs font-mono text-faint uppercase mb-1.5">
            Details / Scope / Description
          </label>
          <textarea
            id="inquiry-details"
            rows={4}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Tell me about the role, project requirements, existing stack, or any specific questions..."
            className="w-full rounded-lg border border-border bg-bg-subtle px-3.5 py-2.5 text-sm text-fg placeholder:text-faint/60 focus:border-accent focus:outline-none resize-y"
          />
        </div>

        {/* Actions: Mailto and Copy */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <a
            href={mailtoUrl}
            className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-fg px-5 text-sm font-medium text-bg hover:bg-accent hover:text-accent-fg transition-colors"
          >
            <Send className="size-4" />
            <span>Open in Mail App</span>
            <ExternalLink className="size-3.5 opacity-70" />
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface px-4 text-xs font-medium text-fg hover:bg-surface-2 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="size-3.5 text-ok" />
                <span className="text-ok">Draft Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="size-3.5 text-muted" />
                <span>Copy Draft to Clipboard</span>
              </>
            )}
          </button>
        </div>

        <p className="text-[0.7rem] text-faint font-mono mt-2">
          * Clicking &quot;Open in Mail App&quot; launches your default email client with your drafted subject and body directly addressed to {site.links.email}.
        </p>
      </form>
    </div>
  );
}
