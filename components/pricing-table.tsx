"use client"

import { Calendar, CreditCard, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/i18n"

interface PricingTableProps {
  showAllIncluded?: boolean
  showFAQ?: boolean
  showGuarantee?: boolean
}

export function PricingTable({ showAllIncluded = true, showFAQ = true, showGuarantee = true }: PricingTableProps) {
  const { t } = useLanguage()

  const handleSignupClick = () => {
    window.open("https://app.goadmin.io/auth/signup", "_blank")
  }

  const allIncludedFeatures = [
    { icon: "check", title: t("pricing.feat1"), desc: t("pricing.feat1d") },
    { icon: "check", title: t("pricing.feat2"), desc: t("pricing.feat2d") },
    { icon: "check", title: t("pricing.feat3"), desc: t("pricing.feat3d") },
    { icon: "check", title: t("pricing.feat4"), desc: t("pricing.feat4d") },
    { icon: "check", title: t("pricing.feat5"), desc: t("pricing.feat5d") },
    { icon: "check", title: t("pricing.feat6"), desc: t("pricing.feat6d") },
    { icon: "check", title: t("pricing.feat7"), desc: t("pricing.feat7d") },
    { icon: "check", title: t("pricing.feat8"), desc: t("pricing.feat8d") },
    { icon: "check", title: t("pricing.feat9"), desc: t("pricing.feat9d") },
  ]

  const faqItems = [
    { q: t("pricing.faq1q"), a: t("pricing.faq1a") },
    { q: t("pricing.faq2q"), a: t("pricing.faq2a") },
    { q: t("pricing.faq3q"), a: t("pricing.faq3a") },
    { q: t("pricing.faq4q"), a: t("pricing.faq4a") },
  ]

  return (
    <section id="precios" className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">{t("pricing.badge")}</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("pricing.title")} <span className="text-blue-600">{t("pricing.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t("pricing.subtitle")}
          </p>
          <div className="flex items-center justify-center flex-wrap gap-4 md:gap-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{t("pricing.noCommitment")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{t("pricing.cancelAnytime")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{t("pricing.freeTrial")}</span>
            </div>
          </div>
        </div>

        {/* Main Pricing Cards */}
        <div className="mx-auto mb-16">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Monthly Plan */}
            <Card className="border-2 border-gray-200 relative overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardHeader className="text-center pb-6 pt-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t("pricing.monthly")}</h3>
                  <p className="text-gray-600 mt-2">{t("pricing.monthlyDesc")}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-5xl font-bold text-gray-900">$20</span>
                    <div className="ml-2">
                      <div className="text-gray-600 text-lg">{t("pricing.month")}</div>
                      <div className="text-sm text-gray-500">{t("pricing.perOrg")}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{t("pricing.monthlyBilling")} {" - "} {t("pricing.noCommitment")}</div>
                </div>
              </CardHeader>
              <CardContent className="px-4 md:px-8 pb-8">
                <div className="space-y-4 mb-8">
                  {[
                    t("pricing.allModules"),
                    t("pricing.unlimitedBranches"),
                    t("pricing.supportChat"),
                    t("pricing.premiumIntegrations"),
                    t("pricing.autoBackup"),
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 mb-4" onClick={handleSignupClick}>
                  {t("pricing.startTrial")}
                </Button>
                <p className="text-sm text-gray-500 text-center">{t("pricing.trialNote")}</p>
              </CardContent>
            </Card>

            {/* Annual Plan */}
            <Card className="border-2 border-blue-600 relative overflow-hidden bg-gradient-to-br from-sky-50 to-blue-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 text-sm font-bold shadow-lg">
                  {t("pricing.savePopular")}
                </Badge>
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-sky-600"></div>
              <CardHeader className="text-center pb-6 pt-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t("pricing.annual")}</h3>
                  <p className="text-gray-600 mt-2">{t("pricing.annualDesc")}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-2">
                    <div className="text-right mr-3">
                      <div className="text-lg text-gray-500 line-through">$240</div>
                    </div>
                    <span className="text-5xl font-bold text-blue-600">$196</span>
                    <div className="ml-2">
                      <div className="text-gray-600 text-lg">{t("pricing.year")}</div>
                      <div className="text-sm text-gray-500">{t("pricing.perOrg")}</div>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block mb-2">
                    <span className="font-semibold">{t("pricing.saveYear")}</span>
                  </div>
                  <div className="text-sm text-gray-500">{t("pricing.annualEquiv")}</div>
                </div>
              </CardHeader>
              <CardContent className="px-4 md:px-8 pb-8">
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">{t("pricing.annualPlus")}</h4>
                  <div className="space-y-3">
                    {[
                      t("pricing.freeMonths"),
                      t("pricing.prioritySupport"),
                      t("pricing.onboarding"),
                      t("pricing.advancedReports"),
                      t("pricing.earlyAccess"),
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-blue-800 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-lg py-6 mb-4 shadow-lg"
                  onClick={handleSignupClick}
                >
                  {t("pricing.startAnnual")}
                </Button>
                <p className="text-sm text-gray-500 text-center">{t("pricing.annualNote")}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What's Included */}
        {showAllIncluded && (
          <div className="max-w-5xl mx-auto mb-16">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{t("pricing.allIncluded")}</h3>
              <p className="text-gray-600">{t("pricing.allIncludedDesc")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allIncludedFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-white border border-gray-100">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing FAQ */}
        {showFAQ && (
          <div className="max-w-4xl mx-auto mb-16 px-2">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">{t("pricing.faq")}</h3>
            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Money Back Guarantee */}
        {showGuarantee && (
          <div className="max-w-4xl mx-auto px-2">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 md:p-8 text-center border border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">$</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("pricing.guarantee")}</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {t("pricing.guaranteeDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleSignupClick}>
                  {t("pricing.try14")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  onClick={handleSignupClick}
                >
                  {t("pricing.talkSales")}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="mt-16 text-center px-2">
          <p className="text-gray-500 mb-6">{t("pricing.trustText")}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-60">
            <div className="text-2xl">{"🏨"}</div>
            <div className="text-2xl">{"🍽️"}</div>
            <div className="text-2xl">{"🛍️"}</div>
            <div className="text-2xl">{"💪"}</div>
            <div className="text-2xl">{"🚌"}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
