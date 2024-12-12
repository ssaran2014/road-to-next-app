import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

type CardCompactProps = {
  className?: string;
  title: string;
  description: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

const CardCompact = ({className, title, description, content, footer}: CardCompactProps) => {
    return(
        <Card className={ className }>
        <CardHeader>
          <CardTitle>{ title }</CardTitle>
          <CardDescription>{ description }</CardDescription>
        </CardHeader>
        <CardContent>
          { content }
        </CardContent>
        {footer && <div className="flex gap-x-1">{ footer }</div>}
      </Card>
    );
};

export { CardCompact };