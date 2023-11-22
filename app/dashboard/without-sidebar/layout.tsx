import React from "react";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden md:p-12">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Dashboard', href: '/dashboard' },
          {
            label: 'Without sidebar page',
            href: `/without-sidebar`,
            active: true,
          },
        ]}
      />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
