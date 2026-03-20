import { Brain, Users, Zap, Shield, Layers, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "IA que Entiende tu Empresa",
    description: "Agentes inteligentes que comprenden la dinamica de tu organizacion y generan insights accionables para la toma de decisiones.",
    color: "orange",
  },
  {
    icon: Users,
    title: "Potencia a tus Equipos de RRHH",
    description: "Herramientas que multiplican la capacidad de tu equipo de recursos humanos, automatizando tareas repetitivas y liberando tiempo para lo estrategico.",
    color: "cyan",
  },
  {
    icon: Layers,
    title: "Centralizacion de Procesos",
    description: "Unifica todos tus procesos de gestion de personas en una sola plataforma inteligente, eliminando silos de informacion.",
    color: "orange",
  },
  {
    icon: Zap,
    title: "Adopcion Rapida y Facil",
    description: "Accede a la frontera de la tecnologia de IA sin complejidad. Implementacion en dias, no meses, con acompanamiento personalizado.",
    color: "cyan",
  },
  {
    icon: Shield,
    title: "Automatizacion Inteligente",
    description: "Automatiza workflows de RRHH manteniendo el toque humano. La IA sugiere, tu equipo decide.",
    color: "orange",
  },
  {
    icon: BarChart3,
    title: "Conocimiento del Empleado",
    description: "Entiende las necesidades, motivaciones y potencial de cada empleado para crear experiencias personalizadas que impulsan el engagement.",
    color: "cyan",
  },
];

export function Features() {
  return (
    <section id="caracteristicas" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
            Capacidades
          </span>
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl mb-4 text-balance">
            Inteligencia Organizacional completa
          </h2>
          <p className="text-lg text-slate-600">
            Una plataforma que entiende tu empresa, automatiza procesos y potencia tanto a RRHH como a cada empleado.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center h-14 w-14 rounded-xl mb-6 ${
                  feature.color === "orange"
                    ? "bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white"
                    : "bg-cyan-100 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white"
                } transition-colors duration-300`}
              >
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
