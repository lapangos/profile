import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-lg">Prashant Raj Pandey</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#experience">
            Experience
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#skills">
            Skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Prashant Raj Pandey
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Senior Software Engineer | Java Backend Developer
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#contact">
                  <Button variant="secondary">Contact Me</Button>
                </Link>
                <Link href="#experience">
                  <Button variant="outline" className="bg-white text-purple-500 hover:bg-purple-100">View Experience</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-08-19%20at%207.39.01%20PM%20(1)-YNfOhnxKoCSDJBvXHqX95wOMnpRJoO.jpeg"
                alt="Prashant Raj Pandey"
                width={300}
                height={300}
                className="rounded-full"
              />
              <div className="space-y-4">
                <p className="text-xl">
                  I'm a passionate Senior Software Engineer specializing in Java Backend Development. With a strong foundation in technologies like Spring Boot, Microservices, and AWS, I've led teams in developing innovative solutions that optimize workflows and enhance system performance.
                </p>
                <p className="text-xl">
                  My experience spans across various industries, working with companies like Airtel, Accenture, and Infosys. I'm dedicated to creating efficient, scalable, and robust applications that drive business growth and improve user experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Work Experience</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Airtel</CardTitle>
                  <CardDescription>Senior Software Engineer (Java Backend Developer)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Aug 2022 – present</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Led a team of 14 in developing the One-EPC platform</li>
                    <li>Optimized Product Lifecycle Management, reducing Go-to-Market time from 7 days to 1 day</li>
                    <li>Managed critical channel APIs with 900+ TPS and 99.9% success rate</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Accenture</CardTitle>
                  <CardDescription>Application Development Analyst</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Aug 2021 – Aug 2022</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Designed and developed Broadband provisioning system</li>
                    <li>Developed config server application for flexible configuration management</li>
                    <li>Built Auto retry module to automate retry mechanisms for technical failures</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Infosys</CardTitle>
                  <CardDescription>Senior System Engineer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Jun 2018 – Aug 2021</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Developed critical functionality projects for Cisco</li>
                    <li>Built microservices for importing orders from external systems</li>
                    <li>Led a team of 4 in developing the Component Business Model</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Technical Skills</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {['Java', 'Python', 'Spring Boot', 'Microservices', 'REST', 'MongoDB', 'AWS', 'Oracle', 'Docker', 'Kubernetes', 'Git'].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-lg">{skill}</Badge>
              ))}
            </div>
          </div>
        </section>
        
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Get in Touch</h2>
            <div className="flex justify-center space-x-4">
              <Link href="mailto:ppandey1201@gmail.com" className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </Link>
              <Link href="tel:+919029103637" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Phone</span>
              </Link>
              <Link href="https://linkedin.com/in/call-prashant" className="flex items-center space-x-2">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </Link>
              <Link href="https://github.com/prashantrajpandey" className="flex items-center space-x-2">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Prashant Raj Pandey. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#experience">
            Experience
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#skills">
            Skills
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}