"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample product data
const products = [
  {
    id: 1,
    title: "Research Assistant",
    description:
      "An AI agent that conducts comprehensive research on any topic and delivers organized, actionable insights.",
    price: 29.99,
    videoUrl: "/videos/research-assistant.mp4", // This would be a real video in production
    category: "Productivity",
    popular: true,
  },
  {
    id: 2,
    title: "Customer Support Bot",
    description:
      "24/7 customer support agent that handles inquiries, resolves issues, and maintains customer satisfaction.",
    price: 49.99,
    videoUrl: "/videos/customer-support.mp4",
    category: "Support",
    popular: true,
  },
  {
    id: 3,
    title: "Content Creator",
    description: "Creates engaging blog posts, social media content, and marketing copy tailored to your brand voice.",
    price: 39.99,
    videoUrl: "/videos/content-creator.mp4",
    category: "Marketing",
    popular: false,
  },
  {
    id: 4,
    title: "Data Analyst",
    description: "Processes large datasets, identifies patterns, and generates insightful reports and visualizations.",
    price: 59.99,
    videoUrl: "/videos/data-analyst.mp4",
    category: "Analytics",
    popular: false,
  },
  {
    id: 5,
    title: "Personal Assistant",
    description: "Manages your calendar, schedules meetings, sends reminders, and helps organize your digital life.",
    price: 24.99,
    videoUrl: "/videos/personal-assistant.mp4",
    category: "Productivity",
    popular: true,
  },
  {
    id: 6,
    title: "Code Assistant",
    description: "Helps write, debug, and optimize code across multiple programming languages and frameworks.",
    price: 69.99,
    videoUrl: "/videos/code-assistant.mp4",
    category: "Development",
    popular: false,
  },
]

const categories = ["All", "Productivity", "Support", "Marketing", "Analytics", "Development"]

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProducts =
    activeCategory === "All" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Agents</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our collection of specialized AI agents designed to transform your workflow and boost productivity.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full max-w-4xl mx-auto mb-12">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} onClick={() => setActiveCategory(category)}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              videoUrl={product.videoUrl}
              category={product.category}
              popular={product.popular}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

