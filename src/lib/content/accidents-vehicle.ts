import { buildAccident as build, sharedHelp } from "./accident-build";
import { FEE_TERMS } from "@/lib/site";

export const carAccident = {
  aliasPath: "/car-accidents",
  meta: {
    title: "Car Accident Lawyer in Glendale, CA",
    description:
      "California car accident matters for intersection, highway, and multi-car crashes. We preserve evidence and deal with the insurer. Free consultation.",
    path: "/injury/car-accidents",
  },
  content: build({
    eyebrow: "Car accidents",
    headline: "California car accident lawyer.",
    sub: "High-speed collisions, intersection crashes, and highway wrecks. The insurer will look for a way to share the blame. We build the file before that story hardens.",
    difference:
      "California car cases sit on comparative negligence. A carrier can reduce what it pays by assigning you a share of fault.",
    evidenceIntro:
      "Skid marks fade, vehicles are repaired, and cameras overwrite. We move to lock down the proof while it still exists.",
    evidence: [
      "Police or CHP reports",
      "Dashcam and traffic-camera video",
      "Event data recorder downloads",
      "Witness names and statements",
      "Scene photographs taken before the vehicles are moved",
    ],
    damagesIntro:
      "Adjusters like to settle off the tow bill and the emergency-room record. A full car-accident claim can also include:",
    damages: [
      {
        label: "Medical bills",
        detail: "Past treatment and the care your doctors say you still need.",
      },
      {
        label: "Lost wages",
        detail: "Time off work and a reduced ability to earn.",
      },
      {
        label: "Pain and suffering",
        detail: "Limits on how you live, sleep, and work after the crash.",
      },
      {
        label: "Property damage",
        detail: "The vehicle and anything else the collision destroyed.",
      },
      {
        label: "Household impact",
        detail:
          "Loss of consortium and the extra load placed on the people who care for you, where the law allows it.",
      },
    ],
    help: sharedHelp(
      "We answer the fault argument with the report, the video, and the damage pattern, not with a guess.",
    ),
    faqs: [
      {
        q: "What should I do right after a car accident?",
        a: "Get to safety, call 911, photograph the scene, and get medical care even if you feel fine.",
      },
      {
        q: "What if the other driver says I was partly at fault?",
        a: "Comparative fault can reduce a recovery. It doesn't automatically end one. We look at the physical evidence before anyone accepts a percentage.",
      },
    ],
    finalHeadline: "Just been in a crash? Start the review today.",
    finalSub: `The sooner the file is opened, the more evidence we can still reach. ${FEE_TERMS} Free consultation.`,
  }),
};

export const truckAccident = {
  aliasPath: "/truck-accidents",
  meta: {
    title: "Truck Accident Lawyer in Glendale, CA",
    description:
      "Commercial truck and tractor-trailer injury reviews in California. We pursue driver logs, maintenance records, and the companies behind the rig.",
    path: "/injury/truck-accidents",
  },
  content: build({
    eyebrow: "Truck accidents",
    headline: "California truck accident lawyer.",
    sub: "Commercial crashes are not oversized car cases. More defendants, safety rules for commercial trucks, and a company team that can be at the scene before you leave the hospital.",
    difference:
      "A tractor-trailer wreck can involve the driver, the motor carrier, a freight broker, and a maintenance contractor. Hours-of-service and inspection rules often decide the file. We don't print policy limits.",
    evidenceIntro:
      "Electronic logs and engine data can be overwritten. We send preservation demands for:",
    evidence: [
      "Driver logs and hours-of-service records",
      "Inspection and maintenance history",
      "Electronic control module data",
      "Hiring, qualification, and training files",
      "Post-crash drug and alcohol screening",
    ],
    damagesIntro:
      "Truck impacts often mean long medical futures. The damages review looks past the first surgery:",
    damages: [
      {
        label: "Future care",
        detail: "Life-care needs after a catastrophic injury.",
      },
      {
        label: "Medical expenses",
        detail: "Hospitalization, surgery, rehabilitation, and later treatment.",
      },
      {
        label: "Disability",
        detail: "Home and work changes when the injury is permanent.",
      },
      {
        label: "Earning capacity",
        detail: "Income lost over a working life, not just this month.",
      },
      {
        label: "Punitive exposure",
        detail:
          "Where the facts show a conscious disregard the law recognizes. Not assumed, and not promised.",
      },
    ],
    help: sharedHelp(
      "We identify every company on the load, not only the driver named on the police report.",
    ),
    faqs: [
      {
        q: "Who can be responsible besides the driver?",
        a: "The motor carrier, a maintenance vendor, a broker, or a shipper may share responsibility depending on who controlled the driver, the trailer, and the repairs. We map that before the demand.",
      },
      {
        q: "Why is a truck case investigated differently?",
        a: "Hours-of-service rules and electronic data create a paper trail a passenger-car crash usually doesn't have. That trail disappears if nobody asks for it quickly.",
      },
    ],
    finalHeadline: "A commercial rig hit you. Don't wait on their investigator.",
    finalSub:
      "Preservation letters go out as soon as we are retained to send them. Free consultation.",
  }),
};

