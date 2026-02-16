"use client"

import { Code, Book, Zap, Shield, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"

export default function APIPage() {
  const endpoints = [
    {
      method: "GET",
      path: "/api/v1/organizations",
      description: "Obtener lista de organizaciones",
      response: `{
  "data": [
    {
      "id": "org_123",
      "name": "Mi Empresa",
      "plan": "professional",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ]
}`,
    },
    {
      method: "POST",
      path: "/api/v1/products",
      description: "Crear un nuevo producto",
      request: `{
  "name": "Producto Ejemplo",
  "sku": "PROD-001",
  "price": 29.99,
  "category_id": "cat_456"
}`,
      response: `{
  "data": {
    "id": "prod_789",
    "name": "Producto Ejemplo",
    "sku": "PROD-001",
    "price": 29.99,
    "created_at": "2024-01-15T10:30:00Z"
  }
}`,
    },
    {
      method: "GET",
      path: "/api/v1/sales",
      description: "Obtener ventas con filtros",
      response: `{
  "data": [
    {
      "id": "sale_101",
      "total": 150.00,
      "customer_id": "cust_202",
      "status": "completed",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total": 150
  }
}`,
    },
  ]

  const sdks = [
    {
      language: "JavaScript",
      icon: "🟨",
      description: "SDK oficial para Node.js y navegadores",
      install: "npm install @goadmin/sdk",
      example: `import { GoAdmin } from '@goadmin/sdk';

const client = new GoAdmin({
  apiKey: 'your-api-key',
  environment: 'production'
});

const products = await client.products.list();`,
    },
    {
      language: "Python",
      icon: "🐍",
      description: "SDK para aplicaciones Python",
      install: "pip install goadmin-python",
      example: `from goadmin import GoAdmin

client = GoAdmin(api_key='your-api-key')
products = client.products.list()`,
    },
    {
      language: "PHP",
      icon: "🐘",
      description: "SDK para aplicaciones PHP",
      install: "composer require goadmin/php-sdk",
      example: `use GoAdmin\\Client;

$client = new Client('your-api-key');
$products = $client->products->list();`,
    },
  ]

  const webhooks = [
    {
      event: "sale.created",
      description: "Se dispara cuando se crea una nueva venta",
      payload: `{
  "event": "sale.created",
  "data": {
    "id": "sale_123",
    "total": 99.99,
    "customer_id": "cust_456"
  }
}`,
    },
    {
      event: "product.updated",
      description: "Se dispara cuando se actualiza un producto",
      payload: `{
  "event": "product.updated", 
  "data": {
    "id": "prod_789",
    "name": "Producto Actualizado",
    "price": 39.99
  }
}`,
    },
    {
      event: "inventory.low_stock",
      description: "Se dispara cuando el stock está bajo",
      payload: `{
  "event": "inventory.low_stock",
  "data": {
    "product_id": "prod_789",
    "current_stock": 5,
    "minimum_stock": 10
  }
}`,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar currentPage="/api" />

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-800">API para Desarrolladores</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            API REST <span className="text-blue-600">completa y potente</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Integra GO Admin con cualquier aplicación usando nuestra API REST. Documentación completa, SDKs oficiales y
            soporte para desarrolladores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Book className="mr-2 h-4 w-4" />
              Ver Documentación
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <ExternalLink className="mr-2 h-4 w-4" />
              Playground API
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Inicio Rápido</h2>
            <p className="text-gray-600">Comienza a usar la API en minutos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-blue-100">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔑</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Obtén tu API Key</h3>
                <p className="text-sm text-gray-600">Genera tu clave API desde el panel de administración</p>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-100">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Lee la Documentación</h3>
                <p className="text-sm text-gray-600">Explora endpoints, parámetros y ejemplos</p>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-100">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Haz tu Primera Llamada</h3>
                <p className="text-sm text-gray-600">Usa nuestros SDKs o llamadas HTTP directas</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-900 text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="h-5 w-5" />
                <span>Ejemplo de Autenticación</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-sm overflow-x-auto">
                <code>{`curl -X GET "https://api.goadmin.io/v1/organizations" \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json"`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* API Reference */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Referencia de API</h2>
            <p className="text-gray-600">Endpoints principales de la API REST</p>
          </div>

          <Tabs defaultValue="endpoints" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
              <TabsTrigger value="sdks">SDKs</TabsTrigger>
              <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            </TabsList>

            <TabsContent value="endpoints" className="space-y-6">
              {endpoints.map((endpoint, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Badge
                        className={`${
                          endpoint.method === "GET"
                            ? "bg-green-100 text-green-800"
                            : endpoint.method === "POST"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {endpoint.method}
                      </Badge>
                      <code className="text-lg font-mono">{endpoint.path}</code>
                    </div>
                    <CardDescription>{endpoint.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {endpoint.request && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Request</h4>
                          <Card className="bg-gray-50">
                            <CardContent className="p-4">
                              <pre className="text-sm overflow-x-auto">
                                <code>{endpoint.request}</code>
                              </pre>
                            </CardContent>
                          </Card>
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Response</h4>
                        <Card className="bg-gray-50">
                          <CardContent className="p-4">
                            <pre className="text-sm overflow-x-auto">
                              <code>{endpoint.response}</code>
                            </pre>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="sdks" className="space-y-6">
              {sdks.map((sdk, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{sdk.icon}</span>
                      <div>
                        <CardTitle>{sdk.language}</CardTitle>
                        <CardDescription>{sdk.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Instalación</h4>
                        <Card className="bg-gray-900 text-white">
                          <CardContent className="p-4">
                            <code className="text-sm">{sdk.install}</code>
                          </CardContent>
                        </Card>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Ejemplo de Uso</h4>
                        <Card className="bg-gray-50">
                          <CardContent className="p-4">
                            <pre className="text-sm overflow-x-auto">
                              <code>{sdk.example}</code>
                            </pre>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="webhooks" className="space-y-6">
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">¿Qué son los Webhooks?</h3>
                      <p className="text-blue-800 text-sm">
                        Los webhooks te permiten recibir notificaciones en tiempo real cuando ocurren eventos
                        específicos en GO Admin. Configura una URL endpoint y recibirás datos automáticamente.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {webhooks.map((webhook, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-purple-100 text-purple-800">{webhook.event}</Badge>
                    </div>
                    <CardDescription>{webhook.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-2">Payload de Ejemplo</h4>
                    <Card className="bg-gray-50">
                      <CardContent className="p-4">
                        <pre className="text-sm overflow-x-auto">
                          <code>{webhook.payload}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Seguridad y Autenticación</h2>
            <p className="text-gray-600">Tu API está protegida con los más altos estándares de seguridad</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">🔐 Autenticación Segura</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• API Keys con scopes granulares</li>
                  <li>• Tokens JWT para sesiones</li>
                  <li>• Rate limiting automático</li>
                  <li>• Rotación de claves</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">🛡️ Protección de Datos</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• HTTPS/TLS 1.3 obligatorio</li>
                  <li>• Cifrado end-to-end</li>
                  <li>• Auditoría completa</li>
                  <li>• Cumplimiento GDPR</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para comenzar a desarrollar?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Obtén acceso completo a nuestra API y comienza a construir integraciones poderosas hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Obtener API Key
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contactar Soporte
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
