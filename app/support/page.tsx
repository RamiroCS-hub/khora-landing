import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";

export default function SupportPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-sky-100 via-sky-50 to-white">
            <Header />

            <section className="container mx-auto px-6 pt-28 pb-16">
                <div className="mx-auto max-w-3xl rounded-2xl border border-sky-100 bg-white/90 p-8 shadow-sm sm:p-10">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-600">Soporte</p>
                    <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">Estamos para ayudarte</h1>
                    <p className="mb-8 text-slate-600 leading-relaxed">
                        Si tienes dudas sobre Khora, necesitas asistencia tecnica o quieres reportar un problema, escribenos y te
                        responderemos a la brevedad.
                    </p>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                        <p className="text-sm text-slate-500">Canal de contacto</p>
                        <a
                            href="mailto:support@khora.ar"
                            className="mt-1 inline-block text-lg font-semibold text-orange-500 transition-colors hover:text-orange-600"
                        >
                            support@khora.ar
                        </a>
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
