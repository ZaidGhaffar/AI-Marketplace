import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, Shield, Users } from "lucide-react"

const features = [
  {
    icon: <Brain className="h-10 w-10 text-indigo-500" />,
    title: "Advanced AI Technology",
    description:
      "Our agents are built on cutting-edge AI models, trained on vast datasets to deliver intelligent, context-aware responses.",
  },
  {
    icon: <Zap className="h-10 w-10 text-indigo-500" />,
    title: "Efficiency & Speed",
    description: "Automate repetitive tasks and get instant responses, allowing your team to focus on high-value work.",
  },
  {
    icon: <Shield className="h-10 w-10 text-indigo-500" />,
    title: "Security & Privacy",
    description:
      "Enterprise-grade security with end-to-end encryption and strict data privacy protocols to protect your information.",
  },
  {
    icon: <Users className="h-10 w-10 text-indigo-500" />,
    title: "Customizable Agents",
    description: "Tailor AI agents to your specific business needs, industry requirements, and company voice.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Platform</h2>
          <p className="text-xl text-muted-foreground">
            We're revolutionizing how businesses operate by providing specialized AI agents that automate tasks, enhance
            productivity, and deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              Our mission is to democratize access to advanced AI technology, making it accessible and practical for
              businesses of all sizes. We believe that AI should be a tool that enhances human capabilities rather than
              replacing them.
            </p>
            <p className="text-muted-foreground">
              By providing specialized AI agents that can handle specific tasks with precision and efficiency, we free
              up human creativity and strategic thinking for the challenges that truly matter.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-muted-foreground mb-6">
              Founded in 2023 by a team of AI researchers and business strategists, our platform emerged from a simple
              observation: most businesses were struggling to effectively implement AI solutions that delivered real
              value.
            </p>
            <p className="text-muted-foreground">
              We set out to create a marketplace where businesses could easily find, deploy, and benefit from
              purpose-built AI agents without needing extensive technical expertise or massive budgets.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

