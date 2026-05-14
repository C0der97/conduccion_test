
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShieldCheck, 
  MapPin, 
  BookOpen, 
  Zap, 
  ChevronRight, 
  Scale, 
  AlertTriangle 
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F1F4F6]">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white">
              <Scale className="w-5 h-5" />
            </div>
            <span className="font-headline font-bold text-xl text-primary">RutaLegal Colombia</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-bold text-slate-600 uppercase tracking-wider">
            <a href="#simulator" className="hover:text-primary transition-colors">Simulador</a>
            <a href="#features" className="hover:text-primary transition-colors">Características</a>
            <a href="#about" className="hover:text-primary transition-colors">Legislación</a>
          </div>
          <Button asChild className="bg-primary hover:bg-slate-800">
            <Link href="/simulator">Empezar Examen</Link>
          </Button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in slide-in-from-left duration-700">
              <BadgeSection text="SIMULADOR RUNT 2024" />
              <h1 className="text-5xl md:text-7xl font-headline font-bold text-[#1A3A5A] leading-tight">
                Domina el Examen Teórico con <span className="text-[#4A3A8A]">Inteligencia Artificial</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-body">
                Prepárate con el simulador más avanzado de Colombia. Basado en el Código Nacional de Tránsito y potenciado por IA para explicar cada norma.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="h-14 px-8 text-lg bg-[#4A3A8A] hover:bg-[#3a2d6e] shadow-lg shadow-[#4A3A8A]/20">
                  <Link href="/simulator">Iniciar Simulacro Gratis</Link>
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-slate-300">
                  Ver Balotario 2024
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-6 grayscale opacity-60">
                <ShieldCheck className="w-12 h-12" />
                <MapPin className="w-12 h-12" />
                <BookOpen className="w-12 h-12" />
              </div>
            </div>
            <div className="relative animate-in zoom-in duration-1000">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#4A3A8A]/10 rounded-full blur-3xl" />
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
               <Card className="border-none shadow-2xl overflow-hidden relative z-10">
                 <Image 
                   src="https://picsum.photos/seed/ruta1/1200/600" 
                   alt="Driving Simulator" 
                   width={600} 
                   height={400}
                   className="object-cover w-full h-[400px]"
                   data-ai-hint="driving road"
                 />
                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                   <p className="font-bold flex items-center gap-2">
                     <Zap className="w-4 h-4 text-yellow-400" />
                     Feedback en tiempo real con IA
                   </p>
                 </div>
               </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-primary">Tecnología al Servicio de tu Licencia</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                No solo memorices respuestas. Entiende la lógica legal detrás de cada norma de tránsito en Colombia.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<BrainCircuit className="w-8 h-8 text-[#4A3A8A]" />}
                title="Asesor Legal IA"
                description="Motor basado en Genkit que explica las respuestas referenciando el Código Nacional de Tránsito."
              />
              <FeatureCard 
                icon={<Zap className="w-8 h-8 text-yellow-500" />}
                title="Modo Repaso Inteligente"
                description="Generamos preguntas personalizadas enfocadas únicamente en los temas donde tuviste errores."
              />
              <FeatureCard 
                icon={<Scale className="w-8 h-8 text-blue-500" />}
                title="Estándar RUNT"
                description="Preguntas actualizadas según la Ley Julián Esteban y normativas vigentes del Ministerio de Transporte."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="simulator" className="py-20 px-4">
          <div className="max-w-5xl mx-auto bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl font-bold">¿Listo para asegurar tu aprobación?</h2>
              <p className="text-white/80 text-xl max-w-2xl mx-auto">
                El 85% de los estudiantes que usan simuladores interactivos aprueban su examen en el primer intento.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-slate-100 h-16 px-12 text-xl font-bold rounded-xl group">
                <Link href="/simulator">
                  Comenzar Simulacro Completo
                  <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-white" />
            <span className="font-headline font-bold text-xl text-white">RutaLegal Colombia</span>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Código de Tránsito</a>
          </div>
          <p className="text-xs">© 2024 RutaLegal. Desarrollado para fines pedagógicos en Colombia.</p>
        </div>
      </footer>
    </div>
  );
}

function BadgeSection({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 bg-[#4A3A8A]/10 text-[#4A3A8A] px-3 py-1 rounded-full text-sm font-bold tracking-widest uppercase">
      <Zap className="w-3.5 h-3.5" />
      {text}
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow p-8 space-y-4">
      <div className="p-3 bg-slate-50 rounded-2xl w-fit">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </Card>
  );
}

function BrainCircuit({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 8.105 4 4 0 0 0 8.003 0 4 4 0 0 0 .52-8.105 4 4 0 0 0-2.526-5.77A3 3 0 0 0 12 5Z" />
      <path d="M9 13h1" />
      <path d="M14 13h1" />
      <path d="M12 16v1" />
      <path d="M12 9v1" />
    </svg>
  );
}
