import Link from 'next/link';
import { ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { cn } from './ui/utils';

const _cns = {
  button: 'hover:bg-accent gap-1.5 flex items-center justify-center rounded-sm    p-1.5   hover:opacity-100',
  text: ' hidden text-sm  font-medium tracking-wide sm:block  text-box-trim',
};

export const SocialLink = ({
  href,
  icon,
  text,
  label,
  className,
}: {
  href: string;
  icon: ReactNode;
  text?: string | undefined;
  label?: string | undefined;
  className?: string;
}) => {
  return (
    <div className={cn(className)}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link target="_blank" className={cn(_cns.button)} href={href}>
            {icon}
            {label && <span className={cn(_cns.text)}>{label}</span>}
          </Link>
        </TooltipTrigger>
        {text && <TooltipContent>{text}</TooltipContent>}
      </Tooltip>
    </div>
  );
};

export const LinkButton = ({
  href,
  icon,
  label,
  className,
}: {
  href: string;
  icon: ReactNode;
  label?: string | undefined;
  className?: string;
}) => {
  return (
    <Link
      className={cn(
        _cns.button,
        'group/linkButton pop-in glass inline-flex grow-0 gap-0.5 overflow-hidden bg-clip-padding opacity-100 transition-all duration-100 active:scale-95',
        className,
      )}
      href={href}
    >
      {icon && <div className="opacity-75 group-hover/linkButton:opacity-100">{icon}</div>}
      {label && <div className={cn(_cns.text, 'pr-1.5')}>{label}</div>}
      <video
        autoPlay
        playsInline
        className="blend absolute inset-0 h-full w-full rounded-full object-cover opacity-5 group-hover/linkButton:opacity-10"
        src="data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAvG1kYXQAAAAfTgEFGkdWStxcTEM/lO/FETzRQ6gD7gAA7gIAA3EYgAAAAEgoAa8iNjAkszOL+e58c//cEe//0TT//scp1n/381P/RWP/zOW4QtxorfVogeh8nQDbQAAAAwAQMCcWUTAAAAMAAAMAAAMA84AAAAAVAgHQAyu+KT35E7gAADFgAAADABLQAAAAEgIB4AiS76MTkNbgAAF3AAAPSAAAABICAeAEn8+hBOTXYAADUgAAHRAAAAPibW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAAAKcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAw10cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAAKcAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAABAAAAAQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAACnAAAAAAABAAAAAAKFbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAABdwAAAD6BVxAAAAAAAMWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABDb3JlIE1lZGlhIFZpZGVvAAAAAixtaW5mAAAAFHZtaGQAAAABAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAHsc3RibAAAARxzdHNkAAAAAAAAAAEAAAEMaHZjMQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAQABAASAAAAEgAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj//wAAAHVodmNDAQIgAAAAsAAAAAAAPPAA/P36+gAACwOgAAEAGEABDAH//wIgAAADALAAAAMAAAMAPBXAkKEAAQAmQgEBAiAAAAMAsAAAAwAAAwA8oBQgQcCTDLYgV7kWVYC1CRAJAICiAAEACUQBwChkuNBTJAAAAApmaWVsAQAAAAATY29scm5jbHgACQAQAAkAAAAAEHBhc3AAAAABAAAAAQAAABRidHJ0AAAAAAAALPwAACz8AAAAKHN0dHMAAAAAAAAAAwAAAAIAAAPoAAAAAQAAAAEAAAABAAAD6AAAABRzdHNzAAAAAAAAAAEAAAABAAAAEHNkdHAAAAAAIBAQGAAAAChjdHRzAAAAAAAAAAMAAAABAAAAAAAAAAEAAAfQAAAAAgAAAAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAQAAAABAAAAJHN0c3oAAAAAAAAAAAAAAAQAAABvAAAAGQAAABYAAAAWAAAAFHN0Y28AAAAAAAAAAQAAACwAAABhdWR0YQAAAFltZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAACxpbHN0AAAAJKl0b28AAAAcZGF0YQAAAAEAAAAATGF2ZjYwLjMuMTAw"
      />
    </Link>
  );
};
