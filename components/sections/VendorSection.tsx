"use client";

import { moodboardData } from "@/lib/data";
import AnimateOnScroll from "../AnimateOnScroll";

export default function VendorSection() {
  const { vendors } = moodboardData;

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="mb-16">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-taupe-800 mb-4">
              Collaborators
            </h2>
            <p className="font-body text-taupe-400 text-sm md:text-base tracking-widest uppercase">
              The team behind the magic
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vendors.map((vendor, index) => (
            <AnimateOnScroll
              key={vendor.name}
              delay={index * 0.15}
              y={30}
            >
              <div className="group p-8 rounded-[32px] bg-taupe-50 border border-taupe-100 transition-all duration-500 hover:bg-purple-50 hover:border-purple-100 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className={`
                    inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest
                    ${vendor.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}
                  `}>
                    {vendor.status}
                  </div>

                  <div>
                    <h3 className="font-display text-2xl text-taupe-800 group-hover:text-purple-900 transition-colors">
                      {vendor.name}
                    </h3>
                    <p className="font-body text-sm text-taupe-400 mt-1 uppercase tracking-wider">
                      {vendor.category}
                    </p>
                  </div>

                  <div className="h-[1px] w-full bg-taupe-100 group-hover:bg-purple-200 transition-colors" />


                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
