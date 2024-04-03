import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Section6() {
  return (
    <div><section className="py-32">
        <h1 className="text-6xl font-bold text-center text-white">Frequently Asked Questions</h1>
        <div className="text-black-400">
        <Accordion type="single" collapsible className="px-60 mt-20 text-xxl">
        <AccordionItem value="item-1">
          <AccordionTrigger className="border-2 border-slate-500 mt-6 rounded-2xl px-10">What platforms do you support?</AccordionTrigger>
          <AccordionContent>
          At the moment, Roblox only. We are working on adding support for other platforms.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" >
        <AccordionTrigger className="border-2 border-slate-500 rounded-2xl px-10">How can I make changes to the game?</AccordionTrigger>
          <AccordionContent>
          Change the settings in the dashboard and the changes will be reflected in the game once approved by the developer.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
        <AccordionTrigger className="border-2 border-slate-500 rounded-2xl px-10">Do you provide player data analytics?</AccordionTrigger>
          <AccordionContent>
          Currently, we support exporting database data to CSV files to analyze on 3rd party analytics. We are working on adding more analytics features.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
        </div>

      </section>
    </div>
  );
}
