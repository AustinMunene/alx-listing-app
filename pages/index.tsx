import Card from '../components/common/Card';
import Button from '../components/common/Button';

const properties = [
  {
    title: 'Cozy Loft in the City',
    description: 'A beautiful loft in the heart of downtown. Walk to everything!',
    image: '/assets/placeholder.svg',
  },
  {
    title: 'Beachside Bungalow',
    description: 'Wake up to the sound of waves in this charming bungalow.',
    image: '/assets/placeholder.svg',
  },
  {
    title: 'Mountain Retreat',
    description: 'Escape to the mountains in this peaceful cabin getaway.',
    image: '/assets/placeholder.svg',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="py-8 px-4 text-center bg-white shadow">
        <h1 className="text-3xl font-bold mb-2">ALX Listing App</h1>
        <p className="text-gray-600">Find your next stay from our curated properties</p>
      </header>
      <main className="max-w-5xl mx-auto py-12 px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, idx) => (
            <Card key={idx} {...property}>
              <Button className="w-full mt-2">View Details</Button>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button className="text-lg px-8 py-3">See All Listings</Button>
        </div>
      </main>
      <footer className="py-6 text-center text-gray-400 text-sm bg-white border-t mt-12">
        &copy; {new Date().getFullYear()} ALX Listing App. All rights reserved.
      </footer>
    </div>
  );
}
