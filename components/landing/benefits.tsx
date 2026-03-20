import { Zap, Clock, TrendingUp, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Adopcion sin friccion",
    description: "Accede a la tecnologia de IA mas avanzada sin necesidad de conocimientos tecnicos. Implementacion guiada y soporte continuo.",
  },
  {
    icon: Clock,
    title: "Automatizacion inmediata",
    description: "Automatiza procesos repetitivos desde el dia uno. Tu equipo de RRHH puede enfocarse en iniciativas estrategicas.",
  },
  {
    icon: TrendingUp,
    title: "Escala con tu empresa",
    description: "Una plataforma que crece contigo. Desde startups hasta grandes organizaciones, Khora se adapta a tus necesidades.",
  },
  {
    icon: Sparkles,
    title: "Frontera de la IA",
    description: "Actualizaciones continuas con los ultimos avances en inteligencia artificial. Siempre a la vanguardia, sin esfuerzo de tu parte.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Por que Khora
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4 text-balance">
            La forma mas facil de adoptar IA en tu empresa
          </h2>
          <p className="text-lg text-slate-300">
            Eliminamos la complejidad para que tu organizacion pueda aprovechar todo el potencial de la inteligencia artificial.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-orange-500/30 transition-colors text-center"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-orange-400 to-cyan-400 text-white mb-6">
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
