import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const solutions = [
  {
    title: "Para Equipos de RRHH",
    description: "Automatiza y centraliza los procesos de gestion de personas. Khora se convierte en el copiloto inteligente de tu equipo de recursos humanos, liberando tiempo para lo que realmente importa: las personas.",
    image: "/images/ai-analytics.jpg",
    features: [
      "Automatizacion de procesos administrativos",
      "Centralizacion de datos de empleados",
      "Reportes e insights generados por IA",
      "Workflows inteligentes y personalizables",
    ],
    reversed: false,
  },
  {
    title: "Para Empleados",
    description: "Una experiencia personalizada para cada miembro de tu equipo. Khora entiende las necesidades individuales y ofrece soporte, informacion y herramientas adaptadas a cada persona.",
    image: "/images/team-collaboration.jpg",
    features: [
      "Asistente personal con IA",
      "Acceso facil a informacion y procesos",
      "Desarrollo profesional personalizado",
      "Comunicacion fluida con RRHH",
    ],
    reversed: true,
  },
];

export function Solutions() {
  return (
    <section id="soluciones" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
            Soluciones
          </span>
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl mb-4 text-balance">
            Potencia a toda tu organizacion
          </h2>
          <p className="text-lg text-slate-600">
            Una herramienta que beneficia tanto a los equipos de RRHH como a cada empleado de tu empresa.
          </p>
        </div>

        {/* Solutions */}
        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`grid gap-12 lg:gap-20 items-center ${
                solution.reversed ? "lg:grid-cols-[1fr_1.2fr]" : "lg:grid-cols-[1.2fr_1fr]"
              }`}
            >
              {/* Image */}
              <div className={`relative ${solution.reversed ? "lg:order-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 blur-2xl opacity-40" />
                  <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 blur-2xl opacity-40" />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${solution.reversed ? "lg:order-1" : ""}`}>
                <h3 className="text-2xl font-bold text-slate-800 sm:text-3xl">{solution.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{solution.description}</p>
                <ul className="space-y-4">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
