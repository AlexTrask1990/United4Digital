import Link from "next/link";
import {
  careerListings,
  careersIntro,
  type CareerListing,
} from "@/app/lib/careersContent";

const CareerListingCard = ({ listing }: { listing: CareerListing }) => {
  const isClosed = listing.status === "closed";

  return (
    <article
      id={listing.id}
      className="rounded-custom border border-primary/10 bg-white p-6 shadow-sm laptop:p-8"
    >
      <div className="flex flex-col gap-3 laptop:flex-row laptop:items-start laptop:justify-between">
        <h2 className="text-2xl font-bold text-primary laptop:text-3xl">
          {listing.title}
        </h2>
        <span
          className={`inline-flex shrink-0 self-start rounded-custom px-3 py-1 text-xs font-bold uppercase tracking-wide ${
            isClosed
              ? "bg-gray-100 text-gray-50"
              : "bg-secondary/15 text-secondary"
          }`}
        >
          {isClosed ? "Closed" : "Open"}
        </span>
      </div>

      {listing.summary && (
        <p className="mt-4 text-base leading-relaxed text-gray-50">
          {listing.summary}
        </p>
      )}

      {listing.about && (
        <p className="mt-4 text-base leading-relaxed text-gray-50">
          {listing.about}
        </p>
      )}

      <div className="mt-8 space-y-8">
        {listing.sections.map((section) => (
          <section key={section.title}>
            <h3 className="text-xl font-bold text-primary">{section.title}</h3>
            {section.description && (
              <p className="mt-3 text-base leading-relaxed text-gray-50">
                {section.description}
              </p>
            )}
            {section.items.length > 0 && (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-gray-50">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
};

export default function CareersPage() {
  return (
    <div className="bg-base-100 px-6 py-24 pt-40">
      <div className="container mx-auto w-11/12 max-w-6xl">
        <h1 className="inline-block border-b-[3px] border-secondary pb-3 text-4xl font-bold text-primary">
          Careers
        </h1>

        <p className="mt-8 text-lg leading-relaxed text-gray-50">
          {careersIntro}
        </p>

        <div className="mt-12 space-y-8">
          {careerListings.map((listing) => (
            <CareerListingCard key={listing.id} listing={listing} />
          ))}
        </div>

        <div className="mt-12 rounded-custom border border-primary/10 bg-white p-6 shadow-sm laptop:p-8">
          <h2 className="text-2xl font-bold text-primary">Get in touch</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-50">
            Interested in working with us? Send your portfolio and a short
            introduction through our contact form.
          </p>
          <Link
            href="/#contact-us"
            className="btn btn-secondary mt-6 inline-flex h-12 items-center justify-center px-6 text-sm font-bold text-base-100 transition-colors hover:opacity-90"
          >
            Contact us
          </Link>
        </div>

        <Link
          href="/"
          className="mt-10 inline-block font-bold text-secondary transition-colors hover:opacity-80"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
