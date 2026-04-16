export const SITE = {
  brandName: "Pedidos Web",
  canonical: "https://pedidosweb.shop/",
  appUrl: "https://app.pedidosweb.shop/",
  demoUrl: "https://demo.pedidosweb.shop/",
  contactPhoneDisplay: "938 791 015",
  contactPhoneE164: "+51938791015",
  whatsappUrl: "https://wa.me/51938791015",
} as const;

export function canonicalUrl(pathname: string) {
  const base = SITE.canonical.endsWith("/") ? SITE.canonical : `${SITE.canonical}/`;
  const path = pathname.startsWith("/") ? pathname.slice(1) : pathname;
  return `${base}${path}`;
}
