import type { ReactNode } from "react";

export interface Post {
  slug: string;
  title: string;
  metaTitle?: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  content: ReactNode;
}

export const posts: Post[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // Article 1 — Jump Start / Dead Battery
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "car-battery-dies-islamabad-rawalpindi",
    title: "What to Do When Your Car Battery Dies in Islamabad or Rawalpindi",
    metaTitle: "What to Do When Your Car Battery Dies in Islamabad & RWP",
    excerpt:
      "A dead battery can strand you anywhere — from Saddar Bazaar to the quiet lanes of DHA. Here's exactly what to do when it happens, and when to call for help.",
    category: "Jump Start",
    date: "15 June 2026",
    image: "https://images.unsplash.com/photo-1597766321604-9de3ff9e93e2?w=800&q=80",
    content: (
      <>
        <p>
          There are few things more frustrating than turning your key or pressing your start
          button and hearing nothing — or worse, that dreaded clicking sound. A dead car battery
          can happen to anyone, anywhere: in the car park of a mall in F-6, on the roadside near
          Murree Road, or even in your own driveway in Bahria Town. The good news is that with
          the right knowledge, you can handle the situation calmly and get back on the road quickly.
        </p>

        <h2>Signs Your Battery Is About to Fail</h2>
        <p>
          A car battery rarely dies without warning. Watch for these signs: your engine cranks
          slowly when starting, your headlights look dimmer than usual, electrical features like
          windows or the air conditioning feel sluggish, or your battery warning light appears on
          the dashboard. In Pakistan&apos;s extreme summer heat — which regularly pushes past 40°C
          in Islamabad and Rawalpindi — batteries wear out faster than they do in cooler climates.
          If your battery is more than two or three years old, it is worth having it tested at a
          workshop before it leaves you stranded.
        </p>

        <h2>What to Do Immediately</h2>
        <p>
          If your car will not start, the first priority is safety. If you are in traffic or on a
          busy road like the Islamabad Expressway or Murree Road, try to push the vehicle to the
          roadside before doing anything else. Turn on your hazard lights right away so other
          drivers can see you. Do not panic — a flat battery is one of the most common and easily
          solvable roadside problems.
        </p>

        <h2>Can You Jump Start It Yourself?</h2>
        <p>
          If you have a set of jumper cables and another vehicle available, a jump start is
          straightforward. Connect the red cable to the positive terminal of your dead battery,
          then to the positive terminal of the good battery. Connect the black cable to the
          negative terminal of the good battery, then to an unpainted metal surface on your
          car — not the dead battery itself. Start the working car, let it run for two minutes,
          then try starting your car. If it starts, drive for at least 20 to 30 minutes to let
          the alternator recharge the battery. However, if your battery is old or the car will
          not hold a charge, jump starting is only a temporary fix — the battery needs
          replacement.
        </p>

        <h2>When to Call for Professional Help</h2>
        <p>
          You should call a professional roadside service when you do not have jumper cables or a
          second vehicle, when you are alone late at night, when you are stranded in an unfamiliar
          area, or when the car will not start even after a jump. Our team covers all of Islamabad
          and Rawalpindi — including DHA, Bahria Town, Askari sectors, Gulberg, Saddar, and
          Chaklala — and can typically reach you within 10 to 30 minutes. We carry
          commercial-grade jump starters that can revive batteries without needing a second
          vehicle, and we can advise you on whether your battery needs a replacement.
        </p>

        <h2>How to Extend Your Battery Life</h2>
        <p>
          Park in shade whenever possible during peak summer to reduce heat stress on the battery.
          Do not leave electrical accessories — lights, AC, radio — running with the engine off.
          Have the battery terminals cleaned periodically if you notice white or greenish
          corrosion building up around the posts. And if your battery is approaching three years
          old, consider having it load-tested at a workshop before a long drive so you are not
          caught out.
        </p>
      </>
    ),
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Article 2 — Flat Tyre Guide
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "flat-tyre-guide-pakistan",
    title: "Flat Tyre on the Road? A Step-by-Step Guide for Pakistani Drivers",
    metaTitle: "Flat Tyre Guide for Pakistani Drivers | Step-by-Step Guide",
    excerpt:
      "A flat tyre on Murree Road or the motorway can be dangerous if handled wrong. Here is how to stay safe, change your tyre correctly, and when to call for help.",
    category: "Tyre Change",
    date: "10 June 2026",
    image: "https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=800&q=80",
    content: (
      <>
        <p>
          A flat tyre is one of the most common roadside emergencies, and it often happens at
          the worst possible time — on a busy stretch of Murree Road, in the narrow lanes of
          Saddar, or on the motorway late at night. Knowing what to do before it happens can be
          the difference between a quick fix and a genuinely dangerous situation.
        </p>

        <h2>Step 1 — Pull Over Safely First</h2>
        <p>
          As soon as you feel your tyre go flat — a pulling sensation to one side, a thumping
          noise, or a sudden loss of steering feel — ease off the accelerator gently and steer
          carefully to the left side of the road. Avoid braking hard, especially at speed, as
          this can cause the car to pull sharply. Find a flat, stable surface away from traffic.
          If you are on a motorway or fast road, try to reach the nearest exit or emergency lane
          before stopping. Turn on your hazard lights immediately. If you have warning triangles,
          place them at least 30 to 50 metres behind your car to alert vehicles coming from behind.
        </p>

        <h2>Step 2 — Gather Your Equipment</h2>
        <p>
          Before you start, make sure you have everything you need: a serviceable spare tyre
          (check it is properly inflated — many drivers discover it is also flat at exactly the
          wrong moment), a tyre jack, a lug wrench, and your vehicle owner&apos;s manual. The
          manual will show you the correct jacking points for your specific car model. Using the
          wrong point can crack the sill or damage the vehicle&apos;s body, so do not guess.
        </p>

        <h2>Step 3 — Change the Tyre</h2>
        <p>
          Loosen the lug nuts slightly before jacking the car up — it is much harder to break
          them free once the wheel is spinning freely off the ground. Position the jack under
          the correct jacking point and raise the car until the flat tyre is about 15 cm off the
          ground. Remove the lug nuts completely and set them somewhere safe, take off the flat
          tyre, and mount the spare. Hand-tighten the lug nuts in a star or cross pattern — not
          a circular one — then lower the car back to the ground and tighten them fully with
          the wrench. Check the spare&apos;s pressure as soon as you can. Temporary
          &ldquo;space saver&rdquo; spare tyres, the narrow ones often found in smaller
          hatchbacks, typically have a maximum speed limit of around 80 km/h and should not be
          used for long distances.
        </p>

        <h2>When to Call for Help Instead</h2>
        <p>
          Not every flat tyre situation is one you should handle alone. Call a professional if
          you do not have a serviceable spare, if it is dark and the road is too unsafe to work
          on, if you are physically unable to change the tyre, or if the flat has happened on the
          motorway where stopping is dangerous and traffic is fast. There is no shame in calling —
          your safety always comes first. Our team operates 24/7 across Islamabad and Rawalpindi
          and can reach most areas within 10 to 30 minutes to change your tyre on the spot so
          you do not have to.
        </p>

        <h2>Prevention Tips</h2>
        <p>
          Inspect your tyres regularly for visible damage, bulges, or embedded nails and screws.
          Keep tyre pressure at the manufacturer&apos;s recommended level — under-inflated tyres
          are far more likely to puncture or blow out under load. Avoid driving through large
          potholes at speed, which is a very common cause of sudden tyre damage on Pakistani
          roads. And before any long drive — especially trips out towards Murree or
          Chakdara — make sure your spare is in the boot and properly inflated.
        </p>
      </>
    ),
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Article 3 — Tyre Pressure / Air Refill
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "tyre-pressure-air-refill",
    title: "Why Correct Tyre Pressure Matters — and Where to Get a Quick Air Refill",
    metaTitle: "Tyre Pressure Guide & Air Refill Service in Pakistan",
    excerpt:
      "Most Pakistani drivers only check tyre pressure when something looks wrong. Here is why the correct PSI matters for safety and fuel economy, and how we can help.",
    category: "Tyre Air Refill",
    date: "5 June 2026",
    image: "https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?w=800&q=80",
    content: (
      <>
        <p>
          Tyre pressure is one of those things most drivers only think about when a tyre looks
          visibly flat. But a tyre that looks perfectly fine from the outside can be dangerously
          under-inflated — and that has real consequences for your safety on the road, your fuel
          consumption, and how long your tyres last. Getting the pressure right is simple and
          takes only a few minutes.
        </p>

        <h2>What Is the Correct Tyre Pressure?</h2>
        <p>
          Tyre pressure is measured in PSI (pounds per square inch) or sometimes in bar. For
          most common passenger cars and sedans in Pakistan — including Toyota Corolla, Honda
          Civic, Suzuki Cultus, Suzuki Alto, and similar vehicles — the recommended pressure is
          typically between 30 and 35 PSI for the front tyres and 32 to 35 PSI for the rear.
          You will find the exact figure for your car on a sticker inside the driver&apos;s door
          frame or in the owner&apos;s manual. Never rely on how the tyre looks from the side — a
          tyre can lose 10 PSI and still appear normal to the eye.
        </p>

        <h2>What Happens If Your Tyres Are Under-Inflated?</h2>
        <p>
          Driving on under-inflated tyres is both more dangerous and more expensive than most
          people realise. Low pressure increases the contact patch between the tyre and the road,
          which generates excess heat in the tyre wall. Over time, this accelerates wear and
          increases the risk of a blowout — especially at high speeds on the motorway.
          Under-inflated tyres also increase rolling resistance, meaning your engine has to work
          harder and you spend more on petrol. On longer drives — for example between Rawalpindi
          and Murree — the difference in fuel consumption can be noticeable.
        </p>

        <h2>What About Over-Inflation?</h2>
        <p>
          Over-inflated tyres are equally problematic, just in a different way. When a tyre has
          too much air, the contact patch shrinks, which reduces grip — particularly on wet roads
          or during sudden braking. The ride becomes harsher, and the centre of the tyre wears
          out faster than the edges, meaning you will need to replace it sooner. If someone
          fills your tyres too high at a petrol station, it is worth reducing them to the
          recommended level before your next drive.
        </p>

        <h2>How Often Should You Check?</h2>
        <p>
          Ideally, check your tyre pressure at least once a month and always before a long
          journey. Tyres naturally lose around 1 PSI per month under normal conditions, and
          temperature changes affect pressure significantly too — tyres lose pressure in cold
          weather and can over-pressurise slightly in extreme heat. Islamabad&apos;s wide
          seasonal temperature range, from cold winters to scorching summers, makes regular
          monthly checks especially important for drivers here.
        </p>

        <h2>Where to Get Air in Islamabad and Rawalpindi</h2>
        <p>
          Most petrol stations across Islamabad and Rawalpindi have air compressors available,
          though the pressure gauges at many stations are not well-calibrated and can give
          inaccurate readings. If you are low on pressure and cannot find a reliable station, or
          if you are stuck on the road with a slow leak, our tyre air refill service comes
          directly to your location. We bring a calibrated compressor, fill all four tyres to
          the correct pressure for your specific vehicle, and check for any obvious punctures or
          damage while we are there. It is one of our most requested services and typically takes
          less than ten minutes.
        </p>
      </>
    ),
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Article 4 — Emergency Kit Checklist
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "emergency-items-pakistan-drivers",
    title: "Emergency Items Every Driver in Pakistan Should Keep in Their Car",
    metaTitle: "Emergency Car Kit Every Pakistani Driver Should Have",
    excerpt:
      "A basic emergency kit in your boot can turn a roadside disaster into a manageable situation. Here is the complete checklist for Pakistani drivers.",
    category: "Safety Tips",
    date: "1 June 2026",
    image: "https://images.unsplash.com/photo-1730514784243-f0e7f09c9f50?w=800&q=80",
    content: (
      <>
        <p>
          Pakistan&apos;s roads can be unpredictable. Potholes, sudden weather changes, heavy
          traffic, and long stretches between towns all create situations where being prepared
          makes a real difference. Whether you are doing the school run in Bahria Town, commuting
          through Saddar, or driving back late at night from Murree, a proper emergency kit in
          your boot could save you a great deal of stress — or worse. Here is what every driver
          should carry.
        </p>

        <h2>1. A Properly Inflated Spare Tyre</h2>
        <p>
          This should be the first thing you check. A spare tyre that has been sitting in the
          boot for two years without being inspected is unlikely to be inflated. Check your
          spare&apos;s pressure every month alongside your other tyres. Also confirm that the
          tyre jack and lug wrench that came with your car are present and in working order —
          they are typically stored with the spare and easy to forget about until you need them.
        </p>

        <h2>2. Jumper Cables</h2>
        <p>
          A set of good-quality jumper cables is one of the most useful things you can carry.
          Battery failures are extremely common, especially during Pakistan&apos;s intense summer
          heat. A cable set that is at least 4 metres long is ideal so you can reach a second
          vehicle parked alongside you without having to reposition both cars. If you would
          rather not attempt a jump start yourself, save our number so we can come to you with a
          professional-grade jump starter.
        </p>

        <h2>3. Warning Triangles or Reflective Flares</h2>
        <p>
          If you break down at night or in poor visibility, warning triangles placed behind your
          vehicle give oncoming traffic vital extra seconds to react and slow down. Outside of
          Islamabad and Rawalpindi city centres, road lighting can be very poor, making these
          triangles genuinely life-saving. Place them at least 30 to 50 metres behind your car
          and if possible, put one further back on a slope or bend.
        </p>

        <h2>4. A Basic First Aid Kit</h2>
        <p>
          Road accidents happen, and a basic first aid kit — bandages, antiseptic wipes, pain
          relievers, and adhesive plasters — should be part of every car&apos;s permanent
          equipment. These are available at most pharmacies in Rawalpindi and Islamabad for a
          few hundred rupees and take up almost no space in the boot.
        </p>

        <h2>5. A Torch and a Power Bank</h2>
        <p>
          Changing a tyre or looking under the bonnet at night is nearly impossible without a
          light source. A small LED torch in the glovebox costs very little and can make an
          enormous practical difference. A power bank is equally worth carrying — if you are
          stranded and your phone battery is low, it could be the difference between calling for
          help or being stuck with no communication at all.
        </p>

        <h2>6. Bottled Water</h2>
        <p>
          On long drives or during Islamabad&apos;s hot summer months, being stranded without
          water can quickly become a health issue, particularly for children or elderly
          passengers. Keep at least one or two small bottles in the car at all times. Water can
          also help in an overheating situation — though never open a hot radiator cap without
          waiting for the engine to cool down completely first.
        </p>

        <h2>7. A Tyre Pressure Gauge</h2>
        <p>
          A basic tyre pressure gauge costs very little and lets you check your tyre pressure
          without relying on petrol station equipment, which is often poorly calibrated. Check
          all four tyres — including the spare — once a month. Correct tyre pressure improves
          fuel economy, reduces the risk of a blowout, and extends tyre life significantly.
        </p>

        <h2>8. Important Phone Numbers Saved in Your Phone</h2>
        <p>
          Save the numbers you might need in an emergency before you actually need them: a
          trusted family member, your mechanic, your insurance company, and a reliable 24/7
          roadside assistance service. Save our number — 0326 9751717 — so that if your battery
          dies, your tyre goes flat, or you run out of fuel anywhere in Islamabad or Rawalpindi,
          you can call for help immediately without having to search for a number on a phone
          that may be running low on battery.
        </p>

        <h2>A Small Effort, a Big Difference</h2>
        <p>
          None of these items are expensive or difficult to find, but most drivers in Pakistan
          do not carry them until after they have needed them once. Spend an afternoon putting
          this kit together — it may sit unused for months, but when you need it, you will be
          very glad it is there.
        </p>
      </>
    ),
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// To add a new article: copy one of the objects above, change the slug/title/
// content/etc., and add it to the array. The listing page and routing update
// automatically — no other changes needed.
// ─────────────────────────────────────────────────────────────────────────────

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
