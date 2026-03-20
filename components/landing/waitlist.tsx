"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !name) {
      setError("Por favor completá tu nombre y email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor ingresá un email valido.");
      return;
    }

    setLoading(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-widest mb-4">
              Acceso anticipado
            </span>
            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl text-balance mb-4">
              Se parte de las primeras organizaciones en usar Khora
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
              Dejanos tu informacion y un miembro de nuestro equipo se va a comunicar con vos para mostrarte como Khora puede transformar tu organizacion.
            </p>
          </div>

          {/* Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-8 flex flex-col items-center gap-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 border border-orange-100">
                  <CheckCircle className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  Gracias, {name}!
                </h3>
                <p className="text-slate-500 max-w-sm">
                  Recibimos tu solicitud. Nos vamos a comunicar con vos a la brevedad para coordinar una demo personalizada.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="waitlist-name" className="text-sm font-medium text-slate-700">
                      Nombre completo <span className="text-orange-500">*</span>
                    </label>
                    <input
                      id="waitlist-name"
                      type="text"
                      placeholder="Juan Perez"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="waitlist-email" className="text-sm font-medium text-slate-700">
                      Email corporativo <span className="text-orange-500">*</span>
                    </label>
                    <input
                      id="waitlist-email"
                      type="email"
                      placeholder="juan@empresa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label htmlFor="waitlist-company" className="text-sm font-medium text-slate-700">
                      Empresa
                    </label>
                    <input
                      id="waitlist-company"
                      type="text"
                      placeholder="Nombre de tu empresa"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-red-500 mb-4">{error}</p>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-base py-3 h-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Quiero una demo personalizada
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-slate-400 text-center mt-4">
                  Sin compromisos. Implementacion en dias. Tu informacion no se comparte con terceros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
