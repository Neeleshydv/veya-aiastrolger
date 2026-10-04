import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import StructuredData, { generateBreadcrumbSchema } from "./StructuredData";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = [
    { name: "Home", item: "/" },
    ...items.map((it) => ({
      name: it.label,
      item: it.href || "/",
    })),
  ];

  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400 py-3">
        <Link href="/" className="hover:text-celestial-amber transition-colors flex items-center space-x-1">
          <Home className="w-3.5 h-3.5" />
          <span className="sr-only">Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              {isLast || !item.href ? (
                <span className="text-celestial-gold font-medium">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-celestial-amber transition-colors">
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
