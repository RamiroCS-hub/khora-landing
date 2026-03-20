import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const DEMO_URL = "https://www.loom.com/share/a0b2d34913e64f919c20dc90c0d60933";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-400 to-cyan-500" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-6 text-balance">
            Lleva tu organizacion a la era de la IA
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Automatiza procesos, potencia a tu equipo de RRHH y da a cada empleado una experiencia personalizada. Todo con una adopcion rapida y sin fricciones.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-slate-100 shadow-xl shadow-black/10 text-lg px-8"
            >
              Comenzar ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm text-lg px-8"
            >
              <a href={DEMO_URL} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Agenda una demo
              </a>
            </Button>
          </div>

          <p className="mt-8 text-white/70 text-sm">
            Implementacion en dias - Soporte personalizado - Sin conocimientos tecnicos requeridos
          </p>
        </div>
      </div>
    </section>
  );
}
