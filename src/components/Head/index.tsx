import { Helmet } from "react-helmet-async";

interface HeadProps {
  title?: string;
  description?: string;
}

export default function Head({ title = "Orday", description = "" }: HeadProps) {
  return (
    <Helmet>
      {/* HTML meta tag list */}
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
