import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, CTASection, SectionHeading } from "@/components/marketing";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";export const Route = createFileRoute("/careers")({
  component: CareersPage,
});

function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Join Our Team"
        title="Careers at NAVOGIZ"
        description="Grow your career with us. We are looking for driven individuals to join our expanding sales and business development teams."
      />
      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            title="Open Positions"
            description="We are currently hiring for the following roles to drive our next phase of growth."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <RoleCard
              title="Business Development Associate"
              responsibilities={[
                "Identify and generate new business leads.",
                "Assist in executing sales outreach and follow-ups.",
                "Support the broader sales team with market research and intelligence.",
              ]}
              requirements={[
                "Strong communication and interpersonal skills.",
                "A foundational understanding of sales and growth principles.",
                "Eagerness to learn, adapt, and grow in a fast-paced environment.",
              ]}
              onApply={() => {
                setSelectedRole("Business Development Associate");
                setSubmitSuccess(false);
                setSubmitError(null);
              }}
            />
            <RoleCard
              title="Business Development Executive"
              responsibilities={[
                "Manage the end-to-end sales cycle autonomously.",
                "Build, nurture, and maintain high-value client relationships.",
                "Develop and execute strategic sales plans to hit targets.",
              ]}
              requirements={[
                "Proven experience in sales or direct business development.",
                "Excellent negotiation, persuasion, and presentation skills.",
                "Demonstrated ability to consistently meet and exceed business targets.",
              ]}
              onApply={() => {
                setSelectedRole("Business Development Executive");
                setSubmitSuccess(false);
                setSubmitError(null);
              }}
            />
          </div>

          {selectedRole && (
            <div
              className="mt-16 rise-in rounded-xl border border-border bg-card p-8 shadow-sm"
              id="apply-form"
            >
              <h3 className="font-display text-2xl font-bold">Apply for {selectedRole}</h3>
              
              {submitSuccess ? (
                <div className="mt-8 flex flex-col items-center justify-center p-12 text-center bg-accent/10 rounded-2xl border border-accent/20">
                  <CheckCircle2 className="size-16 text-accent mb-6" />
                  <h3 className="font-display text-2xl font-bold mb-3">Application Submitted!</h3>
                  <p className="text-foreground/70 max-w-md mx-auto mb-6">
                    Thank you for applying to the {selectedRole} position. Our team will review your application and get back to you shortly.
                  </p>
                  <Button variant="outline" onClick={() => setSelectedRole(null)}>
                    View other roles
                  </Button>
                </div>
              ) : (
                <>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Fill out the form below to submit your application.
                  </p>
                  <form
                    className="mt-8 space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  setSubmitError(null);
                  try {
                    const formData = new FormData(e.currentTarget);
                    formData.append("access_key", "9f7ba6d6-e17f-4a0b-b089-c69894187538");
                    formData.append("subject", `New Job Application for ${selectedRole}`);
                    
                    const res = await fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      body: formData,
                    });
                    const json = await res.json();
                    
                    if (json.success) {
                      setSubmitSuccess(true);
                    } else {
                      setSubmitError(json.message || "Something went wrong.");
                    }
                  } catch (err) {
                    setSubmitError("Failed to submit application. Please try again.");
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="linkedin" className="text-sm font-medium">
                      LinkedIn URL
                    </label>
                    <input
                      id="linkedin"
                      name="linkedin"
                      type="url"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="https://linkedin.com/in/johndoe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="portfolio" className="text-sm font-medium">
                      Google Drive Link to Resume <span className="text-muted-foreground font-normal">(Optional)</span>
                    </label>
                    <input
                      id="portfolio"
                      name="portfolio"
                      type="url"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="https://drive.google.com/..."
                    />
                  </div>
                </div>
                {submitError && (
                  <p className="border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">
                    {submitError}
                  </p>
                )}
                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
              </>
              )}
            </div>
          )}
        </div>
      </section>
      <CTASection />
    </>
  );
}

function RoleCard({
  title,
  responsibilities,
  requirements,
  onApply,
}: {
  title: string;
  responsibilities: string[];
  requirements: string[];
  onApply: () => void;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-8 shadow-sm">
      <h3 className="font-display text-2xl font-bold">{title}</h3>
      <div className="mt-4 inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent-strong">
        Language: Any Language
      </div>
      <div className="mt-8 space-y-6 flex-1">
        <div>
          <h4 className="font-semibold text-foreground">Responsibilities:</h4>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted-foreground">
            {responsibilities.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Requirements:</h4>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted-foreground">
            {requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
      </div>
      <Button
        className="mt-8 w-full sm:w-auto self-start"
        onClick={() => {
          onApply();
          setTimeout(
            () => document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" }),
            100,
          );
        }}
      >
        Apply Now
      </Button>
    </div>
  );
}
