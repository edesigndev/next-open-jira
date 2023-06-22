interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pendiente: lorem ipsum dolor sit amet',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'En progreso: lorem ipsum dolor sit amet',
      status: 'in-progress',
      createdAt: Date.now() - 100000,
    },
    {
      description: 'Terminada: lorem ipsum dolor sit amet',
      status: 'finished',
      createdAt: Date.now(),
    },
    {
      description: 'Pendiente: lorem ipsum dolor sit amet',
      status: 'pending',
      createdAt: Date.now() - 100000,
    },
  ],
};
