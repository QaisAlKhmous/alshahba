export interface HomeContent {
  slider: {
    slides: Array<{
      backgroundUrl: string;
      subHeading: string;
      titleHtml: string;
      descriptionHtml: string;
      cta: { text: string; href: string };

      stats: {
        value: string;
        labelHtml: string;
        items: string[];
      };

      thumbUrl: string;
      thumbAlt?: string;
    }>;
  };

  whoWeAre: {
    backgroundShapeUrl: string;
    headingShapeUrl: string;

    subHeading: string;
    titleHtml: string;
    descriptionHtml: string;

    cards: Array<{
      titleHtml: string; // allows <br>
      iconUrl: string;
      description: string;
      href?: string; // optional link (later)
    }>;
  };


  about: {
    backgroundUrl: string;        
    watermarkText: string;     
    subHeading: string;          
    titleHtml: string;    
    bullets: Array<{
      iconUrl: string;
      text: string;
    }>;
    description: string;         
    cta: {
      text: string;
      href: string;               
    };
    imageUrl: string;            
    imageAlt?: string;
  };

  projects: {
    backgroundShapeUrl: string;
    watermarkText: string; // big side text (was "Interior")

    subHeading: string;    // e.g., "Our Projects"
    titleHtml: string;     // allows <span> and <br>
    descriptionHtml: string;

    items: Array<{
      imageUrl: string;
      imageAlt?: string;

      tags: string[];        // e.g. ['Residential', 'Apartments']
      title: string;         // project name
      locationHtml: string;  // "Amman, Jordan <br> 2026"

      status: 'completed' | 'under_construction';
      statusLabel: string;   // e.g. "Completed" / "Under Construction"

      href: string;          // route to details page or '/contact'
    }>;
  };

}
