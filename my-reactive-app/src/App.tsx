import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, Mail, Video, Star, CheckCircle2, Leaf, Activity, Scale, HeartPulse, ActivitySquare, ChevronDown } from "lucide-react";


// Helper: WhatsApp link
const wa = (phone: string, text = "Hello! I'm interested in a Body Fat Analysis.") => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

const Button = ({
  asChild,
  variant = 'default',
  className,
  children,
  ...props
}: {
  asChild?: boolean;
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  const Comp = asChild ? 'div' : 'button';
  const baseClasses = "inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2";

  const variantClasses = {
    default: "bg-green-600 text-white hover:bg-green-700 shadow hover:shadow-md",
    outline: "border border-green-600 text-green-600 bg-transparent hover:bg-green-50",
    ghost: "text-green-600 hover:bg-green-50",
    secondary: "bg-slate-200 text-slate-800 hover:bg-slate-300"
  };

  // Use type assertion to ensure variant is a valid key
  const variantClass = variantClasses[variant as keyof typeof variantClasses] || variantClasses.default;

  const classes = `${baseClasses} ${variantClass} ${className || ''}`;
  return <Comp className={classes} {...props}>{children}</Comp>;
};

const Card = ({ className, children, ...props }: any) => (
  <div className={`bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ className, children }: any) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const CardHeader = ({ className, children }: any) => (
  <div className={`p-6 pb-0 ${className}`}>{children}</div>
);

const CardTitle = ({ className, children }: any) => (
  <h3 className={`text-xl font-bold text-slate-800 ${className}`}>{children}</h3>
);

const Accordion = ({ className, children }: any) => (
  <div className={className}>{children}</div>
);

const AccordionItem = ({ value, children }: any) => (
  <div data-value={value} className="border-b border-slate-200 last:border-b-0">
    {children}
  </div>
);

const AccordionTrigger = ({ children, onClick, isOpen }: any) => (
  <button
    className="flex items-center justify-between w-full py-4 text-left font-medium text-slate-800 hover:text-green-700 focus:outline-none"
    onClick={onClick}
  >
    {children}
    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
  </button>
);

const AccordionContent = ({ children, isOpen }: any) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <div className="pb-4 text-slate-600">{children}</div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [activeAccordion, setActiveAccordion] = React.useState("");

  const [imgError, setImgError] = useState(false);
  // const [open, setOpen] = useState(false);

  const beforeAfterImages = [
    "/images/after_before_1.jpeg",
    "/images/after_before_2.jpeg",
    "/images/after_before_3.jpeg",
    "/images/after_before_4.jpeg",
    "/images/after_before_5.jpeg",
    "/images/after_before_6.jpeg",
    "/images/after_before_7.jpeg",
    "/images/after_before_8.jpeg",
    "/images/after_before_9.jpeg",
    "/images/after_before_10.jpeg",
    "/images/after_before_11.jpeg",
    "/images/after_before_12.jpeg",
    "/images/after_before_13.jpeg",
    "/images/after_before_14.jpeg",
    "/images/after_before_15.jpeg",
    "/images/after_before_16.jpeg",
    "/images/after_before_17.jpeg",
    "/images/after_before_18.jpeg",
    "/images/after_before_19.jpeg",
    "/images/after_before_20.jpeg",
    "/images/after_before_21.jpeg",
    "/images/after_before_22.jpeg",
    "/images/after_before_23.jpeg",
    "/images/after_before_24.jpeg",
    "/images/after_before_25.jpeg",
    "/images/after_before_26.jpeg",
    "/images/after_before_27.jpeg",
    "/images/after_before_28.jpeg",
    "/images/after_before_29.jpeg"
  ];

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === beforeAfterImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearTimeout(timer);
  }, [currentImageIndex, beforeAfterImages.length]);

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

  const phones = ["919302559659", "917610579155"]; // from poster

  const toggleAccordion = (value: string) => {
    setActiveAccordion(activeAccordion === value ? "" : value);
  };

  return (

    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 supports-[backdrop-filter]:bg-white/70 border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* <div className="w-9 h-9 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 grid place-items-center text-white font-bold shadow-md">VS</div> */}
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 grid place-items-center text-white font-bold shadow-md overflow-hidden cursor-pointer"
                onClick={() => setOpen(true)}
            >
              {!imgError ? (
                <img
                  src="/images/ved-profile.jpg" // <-- replace with your image path
                  alt="Logo"
                  className="w-full h-full object-cover rounded-2xl"
                  onError={() => setImgError(true)}
                />
              ) : (
                "VS"
              )}
            </div>
            <div className="leading-tight">
              <p className="font-semibold tracking-tight text-slate-800">Vedprakash Sahu</p>
              <p className="text-xs text-slate-500">Wellness Coach • Body Fat Analysis</p>
            </div>
          
          </motion.div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {["about", "metrics", "services", "results", "pricing", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-slate-600 hover:text-green-700 transition-colors duration-200 font-medium"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <Button asChild className="rounded-2xl px-4 py-2">
              <a href={wa(phones[0], "Namaste, I want to book a 3‑day trial.")}>Book Trial</a>
            </Button>
          </nav>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              className="md:hidden border-t bg-white px-4 py-3 space-y-3 shadow-md"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {["about", "metrics", "services", "results", "pricing", "contact"].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-slate-700 hover:text-green-700 transition-colors font-medium"
                >
                  {id[0].toUpperCase() + id.slice(1)}
                </a>
              ))}
              <Button asChild className="w-full rounded-2xl py-2 mt-2">
                <a href={wa(phones[0])}>WhatsApp</a>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4 pt-12 pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Look Great. Feel Healthy. <span className="text-green-600">Lose Weight</span> sustainably.
          </h1>
          <p className="mt-4 text-slate-600 text-lg">Personalized coaching with scientific body composition assessment: Weight, Body Fat, BMI, BMR, Visceral Fat, Skeletal Muscle and more.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-2xl px-6 py-3 text-base">
              <a href={wa(phones[0], "I want a Body Fat Analysis consultation.")}>Chat on WhatsApp</a>
            </Button>
            <Button variant="outline" asChild className="rounded-2xl px-6 py-3 text-base">
              <a href="#about"><Video className="w-5 h-5 mr-2" /> Join on Zoom</a>
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-slate-600">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>3‑day free trial • 100% money‑back guarantee</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >

          <CardContent>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
              <AnimatePresence mode="wait">
                <div className="absolute inset-0">
                  <img
                    src={beforeAfterImages[currentImageIndex]}
                    className="w-full h-full object-cover blur-lg scale-110"
                    aria-hidden
                  />
                </div>
                <motion.img
                  key={currentImageIndex}
                  src={beforeAfterImages[currentImageIndex]}
                  alt={`Client Transformation ${currentImageIndex + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>
          </CardContent>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>About Coach</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-600">
              <p className="text-lg">Namaste! I'm <span className="font-semibold text-slate-800">Vedprakash Sahu</span>, your Wellness Coach. I help busy people build healthy habits, optimize nutrition and achieve visible results without extreme diets.</p>
              <ul className="grid sm:grid-cols-2 gap-4 mt-6">
                <li className="flex gap-3 items-start"><CheckCircle2 className="mt-0.5 w-6 h-6 text-green-600 flex-shrink-0" /> <span>Customized diet & habit plans</span></li>
                <li className="flex gap-3 items-start"><CheckCircle2 className="mt-0.5 w-6 h-6 text-green-600 flex-shrink-0" /> <span>Weekly check‑ins & progress reports</span></li>
                <li className="flex gap-3 items-start"><CheckCircle2 className="mt-0.5 w-6 h-6 text-green-600 flex-shrink-0" /> <span>Simple home workouts & stretches</span></li>
                <li className="flex gap-3 items-start"><CheckCircle2 className="mt-0.5 w-6 h-6 text-green-600 flex-shrink-0" /> <span>WhatsApp support and reminders</span></li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Join on ZOOM</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 space-y-4">
              <p>Weekly orientation class for new members. Get your questions answered and learn how the program works.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-600"></div> Every Saturday 7:00 PM IST</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-600"></div> Duration: 40 minutes</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-600"></div> Language: Hindi / English</li>
              </ul>
              <Button asChild className="w-full rounded-2xl py-3 mt-4">
                <a href={wa(phones[0], "Please share Zoom link for the orientation class.")}>Get Zoom Link</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Metrics */}
      <section id="metrics" className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Know your numbers</h2>
            <p className="text-slate-600 mt-3 text-lg">We track these body composition metrics to personalize your plan.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {metrics.map((m) => (
              <motion.div
                key={m.label}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="rounded-2xl hover:shadow-md transition-shadow">
                  <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center">
                      {m.icon}
                    </div>
                    <div className="font-medium text-slate-800">{m.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Services</h2>
          <p className="text-slate-600 mt-3 text-lg">Choose a goal — we'll tailor the path.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="rounded-2xl h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section id="results" className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Before / After</h2>
            <p className="text-slate-600 mt-3 text-lg">Realistic, healthy progress—tracked monthly.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">

            <Card className="rounded-2xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg">Client Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={beforeAfterImages[currentImageIndex]}
                      alt={`Client Transformation ${currentImageIndex + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-0 left-0 w-full h-full object-contain" // Changed from object-cover to object-contain
                    />
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Monthly Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 grid place-items-center flex-shrink-0">⏳</div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Month 1</h4>
                      <p className="text-slate-600 mt-1">Habit setup, gentle calorie deficit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 grid place-items-center flex-shrink-0">📊</div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Month 2</h4>
                      <p className="text-slate-600 mt-1">Body fat ↓, energy ↑</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 grid place-items-center flex-shrink-0">🏃</div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Month 3</h4>
                      <p className="text-slate-600 mt-1">Visible inch loss, better digestion</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Plans & Trial</h2>
          <p className="text-slate-600 mt-3 text-lg">Start with a 3‑day free trial. Upgrade anytime.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Free Trial (3 days)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Starter plan preview with habit checklist and basic diet outline.</p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-600" /> WhatsApp guidance</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-600" /> Sample meal plan</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-600" /> Q&A on Zoom</li>
              </ul>
              <Button asChild className="w-full rounded-2xl py-3 mt-6">
                <a href={wa(phones[0], "I want the 3‑day free trial.")}>Start Free</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-2 border-emerald-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
              POPULAR
            </div>
            <CardHeader>
              <CardTitle>Standard (Monthly)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Personalized nutrition + habit coaching with weekly reviews.</p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-600" /> Body composition tracking</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-600" /> Custom meal plans</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-600" /> Home workout guide</li>
              </ul>
              <Button asChild className="w-full rounded-2xl py-3 mt-6">
                <a href={wa(phones[0], "I'd like to join the Standard monthly plan.")}>Join Standard</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Premium (Quarterly)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Deeper accountability with habit stacking and bi‑weekly reviews.</p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-600" /> Advanced progress dashboard</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-600" /> Recipe bank access</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-600" /> Priority support</li>
              </ul>
              <Button asChild className="w-full rounded-2xl py-3 mt-6">
                <a href={wa(phones[0], "Sign me up for the Premium quarterly plan.")}>Go Premium</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
          <Accordion className="space-y-2">
            <AccordionItem value="q1">
              <AccordionTrigger
                isOpen={activeAccordion === "q1"}
                onClick={() => toggleAccordion("q1")}
              >
                Is this diet restrictive?
              </AccordionTrigger>
              <AccordionContent isOpen={activeAccordion === "q1"}>
                Not at all. We prioritize local, seasonal foods and portion control so you can still enjoy your favorites.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger
                isOpen={activeAccordion === "q2"}
                onClick={() => toggleAccordion("q2")}
              >
                Do I need a gym?
              </AccordionTrigger>
              <AccordionContent isOpen={activeAccordion === "q2"}>
                No gym needed. We provide simple home workouts and stretching routines.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger
                isOpen={activeAccordion === "q3"}
                onClick={() => toggleAccordion("q3")}
              >
                How soon will I see results?
              </AccordionTrigger>
              <AccordionContent isOpen={activeAccordion === "q3"}>
                Most clients feel better in 2 weeks and begin to see visible inch loss within 4–8 weeks depending on consistency.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Contact</h2>
          <p className="text-slate-600 mt-3 text-lg">Reach out on WhatsApp or call directly.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Talk to me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <Button asChild variant="outline" className="rounded-2xl py-3">
                  <a href={`tel:${phones[0]}`}><Phone className="w-5 h-5 mr-2" />Call {phones[0]}</a>
                </Button>
                <Button asChild className="rounded-2xl py-3">
                  <a href={wa(phones[0])}><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</a>
                </Button>
                <Button asChild variant="secondary" className="rounded-2xl py-3">
                  <a href="mailto:coach@vedprakash.fit"><Mail className="w-5 h-5 mr-2" />Email</a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Office hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800">Working Hours</h4>
                  <ul className="mt-2 space-y-2 text-slate-600">
                    <li className="flex justify-between"><span>Mon–Fri</span> <span>9:30 AM – 7:00 PM</span></li>
                    <li className="flex justify-between"><span>Saturday</span> <span>10:00 AM – 4:00 PM</span></li>
                    <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-slate-600">Location: India (IST Time Zone)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 grid place-items-center text-white font-bold text-sm">VS</div> */}
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 grid place-items-center text-white font-bold shadow-md overflow-hidden">
                {!imgError ? (
                  <img
                    src="/images/ved-profile.jpg" // <-- replace with your image path
                    alt="Logo"
                    className="w-full h-full object-cover rounded-2xl"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  "VS"
                )}
              </div>
              <p className="text-slate-600">© {new Date().getFullYear()} Vedprakash Sahu — Wellness Coach</p>
            </div>
            <div className="flex items-center gap-6">
              <a className="text-slate-600 hover:text-green-700 transition-colors" href="#about">About</a>
              <a className="text-slate-600 hover:text-green-700 transition-colors" href="#services">Services</a>
              <a className="text-slate-600 hover:text-green-700 transition-colors" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className=" bg-white rounded-2xl shadow-lg max-w-2xl w-full mx-4 md:mx-0 overflow-hidden flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black z-10"
            >
              ✖
            </button>

            {/* Left Side: Big Round Image */}
            <div className="md:w-1/2 w-full flex items-center justify-center p-6 bg-gradient-to-b from-green-50 to-emerald-100">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-green-500 shadow-lg">
                <img
                  src="/images/ved-profile.jpg"
                  alt="Coach Ved"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side Content */}
            <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800">Vedprakash Sahu</h2>
              <p className="text-gray-600 italic mb-3">Wellness Coach</p>

              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Namaste! I'm <span className="font-semibold">Vedprakash Sahu</span>,
                your Wellness Coach. I help busy people build healthy habits,
                optimize nutrition and achieve visible results without extreme diets.
              </p>

              <ul className="text-gray-700 space-y-2 text-sm mb-6">
                <li>✅ Customized diet & habit plans</li>
                <li>✅ Weekly check-ins & progress reports</li>
                <li>✅ Simple home workouts & stretches</li>
                <li>✅ WhatsApp support and reminders</li>
              </ul>

              <a
                href="https://wa.me/919876543210?text=Hi%20Coach%20Ved%2C%20I%27m%20interested%20in%20your%20program."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition self-start"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}