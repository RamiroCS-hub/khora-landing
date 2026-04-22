import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-sky-100 via-sky-50 to-white">
            <Header />

            <section className="container mx-auto px-6 pt-28 pb-16">
                <div className="mx-auto max-w-3xl rounded-2xl border border-sky-100 bg-white/90 p-8 shadow-sm sm:p-10">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-600">Legal</p>
                    <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">Politica de privacidad</h1>

                    <div className="space-y-5 text-slate-600 leading-relaxed">
                        <p>
                            En Khora priorizamos la confidencialidad de la informacion y aplicamos buenas practicas para proteger los
                            datos de nuestros clientes y usuarios.
                        </p>
                        <p>
                            La informacion se utiliza para operar, mantener y mejorar el servicio. No compartimos datos personales
                            fuera de los casos requeridos por ley o por acuerdos contractuales.
                        </p>
                        <p>
                            Si tienes preguntas sobre privacidad, escribenos a{" "}
                            <a href="mailto:support@khora.ar" className="font-medium text-orange-500 hover:text-orange-600">
                                support@khora.ar
                            </a>
                            .
                        </p>
                    </div>

                    <div className="mt-8 text-sm text-slate-500">
                        <Link href="/" className="transition-colors hover:text-slate-700">
                            Volver al inicio
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
