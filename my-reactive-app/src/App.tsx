import React from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, MessageCircle, Mail, Video, Star, CheckCircle2, Leaf, Activity, Scale, HeartPulse, ActivitySquare } from "lucide-react";

// Helper: WhatsApp link
const wa = (phone: string, text = "Hello! I'm interested in a Body Fat Analysis.") => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

// Mock components until shadcn-ui is set up
const Button = ({ asChild, variant, className, children, ...props }: any) => {
  const Comp = asChild ? 'div' : 'button';
  return <Comp className={className} {...props}>{children}</Comp>;
};
const Card = ({ className, children }: any) => <div className={className}>{children}</div>;
const CardContent = ({ className, children }: any) => <div className={className}>{children}</div>;
const CardHeader = ({ className, children }: any) => <div className={className}>{children}</div>;
const CardTitle = ({ className, children }: any) => <div className={className}>{children}</div>;
const Accordion = ({ className, children }: any) => <div className={className}>{children}</div>;
const AccordionItem = ({ value, children }: any) => <div data-value={value}>{children}</div>;
const AccordionTrigger = ({ children }: any) => <div>{children}</div>;
const AccordionContent = ({ children }: any) => <div>{children}</div>;


export default function App() {
  const [open, setOpen] = React.useState(false);

  const metrics = [
    { label: "Weight", icon: <Scale className="w-5 h-5" /> },
    { label: "Body Fat", icon: <Activity className="w-5 h-5" /> },
    { label: "Body Age", icon: <ActivitySquare className="w-5 h-5" /> },
    { label: "BMR", icon: <HeartPulse className="w-5 h-5" /> },
    { label: "BMI", icon: <Leaf className="w-5 h-5" /> },
    { label: "Visceral Fat", icon: <HeartPulse className="w-5 h-5" /> },
    { label: "Subcutaneous Fat", icon: <Activity className="w-5 h-5" /> },
    { label: "Skeletal Muscle", icon: <ActivitySquare className="w-5 h-5" /> },
  ];

  const services = [
    {
      title: "Lose or Gain Weight",
      desc: "Structured programs to reduce or increase weight safely with sustainable habits.",
    },
    {
      title: "Balanced Nutrition",
      desc: "Custom meal plans aligned with your lifestyle and culture for optimal results.",
    },
    {
      title: "Improve Digestion",
      desc: "Food choices, hydration strategy and routines that support gut health.",
    },
    {
      title: "Child Nutrition",
      desc: "Age‑appropriate guidance to build healthy eating habits in kids.",
    },
    {
      title: "Skin & Hair Care",
      desc: "Nutrition-first approach to glowing skin and strong hair.",
    },
    {
      title: "Energy & Performance",
      desc: "Daily protocols to boost energy, focus and stamina.",
    },
  ];

  const phones = ["9302559659", "7610579155"]; // from poster

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-green-600/90 grid place-items-center text-white font-bold">VS</div>
            <div className="leading-tight">
              <p className="font-semibold tracking-tight">Vedprakash Sahu</p>
              <p className="text-xs text-slate-500">Wellness Coach • Body Fat Analysis</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-green-700">About</a>
            <a href="#metrics" className="hover:text-green-700">Metrics</a>
            <a href="#services" className="hover:text-green-700">Services</a>
            <a href="#results" className="hover:text-green-700">Results</a>
            <a href="#pricing" className="hover:text-green-700">Plans</a>
            <a href="#contact" className="hover:text-green-700">Contact</a>
            <Button asChild className="rounded-2xl">
              <a href={wa(phones[0], "Namaste, I want to book a 3‑day trial.")}>Book Trial</a>
            </Button>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t bg-white px-4 py-3 space-y-3">
            {["about","metrics","services","results","pricing","contact"].map((id) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block py-1">{id[0].toUpperCase()+id.slice(1)}</a>
            ))}
            <Button asChild className="w-full rounded-2xl">
              <a href={wa(phones[0])}>WhatsApp</a>
            </Button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4 pt-10 pb-14">
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Look Great. Feel Healthy. <span className="text-green-700">Lose Weight</span> sustainably.
          </h1>
          <p className="mt-4 text-slate-600">Personalized coaching with scientific body composition assessment: Weight, Body Fat, BMI, BMR, Visceral Fat, Skeletal Muscle and more.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="rounded-2xl">
              <a href={wa(phones[0], "I want a Body Fat Analysis consultation.")}>Chat on WhatsApp</a>
            </Button>
            <Button variant="outline" asChild className="rounded-2xl">
              <a href="#about"><Video className="w-4 h-4 mr-2" /> Join on Zoom (Info)</a>
            </Button>
            <Button variant="ghost" asChild className="rounded-2xl">
              <a href="#results">See Results</a>
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-slate-600">
            <Star className="w-4 h-4" /> 3‑day free trial • 100% money‑back guarantee
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-green-100 to-emerald-50 border grid place-items-center">
            <div className="text-center p-6">
              <p className="text-6xl">💪</p>
              <p className="font-semibold mt-2">Body Fat Analysis Available</p>
              <p className="text-sm text-slate-600">Before / After tracking every month</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>About Coach</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-600">
              <p>Namaste! I’m <span className="font-semibold text-slate-800">Vedprakash Sahu</span>, your Wellness Coach. I help busy people build healthy habits, optimize nutrition and achieve visible results without extreme diets.</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                <li className="flex gap-2 items-start"><CheckCircle2 className="mt-0.5 w-5 h-5 text-green-600" /> Customized diet & habit plans</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="mt-0.5 w-5 h-5 text-green-600" /> Weekly check‑ins & progress reports</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="mt-0.5 w-5 h-5 text-green-600" /> Simple home workouts & stretches</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="mt-0.5 w-5 h-5 text-green-600" /> WhatsApp support and reminders</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Join on ZOOM</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 space-y-2">
              <p>Weekly orientation class for new members. Get your questions answered and learn how the program works.</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Every Saturday 7:00 PM IST</li>
                <li>Duration: 40 minutes</li>
                <li>Language: Hindi / English</li>
              </ul>
              <Button asChild className="w-full rounded-2xl mt-2">
                <a href={wa(phones[0], "Please share Zoom link for the orientation class.")}>Get Zoom Link</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Metrics */}
      <section id="metrics" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold">Know your numbers</h2>
          <p className="text-slate-600 mt-2">We track these body composition metrics to personalize your plan.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6">
            {metrics.map((m) => (
              <Card key={m.label} className="rounded-2xl">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 grid place-items-center">{m.icon}</div>
                  <div className="font-medium">{m.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold">Services</h2>
        <p className="text-slate-600 mt-2">Choose a goal — we’ll tailor the path.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {services.map((s) => (
            <Card key={s.title} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Results */}
      <section id="results" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold">Before / After</h2>
          <p className="text-slate-600 mt-2">Realistic, healthy progress—tracked monthly.</p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Client Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="/images/after_before_1.jpeg" alt="Client Transformation" className="aspect-[16/9] w-full rounded-xl object-cover" />
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Monthly Progress</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                <ul className="space-y-2">
                  <li>⏳ Month 1: Habit setup, gentle calorie deficit</li>
                  <li>📊 Month 2: Body fat ↓, energy ↑</li>
                  <li>🏃 Month 3: Visible inch loss, better digestion</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold">Plans & Trial</h2>
        <p className="text-slate-600 mt-2">Start with a 3‑day free trial. Upgrade anytime.</p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Free Trial (3 days)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 space-y-2">
              <p>Starter plan preview with habit checklist and basic diet outline.</p>
              <ul className="space-y-1">
                <li>• WhatsApp guidance</li>
                <li>• Sample meal plan</li>
                <li>• Q&A on Zoom</li>
              </ul>
              <Button asChild className="w-full rounded-2xl mt-2"><a href={wa(phones[0], "I want the 3‑day free trial.")}>Start Free</a></Button>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-2 border-emerald-500">
            <CardHeader>
              <CardTitle>Standard (Monthly)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 space-y-2">
              <p>Personalized nutrition + habit coaching with weekly reviews.</p>
              <ul className="space-y-1">
                <li>• Body composition tracking</li>
                <li>• Custom meal plans</li>
                <li>• Home workout guide</li>
              </ul>
              <Button asChild className="w-full rounded-2xl mt-2"><a href={wa(phones[0], "I'd like to join the Standard monthly plan.")}>Join Standard</a></Button>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Premium (Quarterly)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 space-y-2">
              <p>Deeper accountability with habit stacking and bi‑weekly reviews.</p>
              <ul className="space-y-1">
                <li>• Advanced progress dashboard</li>
                <li>• Recipe bank access</li>
                <li>• Priority support</li>
              </ul>
              <Button asChild className="w-full rounded-2xl mt-2"><a href={wa(phones[0], "Sign me up for the Premium quarterly plan.")}>Go Premium</a></Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="q1">
              <AccordionTrigger>Is this diet restrictive?</AccordionTrigger>
              <AccordionContent>Not at all. We prioritize local, seasonal foods and portion control so you can still enjoy your favorites.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Do I need a gym?</AccordionTrigger>
              <AccordionContent>No gym needed. We provide simple home workouts and stretching routines.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>How soon will I see results?</AccordionTrigger>
              <AccordionContent>Most clients feel better in 2 weeks and begin to see visible inch loss within 4–8 weeks depending on consistency.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="text-slate-600 mt-2">Reach out on WhatsApp or call directly.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Talk to me</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline" className="rounded-2xl w-full sm:w-auto"><a href={`tel:${phones[0]}`}><Phone className="w-4 h-4 mr-2"/>Call {phones[0]}</a></Button>
              <Button asChild className="rounded-2xl w-full sm:w-auto"><a href={wa(phones[0])}><MessageCircle className="w-4 h-4 mr-2"/>WhatsApp</a></Button>
              <Button asChild variant="secondary" className="rounded-2xl w-full sm:w-auto"><a href="mailto:coach@vedprakash.fit"><Mail className="w-4 h-4 mr-2"/>Email</a></Button>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Office hours</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              <ul className="space-y-1">
                <li>Mon–Fri: 9:30 AM – 7:00 PM</li>
                <li>Sat: 10:00 AM – 4:00 PM</li>
                <li>Sun: Closed</li>
              </ul>
              <p className="mt-3">Location: India (IST)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-500 flex flex-col sm:flex-row gap-2 items-center justify-between">
          <p>© {new Date().getFullYear()} Vedprakash Sahu — Wellness Coach</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-slate-700" href="#about">About</a>
            <a className="hover:text-slate-700" href="#services">Services</a>
            <a className="hover:text-slate-700" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}