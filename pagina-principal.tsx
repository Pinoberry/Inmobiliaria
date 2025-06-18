// Importar componentes necesarios
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
// Importar iconos
import { Home, MapPin, Phone, Mail, Star, Bed, Bath, Square, CheckCircle, Users, Award, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Componente principal de la página
export default function PaginaInicio() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50 shadow-sm">
        <Link href="/" className="flex items-center justify-center">
          <Home className="h-8 w-8 text-emerald-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">Inmobiliaria Central</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#propiedades" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Propiedades
          </Link>
          <Link href="#servicios" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Servicios
          </Link>
          <Link href="#nosotros" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Nosotros
          </Link>
          <Link href="#contacto" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Contacto
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    Tu casa soñada te espera
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Más de 10 años ayudando a familias a encontrar la propiedad perfecta. Expertos en compra, venta y
                    alquiler de inmuebles.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Ver Propiedades
                  </Button>
                  <Button variant="outline" size="lg">
                    Contactar Asesor
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>500+ Propiedades</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Asesoría Gratuita</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/hero-house.jpg"
                  width="600"
                  height="400"
                  alt="Casa moderna con jardín y arquitectura contemporánea"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Propiedades Destacadas */}
        <section id="propiedades" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                  Propiedades Destacadas
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Las mejores oportunidades del mercado
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Selección exclusiva de propiedades con las mejores ubicaciones y precios competitivos
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              {/* Propiedad 1 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src="/images/modern-house.jpg"
                    width="400"
                    height="200"
                    alt="Casa moderna en Las Condes con diseño contemporáneo"
                    className="aspect-video w-full object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-emerald-600">En Venta</Badge>
                  <Badge className="absolute top-2 right-2 bg-red-600">Nuevo</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Casa Moderna en Las Condes</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Las Condes, Santiago
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-emerald-600">$450.000.000</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>4 dorm</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span>3 baños</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="h-4 w-4" />
                      <span>180 m²</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Ver Detalles
                  </Button>
                </CardContent>
              </Card>

              {/* Propiedad 2 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src="/images/apartment.jpg"
                    width="400"
                    height="200"
                    alt="Departamento moderno en Providencia con vista panorámica"
                    className="aspect-video w-full object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-orange-600">Arriendo</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Departamento Providencia</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Providencia, Santiago
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-emerald-600">$850.000/mes</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>2 dorm</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span>2 baños</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="h-4 w-4" />
                      <span>85 m²</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Ver Detalles
                  </Button>
                </CardContent>
              </Card>

              {/* Propiedad 3 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src="/images/family-house.jpg"
                    width="400"
                    height="200"
                    alt="Casa familiar en Ñuñoa con jardín y espacios amplios"
                    className="aspect-video w-full object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-emerald-600">En Venta</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Casa Familiar Ñuñoa</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Ñuñoa, Santiago
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-emerald-600">$320.000.000</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>3 dorm</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span>2 baños</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="h-4 w-4" />
                      <span>120 m²</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Ver Detalles
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Galería adicional de propiedades */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-8">Más propiedades disponibles</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="relative group cursor-pointer">
                  <Image
                    src="/images/luxury-interior.jpg"
                    width="300"
                    height="200"
                    alt="Interior de lujo con acabados premium"
                    className="aspect-video w-full object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver más
                    </span>
                  </div>
                </div>
                <div className="relative group cursor-pointer">
                  <Image
                    src="/images/office-building.jpg"
                    width="300"
                    height="200"
                    alt="Edificio de oficinas moderno en el centro"
                    className="aspect-video w-full object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver más
                    </span>
                  </div>
                </div>
                <div className="relative group cursor-pointer">
                  <Image
                    src="/images/garden-house.jpg"
                    width="300"
                    height="200"
                    alt="Casa con jardín amplio y piscina"
                    className="aspect-video w-full object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver más
                    </span>
                  </div>
                </div>
                <div className="relative group cursor-pointer">
                  <Image
                    src="/images/modern-house.jpg"
                    width="300"
                    height="200"
                    alt="Arquitectura moderna con líneas limpias"
                    className="aspect-video w-full object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver más
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                  Nuestros Servicios
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Te acompañamos en todo el proceso</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Servicios integrales de bienes raíces con el respaldo de profesionales expertos
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Home className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
                  <CardTitle>Compra y Venta</CardTitle>
                  <CardDescription>Asesoría completa para la compra o venta de tu propiedad</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      Evaluación gratuita
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      Marketing profesional
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      Gestión de documentos
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
                  <CardTitle>Inversiones</CardTitle>
                  <CardDescription>Oportunidades de inversión inmobiliaria rentables</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      Análisis de mercado
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      Proyección de rentabilidad
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      Seguimiento post-venta
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
                  <CardTitle>Arriendos</CardTitle>
                  <CardDescription>Gestión integral de propiedades en arriendo</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      Selección de inquilinos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      Administración mensual
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      Mantención preventiva
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 w-fit">
                    ¿Por qué InmoVentas?
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">La experiencia que necesitas</h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                    Más de una década en el mercado inmobiliario nos respalda. Conocemos cada detalle del proceso y te
                    guiamos paso a paso.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-emerald-600" />
                    <div>
                      <h3 className="font-semibold">10+ Años</h3>
                      <p className="text-sm text-gray-600">De experiencia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-emerald-600" />
                    <div>
                      <h3 className="font-semibold">1000+ Clientes</h3>
                      <p className="text-sm text-gray-600">Satisfechos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-8 w-8 text-emerald-600" />
                    <div>
                      <h3 className="font-semibold">4.9/5 Estrellas</h3>
                      <p className="text-sm text-gray-600">En valoraciones</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-8 w-8 text-emerald-600" />
                    <div>
                      <h3 className="font-semibold">95% Éxito</h3>
                      <p className="text-sm text-gray-600">En transacciones</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/team-professional.jpg"
                  width="600"
                  height="400"
                  alt="Equipo profesional de asesores inmobiliarios trabajando en oficina moderna"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                  Contacto
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  ¿Listo para encontrar tu hogar ideal?
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contáctanos hoy mismo y recibe asesoría personalizada sin compromiso
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Envíanos un mensaje</CardTitle>
                  <CardDescription>Completa el formulario y te contactaremos en menos de 24 horas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nombre</label>
                      <Input placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Teléfono</label>
                      <Input placeholder="Tu teléfono" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mensaje</label>
                    <Textarea placeholder="Cuéntanos qué tipo de propiedad buscas..." />
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Enviar Mensaje</Button>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-emerald-600" />
                      <div>
                        <p className="font-medium">+56 9 1234 5678</p>
                        <p className="text-sm text-gray-600">Lunes a Viernes 9:00 - 18:00</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-emerald-600" />
                      <div>
                        <p className="font-medium">contacto@inmoventas.cl</p>
                        <p className="text-sm text-gray-600">Respuesta en 24 horas</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-emerald-600" />
                      <div>
                        <p className="font-medium">Av. Providencia 1234, Of. 56</p>
                        <p className="text-sm text-gray-600">Providencia, Santiago</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">¿Necesitas ayuda inmediata?</h4>
                  <p className="text-sm text-gray-600 mb-4">Nuestro equipo está disponible para atenderte</p>
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Llamar Ahora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-900 text-white">
        <div className="flex items-center gap-2">
          <Home className="h-5 w-5 text-emerald-400" />
          <span className="font-semibold">InmoVentas</span>
        </div>
        <p className="text-xs text-gray-400 sm:ml-auto">
          © {new Date().getFullYear()} InmoVentas. Todos los derechos reservados.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:text-emerald-400 transition-colors">
            Términos de Servicio
          </Link>
          <Link href="#" className="text-xs hover:text-emerald-400 transition-colors">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}
