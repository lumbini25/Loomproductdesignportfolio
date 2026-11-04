import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { notFoundCopy } from "@/content/site";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start gap-6 py-24">
      <h1 className="text-h1-sm font-extrabold tablet:text-h0">{notFoundCopy.title}</h1>
      <p className="text-body-m text-body">{notFoundCopy.body}</p>
      <ButtonLink href="/#work" variant="secondary">
        {notFoundCopy.cta}
      </ButtonLink>
    </Container>
  );
}
