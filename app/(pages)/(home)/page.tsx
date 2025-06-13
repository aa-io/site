import { aboutData } from '@/lib/about-data';

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="space-y-6 text-lg leading-relaxed">
        <p
          dangerouslySetInnerHTML={{
            __html: aboutData.bio.intro
              .replace(/Catch/g, '<span class="font-medium">Catch</span>')
              .replace(/Noyo/g, '<span class="font-medium">Noyo</span>'),
          }}
        />

        <p
          dangerouslySetInnerHTML={{
            __html: aboutData.bio.current.replace(/Noyo/g, '<span class="font-medium">Noyo</span>'),
          }}
        />

        <p dangerouslySetInnerHTML={{ __html: aboutData.bio.personal }} />
      </div>
    </div>
  );
}
