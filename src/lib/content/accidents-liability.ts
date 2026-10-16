import { buildAccident as build, sharedHelp } from "./accident-build";

export const pedestrianAccident = {
  aliasPath: "/pedestrian-accidents",
  meta: {
    title: "California Pedestrian Accident Attorneys",
    description:
      "Pedestrian injury reviews after crosswalk and hit-and-run crashes in California. We secure video and the driver’s records early.",
    path: "/injury/pedestrian-accidents",
  },
  content: build({
    eyebrow: "Pedestrian accidents",
    headline: "California pedestrian accident attorneys.",
    sub: "A person on foot does not have a bumper or an airbag. These injuries are severe, and the defense still looks for a reason the pedestrian was “wrong.”",
    difference:
      "Expect an argument about the crosswalk, the signal, or a phone in your hand. Those facts can matter under comparative fault.",
    evidenceIntro:
      "Intersection cameras and nearby businesses overwrite on a short loop. We ask for the footage immediately.",
    evidence: [
      "Intersection and business camera video",
      "Skid marks, speed, and braking evidence",
      "The driver’s phone records",
      "Lighting, sightline, and signal timing",
      "Clothing and shoe inspection when visibility is disputed",
    ],
    damagesIntro:
      "The harm is often orthopedic and neurological at the same time:",
    damages: [
      {
        label: "Brain and spine",
        detail: "Traumatic brain injury and spinal damage.",
      },
      {
        label: "Fractures",
        detail: "Multiple breaks that need surgery.",
      },
      {
        label: "Disability",
        detail: "Limits that do not end when the hospital stay does.",
      },
      {
        label: "Life-care costs",
        detail: "A plan for care, equipment, and housing changes.",
      },
      {
        label: "Emotional harm",
        detail: "The fear and disruption that follow a vehicle strike.",
      },
    ],
    help: sharedHelp(
      "We preserve the video and the driver’s data before the defense writes the crosswalk story.",
    ),
    faqs: [
      {
        q: "I was outside the crosswalk. Do I still have a claim?",
        a: "You may. Comparative fault can reduce a recovery when a pedestrian’s position matters, but the driver’s speed, attention, and failure to yield still count. We review both.",
      },
      {
        q: "The driver left. What now?",
        a: "Hit-and-run files can still involve uninsured-motorist coverage and any video that identifies the vehicle. Call while the cameras still have the clip.",
      },
    ],
    finalHeadline: "A vehicle hit you. The video will not wait.",
    finalSub: "Tell us the intersection and the hospital. We will tell you what to save tonight.",
  }),
};

export const dogBite = {
  aliasPath: "/dog-bites",
  meta: {
    title: "California Dog Bite Attorneys",
    description:
      "California dog-bite reviews under the state’s strict-liability rules. We document wounds, animal-control reports, and the owner’s insurance.",
    path: "/injury/dog-bites",
  },
  content: build({
    eyebrow: "Dog bites",
    headline: "California dog bite attorneys.",
    sub: "A bite can mean infection, nerve damage, and scarring that a homeowner’s carrier would rather call a scratch. The legal standard is narrower than people think — and it still has to fit your facts.",
    difference:
      "California generally applies strict liability when a dog bites someone in a public place, or lawfully on private property. You often do not have to prove the owner already knew the dog was dangerous. There are exceptions, including trespass, and this page is not a ruling on your bite.",
    evidenceIntro:
      "Wound photos taken over time are as important as the first snapshot. We also want the paper:",
    evidence: [
      "Animal-control and bite reports",
      "Photographs from the day of the bite through healing",
      "Veterinary records for the animal",
      "Witness accounts",
      "The owner’s homeowner or renter policy information",
    ],
    damagesIntro:
      "Carriers minimize scarring. The damages that usually matter are medical and visible:",
    damages: [
      {
        label: "Reconstruction",
        detail: "Plastic surgery and follow-up procedures.",
      },
      {
        label: "Infection",
        detail: "Antibiotics, hospitalization, and complications.",
      },
      {
        label: "Scarring",
        detail: "Permanent marks, especially on the face and hands.",
      },
      {
        label: "Psychological care",
        detail: "Fear, sleep loss, and treatment after the attack.",
      },
      {
        label: "Lost income",
        detail: "Work missed during recovery.",
      },
    ],
    help: sharedHelp(
      "We notify the owner’s carrier with the medical record, not with a casual photo thread.",
    ),
    faqs: [
      {
        q: "Do I have to prove the dog bit someone before?",
        a: "Often no. California’s dog-bite statute is generally strict liability for bites in public or while you were lawfully on private property. Prior bites can still matter for other claims, and exceptions exist.",
      },
      {
        q: "The owner says the dog was provoked.",
        a: "Provocation and trespass are arguments the defense raises. Tell us exactly what happened.",
      },
    ],
    finalHeadline: "Photograph the wound and call before it heals unseen.",
    finalSub: "A free consultation can start with the animal-control report and the first photos.",
  }),
};

export const slipAndFall = {
  aliasPath: "/slip-and-fall",
  meta: {
    title: "Slip and Fall Lawyer in Glendale, CA",
    description:
      "Premises-liability reviews for slip, trip, and fall injuries in California stores, buildings, and walkways. Video and maintenance logs come first.",
    path: "/injury/premises-liability",
  },
  content: build({
    eyebrow: "Slip and Fall Lawyer",
    headline: "Slip and Fall Lawyer in Glendale",
    sub: "Premises cases are won or lost on notice. Someone has to show the owner created the hazard, or knew about it — or should have — and failed to fix it or warn you.",
    difference:
      "A wet floor is not automatically a lawsuit. The file has to prove notice and a failure to act. Property owners delete surveillance and “lose” sweep logs. Speed matters more here than in almost any other injury claim.",
    evidenceIntro:
      "We send a preservation letter for the video before the loop records over the fall.",
    evidence: [
      "Surveillance video from the hour of the fall",
      "The incident report you filed with the business",
      "Sweep, inspection, and maintenance logs",
      "Photos of the spill, the step, the lighting, or the missing warning",
      "Names of employees and witnesses who saw the condition",
    ],
    damagesIntro:
      "Falls break hips, wrists, and backs. The damages review tracks the orthopedic path:",
    damages: [
      {
        label: "Surgery",
        detail: "Hips, knees, wrists, and shoulders that need repair.",
      },
      {
        label: "Spinal injury",
        detail: "Disc and nerve injuries from the impact.",
      },
      {
        label: "Therapy",
        detail: "The long course of physical treatment after discharge.",
      },
      {
        label: "Lost wages",
        detail: "Work missed, including jobs you cannot physically do.",
      },
      {
        label: "Pain and limits",
        detail: "Stairs, sleep, and independence that changed after the fall.",
      },
    ],
    help: sharedHelp(
      "We focus the claim on notice — who knew, how long the hazard sat, and what the logs say.",
    ),
    faqs: [
      {
        q: "I did not file an incident report. Is it too late?",
        a: "A report helps, and the absence of one is something the defense will mention. It is not automatically fatal. Video and witness accounts can still carry the notice question. Call anyway.",
      },
      {
        q: "The store says they inspect every hour.",
        a: "Inspection policies are only as useful as the logs and the video. We compare what they claim they do with what the tape shows.",
      },
    ],
    finalHeadline: "The camera is recording over your fall.",
    finalSub: "Tell us the store and the time. Preservation is the first job.",
  }),
};
