export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Maxi Mustermann',
    role: 'Vorstandsvorsitzende',
    imageUrl: 'https://i.pravatar.cc/300?u=max-mustermann-vorstand',
    bio: 'Maxi ist die Gründerin des CSC SOE und setzt sich seit Jahren für die Legalisierung von Cannabis ein.',
  },
  {
    name: 'Erika Mustermann',
    role: 'Schatzmeisterin',
    imageUrl: 'https://i.pravatar.cc/300?u=erika-mustermann-schatz',
    bio: 'Erika kümmert sich um die Finanzen des Vereins und sorgt für eine solide wirtschaftliche Basis.',
  },
  {
    name: 'Klaudia Kleber',
    role: 'Anbauexpertin',
    imageUrl: 'https://i.pravatar.cc/300?u=klaus-kleber-anbau',
    bio: 'Klaudia ist unsere Expertin für den Anbau und die Pflege der Pflanzen.',
  },
];