export const motorcycleAccident = {
  aliasPath: "/motorcycle-accidents",
  meta: {
    title: "Motorcycle Accident Lawyer in Glendale, CA",
    description:
      "Motorcycle crash reviews for riders blamed before the evidence is in. We document gear, roadway marks, and the other driver’s attention.",
    path: "/injury/motorcycle-accidents",
  },
  content: build({
    eyebrow: "Motorcycle accidents",
    headline: "California motorcycle accident lawyer.",
    sub: "Riders are often treated as reckless before anyone looks at the lane, the turn, or the driver’s phone. The injuries are worse because the bike doesn't absorb the hit.",
    difference:
      "Bias is part of the defense. Adjusters and, later, jurors may assume the rider was splitting lanes unsafely or speeding. The equipment and the roadway usually tell a more specific story.",
    evidenceIntro:
      "Gear and gouge marks are evidence. We try to keep them from being thrown away or paved over.",
    evidence: [
      "Helmet and riding-gear inspection",
      "Gouge marks, debris, and lane position",
      "Reconstruction when speed or visibility is disputed",
      "Early medical evaluations",
      "The other driver’s phone records when distraction is in play",
    ],
    damagesIntro:
      "A motorcycle injury claim often has to explain injuries a car occupant would not have suffered:",
    damages: [
      {
        label: "Traumatic brain injury",
        detail: "Cognitive and neurological care, even when a helmet was worn.",
      },
      {
        label: "Road rash and scarring",
        detail: "Wound care, grafting, and lasting disfigurement.",
      },
      {
        label: "Orthopedic treatment",
        detail: "Fractures, surgery, and rehabilitation.",
      },
      {
        label: "Lost wages",
        detail: "Time away from work during a long recovery.",
      },
      {
        label: "Daily life",
        detail: "Riding, work, and independence that don't return on the old schedule.",
      },
    ],
    help: sharedHelp(
      "We answer the “riders are reckless” assumption with the scene, the gear, and the other driver’s conduct.",
    ),
    faqs: [
      {
        q: "Does lane splitting ruin a claim?",
        a: "Not by itself. Lane splitting can be lawful in California, and fault still depends on what each person did. We don't concede a percentage because you were on a bike.",
      },
      {
        q: "What if I was not wearing a helmet?",
        a: "Helmet use can affect parts of a claim. It doesn't erase someone else’s negligence. Tell us the facts and we'll explain how they cut.",
      },
    ],
    finalHeadline: "You were on the bike. That's not the whole case.",
    finalSub: "Send the photos and the medical records. We'll tell you what the file still needs.",
  }),
};

export const rideshareAccident = {
  aliasPath: "/rideshare-accidents",
  meta: {
    title: "Rideshare Accident Lawyer in Glendale, CA",
    description:
      "Uber and Lyft injury reviews in California. Coverage often depends on whether the driver was waiting for a ride or already on a trip.",
    path: "/injury/rideshare-accidents",
  },
  content: build({
    eyebrow: "Rideshare accidents",
    headline: "California rideshare accident lawyer.",
    sub: "Uber and Lyft crashes turn on app status. Waiting for a match and driving a passenger are not the same insurance question.",
    difference:
      "The company’s policy position usually follows the driver’s status: app off, app on and waiting, or matched and on a trip. Which layer applies has to be confirmed for the date of the crash. We don't print policy limits.",
    evidenceIntro:
      "App data is the coverage map. We look for it before it ages out of the company’s systems.",
    evidence: [
      "Rideshare app status and trip logs",
      "The driver’s trip history around the crash",
      "Background-check and qualification files",
      "Phone-use records",
      "In-car camera footage when the vehicle has one",
    ],
    damagesIntro:
      "Passengers, other drivers, and people outside the car can all have claims. The damages work is the same careful accounting:",
    damages: [
      {
        label: "Passenger injuries",
        detail: "People who did nothing but request the ride.",
      },
      {
        label: "Other motorists",
        detail: "Drivers and riders hit by the rideshare vehicle.",
      },
      {
        label: "People on foot",
        detail: "Pedestrians and cyclists struck during a trip or a pickup.",
      },
      {
        label: "Lost income",
        detail: "Work missed while the injury is treated.",
      },
      {
        label: "Ongoing care",
        detail: "Treatment that continues after the app trip is a closed ticket.",
      },
    ],
    help: sharedHelp(
      "We pin down app status first, so the demand goes to the policy that actually applies.",
    ),
    faqs: [
      {
        q: "I was a passenger. Do I sue the driver or the company?",
        a: "Often both questions matter, and the answer depends on app status and whose coverage responds. We sort that during the review instead of guessing from the logo on the door.",
      },
      {
        q: "The driver only had a personal policy. Is that the end?",
        a: "Not always. A personal policy and a rideshare layer can both be in the conversation. Status at the minute of impact is the fact that sorts them.",
      },
    ],
    finalHeadline: "The app status is the case. Let us pull it.",
    finalSub: "Tell us whether you were the passenger, the other driver, or the person on foot.",
  }),
};
