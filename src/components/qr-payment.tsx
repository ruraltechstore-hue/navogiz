import { CheckCircle2, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export async function postJson(path: string, body: unknown) {
  const response = await fetch(path, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = (await response.json().catch(() => ({}))) as Record<string, unknown>;
  if (!response.ok)
    throw new Error(typeof data["error"] === "string" ? data["error"] : "Request failed");
  return data;
}

/** Screen shown after a visitor chooses to pay by scanning the QR code. */
export function QrPaymentView({
  planLabel,
  priceLabel,
  customerName,
  referenceId,
  onBack,
  onDone,
}: {
  planLabel: string;
  priceLabel: string;
  customerName: string;
  referenceId: string;
  onBack: () => void;
  onDone: () => void;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-left">
      <div className="flex-1 w-full flex flex-col justify-center">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <QrCode className="size-8 text-secondary" />
            <DialogTitle className="font-display text-2xl">Scan &amp; Pay</DialogTitle>
          </div>
          <DialogDescription className="mt-2 text-left">
            Details saved for <span className="font-semibold text-foreground">{customerName}</span>.
            Complete your payment via any UPI app.
          </DialogDescription>
        </DialogHeader>

        <dl className="mt-6 grid gap-3 border border-border bg-surface p-5 text-sm rounded-lg">
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Plan</dt>
            <dd className="text-right font-semibold text-foreground">{planLabel}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Amount to Pay</dt>
            <dd className="text-right font-semibold text-foreground">{priceLabel}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Reference ID</dt>
            <dd className="text-right font-semibold text-primary">{referenceId}</dd>
          </div>
        </dl>

        <p className="mt-4 text-xs leading-5 text-muted-foreground">
          Please mention your Reference ID{" "}
          <span className="font-semibold text-foreground">{referenceId}</span> in the payment note
          so our team can verify your registration.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button variant="accent" size="lg" className="w-full" onClick={onDone}>
            I Have Paid
          </Button>
          <Button variant="outline" size="lg" className="w-full" onClick={onBack}>
            Back
          </Button>
        </div>
      </div>

      <div className="w-full md:w-[320px] shrink-0 overflow-hidden rounded-xl border-2 border-border shadow-md">
        <img src="/Qr-razorpay.jpeg" alt="UPI payment QR code" className="w-full h-auto" />
      </div>
    </div>
  );
}

/** Confirmation shown when the visitor says they have paid via QR. */
export function QrPaymentDone({
  planLabel,
  priceLabel,
  referenceId,
}: {
  planLabel: string;
  priceLabel: string;
  referenceId: string;
}) {
  return (
    <div className="text-center">
      <CheckCircle2 className="mx-auto size-10 text-accent-foreground" />
      <DialogHeader className="mt-4">
        <DialogTitle className="text-center font-display text-2xl">Thank You</DialogTitle>
        <DialogDescription className="text-center">
          Your registration details have been received.
        </DialogDescription>
      </DialogHeader>
      <dl className="mt-6 grid gap-2 border border-border bg-surface p-5 text-left text-sm">
        <div className="flex items-start justify-between gap-4">
          <dt className="text-muted-foreground">Plan</dt>
          <dd className="text-right font-semibold text-foreground">{planLabel}</dd>
        </div>
        <div className="flex items-start justify-between gap-4">
          <dt className="text-muted-foreground">Amount</dt>
          <dd className="text-right font-semibold text-foreground">{priceLabel}</dd>
        </div>
        <div className="flex items-start justify-between gap-4">
          <dt className="text-muted-foreground">Reference ID</dt>
          <dd className="text-right font-semibold text-foreground">{referenceId}</dd>
        </div>
      </dl>
      <p className="mt-5 text-sm leading-7 text-muted-foreground">
        Once your payment is verified by our team, your registration will be confirmed and we will
        contact you with the next steps. If you have already paid, you can also share the payment
        screenshot on WhatsApp for faster confirmation.
      </p>
      <Button asChild variant="accent" size="lg" className="mt-6 w-full">
        <a href="https://wa.me/919392207839" target="_blank" rel="noreferrer">
          Share Payment Proof on WhatsApp
        </a>
      </Button>
    </div>
  );
}
