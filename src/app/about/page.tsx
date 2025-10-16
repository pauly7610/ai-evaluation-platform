import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Target, Users, Zap, Shield } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="text-lg sm:text-xl font-bold truncate">AI Evaluation Platform</Link>
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <ThemeToggle />
              <Button asChild size="sm" className="h-9">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 flex-1">
        {/* Hero */}
        <div className="mb-12 sm:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">About Us</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
            We're building the infrastructure layer for AI quality assurance, helping teams ship 
            reliable AI products with confidence.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-12 sm:mb-16">
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-blue-500/10 flex-shrink-0">
                <Target className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-3 sm:mb-4">
              AI systems are fundamentally different from traditional software. They're probabilistic, 
              context-dependent, and can fail in unexpected ways. Yet most teams are building AI products 
              with the same testing tools designed for deterministic code.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We believe every AI product needs rigorous evaluation before reaching users. Our platform 
              provides the tools to test, monitor, and continuously improve AI systems — from unit tests 
              in development to A/B tests in production.
            </p>
          </div>
        </section>

        {/* Problem We Solve */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">The Problem We're Solving</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-5 sm:p-6">
              <h3 className="font-semibold mb-3 text-destructive text-base sm:text-lg">❌ Without Proper Evaluation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Silent failures in production</li>
                <li>• No visibility into model behavior</li>
                <li>• Prompt changes break existing use cases</li>
                <li>• Expensive manual review processes</li>
                <li>• Inability to measure improvement</li>
                <li>• User trust eroded by inconsistent outputs</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 sm:p-6">
              <h3 className="font-semibold mb-3 text-green-500 text-base sm:text-lg">✓ With Our Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Catch regressions before deployment</li>
                <li>• Full observability of LLM calls</li>
                <li>• Automated regression testing</li>
                <li>• Scale human review with LLM judges</li>
                <li>• Track quality metrics over time</li>
                <li>• Ship with confidence</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We're Different */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">How We're Different</h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="rounded-lg border border-border bg-card p-5 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-blue-500/10 flex-shrink-0">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-base sm:text-lg">End-to-End Platform</h3>
                  <p className="text-sm text-muted-foreground">
                    From unit tests in your IDE to production monitoring, we cover the entire AI development 
                    lifecycle. No need to stitch together multiple tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-blue-500/10 flex-shrink-0">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-base sm:text-lg">Human + AI Evaluation</h3>
                  <p className="text-sm text-muted-foreground">
                    Combine the scale of LLM judges with the nuance of human review. Train judge models 
                    on your specific quality criteria.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-blue-500/10 flex-shrink-0">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-base sm:text-lg">Built for Production</h3>
                  <p className="text-sm text-muted-foreground">
                    High-throughput tracing, real-time dashboards, and statistical A/B testing. 
                    Scale from prototype to millions of requests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Who We Serve</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-5 sm:p-6">
              <h3 className="font-semibold mb-3 text-base sm:text-lg">Startups</h3>
              <p className="text-sm text-muted-foreground">
                Ship AI features faster with built-in quality assurance. Catch issues before users do 
                and iterate with confidence.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 sm:p-6">
              <h3 className="font-semibold mb-3 text-base sm:text-lg">Enterprises</h3>
              <p className="text-sm text-muted-foreground">
                Meet compliance requirements and risk management standards. Audit trail for every AI 
                decision with full traceability.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 sm:p-6">
              <h3 className="font-semibold mb-3 text-base sm:text-lg">AI Teams</h3>
              <p className="text-sm text-muted-foreground">
                Focus on building, not infrastructure. We handle the complexity of evaluation at scale 
                so you can focus on your models.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Our Values</h2>
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h3 className="font-semibold mb-2 text-base sm:text-lg">Quality First</h3>
                <p className="text-sm text-muted-foreground">
                  AI quality isn't optional. We believe every AI product should be rigorously tested 
                  before reaching users.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-base sm:text-lg">Developer Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Great tools get out of your way. We obsess over API design, documentation, and 
                  making evaluation feel natural.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-base sm:text-lg">Transparency</h3>
                <p className="text-sm text-muted-foreground">
                  AI systems should be observable and explainable. We provide full visibility into 
                  how your models behave.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-base sm:text-lg">Community Driven</h3>
                <p className="text-sm text-muted-foreground">
                  We learn from practitioners building in production. Your feedback shapes our roadmap.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}