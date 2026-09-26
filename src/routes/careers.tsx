import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, CTASection, SectionHeading } from "@/components/marketing";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
});

function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Join Our Team"
        title="Careers at NAVOGIZZ"
        description="Grow your career with us. We are looking for driven individuals to join our expanding sales and business development teams."
      />
      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading title="Open Positions" description="We are currently hiring for the following roles to drive our next phase of growth." />
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
              onApply={() => setSelectedRole("Business Development Associate")}
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
              onApply={() => setSelectedRole("Business Development Executive")}
            />
          </div>
          
          {selectedRole && (
            <div className="mt-16 rise-in rounded-xl border border-border bg-card p-8 shadow-sm" id="apply-form">
              <h3 className="font-display text-2xl font-bold">Apply for {selectedRole}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Fill out the form below to submit your application.</p>
              
              <form className="mt-8 space-y-6" onSubmit={(e) => {
                e.preventDefault();
                alert("Application submitted successfully!");
                setSelectedRole(null);
              }}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                    <input id="name" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <input id="email" type="email" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <input id="phone" type="tel" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="+91 9876543210" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="resume" className="text-sm font-medium">Upload Resume (PDF, DOCX)</label>
                  <input id="resume" type="file" required accept=".pdf,.doc,.docx" className="flex h-10 w-full cursor-pointer rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-primary file:text-primary-foreground file:px-4 file:py-1 file:-mx-3 file:-my-2 file:mr-3 hover:file:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">Submit Application</Button>
              </form>
            </div>
          )}
        </div>
      </section>
      <CTASection />
    </>
  );
}

function RoleCard({ title, responsibilities, requirements, onApply }: { title: string; responsibilities: string[]; requirements: string[]; onApply: () => void }) {
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
      <Button className="mt-8 w-full sm:w-auto self-start" onClick={() => {
        onApply();
        setTimeout(() => document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" }), 100);
      }}>
        Apply Now
      </Button>
    </div>
  );
}
