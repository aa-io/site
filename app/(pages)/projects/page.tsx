import { WorkExperienceTimeline } from '@/components/work-experience-timeline';
import { myWorkExperience } from '@/lib/work-experience-data';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <WorkExperienceTimeline experience={myWorkExperience} />
    </div>
  );
}
