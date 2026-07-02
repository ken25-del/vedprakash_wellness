import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, Mail, Video, Star, CheckCircle2, Leaf, Activity, Scale, HeartPulse, ActivitySquare, ChevronDown, Heart, CheckCircle } from "lucide-react";


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
  variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'accent';
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  const Comp = asChild ? 'div' : 'button';
  const baseClasses = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95";

  const variantClasses = {
    default: "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl focus:ring-green-500",
    outline: "border-2 border-green-600 text-green-600 bg-white hover:bg-green-50 focus:ring-green-500",
    ghost: "text-green-600 hover:bg-green-50 focus:ring-green-500",
    secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200 focus:ring-slate-400",
    accent: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-xl focus:ring-cyan-500"
  };

  // Use type assertion to ensure variant is a valid key
  const variantClass = variantClasses[variant as keyof typeof variantClasses] || variantClasses.default;

  const classes = `${baseClasses} ${variantClass} ${className || ''}`;
  return <Comp className={classes} {...props}>{children}</Comp>;
};

const Card = ({ className, children, ...props }: any) => (
  <div className={`bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ className, children }: any) => (
  <div className={`p-6 md:p-8 ${className}`}>{children}</div>
);

const CardHeader = ({ className, children }: any) => (
  <div className={`p-6 md:p-8 pb-0 ${className}`}>{children}</div>
);

const CardTitle = ({ className, children, size = "default" }: any) => {
  const sizeClasses = size === "lg" ? "text-2xl" : "text-xl";
  return (
    <h3 className={`${sizeClasses} font-bold text-slate-900 ${className}`}>{children}</h3>
  );
};

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
    { label: "BMI", icon: <Leaf className="w-5 h-5" />, link: "https://www.gentools.in/tools/utility/bmi-calculator.html" },
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
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 supports-[backdrop-filter]:bg-white/85 border-b border-slate-200/50 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 md:px-6">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Profile Image */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 grid place-items-center text-white font-bold shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setOpen(true)}
            >
              {!imgError ? (
                <img
                  src="/images/ved-profile.jpg"
                  alt="Logo"
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                "VS"
              )}
            </div>
            <div className="leading-tight hidden sm:block">
              <p className="font-bold tracking-tight text-slate-900 text-sm md:text-base">Vedprakash Sahu</p>
              <p className="text-xs text-slate-500 font-medium">Wellness Coach</p>
            </div>

          </motion.div>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {["about", "metrics", "services", "results", "pricing", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-slate-600 hover:text-green-600 transition-colors duration-300 relative group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <Button asChild className="px-5 py-2.5 text-sm">
              <a href={wa(phones[0], "Namaste, I want to book a 3‑day trial.")}>Book Trial</a>
            </Button>
          </nav>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              className="lg:hidden border-t bg-white px-4 py-4 space-y-3 shadow-md"
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
                  className="block py-2 text-slate-700 hover:text-green-600 transition-colors font-medium"
                >
                  {id[0].toUpperCase() + id.slice(1)}
                </a>
              ))}
              <Button asChild className="w-full py-2.5 mt-3">
                <a href={wa(phones[0])}>WhatsApp</a>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-50 via-emerald-50 to-cyan-50 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-200 to-transparent rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-200 to-transparent rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 px-4 py-16 md:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-4 w-fit">
              <div className="w-2 h-2 rounded-full bg-green-600"></div>
              <p className="text-sm font-semibold text-green-600">PERSONALIZED WELLNESS</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-900 mb-4">
              Look Great.<br />Feel Healthy. <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Lose Weight</span> sustainably.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
              Personalized coaching with scientific body composition assessment: Weight, Body Fat, BMI, BMR, Visceral Fat, Skeletal Muscle and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button asChild className="px-7 py-3.5 text-base">
                <a href={wa(phones[0], "I want a Body Fat Analysis consultation.")}>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button variant="outline" asChild className="px-7 py-3.5 text-base">
                <a href="#about">
                  <Video className="w-5 h-5 mr-2" /> 
                  Join Zoom Class
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-emerald-400 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-cyan-400 border-2 border-white"></div>
              </div>
              <span>Join 200+ clients on their wellness journey</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex items-center justify-center w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl opacity-10 blur-2xl"></div>
            <Card className="relative overflow-hidden rounded-3xl shadow-xl w-full">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-100">
                  <AnimatePresence mode="wait">
                    <div className="absolute inset-0">
                      <img
                        src={beforeAfterImages[currentImageIndex]}
                        className="w-full h-full object-cover blur-xl scale-110"
                        aria-hidden
                        alt="Real transformation examples"
                      />
                    </div>
                    <motion.img
                      key={currentImageIndex}
                      src={beforeAfterImages[currentImageIndex]}
                      alt={`Client Transformation ${currentImageIndex + 1}`}
                      className="absolute top-0 left-0 w-full h-full object-contain"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6 }}
                    />
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Card className="rounded-2xl h-full">
              <CardHeader>
                <CardTitle size="lg">About Your Coach</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-slate-600">
                <p className="text-lg leading-relaxed">
                  Namaste! I'm <span className="font-bold text-slate-800">Vedprakash Sahu</span>, your Wellness Coach. I help busy people build healthy habits, optimize nutrition and achieve visible results without extreme diets.
                </p>
                <ul className="grid sm:grid-cols-2 gap-5">
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex gap-3 items-start group cursor-pointer"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-800">Customized diet & habit plans</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex gap-3 items-start group cursor-pointer"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-800">Weekly check‑ins & reports</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex gap-3 items-start group cursor-pointer"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-800">Home workouts & stretches</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex gap-3 items-start group cursor-pointer"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-800">WhatsApp support 24/7</span>
                  </motion.li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl h-full bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
              <CardHeader>
                <CardTitle size="lg" className="text-cyan-900">Weekly Zoom Classes</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-5">
                <p className="text-base leading-relaxed">
                  Join our weekly orientation class for new members. Get your questions answered and learn how the program works.
                </p>
                <ul className="space-y-3 font-medium">
                  <li className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                    <span>Every Saturday 7:00 PM IST</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                    <span>Duration: 40 minutes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                    <span>Hindi & English</span>
                  </li>
                </ul>
                <Button asChild className="w-full accent py-3 mt-4">
                  <a href={wa(phones[0], "Please share Zoom link for the orientation class.")}>Get Zoom Link</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section id="metrics" className="relative bg-gradient-to-br from-emerald-50 via-white to-cyan-50 border-y border-slate-200/50 py-20">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-emerald-200 to-transparent rounded-full opacity-15 blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
              <p className="text-sm font-semibold text-emerald-600">ADVANCED METRICS</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Know Your Numbers</h2>
            <p className="text-slate-600 text-lg">We track comprehensive body metrics to personalize your wellness journey with precision.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {metrics.map((m, index) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card 
                  className="rounded-2xl h-full hover:shadow-xl transition-all duration-300 bg-white"
                  onClick={() => m.link && window.open(m.link, '_blank')}
                  style={{ cursor: m.link ? 'pointer' : 'default' }}
                >
                  <CardContent className="p-5 md:p-6 flex flex-col items-center text-center gap-4 h-full justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-cyan-100 text-emerald-700 grid place-items-center group-hover:scale-110 transition-transform">
                      {m.icon}
                    </div>
                    <div className="font-semibold text-slate-900 text-sm md:text-base">{m.label}</div>
                    {m.link && <div className="text-xs text-green-600 font-medium">→ Try it</div>}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-600"></div>
            <p className="text-sm font-semibold text-green-600">TAILORED PROGRAMS</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-slate-600 text-lg">Choose a wellness goal — we'll personalize the path to get you there.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="rounded-2xl h-full hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-lg text-slate-900">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section id="results" className="relative bg-gradient-to-b from-white to-slate-50 border-y border-slate-200/50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-amber-600"></div>
              <p className="text-sm font-semibold text-amber-600">REAL TRANSFORMATIONS</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Before / After</h2>
            <p className="text-slate-600 text-lg">Realistic, healthy progress—tracked and achieved by our clients every month.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Client Transformation</CardTitle>
                  <p className="text-sm text-slate-500 mt-2">Swipe to see more transformations</p>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={beforeAfterImages[currentImageIndex]}
                        alt={`Client Transformation ${currentImageIndex + 1}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-0 left-0 w-full h-full object-contain"
                      />
                    </AnimatePresence>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {beforeAfterImages.map((_, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-green-600 w-6' : 'bg-slate-300 w-2'}`}
                          whileHover={{ scale: 1.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-2xl hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Monthly Progress Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {[
                      { month: "Month 1", emoji: "⏳", desc: "Habit setup, gentle calorie deficit, energy boost begins", color: "from-amber-500 to-orange-500" },
                      { month: "Month 2", emoji: "📊", desc: "Body fat ↓, energy ↑, first visible changes", color: "from-blue-500 to-cyan-500" },
                      { month: "Month 3", emoji: "🏃", desc: "Visible inch loss, better digestion, transformation evident", color: "from-green-500 to-emerald-500" }
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex gap-4 group"
                        whileHover={{ x: 5 }}
                      >
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} text-white grid place-items-center flex-shrink-0 text-lg group-hover:scale-110 transition-transform shadow-md`}>
                          {item.emoji}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 mb-1">{item.month}</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-purple-600"></div>
            <p className="text-sm font-semibold text-purple-600">FLEXIBLE PRICING</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Plans & Trial</h2>
          <p className="text-slate-600 text-lg">Start with a 3‑day free trial. Upgrade anytime with full transparency.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl h-full hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Free Trial</CardTitle>
                <p className="text-sm text-slate-500 mt-2">3 days • No credit card needed</p>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-slate-600 mb-6">Starter plan preview with everything you need to get started.</p>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /> 
                    <span className="text-slate-700">WhatsApp guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /> 
                    <span className="text-slate-700">Sample meal plan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /> 
                    <span className="text-slate-700">Q&A on Zoom</span>
                  </li>
                </ul>
                <Button asChild className="w-full py-3">
                  <a href={wa(phones[0], "I want the 3‑day free trial.")}>Start Free Trial</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
            className="md:scale-105"
          >
            <Card className="rounded-2xl border-2 border-gradient-to-r from-emerald-500 to-cyan-500 relative overflow-hidden h-full hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-emerald-50/50 to-cyan-50/50">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg">
                ⭐ MOST POPULAR
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-2xl text-emerald-900">Standard</CardTitle>
                <p className="text-sm text-emerald-700 mt-2 font-semibold">Monthly plan • Best value</p>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-slate-700 font-medium mb-6">Complete personalized nutrition + habit coaching with weekly reviews.</p>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" /> 
                    <span className="text-slate-700">Body composition tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" /> 
                    <span className="text-slate-700">Custom meal plans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" /> 
                    <span className="text-slate-700">Home workout guide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" /> 
                    <span className="text-slate-700">Weekly progress calls</span>
                  </li>
                </ul>
                <Button asChild className="w-full py-3">
                  <a href={wa(phones[0], "I'd like to join the Standard monthly plan.")}>Join Standard Plan</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl h-full hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Premium</CardTitle>
                <p className="text-sm text-slate-500 mt-2">Quarterly plan • Maximum results</p>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-slate-600 mb-6">Deeper accountability with habit stacking and bi‑weekly reviews.</p>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /> 
                    <span className="text-slate-700">Advanced dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /> 
                    <span className="text-slate-700">Recipe bank access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /> 
                    <span className="text-slate-700">Priority support 24/7</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /> 
                    <span className="text-slate-700">Exclusive content</span>
                  </li>
                </ul>
                <Button asChild variant="accent" className="w-full py-3">
                  <a href={wa(phones[0], "Sign me up for the Premium quarterly plan.")}>Go Premium</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-gradient-to-br from-slate-50 to-cyan-50 border-y border-slate-200/50 py-20">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-slate-600"></div>
              <p className="text-sm font-semibold text-slate-600">COMMON QUESTIONS</p>
            </div>
            <h2 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </motion.div>

          <Accordion className="space-y-3">
            {[
              {
                value: "q1",
                question: "Is this diet restrictive?",
                answer: "Not at all. We prioritize local, seasonal foods and portion control so you can still enjoy your favorites without feeling deprived."
              },
              {
                value: "q2",
                question: "Do I need a gym?",
                answer: "No gym needed. We provide simple home workouts and stretching routines that fit into your daily schedule."
              },
              {
                value: "q3",
                question: "How soon will I see results?",
                answer: "Most clients feel better in 2 weeks and begin to see visible inch loss within 4–8 weeks depending on consistency."
              },
              {
                value: "q4",
                question: "What if I travel or have an irregular schedule?",
                answer: "Our program is flexible and adapts to your lifestyle. WhatsApp support means we're always available to adjust your plan."
              },
              {
                value: "q5",
                question: "Is there a money-back guarantee?",
                answer: "Yes! If you don't see results within 30 days of consistent effort, we offer a full refund—no questions asked."
              }
            ].map((item) => (
              <motion.div key={item.value}>
                <AccordionItem value={item.value}>
                  <AccordionTrigger
                    isOpen={activeAccordion === item.value}
                    onClick={() => toggleAccordion(item.value)}
                  >
                    <span className="font-semibold text-slate-900">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent isOpen={activeAccordion === item.value}>
                    <p className="text-slate-600">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
            <p className="text-sm font-semibold text-indigo-600">LET'S CONNECT</p>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
          <p className="text-slate-600 text-lg">Reach out on your preferred platform. We're here to answer your questions.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl h-full hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Direct Contact</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Button asChild variant="outline" className="rounded-xl py-3 justify-start text-base font-medium">
                  <a href={`tel:${phones[0]}`}>
                    <Phone className="w-5 h-5 mr-3" />
                    Call Now
                  </a>
                </Button>
                <Button asChild className="rounded-xl py-3 justify-start text-base font-medium">
                  <a href={wa(phones[0])}>
                    <MessageCircle className="w-5 h-5 mr-3" />
                    WhatsApp Chat
                  </a>
                </Button>
                <Button asChild variant="secondary" className="rounded-xl py-3 justify-start text-base font-medium">
                  <a href="mailto:coach@vedprakash.fit">
                    <Mail className="w-5 h-5 mr-3" />
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl h-full bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-indigo-900">Office Hours</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <div className="space-y-6 flex-1">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Weekly Schedule</h4>
                    <ul className="space-y-2 text-slate-700 font-medium">
                      <li className="flex justify-between items-center">
                        <span>Monday - Friday</span>
                        <span className="text-indigo-600">9 AM - 6 PM</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Saturday</span>
                        <span className="text-indigo-600">10 AM - 4 PM</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Sunday</span>
                        <span className="text-indigo-600">Emergency Only</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-indigo-200">
                    <p className="text-slate-600 font-medium">📍 Time Zone: India (IST)</p>
                    <p className="text-slate-600 font-medium mt-2">💬 WhatsApp: Available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/50 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 grid place-items-center text-white font-bold shadow-lg overflow-hidden">
                  {!imgError ? (
                    <img
                      src="/images/ved-profile.jpg"
                      alt="Logo"
                      className="w-full h-full object-cover"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    "VS"
                  )}
                </div>
                <div>
                  <p className="font-bold text-white">Vedprakash Sahu</p>
                  <p className="text-xs text-slate-400">Wellness Coach</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">Transforming lives through personalized nutrition and wellness coaching.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#about" className="hover:text-green-400 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-green-400 transition-colors">Services</a></li>
                <li><a href="#pricing" className="hover:text-green-400 transition-colors">Plans</a></li>
                <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#services" className="hover:text-green-400 transition-colors">Weight Loss</a></li>
                <li><a href="#services" className="hover:text-green-400 transition-colors">Nutrition Plan</a></li>
                <li><a href="#services" className="hover:text-green-400 transition-colors">Body Analysis</a></li>
                <li><a href="#services" className="hover:text-green-400 transition-colors">Coaching</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-bold mb-4 text-white">Connect</h4>
              <div className="flex gap-3">
                <a href={wa(phones[0])} className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 grid place-items-center transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href={`tel:${phones[0]}`} className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 grid place-items-center transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="mailto:coach@vedprakash.fit" className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 grid place-items-center transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Vedprakash Sahu. All rights reserved.</p>
            <p className="text-slate-400 text-sm">Crafted with care for your wellness journey 🌿</p>
          </div>
        </div>
      </footer>
      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm p-4"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-10 p-2 hover:bg-slate-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Side: Profile Image */}
              <div className="md:w-1/2 w-full flex items-center justify-center p-8 bg-gradient-to-br from-green-50 via-emerald-50 to-cyan-50">
                <motion.div 
                  className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-500 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/images/ved-profile.jpg"
                    alt="Coach Ved"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Right Side Content */}
              <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-1">Vedprakash Sahu</h2>
                <p className="text-slate-500 font-semibold mb-4">💚 Wellness Coach & Nutritionist</p>

                <p className="text-slate-700 leading-relaxed mb-6">
                  I help busy professionals achieve their wellness goals without extreme diets or grueling gym routines. Personalized, science-backed coaching tailored to your lifestyle.
                </p>

                <ul className="space-y-3 mb-8">
                  <motion.li 
                    className="flex items-start gap-3 hover:bg-slate-50 p-2 rounded-lg transition-colors cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">Customized diet & habit plans</span>
                  </motion.li>

                  <motion.li 
                    className="flex items-start gap-3 hover:bg-slate-50 p-2 rounded-lg transition-colors cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    <Star className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">Weekly check-ins & progress reports</span>
                  </motion.li>

                  <motion.li 
                    className="flex items-start gap-3 hover:bg-slate-50 p-2 rounded-lg transition-colors cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    <Leaf className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">Home workouts & stretching routines</span>
                  </motion.li>

                  <motion.li 
                    className="flex items-start gap-3 hover:bg-slate-50 p-2 rounded-lg transition-colors cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">24/7 WhatsApp support & reminders</span>
                  </motion.li>
                </ul>

                <Button asChild className="w-full py-3 text-base">
                  <a href={wa(phones[0], "Hi Coach Ved, I'm interested in your program")}>
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Start Your Journey
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}