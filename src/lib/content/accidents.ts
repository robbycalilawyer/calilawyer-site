import type { PracticeAreaContent } from "./types";
import { injuryContent } from "./injury";
import { PLACEHOLDER } from "@/lib/site";

/**
 * Accident sub-pages under /injury. Each one reuses the PracticeArea
 * template and the injury base content, overriding only the copy that
 * should be unique to the case type. No invented figures — all stats
 * and results stay inherited as bracketed placeholders.
 */
export type AccidentSlug =
  | "car-accident"
  | "truck-accident"
  | "motorcycle-accident"
  | "rideshare-accident"
  | "pedestrian-accident"
  | "dog-bite"
  | "slip-and-fall";

interface AccidentEntry {
  title: string;
  description: string;
  content: PracticeAreaContent;
}

/** Build a child content object from the injury base with overrides. */
function build(
  over: Partial<Omit<PracticeAreaContent, "hero">> & {
    hero: Partial<PracticeAreaContent["hero"]>;
  },
): PracticeAreaContent {
  return {
    ...injuryContent,
    ...over,
    hero: { ...injuryContent.hero, ...over.hero },
  };
}

export const accidents: Record<AccidentSlug, AccidentEntry> = {
  "car-accident": {
    title: "Car Accident Attorneys in California",
    description:
      "Hit by another driver? We take on the insurance company and fight for the full value of your car accident claim. Free review, no upfront cost.",
    content: build({
      hero: {
        eyebrow: "Car Accidents",
        headline: "Hit by another driver? Don’t settle for the first offer.",
        sub: "Insurers count on you accepting fast, before you know what your injuries really cost. We build the full picture and hold them to it.",
      },
      intro: [
        "A car accident can upend everything in seconds — your health, your income, your ability to get to work. Meanwhile the at-fault driver’s insurer is already working to pay you as little as possible.",
        "We handle California car accident claims from the first call: preserving evidence, documenting your injuries, dealing with the adjusters, and pursuing the full value of what you’ve lost. You focus on recovering; we focus on the fight.",
      ],
      scenarios: {
        title: "Car accidents we handle",
        items: [
          "Rear-end and stop-and-go freeway collisions",
          "Left-turn and intersection crashes",
          "Uninsured and hit-and-run drivers",
          "Distracted- and drunk-driving crashes",
          "Multi-car pileups where fault is disputed",
          "Serious and catastrophic-injury collisions",
        ],
      },
      faqs: [
        {
          q: "What should I do right after a car accident?",
          a: "If you’re able: get to safety, call 911, take photos, exchange information, and see a doctor even if you feel “okay.” Then call us before giving any recorded statement to the other driver’s insurer.",
        },
        ...injuryContent.faqs,
      ],
      finalCta: {
        headline: "Just been in a crash? Let’s talk today.",
        sub: `The sooner we start, the more evidence we can protect. The call is free and there’s no obligation. ${PLACEHOLDER.noFee}`,
      },
    }),
  },

  "truck-accident": {
    title: "California Truck Accident Attorneys",
    description:
      "Hurt in a crash with a commercial truck? These cases are bigger, faster-moving, and more defended. We move quickly to preserve evidence. Free review.",
    content: build({
      hero: {
        eyebrow: "Truck Accidents",
        headline: "A collision with an 80,000-pound truck is not a car crash.",
        sub: "Commercial trucking cases involve corporate insurers, rapid-response investigators, and federal rules. The evidence can vanish within days — we move fast to lock it down.",
      },
      intro: [
        "When a big rig, delivery truck, or other commercial vehicle hits you, the forces involved are in a different league — and so is the defense. Trucking companies often dispatch investigators to the scene within hours, building their case before you’ve left the hospital.",
        "We level that. We work to preserve the truck’s electronic data, driver logs, maintenance records, and dispatch history before they can disappear, and we identify every party that may share responsibility — the driver, the carrier, and sometimes others.",
      ],
      worth: {
        ...injuryContent.worth,
        body: "Truck crashes tend to cause more serious injuries, which means more is at stake. A complete claim should account for:",
      },
      scenarios: {
        title: "Truck crashes we handle",
        items: [
          "Jackknife and underride collisions",
          "Rear-end crashes by a loaded big rig",
          "Unsafe lane changes and blind-spot “no-zone” crashes",
          "Fatigued- or distracted-driver crashes",
          "Improperly loaded or overweight cargo",
          "Delivery-truck and box-truck collisions",
        ],
      },
      faqs: [
        {
          q: "Why are truck accident cases different from car accidents?",
          a: "They involve federal and state trucking regulations, multiple potentially responsible parties (driver, carrier, cargo loader), and time-sensitive electronic evidence like the truck’s event data recorder and driver logs. Acting quickly matters.",
        },
        ...injuryContent.faqs,
      ],
      finalCta: {
        headline: "Trucking evidence disappears fast. Call today.",
        sub: `The quicker we’re involved, the more we can preserve. Free review, no obligation. ${PLACEHOLDER.noFee}`,
      },
    }),
  },

  "motorcycle-accident": {
    title: "California Motorcycle Accident Attorneys",
    description:
      "Injured riding? We push back on the bias riders face and fight for the full value of your motorcycle accident claim. Free review, no upfront cost.",
    content: build({
      hero: {
        eyebrow: "Motorcycle Accidents",
        headline: "You had the right of way. The driver just didn’t look.",
        sub: "Riders get blamed by default and hit hardest by injuries. We counter the bias with evidence and fight for everything your claim is worth.",
      },
      intro: [
        "Most motorcycle crashes aren’t the rider’s fault — a driver turns left across your path, drifts into your lane, or simply never sees you. But riders face an unfair assumption that they must have been speeding or reckless, and insurers lean on it to pay less.",
        "We take that head-on. We reconstruct what actually happened, document the severity of road-rash, fractures, and head injuries, and make sure the driver who caused the crash — not the rider — is held responsible.",
      ],
      scenarios: {
        title: "Motorcycle crashes we handle",
        items: [
          "Left-turn collisions at intersections",
          "Drivers who “didn’t see” the motorcycle",
          "Unsafe lane changes and merging crashes",
          "Road-hazard and dangerous-roadway cases",
          "Rear-end crashes at stops",
          "Catastrophic and head-injury collisions",
        ],
      },
      faqs: [
        {
          q: "Does not wearing a helmet hurt my case?",
          a: "California’s comparative fault rules can come into play, but it doesn’t automatically bar a claim — and it may be irrelevant to injuries unrelated to the head. Let us evaluate the specific facts before you assume anything.",
        },
        ...injuryContent.faqs,
      ],
      finalCta: {
        headline: "Don’t let them blame the rider. Let’s talk.",
        sub: `We counter the bias riders face with hard evidence. Free review, no obligation. ${PLACEHOLDER.noFee}`,
      },
    }),
  },

  "rideshare-accident": {
    title: "California Uber & Lyft Accident Attorneys",
    description:
      "Hurt in an Uber or Lyft crash — as a passenger, driver, or other motorist? Rideshare insurance is complex. We sort out coverage and fight for you.",
    content: build({
      hero: {
        eyebrow: "Rideshare Accidents",
        headline: "Uber and Lyft crashes come with a coverage maze.",
        sub: "Whether you were a passenger, the rideshare driver, or in another car, which insurance applies depends on the app’s status at the moment of the crash. We untangle it.",
      },
      intro: [
        "Rideshare crashes are uniquely complicated because coverage shifts depending on what the driver was doing. App off, waiting for a ride request, or carrying a passenger can each trigger different insurance — sometimes with large policies, sometimes with gaps the companies would rather you not find.",
        "We determine exactly which coverage applies to your situation, deal with Uber’s or Lyft’s insurers and the driver’s personal carrier, and pursue the full recovery you’re owed — whether you were riding, driving, or simply in the way.",
      ],
      scenarios: {
        title: "Rideshare situations we handle",
        items: [
          "Passengers injured in an Uber or Lyft",
          "Rideshare drivers hurt on the job",
          "Other motorists hit by a rideshare driver",
          "Pedestrians and cyclists struck by a rideshare vehicle",
          "Disputes over which policy applies",
          "Claims the rideshare company tries to minimize",
        ],
      },
      faqs: [
        {
          q: "Who pays if I’m hurt in an Uber or Lyft?",
          a: "It depends on the driver’s app status at the time of the crash, which determines whether the rideshare company’s policy, the driver’s personal insurance, or another driver’s coverage applies. We identify every source of coverage available to you.",
        },
        ...injuryContent.faqs,
      ],
      finalCta: {
        headline: "Injured in a rideshare? We’ll find the coverage.",
        sub: `Don’t let the insurers point fingers at each other. Free review, no obligation. ${PLACEHOLDER.noFee}`,
      },
    }),
  },

  "pedestrian-accident": {
    title: "California Pedestrian Accident Attorneys",
    description:
      "Struck as a pedestrian? Injuries are often severe and liability gets disputed. We document everything and fight for a full recovery. Free review.",
    content: build({
      hero: {
        eyebrow: "Pedestrian Accidents",
        headline: "On foot, there’s nothing between you and the vehicle.",
        sub: "Pedestrian injuries are often serious, and drivers’ insurers are quick to argue you were somehow at fault. We build the record that proves otherwise.",
      },
      intro: [
        "A person on foot has no protection in a collision, so pedestrian crashes frequently cause fractures, head injuries, and worse. Yet insurers routinely claim the pedestrian “darted out” or wasn’t in a crosswalk, hoping to shift the blame and shrink the payout.",
        "We investigate thoroughly — signal timing, crosswalk markings, driver speed and attention, and any available video — to establish what really happened, and we pursue the full value of injuries that can take a long time to heal.",
      ],
      scenarios: {
        title: "Pedestrian cases we handle",
        items: [
          "Crosswalk and intersection strikes",
          "Hit-and-run drivers",
          "Backing and parking-lot collisions",
          "Left- and right-turn “failure to yield” crashes",
          "Distracted- and speeding-driver cases",
          "Disputed-liability “who had the right of way” cases",
        ],
      },
      faqs: [
        {
          q: "What if the driver says I wasn’t in a crosswalk?",
          a: "California drivers owe pedestrians a duty of care in many situations beyond marked crosswalks, and comparative fault means you may still recover even if you were partly at fault. Don’t accept blame before we review the facts.",
        },
        ...injuryContent.faqs,
      ],
      finalCta: {
        headline: "Hurt crossing the street? Let’s talk today.",
        sub: `We push back on the “it was your fault” playbook. Free review, no obligation. ${PLACEHOLDER.noFee}`,
      },
    }),
  },

  "dog-bite": {
    title: "California Dog Bite Attorneys",
    description:
      "Bitten by someone’s dog? California holds owners strictly liable in many cases. We handle the claim through their insurance. Free review, no upfront cost.",
    content: build({
      hero: {
        eyebrow: "Dog Bites",
        headline: "A dog bite is the owner’s responsibility — not yours.",
        sub: "California law holds dog owners strictly liable for bites in many situations. We handle the claim through their insurance so you can focus on healing.",
      },
      intro: [
        "Dog attacks leave more than physical wounds — there’s scarring, the risk of infection, and real emotional trauma, especially for children. Many people hesitate to pursue a claim because the owner is a neighbor, friend, or family member.",
        "Here’s what often surprises people: these claims are typically paid by the owner’s homeowner’s or renter’s insurance, not out of their pocket. We handle that process discreetly and pursue fair compensation for your medical care, scarring, and the lasting impact of the attack.",
      ],
      worth: {
        ...injuryContent.worth,
        title: "What a dog bite claim may recover",
        body: "Dog-attack injuries can require long-term care. A full claim should account for:",
        items: [
          {
            label: "Medical treatment",
            detail:
              "Emergency care, wound treatment, infection management, and follow-up visits.",
          },
          {
            label: "Reconstructive surgery",
            detail:
              "Procedures to repair scarring and tissue damage, including future surgeries.",
          },
          {
            label: "Scarring and disfigurement",
            detail:
              "Compensation for permanent, visible scarring — often significant for facial wounds.",
          },
          {
            label: "Emotional trauma",
            detail:
              "Anxiety, fear of dogs, and psychological impact, especially in children.",
          },
          {
            label: "Lost income",
            detail:
              "Time away from work for treatment and recovery.",
          },
        ],
      },
      scenarios: {
        title: "Dog bite situations we handle",
        items: [
          "Bites in public or on another person’s property",
          "Attacks causing scarring or nerve damage",
          "Injuries to children",
          "Claims paid through homeowner’s or renter’s insurance",
          "Attacks by a neighbor’s, friend’s, or landlord’s dog",
          "Knock-down injuries from aggressive animals",
        ],
      },
      faqs: [
        {
          q: "I don’t want to sue my friend or neighbor. Can I still make a claim?",
          a: "In most cases the claim is paid by the owner’s homeowner’s or renter’s insurance — not the person directly. We can often resolve these matters without damaging the personal relationship. Call us to talk it through.",
        },
        {
          q: "Does the dog have to have bitten someone before?",
          a: "No. California applies a strict-liability rule to many dog-bite situations, which generally means the owner is responsible even if the dog had never bitten anyone before. Let us review your specific facts.",
        },
        ...injuryContent.faqs.slice(1),
      ],
      finalCta: {
        headline: "Bitten and not sure what to do? Let’s talk.",
        sub: `We handle it discreetly and through insurance. Free review, no obligation. ${PLACEHOLDER.noFee}`,
      },
    }),
  },

  "slip-and-fall": {
    title: "California Slip & Fall / Premises Liability Attorneys",
    description:
      "Hurt by an unsafe condition on someone’s property? Premises cases turn on proving the hazard. We investigate before evidence is cleaned up. Free review.",
    content: build({
      hero: {
        eyebrow: "Slip & Fall",
        headline: "The hazard wasn’t your fault. The injury shouldn’t be either.",
        sub: "Property owners must keep their premises reasonably safe. When they don’t and you’re hurt, we prove the hazard — before it quietly gets cleaned up.",
      },
      intro: [
        "A fall on a wet floor, a broken stair, or a poorly lit walkway can cause fractures, back injuries, and head trauma that linger for months. Property owners and their insurers often respond by claiming you simply weren’t watching where you were going.",
        "Premises liability cases are won on evidence. We move quickly to document the dangerous condition, identify how long it existed, and gather incident reports and video before anything is repaired or overwritten — then we hold the responsible party accountable.",
      ],
      scenarios: {
        title: "Premises cases we handle",
        items: [
          "Wet, slippery, or recently mopped floors",
          "Broken stairs, railings, and walkways",
          "Poor lighting and hidden hazards",
          "Falls in stores, restaurants, and parking lots",
          "Unsafe apartment and rental conditions",
          "Failure to warn of a known danger",
        ],
      },
      faqs: [
        {
          q: "Isn’t a slip and fall just my own clumsiness?",
          a: "Not when a property owner failed to fix or warn about a hazard they knew (or should have known) about. The key is proving the dangerous condition and their notice of it — which is exactly why acting quickly to preserve evidence matters.",
        },
        ...injuryContent.faqs,
      ],
      finalCta: {
        headline: "Hurt by an unsafe property? Call before it’s repaired.",
        sub: `Evidence in these cases disappears fast. Free review, no obligation. ${PLACEHOLDER.noFee}`,
      },
    }),
  },
};
