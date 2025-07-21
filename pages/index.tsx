import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Pill from '../components/common/Pill';
import { HERO_BG, FILTER_LABELS, PROPERTYLISTINGSAMPLE } from '../constants';
import { useState } from 'react';

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[320px] sm:h-[400px] md:h-[480px] w-full mb-12 overflow-hidden rounded-b-3xl shadow"
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Find your favorite place here!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium drop-shadow">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-5xl mx-auto px-4 mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {FILTER_LABELS.map((label) => (
            <Pill
              key={label}
              label={label}
              selected={selectedFilter === label}
              onClick={() => setSelectedFilter(selectedFilter === label ? null : label)}
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTYLISTINGSAMPLE.map((property, idx) => (
            <Card key={idx} {...property}>
              <div className="flex flex-col gap-2 mt-2">
                <span className="text-lg font-semibold text-gray-800">{property.price}</span>
                <span className="text-yellow-500 font-medium">★ {property.rating}</span>
                <Button className="w-full">View Details</Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button className="text-lg px-8 py-3">See All Listings</Button>
        </div>
      </div>
    </>
  );
}
